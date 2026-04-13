// ============================================================
// COMPOSABLE: useCardTilt
// 3D perspective tilt effect on mouse move
// SSR Safe: semua DOM access di dalam onMounted
//
// Usage:
//   const { tiltRef, tiltStyle } = useCardTilt()
//   <div ref="tiltRef" :style="tiltStyle">...</div>
// ============================================================

export function useCardTilt(options?: {
  maxTilt?: number       // derajat max rotasi
  perspective?: number   // px perspective
  scale?: number         // scale on hover
  speed?: number         // ms transisi
}) {
  const maxTilt     = options?.maxTilt     ?? 8
  const perspective = options?.perspective ?? 1000
  const scale       = options?.scale       ?? 1.02
  const speed       = options?.speed       ?? 300

  const tiltRef = ref<HTMLElement | null>(null)
  const rotateX = ref(0)
  const rotateY = ref(0)
  const isHovered = ref(false)

  const tiltStyle = computed(() => ({
    transform: isHovered.value
      ? `perspective(${perspective}px) rotateX(${rotateX.value}deg) rotateY(${rotateY.value}deg) scale(${scale})`
      : `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale(1)`,
    transition: isHovered.value
      ? `transform 0.1s ease-out`
      : `transform ${speed}ms cubic-bezier(0.25, 0.8, 0.25, 1)`,
    willChange: 'transform',
  }))

  const handleMouseMove = (e: MouseEvent) => {
    const el = tiltRef.value
    if (!el) return

    const rect   = el.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top  + rect.height / 2
    const mouseX  = e.clientX - centerX
    const mouseY  = e.clientY - centerY

    rotateY.value =  (mouseX / (rect.width / 2))  * maxTilt
    rotateX.value = -(mouseY / (rect.height / 2)) * maxTilt
  }

  const handleMouseEnter = () => {
    isHovered.value = true
  }

  const handleMouseLeave = () => {
    isHovered.value = false
    rotateX.value  = 0
    rotateY.value  = 0
  }

  onMounted(() => {
    if (!process.client) return
    const el = tiltRef.value
    if (!el) return

    el.addEventListener('mousemove',  handleMouseMove,  { passive: true })
    el.addEventListener('mouseenter', handleMouseEnter, { passive: true })
    el.addEventListener('mouseleave', handleMouseLeave, { passive: true })
  })

  onUnmounted(() => {
    const el = tiltRef.value
    if (!el) return
    el.removeEventListener('mousemove',  handleMouseMove)
    el.removeEventListener('mouseenter', handleMouseEnter)
    el.removeEventListener('mouseleave', handleMouseLeave)
  })

  return { tiltRef, tiltStyle, isHovered }
}
