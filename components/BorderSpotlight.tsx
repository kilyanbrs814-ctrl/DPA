"use client"

import { useEffect } from "react"

export default function BorderSpotlight() {
  useEffect(() => {
    const RADIUS = 150
    const CARD_R = 18
    const DPR = Math.min(window.devicePixelRatio || 1, 2)

    const canvas = document.createElement("canvas")
    Object.assign(canvas.style, {
      position: "fixed",
      inset: "0",
      width: "100vw",
      height: "100vh",
      pointerEvents: "none",
      zIndex: "999",
    })
    document.body.appendChild(canvas)
    const ctx = canvas.getContext("2d")!

    function resize() {
      canvas.width = Math.round(window.innerWidth * DPR)
      canvas.height = Math.round(window.innerHeight * DPR)
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
    }
    resize()
    window.addEventListener("resize", resize)

    function addRoundRect(x: number, y: number, w: number, h: number, r: number) {
      ctx.moveTo(x + r, y)
      ctx.lineTo(x + w - r, y)
      ctx.arcTo(x + w, y, x + w, y + r, r)
      ctx.lineTo(x + w, y + h - r)
      ctx.arcTo(x + w, y + h, x + w - r, y + h, r)
      ctx.lineTo(x + r, y + h)
      ctx.arcTo(x, y + h, x, y + h - r, r)
      ctx.lineTo(x, y + r)
      ctx.arcTo(x, y, x + r, y, r)
      ctx.closePath()
    }

    function distToBorder(mx: number, my: number, rx: number, ry: number, rw: number, rh: number) {
      const inside = mx > rx && mx < rx + rw && my > ry && my < ry + rh
      if (inside) return Math.min(mx - rx, rx + rw - mx, my - ry, ry + rh - my)
      const cx = Math.max(rx, Math.min(rx + rw, mx))
      const cy = Math.max(ry, Math.min(ry + rh, my))
      return Math.hypot(mx - cx, my - cy)
    }

    let mx = -9999, my = -9999

    function draw() {
      const W = window.innerWidth, H = window.innerHeight
      ctx.clearRect(0, 0, W, H)
      if (mx < -999) return

      document.querySelectorAll<HTMLElement>(".station-card").forEach((card) => {
        const r = card.getBoundingClientRect()
        if (r.bottom < -RADIUS || r.top > H + RADIUS) return

        const dist = distToBorder(mx, my, r.left, r.top, r.width, r.height)
        if (dist >= RADIUS) return

        const t = 1 - dist / RADIUS

        const grd = ctx.createRadialGradient(mx, my, 0, mx, my, RADIUS)
        grd.addColorStop(0,    `rgba(205,158,230,${+(0.95 * t).toFixed(3)})`)
        grd.addColorStop(0.3,  `rgba(184,119,218,${+(0.80 * t).toFixed(3)})`)
        grd.addColorStop(0.65, `rgba(121,54,163,${+(0.40 * t).toFixed(3)})`)
        grd.addColorStop(1,    "rgba(121,54,163,0)")

        ctx.beginPath()
        addRoundRect(r.left, r.top, r.width, r.height, CARD_R)

        ctx.save()
        ctx.shadowColor = `rgba(184,119,218,${+(0.55 * t).toFixed(3)})`
        ctx.shadowBlur = 16
        ctx.strokeStyle = grd
        ctx.lineWidth = 2.5
        ctx.stroke()
        ctx.restore()

        ctx.strokeStyle = grd
        ctx.lineWidth = 1.2
        ctx.stroke()
      })
    }

    function onMouseMove(e: MouseEvent) { mx = e.clientX; my = e.clientY; draw() }
    function onMouseLeave() { mx = -9999; draw() }

    document.addEventListener("mousemove", onMouseMove)
    document.addEventListener("mouseleave", onMouseLeave)
    window.addEventListener("scroll", draw, { passive: true })

    return () => {
      canvas.remove()
      document.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mouseleave", onMouseLeave)
      window.removeEventListener("scroll", draw)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return null
}
