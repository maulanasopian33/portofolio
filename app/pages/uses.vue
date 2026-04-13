<script setup lang="ts">
import { usesData } from '~/data/uses'

useSeoMeta({
  title: 'Uses — Maulana Sopian',
  description:
    'Tools, software, hardware, dan setup yang saya gunakan sehari-hari sebagai Full Stack Web Developer.',
  ogTitle: 'Uses — Maulana Sopian',
  ogDescription: 'Tools dan setup lengkap yang digunakan oleh Full Stack Developer Maulana Sopian.',
  ogImage: 'https://maulanasopian.dev/og-image.jpg',
})

useHead({
  link: [{ rel: 'canonical', href: 'https://maulanasopian.dev/uses' }],
})
</script>

<template>
  <div class="container uses-page">

    <!-- Header -->
    <header class="page-header">
      <span class="section-subtitle">My Setup</span>
      <h1 class="page-title">What I Use</h1>
      <p class="page-desc">
        Tools, software, dan perangkat yang saya gunakan sehari-hari untuk coding, design, dan produktivitas.
        Halaman ini terinspirasi dari komunitas <a href="https://uses.tech" target="_blank" rel="noopener" class="inline-link">uses.tech</a>.
      </p>
    </header>

    <!-- Categories -->
    <div class="uses-grid">
      <section
        v-for="category in usesData"
        :key="category.id"
        class="uses-category"
        :aria-labelledby="`cat-${category.id}`"
      >
        <h2 :id="`cat-${category.id}`" class="category-title">
          <span class="category-icon" aria-hidden="true">{{ category.icon }}</span>
          {{ category.label }}
        </h2>

        <ul class="uses-list" role="list">
          <li
            v-for="item in category.items"
            :key="item.name"
            class="uses-item"
          >
            <div class="item-header">
              <component
                :is="item.url ? 'a' : 'span'"
                :href="item.url"
                :target="item.url ? '_blank' : undefined"
                :rel="item.url ? 'noopener noreferrer' : undefined"
                class="item-name"
                :class="{ 'item-name--link': !!item.url }"
              >
                {{ item.name }}
                <svg
                  v-if="item.url"
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </component>
            </div>
            <p class="item-desc">{{ item.description }}</p>
          </li>
        </ul>
      </section>
    </div>

    <!-- Bottom CTA -->
    <div class="uses-footer">
      <p>Penasaran dengan project yang saya kerjakan dengan tools-tools ini?</p>
      <NuxtLink to="/projects" class="btn-primary">
        Lihat Projects →
      </NuxtLink>
    </div>

  </div>
</template>

<style scoped>
.uses-page {
  padding-top: 5rem;
  padding-bottom: 5rem;
}

.page-header {
  max-width: 680px;
  margin-bottom: 5rem;
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
  font-size: 1.05rem;
  line-height: 1.75;
}

.inline-link {
  color: var(--text-accent);
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: opacity 0.2s;
}

.inline-link:hover { opacity: 0.75; }

/* Grid Layout */
.uses-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem 5rem;
  margin-bottom: 5rem;
}

/* Category */
.uses-category {}

.category-title {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 1.75rem;
  padding-bottom: 0.875rem;
  border-bottom: 1px solid var(--border-subtle);
  color: var(--text-primary);
}

.category-icon {
  font-size: 1.1rem;
}

/* Uses List */
.uses-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.uses-item {}

.item-header {
  margin-bottom: 0.3rem;
}

.item-name {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-primary);
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}

.item-name--link {
  color: var(--text-accent);
  transition: opacity 0.2s;
  cursor: pointer;
}

.item-name--link:hover {
  opacity: 0.75;
}

.item-desc {
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.65;
}

/* Footer CTA */
.uses-footer {
  text-align: center;
  padding: 3rem;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.uses-footer p {
  color: var(--text-secondary);
  font-size: 1rem;
}

/* Responsive */
@media (max-width: 768px) {
  .uses-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
}
</style>
