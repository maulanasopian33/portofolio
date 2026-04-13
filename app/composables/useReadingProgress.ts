// ============================================================
// COMPOSABLE: useReadingProgress
// Reading progress bar berdasarkan scroll position halaman
//
// Usage:
//   const { progress } = useReadingProgress()
//   <div :style="{ width: `${progress}%` }" class="progress-bar" />
// ============================================================

export function useReadingProgress() {
  const progress = ref(0)

  const updateProgress = () => {
    const scrollTop    = window.scrollY
    const docHeight    = document.documentElement.scrollHeight - window.innerHeight
    progress.value = docHeight > 0
      ? Math.min(100, Math.round((scrollTop / docHeight) * 100))
      : 0
  }

  onMounted(() => {
    if (!process.client) return
    window.addEventListener('scroll', updateProgress, { passive: true })
    updateProgress()
  })

  onUnmounted(() => {
    if (!process.client) return
    window.removeEventListener('scroll', updateProgress)
  })

  return { progress }
}
