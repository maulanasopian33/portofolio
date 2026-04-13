<template>
  <section class="cta-section" aria-label="Call to action">
    <div class="cta-inner">
      <div class="cta-icon" aria-hidden="true">🤝</div>
      <h2 class="cta-title">Ready to start your next project?</h2>
      <p class="cta-desc">
        Let's collaborate to build something amazing together.<br>
        I'm currently open to new opportunities.
      </p>
      <div class="cta-buttons">
        <NuxtLink to="/contact" class="btn-primary glow-effect">
          Get In Touch
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" stroke-width="2"
               stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
        </NuxtLink>
        <NuxtLink to="/projects" class="btn-secondary">
          See All Work
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta-section {
  width: 100%;
  max-width: 800px;
  margin: 9rem auto 5rem;
  padding: 0 2rem;
}

.cta-inner {
  text-align: center;
  background: radial-gradient(circle at center, rgba(59, 130, 246, 0.08) 0%, transparent 70%);
  border: 1px solid var(--border-subtle);
  border-radius: 28px;
  padding: 5rem 3rem;
  position: relative;
  overflow: hidden;
  transition: border-color 0.3s ease;
}

.cta-inner:hover {
  border-color: rgba(59, 130, 246, 0.25);
}

.cta-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 4px 12px rgba(0,0,0,0.3));
}

.cta-title {
  font-size: clamp(1.75rem, 4vw, 3rem);
  font-weight: 800;
  margin-bottom: 1.25rem;
  line-height: 1.15;
  letter-spacing: -0.02em;
}

.cta-desc {
  color: var(--text-secondary);
  font-size: 1.1rem;
  margin-bottom: 2.5rem;
  line-height: 1.7;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
