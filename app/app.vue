<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
// Init tema dari localStorage / system preference (client-only)
const { initTheme } = useTheme()
onMounted(() => initTheme())

// JSON-LD Person Schema untuk Google Rich Results
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Maulana Sopian',
        jobTitle: 'Full Stack Web Developer',
        url: 'https://maulanasopian.dev',
        email: 'hello@maulana.dev',
        image: 'https://maulanasopian.dev/og-image.jpg',
        description:
          'Full Stack Web Developer berpengalaman 4+ tahun dalam membangun web aplikasi modern dengan Vue.js, Nuxt.js, React, Node.js, dan Laravel.',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'ID',
        },
        sameAs: [
          'https://github.com',
          'https://linkedin.com',
          'https://twitter.com',
        ],
        knowsAbout: [
          'Vue.js', 'Nuxt.js', 'React', 'TypeScript',
          'Node.js', 'Laravel', 'PostgreSQL', 'Docker',
        ],
      }),
    },
  ],
})
</script>
