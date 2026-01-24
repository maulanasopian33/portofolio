import { ref, onMounted, onUnmounted } from 'vue'

export function useCustomCursor() {
  const cursorX = ref(0)
  const cursorY = ref(0)
  const trailerX = ref(0)
  const trailerY = ref(0)
  const isHovering = ref(false)

  const onMouseMove = (e: MouseEvent) => {
    cursorX.value = e.clientX
    cursorY.value = e.clientY
  }

  const animateTrailer = () => {
    const distX = cursorX.value - trailerX.value
    const distY = cursorY.value - trailerY.value
    
    trailerX.value += distX * 0.1
    trailerY.value += distY * 0.1
    
    requestAnimationFrame(animateTrailer)
  }

  const addHoverListeners = () => {
    const hoverables = document.querySelectorAll('a, button, .hover-trigger')
    hoverables.forEach((el) => {
      el.addEventListener('mouseenter', () => isHovering.value = true)
      el.addEventListener('mouseleave', () => isHovering.value = false)
    })
  }

  onMounted(() => {
    window.addEventListener('mousemove', onMouseMove)
    animateTrailer()
    // Small delay to ensure DOM is ready for listeners
    setTimeout(addHoverListeners, 500)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', onMouseMove)
  })

  return {
    cursorX,
    cursorY,
    trailerX,
    trailerY,
    isHovering
  }
}
