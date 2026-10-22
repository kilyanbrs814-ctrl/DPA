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

type HoverVariant = "purple" | "green"

interface HoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  /** When present, render a real link instead of a button. */
  href?: string
  target?: string
  rel?: string
  variant?: HoverVariant
}

const PALETTES = {
  purple: [
    { rgb: "121,54,163", alpha: 0.46 },
    { rgb: "184,119,218", alpha: 0.42 },
    { rgb: "82,35,111", alpha: 0.44 },
    { rgb: "205,158,230", alpha: 0.35 },
  ],
  green: [
    { rgb: "34,197,94", alpha: 0.47 },
    { rgb: "74,222,128", alpha: 0.43 },
    { rgb: "22,163,74", alpha: 0.45 },
    { rgb: "134,239,172", alpha: 0.34 },
  ],
}

const SHADOWS = {
  purple: {
    rest: [
      "inset 0 0 0 1px rgba(205,158,230,0.42)",
      "inset 0 0 22px rgba(121,54,163,0.18)",
      "0 6px 24px rgba(0,0,0,0.5)",
      "0 0 28px rgba(121,54,163,0.30)",
    ].join(", "),
    hover: [
      "inset 0 0 0 1px rgba(226,197,242,0.7)",
      "inset 0 0 30px rgba(121,54,163,0.3)",
      "0 8px 30px rgba(0,0,0,0.6)",
      "0 0 45px rgba(121,54,163,0.53)",
    ].join(", "),
  },
  green: {
    rest: [
      "inset 0 0 0 1px rgba(134,239,172,0.28)",
      "inset 0 0 22px rgba(34,197,94,0.12)",
      "0 6px 24px rgba(0,0,0,0.5)",
      "0 0 28px rgba(34,197,94,0.23)",
    ].join(", "),
    hover: [
      "inset 0 0 0 1px rgba(187,247,208,0.6)",
      "inset 0 0 30px rgba(34,197,94,0.26)",
      "0 8px 30px rgba(0,0,0,0.6)",
      "0 0 45px rgba(74,222,128,0.42)",
    ].join(", "),
  },
}

