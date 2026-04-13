<script setup lang="ts">
const { progress } = useReadingProgress()
</script>

<template>
  <div
    class="reading-progress"
    role="progressbar"
    :aria-valuenow="progress"
    aria-valuemin="0"
    aria-valuemax="100"
    :aria-label="`Reading progress: ${progress}%`"
  >
    <div
      class="reading-progress-bar"
      :style="{ width: `${progress}%` }"
    />
  </div>
</template>

<style scoped>
.reading-progress {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: transparent;
  z-index: 200;
  pointer-events: none;
}

.reading-progress-bar {
  height: 100%;
  background: linear-gradient(90deg, var(--text-accent), #a78bfa, #f472b6);
  transition: width 0.1s linear;
  border-radius: 0 2px 2px 0;
  box-shadow: 0 0 8px rgba(59, 130, 246, 0.5);
}
</style>
