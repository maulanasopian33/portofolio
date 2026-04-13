// ============================================================
// COMPOSABLE: useScrollAnimation
// IntersectionObserver-based scroll reveal
// Menggantikan CSS animation-delay hardcoded
//
// Usage:
//   const { observerRef } = useScrollAnimation()
//   <div ref="observerRef" class="scroll-reveal">...</div>
// ============================================================

export function useScrollAnimation(options?: {
  threshold?: number
  rootMargin?: string
  once?: boolean
}) {
  const threshold  = options?.threshold  ?? 0.12
  const rootMargin = options?.rootMargin ?? '0px 0px -60px 0px'
  const once       = options?.once       ?? true

  const observerRef = ref<HTMLElement | null>(null)
  let observer: IntersectionObserver | null = null

  const observe = (el: HTMLElement) => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            if (once) observer?.unobserve(entry.target)
          }
          else if (!once) {
            entry.target.classList.remove('is-visible')
          }
        })
      },
      { threshold, rootMargin },
    )

    // Observe direct children with class 'scroll-reveal'
    const targets = el.querySelectorAll('.scroll-reveal')
    if (targets.length > 0) {
      targets.forEach((t) => observer!.observe(t))
    }
    else {
      // Observe the element itself if no children
      observer.observe(el)
    }
  }

  onMounted(() => {
    if (!process.client) return
    if (observerRef.value) observe(observerRef.value)
  })

  onUnmounted(() => {
    observer?.disconnect()
    observer = null
  })

  return { observerRef }
}

// ============================================================
// Standalone function untuk observe single element
// Usage: const { ref: cardRef } = useRevealOnScroll()
// ============================================================
export function useRevealOnScroll(options?: { threshold?: number }) {
  const el = ref<HTMLElement | null>(null)
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (!process.client || !el.value) return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer?.unobserve(entry.target)
          }
        })
      },
      { threshold: options?.threshold ?? 0.1, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(el.value)
  })

  onUnmounted(() => {
    observer?.disconnect()
    observer = null
  })

  return { el }
}
