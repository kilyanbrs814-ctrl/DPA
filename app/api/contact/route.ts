import { NextRequest, NextResponse } from "next/server"

export const runtime = "nodejs"

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin")
  const host = request.headers.get("host")
  if (origin && (!host || new URL(origin).host !== host)) {
    return NextResponse.json({ error: "Origine non autorisée." }, { status: 403 })
  }

  const size = Number(request.headers.get("content-length") || "0")
  if (size > 12000) return NextResponse.json({ error: "Message trop long." }, { status: 413 })

  let data: Record<string, unknown>
  try {
    data = await request.json()
  } catch {
    return NextResponse.json({ error: "Données invalides." }, { status: 400 })
  }
  const read = (value: unknown) => typeof value === "string" ? value.trim() : ""
  if (read(data.website)) return NextResponse.json({ ok: true })
  const name = read(data.name)
  const email = read(data.email)
  const company = read(data.company)
  const message = read(data.message)
  if (name.length < 2 || name.length > 100 || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || company.length > 120 || message.length < 10 || message.length > 5000) {
    return NextResponse.json({ error: "Vérifiez les champs du formulaire. Votre message doit contenir au moins 10 caractères." }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.CONTACT_FROM_EMAIL
  const to = process.env.CONTACT_TO_EMAIL
  if (!apiKey || !from || !to) {
    return NextResponse.json({ error: "Service temporairement indisponible. Contactez-nous sur WhatsApp." }, { status: 503 })
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { "Authorization": "Bearer " + apiKey, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: "Nouvelle demande de contact DPA",
        text: ["Nouvelle demande via digitalprojectagency.fr", "Nom : " + name, "Email : " + email, "Entreprise : " + (company || "Non renseignée"), "", message].join("\n"),
      }),
      signal: AbortSignal.timeout(12000),
    })
    if (!response.ok) {
      console.error("Contact provider error:", response.status)
      return NextResponse.json({ error: "Envoi impossible pour le moment. Réessayez ou contactez-nous sur WhatsApp." }, { status: 502 })
    }
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: "Envoi momentanément indisponible. Contactez-nous sur WhatsApp." }, { status: 502 })
  }
}
