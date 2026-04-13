// ============================================================
// COMPOSABLE: useCustomCursor
// Custom cursor dengan trailing animation
//
// ⚠️  SSR SAFE: Semua DOM/window access di-guard dengan process.client
//     Gunakan komponen <UiCustomCursor> yang sudah dibungkus <ClientOnly>
// ============================================================

export function useCustomCursor() {
  const cursorX   = ref(0)
  const cursorY   = ref(0)
  const trailerX  = ref(0)
  const trailerY  = ref(0)
  const isHovering = ref(false)
  const isVisible  = ref(false)

  let animationId: number | null = null

  // --- Handlers ---
  const onMouseMove = (e: MouseEvent) => {
    cursorX.value  = e.clientX
    cursorY.value  = e.clientY
    if (!isVisible.value) isVisible.value = true
  }

  const onMouseLeave = () => {
    isVisible.value = false
  }

  const animateTrailer = () => {
    const distX = cursorX.value - trailerX.value
    const distY = cursorY.value - trailerY.value
    trailerX.value += distX * 0.12
    trailerY.value += distY * 0.12
    animationId = requestAnimationFrame(animateTrailer)
  }

  const addHoverListeners = () => {
    const hoverables = document.querySelectorAll('a, button, [class*="hover-trigger"]')
    hoverables.forEach((el) => {
      el.addEventListener('mouseenter', () => (isHovering.value = true))
      el.addEventListener('mouseleave', () => (isHovering.value = false))
    })
  }

  // --- Lifecycle (client-only) ---
  onMounted(() => {
    if (!process.client) return

    window.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseleave', onMouseLeave)

    animateTrailer()

    // Delay agar DOM siap
    setTimeout(addHoverListeners, 600)
  })

  onUnmounted(() => {
    if (!process.client) return

    window.removeEventListener('mousemove', onMouseMove)
    document.removeEventListener('mouseleave', onMouseLeave)

    if (animationId !== null) {
      cancelAnimationFrame(animationId)
      animationId = null
    }
  })

  return {
    cursorX,
    cursorY,
    trailerX,
    trailerY,
    isHovering,
    isVisible,
  }
}
