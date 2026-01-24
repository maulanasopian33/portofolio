<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="navbar">
    <div class="container navbar-content">
      <RouterLink to="/" class="logo">Maulana.</RouterLink>
      <div class="nav-links">
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/projects">Projects</RouterLink>
        <RouterLink to="/contact" class="contact-link">Contact</RouterLink>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  height: var(--header-height);
  border-bottom: 1px solid var(--border-subtle);
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: rgba(10, 10, 10, 0.8);
  backdrop-filter: blur(10px);
  z-index: 100;
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a:not(.contact-link) {
  color: var(--text-secondary);
  font-size: 0.95rem;
  font-weight: 500;
}

.nav-links a:not(.contact-link):hover,
.nav-links a.router-link-active {
  color: var(--text-primary);
}

.contact-link {
  color: var(--text-primary);
  font-weight: 600;
}
</style>
