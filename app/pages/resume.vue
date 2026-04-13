<script setup lang="ts">
import { skillCategories } from '~/data/skills'
const { profile, experience } = usePortfolioData()

useSeoMeta({
  title: 'Resume — Maulana Sopian',
  description:
    'Resume profesional Maulana Sopian — Full Stack Web Developer. Pengalaman, skills, dan kontak.',
  robots: 'index, follow',
})

useHead({
  link: [{ rel: 'canonical', href: 'https://maulanasopian.dev/resume' }],
})
</script>

<template>
  <div class="resume-page">

    <!-- Print Button (only visible on screen) -->
    <div class="resume-actions no-print">
      <div class="container resume-actions-inner">
        <NuxtLink to="/about" class="btn-secondary back-link">← Back to About</NuxtLink>
        <button class="btn-primary" onclick="window.print()">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
               stroke-linejoin="round" aria-hidden="true">
            <polyline points="6 9 6 2 18 2 18 9"/>
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
            <rect x="6" y="14" width="12" height="8"/>
          </svg>
          Print / Save PDF
        </button>
      </div>
    </div>

    <!-- Resume Body -->
    <div class="resume-body">
      <div class="resume-container">

        <!-- Header -->
        <header class="resume-header">
          <div class="resume-identity">
            <h1 class="resume-name">{{ profile.name }}</h1>
            <p class="resume-title">{{ profile.title }}</p>
          </div>
          <div class="resume-contact">
            <a :href="`mailto:${profile.email}`" class="contact-item">{{ profile.email }}</a>
            <span class="contact-sep">·</span>
            <span class="contact-item">{{ profile.location }}</span>
            <span class="contact-sep">·</span>
            <a href="https://maulanasopian.dev" class="contact-item">maulanasopian.dev</a>
          </div>
        </header>

        <!-- Two column layout -->
        <div class="resume-grid">

          <!-- Left column -->
          <div class="resume-main">

            <!-- Summary -->
            <section class="resume-section">
              <h2 class="resume-section-title">Summary</h2>
              <p class="resume-text">
                {{ profile.bio[0] }}
              </p>
            </section>

            <!-- Experience -->
            <section class="resume-section">
              <h2 class="resume-section-title">Experience</h2>
              <div
                v-for="job in experience"
                :key="job.id"
                class="resume-exp-item"
              >
                <div class="exp-header">
                  <div>
                    <h3 class="exp-role">{{ job.role }}</h3>
                    <p class="exp-company">{{ job.company }} · {{ job.location }}</p>
                  </div>
                  <time class="exp-period">{{ job.period }}</time>
                </div>
                <p class="resume-text">{{ job.description }}</p>
                <div v-if="job.tech" class="exp-tech">
                  <span
                    v-for="t in job.tech"
                    :key="t"
                    class="tech-chip"
                  >{{ t }}</span>
                </div>
              </div>
            </section>

          </div>

          <!-- Right column -->
          <aside class="resume-sidebar">

            <!-- Skills -->
            <section class="resume-section">
              <h2 class="resume-section-title">Skills</h2>
              <div
                v-for="cat in skillCategories"
                :key="cat.id"
                class="resume-skill-group"
              >
                <h3 class="skill-group-label">{{ cat.icon }} {{ cat.label }}</h3>
                <p class="skill-group-names">
                  {{ cat.skills.map((s) => s.name).join(', ') }}
                </p>
              </div>
            </section>

            <!-- Stats -->
            <section class="resume-section">
              <h2 class="resume-section-title">Highlights</h2>
              <div
                v-for="stat in profile.stats"
                :key="stat.label"
                class="resume-stat"
              >
                <span class="stat-val">{{ stat.number }}</span>
                <span class="stat-lbl">{{ stat.label }}</span>
              </div>
            </section>

          </aside>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
/* ---- Screen styles ---- */
.resume-page {
  background: var(--bg-primary);
  min-height: 100vh;
}

.resume-actions {
  border-bottom: 1px solid var(--border-subtle);
  padding: 1rem 0;
  background: var(--bg-secondary);
}

.resume-actions-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.resume-body {
  padding: 3rem 1rem;
}

.resume-container {
  max-width: 960px;
  margin: 0 auto;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 16px;
  overflow: hidden;
}

/* Header */
.resume-header {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  padding: 3rem;
  border-bottom: 1px solid var(--border-subtle);
}

.resume-name {
  font-size: 2.5rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  margin-bottom: 0.4rem;
}

.resume-title {
  color: var(--text-accent);
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.resume-contact {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.contact-item {
  font-size: 0.9rem;
  color: var(--text-secondary);
  transition: color 0.2s;
}

.contact-item:hover { color: var(--text-primary); }
.contact-sep { color: var(--border-subtle); }

/* Grid */
.resume-grid {
  display: grid;
  grid-template-columns: 1fr 280px;
}

.resume-main {
  padding: 2.5rem 3rem;
  border-right: 1px solid var(--border-subtle);
}

.resume-sidebar {
  padding: 2.5rem 2rem;
  background: var(--bg-secondary);
}

/* Sections */
.resume-section {
  margin-bottom: 2.5rem;
}

.resume-section-title {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--text-accent);
  margin-bottom: 1.25rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--border-subtle);
}

.resume-text {
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.7;
}

/* Experience */
.resume-exp-item {
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--border-subtle);
}

.resume-exp-item:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.exp-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.75rem;
  gap: 1rem;
}

.exp-role {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.2rem;
}

.exp-company {
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.exp-period {
  font-size: 0.82rem;
  color: var(--text-secondary);
  white-space: nowrap;
  flex-shrink: 0;
}

.exp-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.875rem;
}

.tech-chip {
  padding: 0.2rem 0.65rem;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 500;
  background: rgba(59, 130, 246, 0.08);
  color: var(--text-accent);
  border: 1px solid rgba(59, 130, 246, 0.15);
}

/* Sidebar Skills */
.resume-skill-group {
  margin-bottom: 1.25rem;
}

.skill-group-label {
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.3rem;
}

.skill-group-names {
  font-size: 0.82rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Stats */
.resume-stat {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

.stat-val {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text-accent);
}

.stat-lbl {
  font-size: 0.82rem;
  color: var(--text-secondary);
}

/* Responsive */
@media (max-width: 768px) {
  .resume-grid {
    grid-template-columns: 1fr;
  }
  .resume-main { border-right: none; }
  .resume-sidebar { border-top: 1px solid var(--border-subtle); }
}

/* ---- PRINT STYLES ---- */
@media print {
  .no-print { display: none !important; }

  .resume-page, .resume-body {
    background: white !important;
    padding: 0 !important;
  }

  .resume-container {
    border: none !important;
    border-radius: 0 !important;
    max-width: 100% !important;
  }

  .resume-header {
    background: #0f172a !important;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  * { color-adjust: exact; }
}
</style>
