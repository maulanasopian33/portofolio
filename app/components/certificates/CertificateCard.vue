<script setup lang="ts">
import type { Certificate } from '~/data/certificates'

defineProps<{
  certificate: Certificate
}>()
</script>

<template>
  <article class="cert-card">
    <!-- Icon Area -->
    <div
      class="cert-icon-area"
      :style="certificate.badgeColor
        ? { background: `linear-gradient(135deg, ${certificate.badgeColor}20 0%, transparent 70%)`,
            borderColor: `${certificate.badgeColor}30` }
        : {}"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
        :style="certificate.badgeColor ? { color: certificate.badgeColor } : {}"
      >
        <circle cx="12" cy="8" r="6"/>
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    </div>

    <!-- Content -->
    <div class="cert-content">
      <span class="cert-issuer">{{ certificate.issuer }}</span>
      <h3 class="cert-title">{{ certificate.title }}</h3>
      <time class="cert-date">Issued {{ certificate.date }}</time>
    </div>

    <!-- Link -->
    <a
      :href="certificate.credentialUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="cert-verify"
      :aria-label="`Verify ${certificate.title} credential`"
    >
      Verify Credential
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
           fill="none" stroke="currentColor" stroke-width="2"
           stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
        <polyline points="15 3 21 3 21 9"/>
        <line x1="10" y1="14" x2="21" y2="3"/>
      </svg>
    </a>
  </article>
</template>

<style scoped>
.cert-card {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 18px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.cert-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 40px -16px rgba(0, 0, 0, 0.4);
}

/* Icon area */
.cert-icon-area {
  width: 72px;
  height: 72px;
  border-radius: 14px;
  background: var(--bg-glass);
  border: 1px solid var(--border-glass);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  transition: transform 0.3s ease;
}

.cert-card:hover .cert-icon-area {
  transform: scale(1.05) rotate(-3deg);
}

/* Content */
.cert-content {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  flex: 1;
}

.cert-issuer {
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-accent);
}

.cert-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.4;
}

.cert-date {
  font-size: 0.82rem;
  color: var(--text-secondary);
}

/* Verify link */
.cert-verify {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-accent);
  border: 1px solid rgba(59, 130, 246, 0.25);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  width: fit-content;
  transition: all 0.2s ease;
}

.cert-verify:hover {
  background: rgba(59, 130, 246, 0.1);
  border-color: var(--text-accent);
}
</style>
