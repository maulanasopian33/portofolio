// ============================================================
// COMPOSABLE: useTheme
// Dark / Light mode toggle tanpa external module
// Persisted ke localStorage, respects prefers-color-scheme
//
// Usage:
//   const { isDark, toggleTheme, theme } = useTheme()
// ============================================================

export type Theme = 'dark' | 'light'

const STORAGE_KEY = 'portfolio-theme'

// Shared state antar komponen (module-level singleton)
const theme = ref<Theme>('dark')

export function useTheme() {
  const isDark = computed(() => theme.value === 'dark')

  const applyTheme = (value: Theme) => {
    if (!process.client) return
    theme.value = value
    document.documentElement.setAttribute('data-theme', value)
    localStorage.setItem(STORAGE_KEY, value)
  }

  const toggleTheme = () => {
    applyTheme(isDark.value ? 'light' : 'dark')
  }

  const initTheme = () => {
    if (!process.client) return

    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null
    if (stored) {
      applyTheme(stored)
    }
    else {
      // Fallback ke system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      applyTheme(prefersDark ? 'dark' : 'light')
    }
  }

  // Auto-init saat composable pertama kali dipakai di client
  if (process.client && !document.documentElement.hasAttribute('data-theme')) {
    initTheme()
  }

  return { theme, isDark, toggleTheme, initTheme }
}
