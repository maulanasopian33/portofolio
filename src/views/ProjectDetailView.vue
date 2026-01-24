<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCustomCursor } from '../composables/useCustomCursor'
import { usePortfolioData } from '../composables/usePortfolioData'

useCustomCursor()
const route = useRoute()
const router = useRouter()
const { getProject } = usePortfolioData()
const projectId = route.params.id as string

const project = ref<any>(null)

onMounted(() => {
  const foundProject = getProject(projectId)
  if (foundProject) {
    project.value = foundProject
  } else {
    router.push('/404') // Redirect if not found
  }
})
</script>

<template>
  <div v-if="project" class="container project-detail-container">
    <div class="project-header animate-fade-up">
      <span class="project-category">{{ project.category }}</span>
      <h1 class="project-title">{{ project.title }}</h1>
      
      <div class="project-meta">
        <div class="meta-item">
          <span class="meta-label">Role</span>
          <span class="meta-value">Lead Developer</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Timeline</span>
          <span class="meta-value">3 Months</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Stack</span>
          <div class="tech-tags">
            <span v-for="t in project.tech" :key="t" class="tag">{{ t }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="project-banner animate-fade-up" style="animation-delay: 0.2s;"></div>

    <div class="project-content animate-fade-up" style="animation-delay: 0.3s;">
      <section class="content-section">
        <h2>Overview</h2>
        <p>{{ project.overview || project.description }}</p>
      </section>

      <section class="content-section" v-if="project.challenge">
        <h2>The Challenge</h2>
        <p>{{ project.challenge }}</p>
      </section>

      <section class="content-section" v-if="project.solution">
        <h2>The Solution</h2>
        <p>{{ project.solution }}</p>
      </section>
    </div>
  </div>
  <div v-else class="loading-container">
    <p>Loading project details...</p>
  </div>
</template>

<style scoped>
.project-detail-container {
  padding-top: 6rem;
  padding-bottom: 6rem;
  max-width: 1000px;
}

.project-category {
  color: var(--text-accent);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
  display: block;
  margin-bottom: 1rem;
}

.project-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  line-height: 1.1;
}

.project-meta {
  display: flex;
  gap: 4rem;
  border-top: 1px solid var(--border-subtle);
  border-bottom: 1px solid var(--border-subtle);
  padding: 2rem 0;
  margin-bottom: 4rem;
}

.meta-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.meta-label {
  color: var(--text-secondary);
  font-size: 0.9rem;
  text-transform: uppercase;
}

.meta-value {
  font-weight: 600;
  font-size: 1.1rem;
}

.tech-tags {
  display: flex;
  gap: 0.5rem;
}

.tag {
  background: rgba(255, 255, 255, 0.1);
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  font-size: 0.85rem;
}

.project-banner {
  width: 100%;
  height: 500px;
  background-color: #1a1a1a;
  border-radius: 20px;
  margin-bottom: 4rem;
  border: 1px solid var(--border-subtle);
}

.content-section {
  margin-bottom: 4rem;
}

.content-section h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.content-section p {
  color: var(--text-secondary);
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

/* Animation */
.animate-fade-up {
  opacity: 0;
  animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fadeUp {
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
}

.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  color: var(--text-secondary);
}
</style>
