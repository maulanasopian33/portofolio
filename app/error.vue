<script setup lang="ts">
import type { NuxtError } from '#app'

// error.vue — Nuxt runtime error page (404, 500, dll)
const props = defineProps<{
  error: NuxtError
}>()

const statusCode = computed(() => props.error?.statusCode ?? 500)
const isNotFound = computed(() => statusCode.value === 404)

const title = computed(() =>
  isNotFound.value ? 'Page Not Found' : 'Something Went Wrong',
)

const description = computed(() =>
  isNotFound.value
    ? "The page you're looking for doesn't exist or has been moved."
    : 'An unexpected error occurred. Please try again later.',
)

useSeoMeta({
  title: `${statusCode.value} — Maulana Sopian`,
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="error-page">
    <div class="error-content">

      <div class="status-code" aria-hidden="true">{{ statusCode }}</div>

      <h1 class="error-title">{{ title }}</h1>
      <p class="error-desc">{{ description }}</p>

      <div class="error-actions">
        <button class="btn-primary" @click="handleError">
          Go Back Home
        </button>
        <NuxtLink to="/contact" class="btn-secondary">
          Report Issue
        </NuxtLink>
      </div>

    </div>
  </div>
</template>

<style scoped>
.error-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-primary);
  font-family: var(--font-main);
  padding: 2rem;
}

.error-content {
  text-align: center;
  max-width: 480px;
}

.status-code {
  font-size: clamp(7rem, 18vw, 12rem);
  font-weight: 900;
  line-height: 1;
  letter-spacing: -0.06em;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.25) 0%, rgba(167, 139, 250, 0.25) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  user-select: none;
}

.error-title {
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: 700;
  margin-bottom: 1rem;
  color: #ffffff;
}

.error-desc {
  color: #a1a1aa;
  font-size: 1rem;
  line-height: 1.65;
  margin-bottom: 2.5rem;
}

.error-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
