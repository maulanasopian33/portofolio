<!--
  UI Atom: TagBadge
  Reusable tech/category badge
-->
<script setup lang="ts">
defineProps<{
  text: string
  variant?: 'default' | 'outline' | 'subtle'
}>()
</script>

<template>
  <span
    class="tag-badge"
    :class="`tag-badge--${variant ?? 'default'}`"
  >
    {{ text }}
  </span>
</template>

<style scoped>
.tag-badge {
  display: inline-block;
  padding: 0.3rem 0.85rem;
  border-radius: 50px;
  font-size: 0.82rem;
  font-weight: 500;
  white-space: nowrap;
  line-height: 1.4;
}

/* Variants */
.tag-badge--default {
  background: rgba(59, 130, 246, 0.12);
  color: var(--text-accent);
  border: 1px solid rgba(59, 130, 246, 0.2);
}

.tag-badge--outline {
  background: transparent;
  color: var(--text-secondary);
  border: 1px solid var(--border-subtle);
}

.tag-badge--subtle {
  background: var(--bg-glass);
  color: var(--text-secondary);
  border: 1px solid var(--border-subtle);
}
</style>
