<script setup lang="ts">
import { getFeaturedPosts, formatDate } from '~/data/blog'

const posts = getFeaturedPosts().slice(0, 3)
</script>

<template>
  <section class="blog-preview" aria-labelledby="blog-preview-heading">
    <div class="container">

      <div class="section-header">
        <div>
          <span class="section-subtitle">Writing</span>
          <h2 id="blog-preview-heading" class="section-title">
            From the Blog
          </h2>
        </div>
        <NuxtLink to="/blog" class="view-all-link" aria-label="View all blog articles">
          All Articles →
        </NuxtLink>
      </div>

      <div class="blog-preview-grid">
        <article
          v-for="(post, i) in posts"
          :key="post.slug"
          class="preview-card"
          :class="{ 'preview-card--featured': i === 0 }"
        >
          <div class="preview-meta">
            <span class="preview-category">{{ post.category }}</span>
            <span class="preview-readtime">{{ post.readTime }} min</span>
          </div>

          <h3 class="preview-title">
            <NuxtLink :to="`/blog/${post.slug}`">{{ post.title }}</NuxtLink>
          </h3>

          <p class="preview-excerpt">{{ post.excerpt }}</p>

          <div class="preview-footer">
            <time :datetime="post.date" class="preview-date">{{ formatDate(post.date) }}</time>
            <NuxtLink :to="`/blog/${post.slug}`" class="preview-link">Read →</NuxtLink>
          </div>
        </article>
      </div>

    </div>
  </section>
</template>

<style scoped>
.blog-preview {
  padding: 5rem 0;
}

.section-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 3rem;
  gap: 1.5rem;
}

.view-all-link {
  color: var(--text-accent);
  font-size: 0.9rem;
  font-weight: 600;
  white-space: nowrap;
  transition: opacity 0.2s;
  padding-bottom: 0.25rem;
}

.view-all-link:hover {
  opacity: 0.75;
}

/* Grid */
.blog-preview-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

/* Card */
.preview-card {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  transition: all 0.3s ease;
}

.preview-card:hover {
  border-color: rgba(59, 130, 246, 0.25);
  transform: translateY(-4px);
  box-shadow: 0 16px 40px -16px rgba(0, 0, 0, 0.4);
}

/* Featured card spans full width on first position */
.preview-card--featured {
  border-color: rgba(59, 130, 246, 0.2);
  background: var(--bg-card);
  box-shadow: 0 0 0 1px rgba(59, 130, 246, 0.1);
}

.preview-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.preview-category {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-accent);
}

.preview-readtime {
  font-size: 0.78rem;
  color: var(--text-secondary);
}

.preview-title {
  font-size: 1.05rem;
  font-weight: 700;
  line-height: 1.4;
}

.preview-title a {
  color: var(--text-primary);
  transition: color 0.2s;
}

.preview-title a:hover {
  color: var(--text-accent);
}

.preview-excerpt {
  color: var(--text-secondary);
  font-size: 0.875rem;
  line-height: 1.6;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.preview-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;
  border-top: 1px solid var(--border-subtle);
}

.preview-date {
  font-size: 0.8rem;
  color: var(--text-secondary);
}

.preview-link {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-accent);
  transition: opacity 0.2s;
}

.preview-link:hover {
  opacity: 0.75;
}

@media (max-width: 900px) {
  .blog-preview-grid {
    grid-template-columns: 1fr;
  }
}
</style>
