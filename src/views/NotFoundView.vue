<script setup lang="ts">
import { useCustomCursor } from '../composables/useCustomCursor'

useCustomCursor()
</script>

<template>
  <div class="not-found-container">
    <h1 class="error-code">404</h1>
    <h2 class="error-msg">Page Not Found</h2>
    <p class="error-desc">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
    <router-link to="/" class="btn-primary glow-effect hover-trigger">Back to Home</router-link>
  </div>
</template>

<style scoped>
.not-found-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  text-align: center;
  padding: 0 1rem;
}

.error-code {
  font-size: 10rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--border-accent), #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1;
  margin-bottom: 1rem;
}

.error-msg {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.error-desc {
  color: var(--text-secondary);
  max-width: 500px;
  margin-bottom: 3rem;
  line-height: 1.6;
}

.btn-primary {
  padding: 1rem 2.5rem;
  border-radius: 50px;
  background: var(--text-accent);
  color: white;
  font-weight: 600;
  transition: transform 0.2s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
}
</style>
