<script setup lang="ts">
import { projects } from '~/data/projects'

const route = useRoute()
const id = route.params.id as string

// Fetch dari static data (SSR-safe, tidak ada window/DOM access)
const project = projects.find((p) => p.id === id) ?? null

// 404 jika tidak ditemukan — Nuxt akan render error.vue
if (!project) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Project Not Found',
    fatal: true,
  })
}

// Dynamic SEO per project
useSeoMeta({
  title: `${project.title} — Maulana Sopian`,
  description: project.description,
  ogTitle: `${project.title} — Maulana Sopian`,
  ogDescription: project.description,
  twitterTitle: `${project.title} — Maulana Sopian`,
  twitterDescription: project.description,
})

useHead({
  link: [{ rel: 'canonical', href: `https://maulanasopian.dev/projects/${id}` }],
})

// ============================================================
// 🔌 API-READY VERSION (Tidak aktif — uncomment saat backend siap)
// ============================================================
// const { data: project } = await useAsyncData(
//   `project-${id}`,
//   () => $fetch(`/api/projects/${id}`),
// )
//
// if (!project.value) {
//   throw createError({ statusCode: 404, statusMessage: 'Project Not Found', fatal: true })
// }
//
// useSeoMeta({
//   title: `${project.value.title} — Maulana Sopian`,
//   description: project.value.description,
// })
// ============================================================
</script>

<template>
  <div class="container project-detail-page">

    <!-- Breadcrumb navigation -->
    <nav class="breadcrumb animate-fade-up" aria-label="Breadcrumb">
      <NuxtLink to="/projects" class="breadcrumb-link">
        ← Back to Projects
      </NuxtLink>
    </nav>

    <!-- Project Header -->
    <header class="project-header animate-fade-up" style="animation-delay: 0.1s;">
      <span class="project-category">{{ project.category }}</span>
      <h1 class="project-title">{{ project.title }}</h1>
    </header>

    <!-- Meta Info -->
    <div class="animate-fade-up" style="animation-delay: 0.2s;">
      <ProjectsProjectMeta :project="project" />
    </div>

    <!-- Banner Placeholder -->
    <div
      class="project-banner animate-fade-up"
      style="animation-delay: 0.25s;"
      role="img"
      :aria-label="`${project.title} project banner`"
    >
      <div class="banner-text">{{ project.title }}</div>
    </div>

    <!-- Case Study Content -->
    <div class="project-content animate-fade-up" style="animation-delay: 0.35s;">

      <section class="content-block" aria-labelledby="overview-heading">
        <h2 id="overview-heading">Overview</h2>
        <p>{{ project.overview || project.description }}</p>
      </section>

      <section
        v-if="project.challenge"
        class="content-block"
        aria-labelledby="challenge-heading"
      >
        <h2 id="challenge-heading">The Challenge</h2>
        <p>{{ project.challenge }}</p>
      </section>

      <section
        v-if="project.solution"
        class="content-block"
        aria-labelledby="solution-heading"
      >
        <h2 id="solution-heading">The Solution</h2>
        <p>{{ project.solution }}</p>
      </section>

    </div>

    <!-- Next/Prev Navigation (optional future enhancement) -->
    <div class="project-nav animate-fade-up" style="animation-delay: 0.5s;">
      <NuxtLink to="/projects" class="btn-secondary">
        View All Projects
      </NuxtLink>
    </div>

  </div>
</template>

<style scoped>
.project-detail-page {
  padding-top: 4rem;
  padding-bottom: 6rem;
  max-width: 940px;
}

/* Breadcrumb */
.breadcrumb {
  margin-bottom: 2.5rem;
}

.breadcrumb-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.2s ease;
}

.breadcrumb-link:hover {
  color: var(--text-primary);
}

/* Header */
.project-header {
  margin-bottom: 2.5rem;
}

.project-category {
  display: block;
  color: var(--text-accent);
  font-size: 0.82rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.75rem;
}

.project-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
  background: var(--gradient-title);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Banner */
.project-banner {
  width: 100%;
  height: 420px;
  background: var(--bg-secondary);
  border-radius: 20px;
  border: 1px solid var(--border-subtle);
  margin-bottom: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}

.banner-text {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: rgba(255, 255, 255, 0.05);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  user-select: none;
}

/* Content */
.project-content {
  margin-bottom: 4rem;
}

.content-block {
  margin-bottom: 3.5rem;
  padding-bottom: 3.5rem;
  border-bottom: 1px solid var(--border-subtle);
}

.content-block:last-child {
  border-bottom: none;
}

.content-block h2 {
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  margin-bottom: 1.25rem;
}

.content-block p {
  color: var(--text-secondary);
  font-size: 1.05rem;
  line-height: 1.85;
}

/* Nav */
.project-nav {
  display: flex;
  justify-content: center;
}
</style>
