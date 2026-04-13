<script setup lang="ts">
const { featuredProjects } = usePortfolioData()
</script>

<template>
  <section class="featured-section" aria-labelledby="featured-heading">
    <UiSectionHeader
      id="featured-heading"
      subtitle="Selected Work"
      title="Featured Projects"
    />

    <div class="projects-list">
      <article
        v-for="(project, index) in featuredProjects"
        :key="project.id"
        class="project-preview"
        :class="{ 'project-preview--reversed': index % 2 !== 0 }"
      >
        <!-- Image Placeholder -->
        <div class="project-visual" aria-hidden="true">
          <div class="visual-number">0{{ index + 1 }}</div>
          <div class="visual-glow" />
        </div>

        <!-- Info -->
        <div class="project-info">
          <span class="project-category">{{ project.category }}</span>
          <h3 class="project-name">{{ project.title }}</h3>
          <p class="project-desc">{{ project.description }}</p>

          <div class="project-tags" role="list" aria-label="Technologies used">
            <UiTagBadge
              v-for="tech in project.tech"
              :key="tech"
              :text="tech"
              role="listitem"
            />
          </div>

          <NuxtLink
            :to="`/projects/${project.id}`"
            class="btn-primary project-cta"
          >
            View Case Study
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" stroke-width="2.5"
                 stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </NuxtLink>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.featured-section {
  width: 100%;
  max-width: 1200px;
  margin: 9rem auto 0;
  padding: 0 2rem;
}

.projects-list {
  display: flex;
  flex-direction: column;
  gap: 6rem;
}

/* Preview Row */
.project-preview {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
}

.project-preview--reversed .project-visual {
  order: 2;
}

/* Visual Placeholder */
.project-visual {
  position: relative;
  aspect-ratio: 16/9;
  border-radius: 20px;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.3s ease, transform 0.3s ease;
}

.project-preview:hover .project-visual {
  border-color: rgba(59, 130, 246, 0.3);
  transform: scale(1.01);
}

.visual-number {
  font-size: 6rem;
  font-weight: 800;
  color: var(--border-subtle);
  letter-spacing: -0.05em;
  user-select: none;
}

.visual-glow {
  position: absolute;
  width: 60%;
  height: 60%;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%);
  pointer-events: none;
}

/* Info */
.project-category {
  display: block;
  color: var(--text-accent);
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.75rem;
}

.project-name {
  font-size: clamp(1.75rem, 3vw, 2.25rem);
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.project-desc {
  color: var(--text-secondary);
  font-size: 1.05rem;
  line-height: 1.7;
  margin-bottom: 1.75rem;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 2rem;
}

.project-cta {
  width: fit-content;
}

/* Responsive */
@media (max-width: 900px) {
  .project-preview {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .project-preview--reversed .project-visual {
    order: 0;
  }
}
</style>
