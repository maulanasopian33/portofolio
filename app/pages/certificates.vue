<script setup lang="ts">
const { certificates } = usePortfolioData()

// SEO
useSeoMeta({
  title: 'Sertifikasi & Penghargaan — Maulana Sopian',
  description:
    'Lihat daftar sertifikat dan credential profesional Maulana Sopian dari Google, Meta, AWS, Vue School, dan lembaga terkemuka lainnya.',
  ogTitle: 'Sertifikasi Profesional — Maulana Sopian',
  ogDescription:
    'Daftar lengkap sertifikat dan penghargaan Maulana Sopian dari lembaga-lembaga terkemuka dunia.',
})

useHead({
  link: [{ rel: 'canonical', href: 'https://maulanasopian.dev/certificates' }],
})
</script>

<template>
  <div class="container certificates-page">

    <!-- Page Header -->
    <header class="page-header animate-fade-up">
      <span class="section-subtitle">Credentials</span>
      <h1 class="page-title">Certificates &amp; Awards</h1>
      <p class="page-desc">
        Professional certifications and credentials from leading institutions, validating
        my expertise across design, frontend, cloud, and modern frameworks.
      </p>
    </header>

    <!-- Count Badge -->
    <div
      class="count-badge animate-fade-up"
      style="animation-delay: 0.1s;"
      aria-label="Total certificates"
    >
      <span class="count-number">{{ certificates.length }}</span>
      <span>Total Credentials</span>
    </div>

    <!-- Certificates Grid -->
    <div
      class="certificates-grid animate-fade-up"
      style="animation-delay: 0.2s;"
      role="list"
      aria-label="Certificates list"
    >
      <div
        v-for="(cert, index) in certificates"
        :key="cert.id"
        role="listitem"
        class="cert-item"
        :style="{ animationDelay: `${0.2 + index * 0.08}s` }"
      >
        <CertificatesCertificateCard :certificate="cert" />
      </div>
    </div>

    <!-- CTA Section -->
    <section class="certs-cta animate-fade-up" style="animation-delay: 0.5s;" aria-label="Continue learning CTA">
      <p class="cta-text">Constantly learning and growing. More certifications on the way.</p>
      <NuxtLink to="/contact" class="btn-primary">
        Work With Me
      </NuxtLink>
    </section>

  </div>
</template>

<style scoped>
.certificates-page {
  padding-top: 5rem;
  padding-bottom: 5rem;
}

/* Header */
.page-header {
  max-width: 700px;
  margin-bottom: 2.5rem;
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

/* Count */
.count-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 1.25rem;
  border-radius: 50px;
  border: 1px solid var(--border-subtle);
  background: var(--bg-card);
  color: var(--text-secondary);
  font-size: 0.88rem;
  font-weight: 500;
  margin-bottom: 3rem;
}

.count-number {
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--text-accent);
}

/* Grid */
.certificates-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 5rem;
}

.cert-item {
  animation: fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
}

/* CTA */
.certs-cta {
  text-align: center;
  padding: 3rem;
  border-radius: 20px;
  border: 1px solid var(--border-subtle);
  background: var(--bg-card);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.cta-text {
  color: var(--text-secondary);
  font-size: 1rem;
}
</style>
