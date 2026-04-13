<script setup lang="ts">
import type { ExperienceItem } from '~/data/experience'

defineProps<{
  items: ExperienceItem[]
}>()
</script>

<template>
  <section class="timeline-section" aria-labelledby="experience-heading">
    <h2 id="experience-heading" class="section-title timeline-heading">Experience</h2>

    <ol class="timeline" role="list">
      <li
        v-for="(job, index) in items"
        :key="job.id"
        class="timeline-item"
        :class="{ 'timeline-item--last': index === items.length - 1 }"
      >
        <!-- Connector line -->
        <div class="timeline-connector" aria-hidden="true">
          <div class="timeline-dot" />
          <div class="timeline-line" />
        </div>

        <!-- Content -->
        <div class="timeline-content">
          <time class="timeline-period" :datetime="job.period">{{ job.period }}</time>
          <h3 class="timeline-role">{{ job.role }}</h3>
          <span class="timeline-company">
            {{ job.company }}
            <span v-if="job.location" class="timeline-location">— {{ job.location }}</span>
          </span>
          <p class="timeline-desc">{{ job.description }}</p>

          <div v-if="job.tech" class="timeline-tech" role="list" aria-label="Technologies used">
            <UiTagBadge
              v-for="t in job.tech"
              :key="t"
              :text="t"
              variant="subtle"
              role="listitem"
            />
          </div>
        </div>
      </li>
    </ol>
  </section>
</template>

<style scoped>
.timeline-section {
  margin-bottom: 5rem;
}

.timeline-heading {
  margin-bottom: 3rem;
}

.timeline {
  display: flex;
  flex-direction: column;
  gap: 0;
}

/* Item */
.timeline-item {
  display: grid;
  grid-template-columns: 24px 1fr;
  gap: 0 1.75rem;
}

/* Connector */
.timeline-connector {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.timeline-dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--text-accent);
  border: 2px solid var(--bg-primary);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
  flex-shrink: 0;
  margin-top: 4px;
}

.timeline-line {
  width: 1px;
  flex: 1;
  background: linear-gradient(to bottom, var(--border-subtle), transparent);
  margin-top: 8px;
  margin-bottom: -4px;
}

.timeline-item--last .timeline-line {
  display: none;
}

/* Content */
.timeline-content {
  padding-bottom: 3rem;
}

.timeline-period {
  display: block;
  color: var(--text-accent);
  font-size: 0.82rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.4rem;
}

.timeline-role {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
  color: var(--text-primary);
}

.timeline-company {
  display: block;
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.timeline-location {
  font-style: italic;
}

.timeline-desc {
  color: var(--text-secondary);
  font-size: 0.93rem;
  line-height: 1.65;
  margin-bottom: 1.25rem;
}

.timeline-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
</style>
