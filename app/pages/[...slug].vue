<script setup lang="ts">
// Catch-all 404 page
// URL yang tidak match ke halaman manapun akan masuk ke sini

useSeoMeta({
  title: '404 — Halaman Tidak Ditemukan | Maulana Sopian',
  description: 'Halaman yang Anda cari tidak ditemukan.',
})
</script>

<template>
  <div class="container not-found-page">
    <div class="not-found-content">

      <div class="error-code" aria-hidden="true">404</div>

      <h1 class="error-title">Page Not Found</h1>
      <p class="error-desc">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>

      <div class="error-actions">
        <NuxtLink to="/" class="btn-primary">
          Go Home
        </NuxtLink>
        <NuxtLink to="/projects" class="btn-secondary">
          View Projects
        </NuxtLink>
      </div>

    </div>
  </div>
</template>

<style scoped>
.not-found-page {
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
}

.not-found-content {
  text-align: center;
  max-width: 500px;
}

.error-code {
  font-size: clamp(6rem, 15vw, 10rem);
  font-weight: 900;
  line-height: 1;
  letter-spacing: -0.05em;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(167, 139, 250, 0.3) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1.5rem;
  user-select: none;
}

.error-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.error-desc {
  color: var(--text-secondary);
  font-size: 1.05rem;
  line-height: 1.6;
  margin-bottom: 2.5rem;
}

.error-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
