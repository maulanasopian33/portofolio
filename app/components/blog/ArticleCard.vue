<script setup lang="ts">
import type { BlogPost } from '~/data/blog'
import { formatDate } from '~/data/blog'

defineProps<{
  post: BlogPost
}>()
</script>

<template>
  <article class="article-card">
    <!-- Category & Read Time -->
    <div class="card-meta">
      <span class="card-category">{{ post.category }}</span>
      <span class="card-dot" aria-hidden="true">·</span>
      <span class="card-readtime">{{ post.readTime }} min read</span>
    </div>

    <!-- Title -->
    <h3 class="card-title">
      <NuxtLink :to="`/blog/${post.slug}`" class="card-title-link">
        {{ post.title }}
      </NuxtLink>
    </h3>

    <!-- Excerpt -->
    <p class="card-excerpt">{{ post.excerpt }}</p>

    <!-- Footer -->
    <div class="card-footer">
      <time :datetime="post.date" class="card-date">
        {{ formatDate(post.date) }}
      </time>

      <div class="card-tags" aria-label="Tags">
        <UiTagBadge
          v-for="tag in post.tags.slice(0, 3)"
          :key="tag"
          :text="tag"
          variant="subtle"
        />
      </div>
    </div>
  </article>
</template>

<style scoped>
.article-card {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: all 0.3s ease;
}

.article-card:hover {
  transform: translateY(-4px);
  border-color: rgba(59, 130, 246, 0.25);
  box-shadow: 0 12px 40px -12px rgba(0, 0, 0, 0.4);
}

/* Meta */
.card-meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.card-category {
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-accent);
}

.card-dot,
.card-readtime {
  font-size: 0.82rem;
  color: var(--text-secondary);
}

/* Title */
.card-title {
  font-size: 1.15rem;
  font-weight: 700;
  line-height: 1.4;
  color: var(--text-primary);
}

.card-title-link {
  transition: color 0.2s ease;
}

.card-title-link:hover {
  color: var(--text-accent);
}

/* Excerpt */
.card-excerpt {
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.65;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Footer */
.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  padding-top: 1rem;
  border-top: 1px solid var(--border-subtle);
}

.card-date {
  font-size: 0.82rem;
  color: var(--text-secondary);
}

.card-tags {
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
}
</style>
