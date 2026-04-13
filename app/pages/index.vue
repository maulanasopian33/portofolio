<script setup lang="ts">
// SEO — halaman Home
useSeoMeta({
  title: 'Maulana Sopian — Full Stack Web Developer',
  description:
    'Portfolio profesional Maulana Sopian, Full Stack Web Developer berpengalaman 4+ tahun. Spesialis Vue.js, Nuxt.js, React, Node.js, dan arsitektur web modern.',
  ogTitle: 'Maulana Sopian — Full Stack Web Developer',
  ogDescription:
    'Portfolio profesional Maulana Sopian, Full Stack Web Developer berpengalaman 4+ tahun.',
  ogType: 'website',
  ogImage: 'https://maulanasopian.dev/og-image.jpg',
  ogImageWidth: '1200',
  ogImageHeight: '630',
  ogImageAlt: 'Maulana Sopian — Full Stack Web Developer',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Maulana Sopian — Full Stack Web Developer',
  twitterDescription:
    'Portfolio profesional Maulana Sopian, Full Stack Web Developer berpengalaman 4+ tahun.',
  twitterImage: 'https://maulanasopian.dev/og-image.jpg',
})

useHead({
  link: [{ rel: 'canonical', href: 'https://maulanasopian.dev/' }],
})
</script>

<template>
  <div class="home-page" aria-label="Home page">
    <!-- Animated Background -->
    <div class="bg-grid" aria-hidden="true" />
    <div class="bg-glow" aria-hidden="true" />

    <!-- Page Sections -->
    <div class="container">
      <HomeHeroSection />
    </div>

    <!-- Tech credibility signals -->
    <HomeTechStackMarquee />

    <!-- Who am I — establish personal connection SEBELUM services -->
    <HomeAboutPreview />

    <!-- What I can do -->
    <HomeServicesGrid />

    <!-- Proof of work -->
    <HomeFeaturedProjects />

    <!-- Thought leadership -->
    <HomeBlogPreview />

    <!-- Convert -->
    <HomeCtaSection />
  </div>
</template>

<style scoped>
.home-page {
  position: relative;
  overflow: visible;
}

/* Animated grid background */
.bg-grid {
  position: fixed;
  inset: 0;
  background-image:
    linear-gradient(var(--border-glass) 1px, transparent 1px),
    linear-gradient(90deg, var(--border-glass) 1px, transparent 1px);
  background-size: 42px 42px;
  mask-image: radial-gradient(ellipse at center, black 40%, transparent 85%);
  -webkit-mask-image: radial-gradient(ellipse at center, black 40%, transparent 85%);
  pointer-events: none;
  z-index: -2;
  animation: grid-move 25s linear infinite;
}

/* Ambient glow */
.bg-glow {
  position: fixed;
  width: 700px;
  height: 700px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 65%);
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  filter: blur(80px);
  animation: pulse-glow 7s ease-in-out infinite alternate;
  pointer-events: none;
}
</style>
