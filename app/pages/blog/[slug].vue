<script setup lang="ts">
import { getPostBySlug, formatDate, blogPosts } from '~/data/blog'
import { getBlogContent } from '~/data/blog-content'

const route = useRoute()
const slug  = route.params.slug as string

const post    = getPostBySlug(slug)
const content = getBlogContent(slug)

if (!post) {
  throw createError({ statusCode: 404, statusMessage: 'Article Not Found', fatal: true })
}

const { progress } = useReadingProgress()

// Prev/Next navigation
const currentIndex = blogPosts.findIndex((p) => p.slug === slug)
const prevPost = blogPosts[currentIndex + 1] ?? null
const nextPost = blogPosts[currentIndex - 1] ?? null

useSeoMeta({
  title: `${post.title} — Maulana Sopian`,
  description: post.excerpt,
  ogTitle: post.title,
  ogDescription: post.excerpt,
  twitterTitle: post.title,
  twitterDescription: post.excerpt,
})

useHead({
  link: [{ rel: 'canonical', href: `https://maulanasopian.dev/blog/${slug}` }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        author: { '@type': 'Person', name: 'Maulana Sopian' },
        keywords: post.tags.join(', '),
      }),
    },
  ],
})
</script>

<template>
  <div class="blog-article-page">

    <!-- Breadcrumb -->
    <div class="container">
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <NuxtLink to="/blog" class="breadcrumb-link">← Blog</NuxtLink>
        <span class="breadcrumb-sep" aria-hidden="true">/</span>
        <span class="breadcrumb-current">{{ post.title }}</span>
      </nav>
    </div>

    <!-- Article Header -->
    <header class="article-header">
      <div class="container article-header-inner">
        <div class="article-meta">
          <span class="article-category">{{ post.category }}</span>
          <span class="meta-sep" aria-hidden="true">·</span>
          <time :datetime="post.date">{{ formatDate(post.date) }}</time>
          <span class="meta-sep" aria-hidden="true">·</span>
          <span>{{ post.readTime }} min read</span>
        </div>

        <h1 class="article-title">{{ post.title }}</h1>

        <p class="article-excerpt">{{ post.excerpt }}</p>

        <div class="article-tags">
          <UiTagBadge
            v-for="tag in post.tags"
            :key="tag"
            :text="tag"
          />
        </div>
      </div>
    </header>

    <!-- Article Content -->
    <div class="container article-wrapper">
      <article class="article-content" aria-label="Article content">
        <BlogArticleContent :sections="content" />
      </article>

      <!-- Author Card -->
      <aside class="author-card">
        <div class="author-avatar" aria-hidden="true">MS</div>
        <div>
          <p class="author-name">Maulana Sopian</p>
          <p class="author-title">Full Stack Web Developer</p>
        </div>
      </aside>

      <!-- Prev/Next Navigation -->
      <nav class="article-nav" aria-label="Article navigation">
        <div class="nav-prev">
          <NuxtLink v-if="prevPost" :to="`/blog/${prevPost.slug}`" class="nav-article-link">
            <span class="nav-dir">← Previous</span>
            <span class="nav-title">{{ prevPost.title }}</span>
          </NuxtLink>
        </div>
        <div class="nav-next">
          <NuxtLink v-if="nextPost" :to="`/blog/${nextPost.slug}`" class="nav-article-link nav-article-link--right">
            <span class="nav-dir">Next →</span>
            <span class="nav-title">{{ nextPost.title }}</span>
          </NuxtLink>
        </div>
      </nav>
    </div>

  </div>
</template>

<style scoped>
.blog-article-page {
  padding-bottom: 5rem;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-top: 2rem;
  margin-bottom: 2rem;
  font-size: 0.88rem;
  color: var(--text-secondary);
}

.breadcrumb-link {
  color: var(--text-accent);
  transition: opacity 0.2s;
}
.breadcrumb-link:hover { opacity: 0.75; }
.breadcrumb-sep { color: var(--border-subtle); }

/* Article Header */
.article-header {
  background: linear-gradient(to bottom, rgba(59, 130, 246, 0.04), transparent);
  border-bottom: 1px solid var(--border-subtle);
  padding: 3rem 0 4rem;
  margin-bottom: 4rem;
}

.article-header-inner {
  max-width: 900px;
}

.article-meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}

.article-category {
  color: var(--text-accent);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.78rem;
}

.meta-sep { color: var(--border-subtle); }

.article-title {
  font-size: clamp(2rem, 4vw, 3.25rem);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.03em;
  margin-bottom: 1.5rem;
}

.article-excerpt {
  color: var(--text-secondary);
  font-size: 1.1rem;
  line-height: 1.7;
  max-width: 680px;
  margin-bottom: 1.5rem;
}

.article-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

/* Content */
.article-wrapper {
  max-width: 800px;
}

.article-content {
  margin-bottom: 4rem;
}

/* Content placeholder styling */
.content-placeholder {
  font-size: 1.05rem;
  line-height: 1.85;
  color: var(--text-secondary);
}

.content-placeholder h2 {
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 2.5rem 0 1rem;
}

.content-placeholder p {
  margin-bottom: 1.25rem;
}

.placeholder-note {
  background: rgba(59, 130, 246, 0.06);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 3rem;
  font-size: 0.95rem;
  color: var(--text-secondary);
}

.placeholder-note code {
  background: rgba(59, 130, 246, 0.1);
  color: var(--text-accent);
  padding: 0.15rem 0.4rem;
  border-radius: 4px;
  font-size: 0.88em;
}

/* Author Card */
.author-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  border: 1px solid var(--border-subtle);
  border-radius: 14px;
  background: var(--bg-card);
  margin-bottom: 3rem;
}

.author-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  color: #fff;
  flex-shrink: 0;
}

.author-name {
  font-weight: 700;
  font-size: 0.95rem;
}

.author-title {
  font-size: 0.82rem;
  color: var(--text-secondary);
}

/* Article Nav */
.article-nav {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border-subtle);
}

.nav-article-link {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  padding: 1rem;
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
  transition: all 0.2s ease;
  background: var(--bg-card);
}

.nav-article-link:hover {
  border-color: rgba(59, 130, 246, 0.3);
  transform: translateY(-2px);
}

.nav-article-link--right {
  text-align: right;
}

.nav-dir {
  font-size: 0.78rem;
  color: var(--text-accent);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.nav-title {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.4;
}
</style>