const HoverButton = React.forwardRef<HTMLButtonElement, HoverButtonProps>(
  (
    {
      className,
      children,
      onMouseEnter,
      onMouseLeave,
      onMouseMove,
      onTouchStart,
      style,
      href,
      target,
      rel,
      variant = "purple",
      ...props
    },
    ref
  ) => {
    const [hovered, setHovered] = React.useState(false)
    const particlesRef = React.useRef<Particle[]>([])
    const [, forceRender] = React.useReducer((x) => x + 1, 0)
    const elementRef = React.useRef<HTMLElement | null>(null)
    const lastSpawnRef = React.useRef(0)
    const rafRef = React.useRef<number | null>(null)
    const hoveredRef = React.useRef(false)
    const idRef = React.useRef(0)

    const tick = React.useCallback(() => {
      const now = Date.now()
      particlesRef.current = particlesRef.current
        .map((p) => {
          const t = (now - p.createdAt) / p.lifetime
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
      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(tick)
      }
    }, [tick])

    const spawnParticle = React.useCallback((x: number, y: number) => {
      const now = Date.now()
      if (now - lastSpawnRef.current < 65) return
      if (particlesRef.current.length >= 14) return
      lastSpawnRef.current = now

      const palette = PALETTES[variant]
      const c = palette[Math.floor(Math.random() * palette.length)]
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
          color: "rgba(" + c.rgb + ",1)",
          opacity: 0,
          scale: 1,
          createdAt: now,
          lifetime: 1500 + Math.random() * 500,
        },
      ]
    }, [variant])

    const handleMouseMove = React.useCallback(
      (e: React.MouseEvent<HTMLElement>) => {
        if (!elementRef.current) return
        const rect = elementRef.current.getBoundingClientRect()
        spawnParticle(e.clientX - rect.left, e.clientY - rect.top)
        if (!href) onMouseMove?.(e as React.MouseEvent<HTMLButtonElement>)
      },
      [href, spawnParticle, onMouseMove]
    )

    const handleTouchStart = React.useCallback(
      (e: React.TouchEvent<HTMLElement>) => {
        const point = e.touches[0]
        if (elementRef.current && point) {
          const rect = elementRef.current.getBoundingClientRect()
          spawnParticle(point.clientX - rect.left, point.clientY - rect.top)
          startLoop()
        }
        if (!href) onTouchStart?.(e as React.TouchEvent<HTMLButtonElement>)
      },
      [href, onTouchStart, spawnParticle, startLoop]
    )

    const mergeRef = React.useCallback(
      (node: HTMLElement | null) => {
        elementRef.current = node
        if (href) return
        const buttonNode = node as HTMLButtonElement | null
        if (typeof ref === "function") ref(buttonNode)
        else if (ref) (ref as React.MutableRefObject<HTMLButtonElement | null>).current = buttonNode
      },
      [href, ref]
    )

    React.useEffect(() => {
      return () => {
        if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
      }
    }, [])

    const isGreen = variant === "green"
    const shadows = SHADOWS[variant]
    const classes = cn(
      "relative inline-flex items-center justify-center gap-2 overflow-hidden",
      "rounded-full px-10 py-4 text-base font-semibold tracking-wide text-white",
      "cursor-pointer select-none disabled:cursor-not-allowed disabled:opacity-60",
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030308]",
      isGreen ? "focus-visible:ring-green-300" : "focus-visible:ring-brand-light",
      className ?? ""
    )

    const buttonStyle: React.CSSProperties = {
      background: isGreen ? "rgba(5,39,22,0.78)" : "rgba(15,12,32,0.78)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      border: isGreen
        ? "1.5px solid rgba(74,222,128,0.8)"
        : "1.5px solid rgba(184,119,218,0.92)",
      boxShadow: hovered ? shadows.hover : shadows.rest,
      transform: hovered ? "translateY(-2px)" : "translateY(0px)",
      transition: "box-shadow 0.35s ease, transform 0.3s ease, border-color 0.3s ease",
      ...style,
    }

    const handleEnter = (e: React.MouseEvent<HTMLElement>) => {
      hoveredRef.current = true
      setHovered(true)
      startLoop()
      if (!href) onMouseEnter?.(e as React.MouseEvent<HTMLButtonElement>)
    }

    const handleLeave = (e: React.MouseEvent<HTMLElement>) => {
      hoveredRef.current = false
      setHovered(false)
      if (!href) onMouseLeave?.(e as React.MouseEvent<HTMLButtonElement>)
    }

    const contents = (
      <>
        {particlesRef.current.map((p) => (
          <span
            key={p.id}
            aria-hidden="true"
            className="pointer-events-none absolute rounded-full"
            style={{
              left: p.x,
              top: p.y,
              width: p.size,
              height: p.size,
              background: p.color,
              opacity: p.opacity,
              transform: "translate(-50%, -50%) scale(" + p.scale + ")",
              filter: "blur(14px)",
              willChange: "opacity, transform",
            }}
          />
        ))}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-full"
          style={{
            background: isGreen
              ? "radial-gradient(ellipse 80% 40% at 50% 0%, rgba(134,239,172,0.19) 0%, transparent 70%)"
              : "radial-gradient(ellipse 80% 40% at 50% 0%, rgba(184,119,218,0.24) 0%, transparent 70%)",
          }}
        />
        <span
          className="relative z-10"
          style={{
            textShadow: isGreen
              ? "0 0 18px rgba(74,222,128,0.45)"
              : "0 0 18px rgba(121,54,163,0.7)",
          }}
        >
          {children}
        </span>
      </>
    )

    if (href) {
      return (
        <a
          href={href}
          target={target}
          rel={rel}
          ref={mergeRef}
          className={classes}
          style={buttonStyle}
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
        >
          {contents}
        </a>
      )
    }

    return (
      <button
        {...props}
        type={props.type ?? "button"}
        ref={mergeRef}
        className={classes}
        style={buttonStyle}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        onMouseMove={handleMouseMove}
      >
        {contents}
      </button>
    )
  }
)

HoverButton.displayName = "HoverButton"

export { HoverButton }
