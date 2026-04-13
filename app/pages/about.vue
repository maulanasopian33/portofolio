<script setup lang="ts">
const { profile, experience, testimonials } = usePortfolioData()

// SEO — halaman About
useSeoMeta({
  title: 'Tentang Maulana Sopian — Full Stack Web Developer',
  description:
    `Kenali Maulana Sopian lebih dekat — Full Stack Web Developer dengan ${profile.stats[0].number} pengalaman, ${profile.stats[1].number} project selesai, spesialis Vue.js, React, dan Node.js.`,
  ogTitle: 'Tentang Maulana Sopian',
  ogDescription: 'Full Stack Web Developer dengan pengalaman 4+ tahun dalam membangun aplikasi web modern.',
  ogImage: 'https://maulanasopian.dev/og-image.jpg',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Tentang Maulana Sopian',
})

useHead({
  link: [{ rel: 'canonical', href: 'https://maulanasopian.dev/about' }],
})
</script>

<template>
  <div class="container about-page">

    <!-- Page Header -->
    <header class="page-header animate-fade-up">
      <span class="section-subtitle">Who I Am</span>
      <h1 class="page-title">About Me</h1>
    </header>

    <!-- Bio -->
    <section class="bio-section animate-fade-up" style="animation-delay: 0.1s;" aria-label="Biography">
      <div class="bio-grid">
        <!-- Avatar Placeholder -->
        <div class="bio-avatar" aria-hidden="true">
          <div class="avatar-placeholder">
            <span class="avatar-initials">MS</span>
          </div>
        </div>

        <!-- Text -->
        <div class="bio-text">
          <p
            v-for="(paragraph, index) in profile.bio"
            :key="index"
            class="bio-paragraph"
          >
            {{ paragraph }}
          </p>

          <!-- Quick Info -->
          <div class="quick-info">
            <div class="info-item">
              <span class="info-label">📍 Location</span>
              <span class="info-value">{{ profile.location }}</span>
            </div>
            <div class="info-item">
              <span class="info-label">📧 Email</span>
              <a :href="`mailto:${profile.email}`" class="info-value info-link">
                {{ profile.email }}
              </a>
            </div>
          </div>

          <!-- Social Links + Resume -->
          <div class="social-buttons">
            <NuxtLink to="/resume" class="btn-primary resume-btn">
              View Resume
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                   fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                   stroke-linejoin="round" aria-hidden="true">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
              </svg>
            </NuxtLink>
            <a
              v-for="social in profile.socials"
              :key="social.platform"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-secondary social-btn"
            >
              {{ social.platform }}
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Bar -->
    <section
      class="stats-bar animate-fade-up"
      style="animation-delay: 0.2s;"
      aria-label="Key statistics"
    >
      <div
        v-for="(stat, index) in profile.stats"
        :key="index"
        class="stat-block"
      >
        <span class="stat-number">{{ stat.number }}</span>
        <span class="stat-label">{{ stat.label }}</span>
      </div>
    </section>

    <!-- Experience Timeline -->
    <section class="animate-fade-up" style="animation-delay: 0.3s;">
      <AboutExperienceTimeline :items="experience" />
    </section>

    <!-- Skills Proficiency -->
    <section class="animate-fade-up" style="animation-delay: 0.35s;">
      <AboutSkillsSection />
    </section>

    <!-- Testimonials -->
    <section class="animate-fade-up" style="animation-delay: 0.4s;">
      <AboutTestimonialsGrid :items="testimonials" />
    </section>

  </div>
</template>

<style scoped>
.about-page {
  padding-top: 5rem;
  padding-bottom: 5rem;
}

/* Page Header */
.page-header {
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
}

/* Bio */
.bio-section {
  margin-bottom: 4rem;
}

.bio-grid {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 4rem;
  align-items: start;
}

.bio-avatar {
  position: sticky;
  top: calc(var(--header-height) + 2rem);
}

.avatar-placeholder {
  width: 200px;
  height: 200px;
  border-radius: 24px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-subtle);
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-initials {
  font-size: 3rem;
  font-weight: 800;
  color: var(--border-subtle);
  letter-spacing: -0.05em;
}

.bio-paragraph {
  color: var(--text-secondary);
  font-size: 1.05rem;
  line-height: 1.8;
  margin-bottom: 1.25rem;
}

.quick-info {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin: 2rem 0;
  padding: 1.5rem;
  border-radius: 12px;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
}

.info-item {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.info-label {
  font-size: 0.85rem;
  color: var(--text-secondary);
  min-width: 100px;
}

.info-value {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-primary);
}

.info-link {
  color: var(--text-accent);
  transition: opacity 0.2s;
}

.info-link:hover {
  opacity: 0.75;
}

.social-buttons {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.social-btn {
  font-size: 0.9rem;
  padding: 0.6rem 1.25rem;
}

/* Stats bar */
.stats-bar {
  display: flex;
  gap: 0;
  border: 1px solid var(--border-subtle);
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 5rem;
}

.stat-block {
  flex: 1;
  text-align: center;
  padding: 2rem 1rem;
  background: rgba(255, 255, 255, 0.015);
  border-right: 1px solid var(--border-subtle);
}

.stat-block:last-child {
  border-right: none;
}

.stat-number {
  display: block;
  font-size: 2.25rem;
  font-weight: 800;
  color: var(--text-accent);
  letter-spacing: -0.03em;
}

.stat-label {
  font-size: 0.82rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 500;
}

/* Responsive */
@media (max-width: 768px) {
  .bio-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .bio-avatar {
    position: static;
  }

  .avatar-placeholder {
    width: 120px;
    height: 120px;
    border-radius: 16px;
  }

  .avatar-initials {
    font-size: 2rem;
  }

  .stats-bar {
    flex-direction: column;
    gap: 0;
  }

  .stat-block {
    border-right: none;
    border-bottom: 1px solid var(--border-subtle);
  }

  .stat-block:last-child {
    border-bottom: none;
  }
}
</style>
