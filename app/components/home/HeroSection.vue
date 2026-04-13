<script setup lang="ts">
const { profile } = usePortfolioData()
</script>

<template>
  <section class="hero" aria-label="Hero introduction">
    <div class="hero-content">

      <!-- Badge -->
      <div class="hero-badge">
        <span class="badge-dot" aria-hidden="true" />
        Available for projects
      </div>

      <!-- Heading (H1 untuk SEO) -->
      <h1 class="hero-title">
        Building
        <span class="hero-highlight">Digital Experiences</span>
        <br>That Matter.
      </h1>

      <!-- Subtitle -->
      <p class="hero-subtitle">
        I'm <span class="name-highlight">{{ profile.name }}</span>,
        a {{ profile.title }} crafting pixel-perfect, performant, and
        accessible web interfaces with modern technologies.
      </p>

      <!-- CTA Group -->
      <div class="cta-group">
        <!-- Primary: Download CV -->
        <a
          href="/Maulana-Sopian-CV.pdf"
          download="Maulana-Sopian-CV.pdf"
          class="btn-primary glow-effect"
          aria-label="Download Maulana Sopian's CV"
        >
          Download CV
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" stroke-width="2.5"
               stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
        </a>

        <!-- Secondary: Browse Projects -->
        <NuxtLink to="/projects" class="btn-secondary">
          Browse Projects
        </NuxtLink>

        <!-- Tertiary: Let's Talk -->
        <NuxtLink to="/contact" class="hero-contact-link" aria-label="Contact me">
          Let's Talk →
        </NuxtLink>
      </div>

      <!-- Stats -->
      <div class="stats-row">
        <div
          v-for="(stat, index) in profile.stats"
          :key="index"
          class="stat-item"
        >
          <span class="stat-number">{{ stat.number }}</span>
          <span class="stat-label">{{ stat.label }}</span>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding-top: 5rem;
  padding-bottom: 2rem;
  text-align: center;
}

/* Badge */
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 1rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 500;
  color: #22c55e;
  border: 1px solid rgba(34, 197, 94, 0.25);
  background: rgba(34, 197, 94, 0.08);
  margin-bottom: 2rem;
  animation: fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.badge-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: #22c55e;
  box-shadow: 0 0 8px rgba(34, 197, 94, 0.6);
  animation: pulse-dot 2s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%, 100% { box-shadow: 0 0 4px rgba(34, 197, 94, 0.4); }
  50%       { box-shadow: 0 0 12px rgba(34, 197, 94, 0.8); }
}

/* Title */
.hero-title {
  font-size: clamp(2.75rem, 8vw, 5.5rem);
  font-weight: 800;
  line-height: 1.05;
  margin-bottom: 1.75rem;
  letter-spacing: -0.03em;
  animation: fadeUp 0.7s 0.1s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.hero-highlight {
  background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 60%, #f472b6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;
}

/* Subtitle */
.hero-subtitle {
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  color: var(--text-secondary);
  max-width: 620px;
  margin: 0 auto 2.5rem;
  line-height: 1.7;
  animation: fadeUp 0.7s 0.2s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.name-highlight {
  color: var(--text-primary);
  font-weight: 600;
  border-bottom: 2px dashed rgba(59, 130, 246, 0.5);
}

/* CTA Group */
.cta-group {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
  flex-wrap: wrap;
  margin-bottom: 3.5rem;
  animation: fadeUp 0.7s 0.3s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.hero-contact-link {
  color: var(--text-secondary);
  font-size: 0.95rem;
  font-weight: 500;
  transition: color 0.2s ease;
}

.hero-contact-link:hover {
  color: var(--text-primary);
}

/* Stats */
.stats-row {
  display: flex;
  gap: 3rem;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 2.5rem;
  border-top: 1px solid var(--border-subtle);
  animation: fadeUp 0.7s 0.45s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: 800;
  color: var(--text-primary);
  letter-spacing: -0.02em;
}

.stat-label {
  font-size: 0.85rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 500;
}
</style>
