<script setup lang="ts">
import { blogPosts, getFeaturedPosts, formatDate } from '~/data/blog'

const allTags = computed(() => {
  const tags = new Set<string>()
  blogPosts.forEach((p) => p.tags.forEach((t) => tags.add(t)))
  return ['All', ...Array.from(tags)]
})

const selectedTag  = ref('All')
const filteredPosts = computed(() =>
  selectedTag.value === 'All'
    ? blogPosts
    : blogPosts.filter((p) => p.tags.includes(selectedTag.value)),
)

const featured = getFeaturedPosts()

useSeoMeta({
  title: 'Blog — Maulana Sopian',
  description:
    'Artikel teknis tentang Vue.js, Nuxt.js, Node.js, arsitektur web, dan pengalaman nyata dari seorang Full Stack Developer.',
  ogTitle: 'Blog — Maulana Sopian',
  ogDescription:
    'Tutorial, opini, dan deep-dive teknis dari Full Stack Web Developer.',
})

useHead({
  link: [{ rel: 'canonical', href: 'https://maulanasopian.dev/blog' }],
})
</script>

<template>
  <div class="container blog-page">

    <!-- Header -->
    <header class="page-header">
      <span class="section-subtitle">Writing</span>
      <h1 class="page-title">Blog &amp; Articles</h1>
      <p class="page-desc">
        Artikel teknis, tutorial, dan opini dari pengalaman nyata membangun web applications.
      </p>
    </header>

    <!-- Featured (top 2) -->
    <section class="featured-section" aria-labelledby="featured-posts">
      <h2 id="featured-posts" class="subsection-title">Featured Articles</h2>
      <div class="featured-grid">
        <BlogArticleCard
          v-for="post in featured"
          :key="post.slug"
          :post="post"
          class="scroll-reveal"
        />
      </div>
    </section>

    <!-- All Posts with Tag Filter -->
    <section class="all-posts-section" aria-labelledby="all-posts">
      <div class="section-header-row">
        <h2 id="all-posts" class="subsection-title">All Articles</h2>

        <!-- Tag Filter -->
        <div class="tag-filter" role="group" aria-label="Filter by tag">
          <button
            v-for="tag in allTags"
            :key="tag"
            class="tag-btn"
            :class="{ 'tag-btn--active': selectedTag === tag }"
            @click="selectedTag = tag"
          >
            {{ tag }}
          </button>
        </div>
      </div>

      <Transition name="fade" mode="out-in">
        <div :key="selectedTag" class="posts-grid">
          <BlogArticleCard
            v-for="post in filteredPosts"
            :key="post.slug"
            :post="post"
            class="scroll-reveal"
          />
        </div>
      </Transition>

      <div v-if="filteredPosts.length === 0" class="empty-state">
        <p>No articles found for this tag.</p>
      </div>
    </section>

  </div>
</template>

<style scoped>
.blog-page {
  padding-top: 5rem;
  padding-bottom: 5rem;
}

.page-header {
  max-width: 700px;
  margin-bottom: 4rem;
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
  line-height: 1.7;
}

.subsection-title {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1.75rem;
}

.featured-section {
  margin-bottom: 5rem;
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: 1.5rem;
}

/* All posts */
.section-header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
}

.tag-filter {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag-btn {
  padding: 0.35rem 0.9rem;
  border-radius: 50px;
  font-size: 0.82rem;
  font-weight: 500;
  font-family: var(--font-main);
  color: var(--text-secondary);
  border: 1px solid var(--border-subtle);
  background: transparent;
  cursor: pointer;
  transition: all 0.2s ease;
}

.tag-btn:hover {
  color: var(--text-primary);
  border-color: rgba(255, 255, 255, 0.2);
}

.tag-btn--active {
  background: var(--text-accent);
  border-color: var(--text-accent);
  color: #fff;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
}

.empty-state {
  text-align: center;
  padding: 4rem;
  color: var(--text-secondary);
}

/* Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
