<script setup lang="ts">
const { projects } = usePortfolioData()

// Filtering by category (client-side)
const selectedCategory = ref('All')

const categories = computed(() => {
  const cats = ['All', ...new Set(projects.map((p) => p.category))]
  return cats
})

const filteredProjects = computed(() =>
  selectedCategory.value === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory.value),
)

// SEO
useSeoMeta({
  title: 'Projects — Maulana Sopian',
  description:
    'Lihat portofolio karya-karya Maulana Sopian — web applications, mobile apps, dashboards, dan banyak lagi. Dibuat dengan Vue.js, React, Laravel, dan teknologi modern lainnya.',
  ogTitle: 'Projects — Portfolio Maulana Sopian',
  ogDescription: 'Karya-karya terbaik Maulana Sopian, Full Stack Web Developer.',
})

useHead({
  link: [{ rel: 'canonical', href: 'https://maulanasopian.dev/projects' }],
})
</script>

<template>
  <div class="container projects-page">

    <!-- Page Header -->
    <header class="page-header animate-fade-up">
      <span class="section-subtitle">My Work</span>
      <h1 class="page-title">Projects</h1>
      <p class="page-desc">
        A curated collection of projects I've built across different domains and technologies.
      </p>
    </header>

    <!-- Category Filter -->
    <div
      class="filter-bar animate-fade-up"
      style="animation-delay: 0.1s;"
      role="group"
      aria-label="Filter projects by category"
    >
      <button
        v-for="cat in categories"
        :key="cat"
        class="filter-btn"
        :class="{ 'filter-btn--active': selectedCategory === cat }"
        :aria-pressed="selectedCategory === cat"
        @click="selectedCategory = cat"
      >
        {{ cat }}
      </button>
    </div>

    <!-- Projects Grid -->
    <Transition name="fade" mode="out-in">
      <div
        :key="selectedCategory"
        class="projects-grid animate-fade-up"
        style="animation-delay: 0.2s;"
        role="list"
        aria-label="Projects list"
      >
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          role="listitem"
        >
          <ProjectsProjectCard :project="project" />
        </div>
      </div>
    </Transition>

    <!-- Empty State -->
    <div v-if="filteredProjects.length === 0" class="empty-state">
      <p>No projects found in this category.</p>
    </div>

  </div>
</template>

<style scoped>
.projects-page {
  padding-top: 5rem;
  padding-bottom: 5rem;
}

/* Header */
.page-header {
  margin-bottom: 3rem;
}

.page-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  background: var(--gradient-title);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
}

.page-desc {
  color: var(--text-secondary);
  font-size: 1.1rem;
  max-width: 520px;
}

/* Filter */
.filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 3rem;
}

.filter-btn {
  padding: 0.5rem 1.25rem;
  border-radius: 50px;
  font-size: 0.88rem;
  font-weight: 500;
  font-family: var(--font-main);
  color: var(--text-secondary);
  border: 1px solid var(--border-subtle);
  background: transparent;
  cursor: pointer;
  transition: all 0.2s ease;
}

.filter-btn:hover {
  color: var(--text-primary);
  border-color: rgba(255, 255, 255, 0.2);
}

.filter-btn--active {
  background: var(--text-accent);
  border-color: var(--text-accent);
  color: #ffffff;
}

/* Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
}

/* Empty */
.empty-state {
  text-align: center;
  padding: 5rem;
  color: var(--text-secondary);
}

/* Filter transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
