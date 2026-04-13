<script setup lang="ts">
// SEO
useSeoMeta({
  title: 'Hubungi Saya — Maulana Sopian',
  description:
    'Mari berkolaborasi! Hubungi Maulana Sopian untuk project web development, konsultasi teknis, atau peluang kerja sama. Respon dalam 1-2 hari kerja.',
  ogTitle: 'Hubungi Maulana Sopian',
  ogDescription:
    'Kirim pesan dan mulai kolaborasi. Full Stack Web Developer siap membantu project Anda.',
})

useHead({
  link: [{ rel: 'canonical', href: 'https://maulanasopian.dev/contact' }],
})
</script>

<template>
  <div class="container contact-page">

    <!-- Page Header -->
    <header class="page-header animate-fade-up">
      <span class="section-subtitle">Let's Talk</span>
      <h1 class="page-title">Let's Work Together</h1>
      <p class="page-desc">
        Have a project in mind? I'd love to hear about it and discuss how we can bring your vision to life.
      </p>
    </header>

    <!-- Content Grid -->
    <div class="contact-grid animate-fade-up" style="animation-delay: 0.15s;">

      <!-- Contact Form -->
      <section aria-labelledby="form-heading">
        <h2 id="form-heading" class="visually-hidden">Contact Form</h2>
        <ContactContactForm />
      </section>

      <!-- Info Panel -->
      <aside class="info-panel" aria-label="Contact information">
        <div class="info-card">
          <h3 class="info-title">Get In Touch</h3>
          <p class="info-text">
            Whether you have a question, a project proposal, or just want to say hello —
            my inbox is always open.
          </p>

          <div class="contact-methods">
            <a href="mailto:hello@maulana.dev" class="contact-method">
              <span class="method-icon" aria-hidden="true">📧</span>
              <div>
                <span class="method-label">Email</span>
                <span class="method-value">hello@maulana.dev</span>
              </div>
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="contact-method">
              <span class="method-icon" aria-hidden="true">💼</span>
              <div>
                <span class="method-label">LinkedIn</span>
                <span class="method-value">linkedin.com/in/maulanasopian</span>
              </div>
            </a>

            <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="contact-method">
              <span class="method-icon" aria-hidden="true">🐙</span>
              <div>
                <span class="method-label">GitHub</span>
                <span class="method-value">github.com/maulanasopian</span>
              </div>
            </a>
          </div>

          <div class="availability-badge">
            <span class="avail-dot" aria-hidden="true" />
            <span>Available for new projects</span>
          </div>
        </div>
      </aside>

    </div>
  </div>
</template>

<style scoped>
.contact-page {
  padding-top: 5rem;
  padding-bottom: 5rem;
}

/* Header */
.page-header {
  max-width: 640px;
  margin-bottom: 4rem;
}

.page-title {
  font-size: clamp(2.5rem, 5vw, 3.75rem);
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

/* Grid */
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 3rem;
  align-items: start;
}

/* Info Panel */
.info-panel {
  position: sticky;
  top: calc(var(--header-height) + 2rem);
}

.info-card {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 20px;
  padding: 2rem;
}

.info-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.875rem;
}

.info-text {
  color: var(--text-secondary);
  font-size: 0.93rem;
  line-height: 1.65;
  margin-bottom: 2rem;
}

/* Contact Methods */
.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.contact-method {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid var(--border-subtle);
  background: var(--bg-secondary);
  transition: all 0.2s ease;
  text-decoration: none;
}

.contact-method:hover {
  border-color: rgba(59, 130, 246, 0.3);
  background: rgba(59, 130, 246, 0.05);
  transform: translateX(4px);
}

.method-icon {
  font-size: 1.25rem;
}

.method-label {
  display: block;
  font-size: 0.75rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 0.2rem;
}

.method-value {
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-primary);
}

/* Availability */
.availability-badge {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.75rem 1.25rem;
  border-radius: 50px;
  border: 1px solid rgba(34, 197, 94, 0.25);
  background: rgba(34, 197, 94, 0.06);
  color: #22c55e;
  font-size: 0.87rem;
  font-weight: 500;
}

.avail-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #22c55e;
  box-shadow: 0 0 8px rgba(34, 197, 94, 0.5);
  flex-shrink: 0;
}

/* Visually hidden */
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Responsive */
@media (max-width: 900px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }

  .info-panel {
    position: static;
    order: -1;
  }
}
</style>
