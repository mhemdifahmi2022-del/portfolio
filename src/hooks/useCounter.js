import { useState, useEffect, useRef } from 'react'

/**
 * Animates a number from 0 → `end` over `duration` ms once the element
 * enters the viewport. Returns [ref, displayValue].
 *
 * Supports suffixes like "+" (e.g., end=2, suffix="+") by passing the
 * suffix through the calling component.
 */
export function useCounter(end, duration = 1500) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const tick = (now) => {
            const p = Math.min((now - start) / duration, 1)
            // ease-out cubic
            const eased = 1 - Math.pow(1 - p, 3)
            setValue(Math.round(end * eased))
            if (p < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.3 }
    )
    obs.observe(node)
    return () => obs.disconnect()
  }, [end, duration])

  return [ref, value]
}
