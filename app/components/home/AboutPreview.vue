<script setup lang="ts">
const { profile } = usePortfolioData()
</script>

<template>
  <section class="about-preview" aria-labelledby="about-preview-heading">
    <div class="container about-preview-inner">

      <!-- Left: Identity -->
      <div class="about-identity">
        <div class="identity-avatar" aria-hidden="true">
          <span class="identity-initials">MS</span>
          <div class="avatar-ring" />
        </div>

        <div class="identity-info">
          <span class="section-subtitle">Who I Am</span>
          <h2 id="about-preview-heading" class="about-name">{{ profile.name }}</h2>
          <p class="about-title-text">{{ profile.title }}</p>
        </div>
      </div>

      <!-- Right: Bio + stats + cta -->
      <div class="about-body">
        <p class="about-bio">{{ profile.bio[0] }}</p>

        <!-- Stats -->
        <div class="about-stats" aria-label="Key statistics">
          <div
            v-for="stat in profile.stats"
            :key="stat.label"
            class="about-stat"
          >
            <span class="stat-num">{{ stat.number }}</span>
            <span class="stat-lbl">{{ stat.label }}</span>
          </div>
        </div>

        <div class="about-cta">
          <NuxtLink to="/about" class="btn-secondary">
            More About Me →
          </NuxtLink>
          <NuxtLink to="/resume" class="about-resume-link">
            View Resume
          </NuxtLink>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.about-preview {
  padding: 5rem 0;
  border-top: 1px solid var(--border-subtle);
  border-bottom: 1px solid var(--border-subtle);
}

.about-preview-inner {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 5rem;
  align-items: center;
}

/* Left */
.about-identity {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  min-width: 200px;
}

.identity-avatar {
  position: relative;
  width: 140px;
  height: 140px;
}

.identity-initials {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: var(--bg-secondary);
  border: 2px solid var(--border-subtle);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--border-subtle);
  letter-spacing: -0.05em;
}

.avatar-ring {
  position: absolute;
  inset: -5px;
  border-radius: 50%;
  border: 2px solid transparent;
  background: linear-gradient(135deg, #3b82f6, #a78bfa) border-box;
  -webkit-mask:
    linear-gradient(#fff 0 0) padding-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: destination-out;
  mask-composite: exclude;
}

.identity-info {
  text-align: center;
}

.about-name {
  font-size: 1.6rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin-bottom: 0.3rem;
}

.about-title-text {
  font-size: 0.9rem;
  color: var(--text-secondary);
}

/* Right */
.about-body {
  max-width: 600px;
}

.about-bio {
  color: var(--text-secondary);
  font-size: 1.05rem;
  line-height: 1.8;
  margin-bottom: 2rem;
}

/* Stats */
.about-stats {
  display: flex;
  gap: 2.5rem;
  margin-bottom: 2.25rem;
  flex-wrap: wrap;
}

.about-stat {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.stat-num {
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--text-primary);
  letter-spacing: -0.02em;
}

.stat-lbl {
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-secondary);
  font-weight: 500;
}

/* CTA */
.about-cta {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.about-resume-link {
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.2s;
  text-decoration: underline;
  text-underline-offset: 4px;
}

.about-resume-link:hover {
  color: var(--text-primary);
}

@media (max-width: 900px) {
  .about-preview-inner {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .about-identity {
    flex-direction: row;
    min-width: unset;
  }

  .identity-info {
    text-align: left;
  }
}
</style>
