<script setup lang="ts">
import type { BlogSection } from '~/data/blog-content'

defineProps<{
  sections: BlogSection[]
}>()
</script>

<template>
  <div class="article-body">
    <template v-for="(section, index) in sections" :key="index">

      <!-- Heading H2 -->
      <h2
        v-if="section.type === 'heading' && section.level === 2"
        class="section-h2"
      >
        {{ section.text }}
      </h2>

      <!-- Heading H3 -->
      <h3
        v-else-if="section.type === 'heading' && section.level === 3"
        class="section-h3"
      >
        {{ section.text }}
      </h3>

      <!-- Paragraph -->
      <p
        v-else-if="section.type === 'paragraph'"
        class="section-p"
      >
        {{ section.text }}
      </p>

      <!-- Code Block -->
      <div
        v-else-if="section.type === 'code'"
        class="section-code-wrap"
      >
        <div class="code-header">
          <span class="code-lang">{{ section.language }}</span>
        </div>
        <pre class="section-code"><code>{{ section.text }}</code></pre>
      </div>

      <!-- Unordered List -->
      <ul
        v-else-if="section.type === 'list'"
        class="section-list"
      >
        <li
          v-for="(item, idx) in section.items"
          :key="idx"
          class="section-list-item"
        >
          {{ item }}
        </li>
      </ul>

      <!-- Callout / Note -->
      <div
        v-else-if="section.type === 'callout'"
        class="section-callout"
        :class="`section-callout--${section.variant ?? 'info'}`"
      >
        <span class="callout-icon" aria-hidden="true">
          {{ section.variant === 'warning' ? '⚠️' : section.variant === 'tip' ? '💡' : 'ℹ️' }}
        </span>
        <p>{{ section.text }}</p>
      </div>

      <!-- Divider -->
      <hr
        v-else-if="section.type === 'divider'"
        class="section-divider"
      >

    </template>
  </div>
</template>

<style scoped>
.article-body {
  font-size: 1.05rem;
  line-height: 1.85;
  color: var(--text-secondary);
}

/* Headings */
.section-h2 {
  font-size: clamp(1.4rem, 2.5vw, 1.75rem);
  font-weight: 700;
  color: var(--text-primary);
  margin: 2.75rem 0 1rem;
  letter-spacing: -0.02em;
}

.section-h3 {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 2rem 0 0.75rem;
}

/* Paragraph */
.section-p {
  margin-bottom: 1.5rem;
}

/* Code Block */
.section-code-wrap {
  margin: 1.75rem 0;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border-subtle);
}

.code-header {
  background: var(--bg-glass);
  padding: 0.6rem 1.25rem;
  border-bottom: 1px solid var(--border-subtle);
  display: flex;
  align-items: center;
}

.code-lang {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-accent);
}

.section-code {
  background: #0d1117;
  padding: 1.5rem;
  overflow-x: auto;
  margin: 0;
  font-family: 'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace;
  font-size: 0.88rem;
  line-height: 1.7;
  color: #e6edf3;
  tab-size: 2;
}

.section-code code {
  font-family: inherit;
  white-space: pre;
}

/* List */
.section-list {
  margin: 0 0 1.75rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.section-list-item {
  padding-left: 1.5rem;
  position: relative;
}

.section-list-item::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--text-accent);
  font-size: 0.85em;
}

/* Callout */
.section-callout {
  display: flex;
  gap: 0.875rem;
  padding: 1.25rem 1.5rem;
  border-radius: 12px;
  margin: 1.75rem 0;
  font-size: 0.95rem;
  line-height: 1.65;
  align-items: flex-start;
}

.section-callout p {
  margin: 0;
}

.callout-icon {
  font-size: 1.1rem;
  flex-shrink: 0;
  margin-top: 0.1rem;
}

.section-callout--info {
  background: rgba(59, 130, 246, 0.06);
  border: 1px solid rgba(59, 130, 246, 0.2);
  color: var(--text-secondary);
}

.section-callout--warning {
  background: rgba(245, 158, 11, 0.06);
  border: 1px solid rgba(245, 158, 11, 0.2);
  color: var(--text-secondary);
}

.section-callout--tip {
  background: rgba(34, 197, 94, 0.06);
  border: 1px solid rgba(34, 197, 94, 0.2);
  color: var(--text-secondary);
}

/* Divider */
.section-divider {
  border: none;
  border-top: 1px solid var(--border-subtle);
  margin: 2.5rem 0;
}
</style>
