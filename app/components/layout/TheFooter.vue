<script setup lang="ts">
const currentYear = new Date().getFullYear()

const socialLinks = [
  { label: 'GitHub',   href: 'https://github.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Twitter',  href: 'https://twitter.com' },
]

const footerLinks = [
  { label: 'Home',         to: '/' },
  { label: 'About',        to: '/about' },
  { label: 'Projects',     to: '/projects' },
  { label: 'Blog',         to: '/blog' },
  { label: 'Uses',         to: '/uses' },
  { label: 'Certificates', to: '/certificates' },
  { label: 'Resume',       to: '/resume' },
  { label: 'Contact',      to: '/contact' },
]
</script>

<template>
  <footer class="footer" role="contentinfo">
    <div class="container footer-inner">

      <!-- Brand -->
      <div class="footer-brand">
        <NuxtLink to="/" class="footer-logo">
          Maulana<span class="footer-logo-dot">.</span>
        </NuxtLink>
        <p class="footer-tagline">Building digital experiences that matter.</p>
      </div>

      <!-- Navigation Links -->
      <nav class="footer-nav" aria-label="Footer navigation">
        <NuxtLink
          v-for="link in footerLinks"
          :key="link.to"
          :to="link.to"
          class="footer-nav-link"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <!-- Social Links -->
      <div class="footer-socials">
        <a
          v-for="social in socialLinks"
          :key="social.label"
          :href="social.href"
          class="social-link"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="`Visit ${social.label}`"
        >
          {{ social.label }}
        </a>
      </div>

    </div>

    <div class="footer-bottom">
      <div class="container footer-bottom-inner">
        <div class="footer-availability">
          <span class="avail-dot" aria-hidden="true" />
          <span>Available for new projects</span>
        </div>
        <p class="copyright">
          &copy; {{ currentYear }} Maulana Sopian
        </p>
        <p class="built-with">
          Built with <span class="nuxt-badge">Nuxt 4</span> + ❤️
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border-subtle);
  background-color: var(--bg-secondary);
}

.footer-inner {
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 3rem;
  align-items: start;
  padding-top: 3rem;
  padding-bottom: 2rem;
}

/* Brand */
.footer-logo {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text-primary);
  letter-spacing: -0.02em;
  display: inline-block;
  margin-bottom: 0.75rem;
}

.footer-logo-dot {
  color: var(--text-accent);
}

.footer-tagline {
  color: var(--text-secondary);
  font-size: 0.9rem;
  max-width: 240px;
  line-height: 1.5;
}

/* Nav */
.footer-nav {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-nav-link {
  color: var(--text-secondary);
  font-size: 0.9rem;
  transition: color 0.2s ease;
}

.footer-nav-link:hover {
  color: var(--text-primary);
}

/* Socials */
.footer-socials {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.social-link {
  color: var(--text-secondary);
  font-size: 0.9rem;
  transition: color 0.2s ease;
}

.social-link:hover {
  color: var(--text-accent);
}

/* Bottom bar */
.footer-bottom {
  border-top: 1px solid var(--border-subtle);
  padding: 1.25rem 0;
}

.footer-bottom-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-availability {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.82rem;
  color: #22c55e;
  font-weight: 500;
}

.avail-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #22c55e;
  box-shadow: 0 0 6px rgba(34, 197, 94, 0.6);
  animation: pulse 2s infinite;
  flex-shrink: 0;
}

@keyframes pulse {
  0%, 100% { box-shadow: 0 0 4px rgba(34, 197, 94, 0.4); }
  50%       { box-shadow: 0 0 10px rgba(34, 197, 94, 0.8); }
}

.copyright {
  color: var(--text-secondary);
  font-size: 0.85rem;
}

.built-with {
  color: var(--text-secondary);
  font-size: 0.85rem;
}

.nuxt-badge {
  color: #00DC82;
  font-weight: 600;
}

/* Responsive */
@media (max-width: 768px) {
  .footer-inner {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-bottom .container {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
}
</style>
