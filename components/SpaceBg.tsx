"use client"

import { useEffect, useRef } from "react"

export default function SpaceBg() {
  const starsRef = useRef<HTMLCanvasElement>(null)
  const warpRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const starsCanvas = starsRef.current
    const warpCanvas = warpRef.current
    if (!starsCanvas || !warpCanvas) return

    const sctx = starsCanvas.getContext("2d")!
    const wctx = warpCanvas.getContext("2d")!
    const DPR = Math.min(window.devicePixelRatio || 1, 2)
    const STAR_COUNT = 1600
    const PARTICLE_COUNT = 60

    let W = 0, H = 0
    let stars: {
      x: number; y: number; z: number; s: number; tw: number
      cr: number; cg: number; cb: number; spike: boolean
    }[] = []
    let particles: { x: number; y: number; r: number; v: number; a: number }[] = []
    const shootings: { x: number; y: number; vx: number; vy: number; life: number; max: number }[] = []

    function resize() {
      W = window.innerWidth
      H = window.innerHeight
      ;[starsCanvas, warpCanvas].forEach((c) => {
        c.width = W * DPR
        c.height = H * DPR
        c.style.width = W + "px"
        c.style.height = H + "px"
        c.getContext("2d")!.setTransform(DPR, 0, 0, DPR, 0, 0)
      })
    }

    function seed() {
      stars = []
      for (let i = 0; i < STAR_COUNT; i++) {
        const rnd = Math.random()
        const cr = rnd < 0.60 ? 255 : rnd < 0.85 ? 180 : 255
        const cg = rnd < 0.60 ? 255 : rnd < 0.85 ? 215 : 238
        const cb = rnd < 0.60 ? 255 : rnd < 0.85 ? 255 : 160
        stars.push({
          x: (Math.random() - 0.5) * 2,
          y: (Math.random() - 0.5) * 2,
          z: 0.05 + Math.pow(Math.random(), 0.45),
          s: Math.random() * 1.4 + 0.2,
          tw: Math.random() * Math.PI * 2,
          cr, cg, cb,
          spike: Math.random() < 0.15,
        })
      }
      particles = []
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * W,
          y: Math.random() * H + Math.random() * H,
          r: Math.random() * 1.8 + 0.4,
          v: Math.random() * 0.4 + 0.15,
          a: Math.random() * 0.4 + 0.2,
        })
      }
    }

    function handleResize() {
      resize()
      seed()
    }

    function maybeSpawn() {
      if (Math.random() < 0.005) {
        shootings.push({
          x: Math.random() * W * 0.6,
          y: Math.random() * H * 0.4,
          vx: 8 + Math.random() * 6,
          vy: 2 + Math.random() * 2,
          life: 0,
          max: 60 + Math.random() * 30,
        })
      }
    }

    let t = 0
    let rafId: number

    function frame() {
      t++

      // No scroll-driven warp: stars keep their natural, independent movement.
      const warpT = 0
      const cx = W / 2, cy = H / 2

      sctx.clearRect(0, 0, W, H)

      for (let i = 0; i < stars.length; i++) {
        const st = stars[i]
        const driftY = (t * 0.05 * (1 - st.z)) % H
        const px = cx + st.x * (W * 0.6) / st.z
        const py = cy + (st.y * (H * 0.6) / st.z) - driftY
        const wy = ((py % H) + H) % H
        const depthFactor = 0.5 + Math.pow(1 / st.z, 0.6) * 0.5
        const size = Math.min(st.s * depthFactor, 2.8)

        const tw = st.spike
          ? Math.max(0,
              0.45
              + 0.30 * Math.sin(t * 0.09 + st.tw)
              + 0.15 * Math.sin(t * 0.17 + st.tw * 2.1)
              + 0.10 * Math.sin(t * 0.05 + st.tw * 0.7))
          : 0.6 + 0.4 * Math.sin(t * 0.04 + st.tw)

        const starFade = 1
        const alpha = Math.min(1, tw * (0.5 + (1 - st.z) * 0.6)) * starFade
        const { cr, cg, cb } = st

        sctx.fillStyle = `rgba(${cr},${cg},${cb},${alpha})`
        sctx.beginPath()
        sctx.arc(px, wy, size, 0, Math.PI * 2)
        sctx.fill()

        if (st.spike && starFade > 0.01) {
          const spikeLen = size * 8
          sctx.lineWidth = Math.max(0.3, size * 0.4)
          const dirs: [number, number][] = [[1, 0], [-1, 0], [0, 1], [0, -1]]
          for (const [dx, dy] of dirs) {
            const g = sctx.createLinearGradient(px, wy, px + dx * spikeLen, wy + dy * spikeLen)
            g.addColorStop(0, `rgba(${cr},${cg},${cb},${alpha * 0.7})`)
            g.addColorStop(1, `rgba(${cr},${cg},${cb},0)`)
            sctx.strokeStyle = g
            sctx.beginPath()
            sctx.moveTo(px, wy)
            sctx.lineTo(px + dx * spikeLen, wy + dy * spikeLen)
            sctx.stroke()
          }
        }

        if (warpT > 0.01) {
          const dx = px - cx, dy = wy - cy
          const mag = Math.hypot(dx, dy) || 1
          const trailLen = warpT * warpT * (72 + warpT * 30) * (1 - st.z * 0.45)
          const baseAlpha = Math.min(1, tw * (0.5 + (1 - st.z) * 0.6))
          const trailAlpha = warpT * baseAlpha * 0.9

          if (trailLen > 0.4) {
            const x2 = px + (dx / mag) * trailLen
            const y2 = wy + (dy / mag) * trailLen
            const g = sctx.createLinearGradient(px, wy, x2, y2)
            g.addColorStop(0, `rgba(${cr},${cg},${cb},${trailAlpha})`)
            g.addColorStop(1, `rgba(${cr},${cg},${cb},0)`)
            sctx.strokeStyle = g
            sctx.lineWidth = Math.max(0.4, size * 0.85)
            sctx.beginPath()
            sctx.moveTo(px, wy)
            sctx.lineTo(x2, y2)
            sctx.stroke()
          }
        }
      }

      for (const p of particles) {
        p.y -= p.v
        if (p.y < -10) { p.y = H + 10; p.x = Math.random() * W }
        sctx.fillStyle = `rgba(167,139,250,${p.a * (1 - warpT * 0.5)})`
        sctx.beginPath()
        sctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        sctx.fill()
      }

      wctx.clearRect(0, 0, W, H)

      maybeSpawn()
      for (let i = shootings.length - 1; i >= 0; i--) {
        const s = shootings[i]
        s.x += s.vx; s.y += s.vy; s.life++
        const a = 1 - s.life / s.max
        sctx.strokeStyle = `rgba(255,255,255,${a})`
        sctx.lineWidth = 2
        sctx.beginPath()
        sctx.moveTo(s.x, s.y)
        sctx.lineTo(s.x - s.vx * 8, s.y - s.vy * 8)
        sctx.stroke()
        if (s.life > s.max || s.x > W + 50 || s.y > H + 50) shootings.splice(i, 1)
      }

      rafId = requestAnimationFrame(frame)
    }

    resize()
    seed()
    window.addEventListener("resize", handleResize)
    frame()

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="space-bg" aria-hidden="true">
      <canvas ref={starsRef} />
      <canvas ref={warpRef} />
    </div>
  )
}
