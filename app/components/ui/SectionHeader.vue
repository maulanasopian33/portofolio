<!--
  UI Atom: SectionHeader
  Reusable section header dengan subtitle + title
-->
<script setup lang="ts">
defineProps<{
  subtitle?: string
  title: string
  align?: 'left' | 'center' | 'right'
}>()
</script>

<template>
  <div
    class="section-header"
    :class="`section-header--${align ?? 'center'}`"
  >
    <span v-if="subtitle" class="section-subtitle">{{ subtitle }}</span>
    <h2 class="section-title">{{ title }}</h2>
  </div>
</template>

<style scoped>
.section-header {
  margin-bottom: 4rem;
}

.section-header--center { text-align: center; }
.section-header--left   { text-align: left; }
.section-header--right  { text-align: right; }
</style>
