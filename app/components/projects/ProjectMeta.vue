<script setup lang="ts">
import type { Project } from '~/data/projects'

defineProps<{
  project: Project
}>()
</script>

<template>
  <div class="project-meta" role="list" aria-label="Project details">
    <div class="meta-item" role="listitem">
      <span class="meta-label">Role</span>
      <span class="meta-value">Lead Developer</span>
    </div>
    <div class="meta-item" role="listitem">
      <span class="meta-label">Timeline</span>
      <span class="meta-value">3 Months</span>
    </div>
    <div class="meta-item" role="listitem">
      <span class="meta-label">Stack</span>
      <div class="meta-tags">
        <UiTagBadge
          v-for="tech in project.tech"
          :key="tech"
          :text="tech"
          variant="subtle"
        />
      </div>
    </div>

    <!-- External links -->
    <div v-if="project.liveUrl || project.repoUrl" class="meta-item" role="listitem">
      <span class="meta-label">Links</span>
      <div class="meta-links">
        <a
          v-if="project.liveUrl && project.liveUrl !== '#'"
          :href="project.liveUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="external-link"
        >
          Live Demo ↗
        </a>
        <a
          v-if="project.repoUrl && project.repoUrl !== '#'"
          :href="project.repoUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="external-link external-link--secondary"
        >
          Source Code ↗
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-meta {
  display: flex;
  gap: 3.5rem;
  flex-wrap: wrap;
  border-top: 1px solid var(--border-subtle);
  border-bottom: 1px solid var(--border-subtle);
  padding: 2rem 0;
  margin-bottom: 4rem;
}

.meta-item {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.meta-label {
  color: var(--text-secondary);
  font-size: 0.78rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.meta-value {
  font-weight: 600;
  font-size: 1rem;
  color: var(--text-primary);
}

.meta-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.meta-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
}

.external-link {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-accent);
  transition: opacity 0.2s ease;
}

.external-link:hover {
  opacity: 0.75;
}

.external-link--secondary {
  color: var(--text-secondary);
}

.external-link--secondary:hover {
  color: var(--text-primary);
}

@media (max-width: 640px) {
  .project-meta {
    gap: 2rem;
  }
}
</style>
