<script setup lang="ts">
const { techStack } = usePortfolioData()
</script>

<template>
  <section class="tech-stack-section" aria-label="Technology stack">
    <div class="marquee-wrapper">
      <!-- Duplicate untuk seamless loop -->
      <div class="marquee-track" aria-hidden="true">
        <div v-for="n in 2" :key="n" class="marquee-group">
          <div
            v-for="tech in techStack"
            :key="`${n}-${tech.slug}`"
            class="tech-item"
            :title="tech.name"
          >
            <img
              :src="`https://cdn.simpleicons.org/${tech.slug}/${tech.color}`"
              :alt="tech.name"
              width="36"
              height="36"
              class="tech-icon"
              loading="lazy"
            />
            <span class="tech-name">{{ tech.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tech-stack-section {
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 3rem 0;
  margin-top: 5rem;
}

/* Fade edges */
.tech-stack-section::before,
.tech-stack-section::after {
  content: '';
  position: absolute;
  top: 0;
  height: 100%;
  width: 200px;
  z-index: 2;
  pointer-events: none;
}

.tech-stack-section::before {
  left: 0;
  background: linear-gradient(to right, var(--bg-primary), transparent);
}

.tech-stack-section::after {
  right: 0;
  background: linear-gradient(to left, var(--bg-primary), transparent);
}

/* Track */
.marquee-wrapper {
  overflow: hidden;
}

.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee-scroll 35s linear infinite;
}

.marquee-track:hover {
  animation-play-state: paused;
}

.marquee-group {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding-right: 3rem;
}

/* Tech Item */
.tech-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  width: 90px;
  height: 90px;
  justify-content: center;
  background: var(--bg-card);
  border-radius: 16px;
  border: 1px solid var(--border-subtle);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: default;
  flex-shrink: 0;
}

.tech-item:hover {
  transform: translateY(-6px) scale(1.08);
  background: var(--bg-secondary);
  border-color: var(--border-accent);
  box-shadow: 0 12px 32px -8px rgba(59, 130, 246, 0.25);
}

.tech-icon {
  width: 32px;
  height: 32px;
  filter: grayscale(100%) opacity(0.5);
  transition: filter 0.3s ease;
  object-fit: contain;
}

.tech-item:hover .tech-icon {
  filter: grayscale(0%) opacity(1);
}

.tech-name {
  font-size: 0.7rem;
  color: var(--text-secondary);
  font-weight: 500;
  text-align: center;
  opacity: 0;
  transform: translateY(4px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.tech-item:hover .tech-name {
  opacity: 1;
  transform: translateY(0);
}
</style>
