<script setup lang="ts">
const { services } = usePortfolioData()
</script>

<template>
  <section class="services-section" aria-labelledby="services-heading">
    <UiSectionHeader
      id="services-heading"
      subtitle="What I Do"
      title="Specialized Services"
    />

    <div class="services-grid">
      <article
        v-for="service in services"
        :key="service.id"
        class="service-card"
      >
        <div class="service-icon-wrapper">
          <span class="service-icon" aria-hidden="true">{{ service.icon }}</span>
        </div>
        <h3 class="service-title">{{ service.title }}</h3>
        <p class="service-desc">{{ service.description }}</p>

        <ul v-if="service.highlights" class="service-highlights" aria-label="Highlights">
          <li v-for="item in service.highlights" :key="item">
            <span class="check-icon" aria-hidden="true">✓</span>
            {{ item }}
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>

<style scoped>
.services-section {
  width: 100%;
  max-width: 1200px;
  margin: 9rem auto 0;
  padding: 0 2rem;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

/* Card */
.service-card {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  padding: 2.5rem;
  border-radius: 20px;
  transition: all 0.35s ease;
  position: relative;
  overflow: hidden;
}

.service-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at top left, rgba(59, 130, 246, 0.06) 0%, transparent 65%);
  opacity: 0;
  transition: opacity 0.35s ease;
}

.service-card:hover {
  transform: translateY(-6px);
  border-color: rgba(59, 130, 246, 0.3);
  background: var(--bg-secondary);
  box-shadow: var(--shadow-card);
}

.service-card:hover::before {
  opacity: 1;
}

/* Icon */
.service-icon-wrapper {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;
}

.service-card:hover .service-icon-wrapper {
  transform: scale(1.1) rotate(-3deg);
}

.service-icon {
  font-size: 1.75rem;
  line-height: 1;
}

.service-title {
  font-size: 1.35rem;
  font-weight: 700;
  margin-bottom: 0.875rem;
  color: var(--text-primary);
}

.service-desc {
  color: var(--text-secondary);
  font-size: 0.93rem;
  line-height: 1.65;
  margin-bottom: 1.5rem;
}

/* Highlights */
.service-highlights {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.service-highlights li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  font-size: 0.87rem;
}

.check-icon {
  color: var(--text-accent);
  font-weight: 700;
  flex-shrink: 0;
}
</style>
