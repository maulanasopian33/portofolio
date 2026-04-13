<script setup lang="ts">
const route = useRoute()

// Deteksi scroll untuk efek glassmorphism navbar
const isScrolled = ref(false)

// Mobile menu state
const isMobileMenuOpen = ref(false)

const navLinks = [
  { label: 'About',        to: '/about' },
  { label: 'Projects',     to: '/projects' },
  { label: 'Blog',         to: '/blog' },
  { label: 'Uses',         to: '/uses' },
  { label: 'Certificates', to: '/certificates' },
]

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// Tutup mobile menu saat route berubah
watch(() => route.path, () => {
  isMobileMenuOpen.value = false
})

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 20
  }
  window.addEventListener('scroll', handleScroll, { passive: true })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})
</script>

<template>
  <nav
    class="navbar"
    :class="{ 'navbar--scrolled': isScrolled }"
    aria-label="Main navigation"
  >
    <div class="container navbar-content">
      <!-- Logo -->
      <NuxtLink to="/" class="logo" aria-label="Maulana Sopian — Home">
        Maulana<span class="logo-dot">.</span>
      </NuxtLink>

      <!-- Desktop Nav Links -->
      <div class="nav-links" role="menubar">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="nav-link"
          role="menuitem"
          :aria-current="route.path === link.to ? 'page' : undefined"
        >
          {{ link.label }}
        </NuxtLink>

        <UiThemeToggle />

        <NuxtLink to="/contact" class="nav-cta" role="menuitem">
          Contact
        </NuxtLink>
      </div>

      <!-- Mobile Hamburger -->
      <button
        class="hamburger"
        :class="{ 'hamburger--open': isMobileMenuOpen }"
        :aria-expanded="isMobileMenuOpen"
        aria-label="Toggle navigation menu"
        @click="toggleMobileMenu"
      >
        <span /><span /><span />
      </button>
    </div>

    <!-- Mobile Menu Drawer -->
    <Transition name="mobile-menu">
      <div v-if="isMobileMenuOpen" class="mobile-menu" role="menu">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="mobile-link"
          role="menuitem"
        >
          {{ link.label }}
        </NuxtLink>
        <NuxtLink to="/contact" class="mobile-link mobile-link--cta" role="menuitem">
          Contact
        </NuxtLink>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
.navbar {
  height: var(--header-height);
  border-bottom: 1px solid transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: sticky;
  top: 0;
  background-color: rgba(10, 10, 10, 0.7);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  z-index: 100;
  transition: border-color 0.3s ease, background-color 0.3s ease;
}

.navbar--scrolled {
  border-bottom-color: var(--border-subtle);
  background-color: rgba(10, 10, 10, 0.9);
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

/* Logo */
.logo {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text-primary);
  letter-spacing: -0.02em;
  transition: opacity 0.2s ease;
}

.logo:hover {
  opacity: 0.85;
}

.logo-dot {
  color: var(--text-accent);
}

/* Desktop Links */
.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  color: var(--text-secondary);
  font-size: 0.95rem;
  font-weight: 500;
  position: relative;
  transition: color 0.25s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--text-accent);
  border-radius: 2px;
  transition: width 0.3s ease;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--text-primary);
}

.nav-link.router-link-active::after,
.nav-link:hover::after {
  width: 100%;
}

/* CTA Button */
.nav-cta {
  color: var(--text-primary);
  font-weight: 600;
  font-size: 0.9rem;
  padding: 0.5rem 1.25rem;
  border-radius: 50px;
  border: 1px solid var(--border-glass);
  background: var(--bg-glass);
  transition: all 0.25s ease;
}

.nav-cta:hover {
  background: rgba(59, 130, 246, 0.1);
  border-color: var(--text-accent);
  color: var(--text-accent);
}

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 4px;
  cursor: pointer;
}

.hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background-color: var(--text-primary);
  border-radius: 2px;
  transition: all 0.3s ease;
}

.hamburger--open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.hamburger--open span:nth-child(2) {
  opacity: 0;
}
.hamburger--open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Mobile Menu */
.mobile-menu {
  display: none;
  flex-direction: column;
  padding: 1rem 2rem 1.5rem;
  border-top: 1px solid var(--border-subtle);
  background-color: rgba(10, 10, 10, 0.95);
  gap: 0.5rem;
}

.mobile-link {
  color: var(--text-secondary);
  font-size: 1rem;
  font-weight: 500;
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--border-subtle);
  transition: color 0.2s ease;
}

.mobile-link:last-child {
  border-bottom: none;
}

.mobile-link:hover,
.mobile-link.router-link-active {
  color: var(--text-primary);
}

.mobile-link--cta {
  color: var(--text-accent);
  font-weight: 600;
}

/* Mobile Menu Transition */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

/* Responsive */
@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .hamburger {
    display: flex;
  }

  .mobile-menu {
    display: flex;
  }

  .navbar {
    height: auto;
    min-height: var(--header-height);
  }
}
</style>
