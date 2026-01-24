<script setup lang="ts">
</script>

<template>
  <footer class="footer">
    <div class="container footer-content">
      <p>&copy; 2025 Maulana Sopian. All rights reserved.</p>
      <div class="social-links">
        <a href="https://github.com" target="_blank" rel="noopener">GitHub</a>
        <a href="https://twitter.com" target="_blank" rel="noopener">Twitter</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener">LinkedIn</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 2rem 0;
  border-top: 1px solid var(--border-subtle);
  margin-top: auto; /* Push to bottom */
  background-color: var(--bg-secondary);
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.social-links {
  display: flex;
  gap: 1.5rem;
}

.social-links a:hover {
  color: var(--text-primary);
}
</style>
