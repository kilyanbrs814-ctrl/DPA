"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  baseOpacity: number
  color: string
  opacity: number
  scale: number
  createdAt: number
  lifetime: number
}

interface HoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

const PALETTE = [
  { rgb: "124,58,237",  alpha: 0.42 },
  { rgb: "167,139,250", alpha: 0.35 },
  { rgb: "109,40,217",  alpha: 0.40 },
  { rgb: "139,92,246",  alpha: 0.38 },
]

const SHADOW_REST = [
  "inset 0 0 0 1px rgba(124,58,237,0.22)",
  "inset 0 0 18px rgba(124,58,237,0.08)",
  "0 6px 24px rgba(0,0,0,0.55)",
  "0 0 32px rgba(124,58,237,0.10)",
].join(", ")

const SHADOW_HOVER = [
  "inset 0 0 0 1px rgba(167,139,250,0.30)",
  "inset 0 0 26px rgba(124,58,237,0.18)",
  "inset 0 -4px 14px rgba(124,58,237,0.14)",
  "0 8px 32px rgba(0,0,0,0.68)",
  "0 0 56px rgba(124,58,237,0.24)",
].join(", ")

const HoverButton = React.forwardRef<HTMLButtonElement, HoverButtonProps>(
  ({ className, children, onMouseEnter, onMouseLeave, onMouseMove, style, ...props }, ref) => {
    const [hovered, setHovered] = React.useState(false)
    const particlesRef = React.useRef<Particle[]>([])
    const [, forceRender] = React.useReducer((x) => x + 1, 0)
    const buttonRef = React.useRef<HTMLButtonElement>(null)
    const lastSpawnRef = React.useRef(0)
    const rafRef = React.useRef<number | null>(null)
    const hoveredRef = React.useRef(false)
    const idRef = React.useRef(0)

    const tick = React.useCallback(() => {
      const now = Date.now()

      particlesRef.current = particlesRef.current
        .map((p) => {
          const t = (now - p.createdAt) / p.lifetime
          // Fast rise (first 12%), slow fade (remaining 88%)
          const fade = t < 0.12 ? t / 0.12 : 1 - (t - 0.12) / 0.88
          return {
            ...p,
            opacity: p.baseOpacity * Math.max(0, fade),
            scale: 1 + t * 0.85,
          }
        })
        .filter((p) => p.opacity > 0.004)

      forceRender()

      if (hoveredRef.current || particlesRef.current.length > 0) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        rafRef.current = null
      }
    }, [])

    const startLoop = React.useCallback(() => {
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(tick)
      }
    }, [tick])

    const spawnParticle = React.useCallback((x: number, y: number) => {
      const now = Date.now()
      if (now - lastSpawnRef.current < 65) return
      if (particlesRef.current.length >= 14) return
      lastSpawnRef.current = now

      const c = PALETTE[Math.floor(Math.random() * PALETTE.length)]
      const ox = (Math.random() - 0.5) * 18
      const oy = (Math.random() - 0.5) * 18

      particlesRef.current = [
        ...particlesRef.current,
        {
          id: idRef.current++,
          x: x + ox,
          y: y + oy,
          size: 32 + Math.random() * 22,
          baseOpacity: c.alpha,
          color: `rgba(${c.rgb},1)`,
          opacity: 0,
          scale: 1,
          createdAt: now,
          lifetime: 1500 + Math.random() * 500,
        },
      ]
    }, [])

    const handleMouseMove = React.useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!buttonRef.current) return
        const rect = buttonRef.current.getBoundingClientRect()
        spawnParticle(e.clientX - rect.left, e.clientY - rect.top)
        onMouseMove?.(e)
      },
      [spawnParticle, onMouseMove]
    )

    const mergeRef = React.useCallback(
      (node: HTMLButtonElement | null) => {
        ;(buttonRef as React.MutableRefObject<HTMLButtonElement | null>).current = node
        if (typeof ref === "function") ref(node)
        else if (ref) (ref as React.MutableRefObject<HTMLButtonElement | null>).current = node
      },
      [ref]
    )

    React.useEffect(() => {
      return () => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current)
      }
    }, [])

    return (
      <button
        ref={mergeRef}
        className={cn(
          "relative inline-flex items-center justify-center overflow-hidden",
          "px-10 py-4 rounded-full",
          "text-white font-semibold text-base tracking-wide",
          "cursor-pointer select-none",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/30",
          className
        )}
        style={{
          background: "rgba(15, 12, 32, 0.55)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(124,58,237,0.32)",
          boxShadow: hovered ? SHADOW_HOVER : SHADOW_REST,
          transform: hovered ? "translateY(-2px)" : "translateY(0px)",
          transition: "box-shadow 0.4s ease, transform 0.3s ease",
          ...style,
        }}
        onMouseEnter={(e) => {
          hoveredRef.current = true
          setHovered(true)
          startLoop()
          onMouseEnter?.(e)
        }}
        onMouseLeave={(e) => {
          hoveredRef.current = false
          setHovered(false)
          onMouseLeave?.(e)
        }}
        onMouseMove={handleMouseMove}
        {...props}
      >
        {/* Smoke particles */}
        {particlesRef.current.map((p) => (
          <span
            key={p.id}
            aria-hidden
            className="pointer-events-none absolute rounded-full"
            style={{
              left: p.x,
              top: p.y,
              width: p.size,
              height: p.size,
              background: p.color,
              opacity: p.opacity,
              transform: `translate(-50%, -50%) scale(${p.scale})`,
              filter: "blur(14px)",
              willChange: "opacity, transform",
            }}
          />
        ))}

        {/* Convex glass specular highlight */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(ellipse 80% 40% at 50% 0%, rgba(167,139,250,0.14) 0%, transparent 70%)",
          }}
        />

        {/* Label */}
        <span
          className="relative z-10"
          style={{ textShadow: "0 0 18px rgba(167,139,250,0.50)" }}
        >
          {children}
        </span>
      </button>
    )
  }
)

HoverButton.displayName = "HoverButton"

export { HoverButton }
