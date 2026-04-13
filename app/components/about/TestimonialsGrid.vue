<script setup lang="ts">
import type { Testimonial } from '~/data/testimonials'

defineProps<{
  items: Testimonial[]
}>()
</script>

<template>
  <section class="testimonials-section" aria-labelledby="testimonials-heading">
    <h2 id="testimonials-heading" class="section-title testimonials-heading">
      What People Say
    </h2>

    <div class="testimonials-grid" role="list">
      <blockquote
        v-for="item in items"
        :key="item.id"
        class="testimonial-card"
        role="listitem"
      >
        <!-- Stars -->
        <div v-if="item.rating" class="stars" aria-label="5 out of 5 stars">
          <span v-for="n in item.rating" :key="n" aria-hidden="true">★</span>
        </div>

        <p class="testimonial-text">&ldquo;{{ item.text }}&rdquo;</p>

        <footer class="testimonial-footer">
          <div class="client-avatar" :aria-label="`${item.name}'s avatar`">
            {{ item.initials }}
          </div>
          <cite class="client-info">
            <strong class="client-name">{{ item.name }}</strong>
            <span class="client-role">{{ item.role }}, {{ item.company }}</span>
          </cite>
        </footer>
      </blockquote>
    </div>
  </section>
</template>

<style scoped>
.testimonials-section {
  margin-bottom: 3rem;
}

.testimonials-heading {
  margin-bottom: 3rem;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

/* Card */
.testimonial-card {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 20px;
  padding: 2rem;
  transition: border-color 0.3s ease, transform 0.3s ease;
  display: flex;
  flex-direction: column;
}

.testimonial-card:hover {
  border-color: rgba(59, 130, 246, 0.3);
  transform: translateY(-4px);
}

/* Stars */
.stars {
  color: #f59e0b;
  font-size: 0.9rem;
  letter-spacing: 2px;
  margin-bottom: 1rem;
}

.testimonial-text {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.7;
  flex: 1;
  margin-bottom: 1.75rem;
  font-style: italic;
}

/* Footer */
.testimonial-footer {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.client-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  color: #fff;
  flex-shrink: 0;
}

.client-info {
  font-style: normal;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.client-name {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-primary);
}

.client-role {
  font-size: 0.82rem;
  color: var(--text-secondary);
}
</style>
