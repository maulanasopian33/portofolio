<script setup lang="ts">
import { usePortfolioData } from '../composables/usePortfolioData'
import { useCustomCursor } from '../composables/useCustomCursor'

useCustomCursor()
const { projects } = usePortfolioData()
</script>

<template>
  <div class="container section">
    <h1 class="section-title">Projects</h1>
    <div class="projects-grid">
      <div class="project-card" v-for="project in projects" :key="project.id">
        <div class="project-image hover-trigger"></div>
        <div class="project-info">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <div class="project-tags">
            <span class="tag" v-for="tech in project.tech" :key="tech">{{ tech }}</span>
          </div>
          <router-link :to="`/projects/${project.id}`" class="read-more">View Details</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.section {
  padding-top: 4rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.project-card {
  background-color: var(--bg-card);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border-subtle);
  transition: transform 0.2s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  border-color: var(--border-accent);
}

.project-image {
  height: 200px;
  background-color: #27272a;
}

.project-info {
  padding: 1.5rem;
}

.project-info h3 {
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
}

.project-info p {
  color: var(--text-secondary);
  font-size: 0.9rem;
}
</style>
