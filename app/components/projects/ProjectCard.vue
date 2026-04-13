<script setup lang="ts">
import type { Project } from '~/data/projects'

const props = defineProps<{
  project: Project
}>()

// 3D Tilt effect
const { tiltRef, tiltStyle } = useCardTilt({ maxTilt: 6, scale: 1.03 })
</script>

<template>
  <article ref="tiltRef" class="project-card" :style="tiltStyle">
    <!-- Image Placeholder -->
    <div class="card-visual" aria-hidden="true">
      <div class="card-category-badge">{{ project.category }}</div>
      <div class="card-visual-glow" />
    </div>

    <!-- Content -->
    <div class="card-body">
      <h3 class="card-title">{{ project.title }}</h3>
      <p class="card-desc">{{ project.description }}</p>

      <div class="card-tags" role="list" aria-label="Technologies">
        <UiTagBadge
          v-for="tech in project.tech"
          :key="tech"
          :text="tech"
          variant="outline"
          role="listitem"
        />
      </div>

      <div class="card-actions">
        <NuxtLink
          :to="`/projects/${project.id}`"
          class="card-link"
          :aria-label="`View details of ${project.title}`"
        >
          View Case Study →
        </NuxtLink>

        <div class="card-ext-links">
          <a
            v-if="project.liveUrl && project.liveUrl !== '#'"
            :href="project.liveUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="ext-link"
            :aria-label="`Live demo of ${project.title}`"
            title="Live Demo"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                 stroke-linejoin="round" aria-hidden="true">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </a>
          <a
            v-if="project.repoUrl && project.repoUrl !== '#'"
            :href="project.repoUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="ext-link"
            :aria-label="`GitHub repository of ${project.title}`"
            title="Source Code"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                 stroke-linejoin="round" aria-hidden="true">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped>
.project-card {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  /* transform handled by tiltStyle */
}

.project-card:hover {
  border-color: rgba(59, 130, 246, 0.3);
  box-shadow: 0 20px 50px -20px rgba(0, 0, 0, 0.5);
}

/* Visual */
.card-visual {
  height: 200px;
  background: var(--bg-secondary);
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 1rem;
  overflow: hidden;
}

.card-visual-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 30% 70%, rgba(59, 130, 246, 0.08), transparent 60%);
  transition: opacity 0.3s ease;
  opacity: 0;
  pointer-events: none;
}

.project-card:hover .card-visual-glow {
  opacity: 1;
}

.card-category-badge {
  display: inline-block;
  padding: 0.3rem 0.85rem;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  background: rgba(59, 130, 246, 0.15);
  color: var(--text-accent);
  border: 1px solid rgba(59, 130, 246, 0.2);
  position: relative;
  z-index: 1;
}

/* Body */
.card-body {
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.card-title {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
}

.card-desc {
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 1.25rem;
  flex: 1;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.card-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.card-link {
  color: var(--text-accent);
  font-size: 0.9rem;
  font-weight: 600;
  transition: opacity 0.2s ease, letter-spacing 0.2s ease;
}

.card-link:hover {
  opacity: 0.8;
  letter-spacing: 0.02em;
}

.card-ext-links {
  display: flex;
  gap: 0.75rem;
}

.ext-link {
  color: var(--text-secondary);
  display: flex;
  transition: color 0.2s ease, transform 0.2s ease;
}

.ext-link:hover {
  color: var(--text-primary);
  transform: scale(1.15);
}
</style>
