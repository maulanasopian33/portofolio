<!--
  UI Atom: CustomCursor
  Digunakan di layouts/default.vue dalam <ClientOnly>
  Composable useCustomCursor sudah SSR-safe
-->
<script setup lang="ts">
const { cursorX, cursorY, trailerX, trailerY, isHovering, isVisible } = useCustomCursor()
</script>

<template>
  <!-- Single dot cursor -->
  <div
    class="cursor-dot"
    :style="{ left: `${cursorX}px`, top: `${cursorY}px` }"
    :class="{ 'cursor-dot--visible': isVisible }"
    aria-hidden="true"
  />

  <!-- Trailing outline cursor -->
  <div
    class="cursor-outline"
    :style="{ left: `${trailerX}px`, top: `${trailerY}px` }"
    :class="{
      'cursor-outline--hover':   isHovering,
      'cursor-outline--visible': isVisible,
    }"
    aria-hidden="true"
  />
</template>

<style>
/* Global (tidak scoped) — cursor adalah fixed position, perlu akses global */
.cursor-dot,
.cursor-outline {
  position: fixed;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  z-index: 9999;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.cursor-dot--visible,
.cursor-outline--visible {
  opacity: 1;
}

.cursor-dot {
  width: 8px;
  height: 8px;
  background-color: var(--text-accent);
}

.cursor-outline {
  width: 40px;
  height: 40px;
  border: 1.5px solid var(--border-glass);
  transition: width 0.25s ease, height 0.25s ease, background-color 0.25s ease,
              border-color 0.25s ease, backdrop-filter 0.25s ease, opacity 0.3s ease;
}

.cursor-outline--hover {
  width: 60px;
  height: 60px;
  background-color: var(--bg-glass-hover);
  border-color: var(--text-accent);
  backdrop-filter: blur(4px);
}

/* Hide default cursor site-wide saat custom cursor aktif */
@media (hover: hover) and (pointer: fine) {
  * {
    cursor: none !important;
  }
}
</style>
