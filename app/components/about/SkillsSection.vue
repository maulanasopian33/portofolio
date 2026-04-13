<script setup lang="ts">
import { skillCategories, getLevelLabel } from '~/data/skills'

const activeCategory = ref(skillCategories[0].id)
const activeSkills = computed(
  () => skillCategories.find((c) => c.id === activeCategory.value)?.skills ?? [],
)
</script>

<template>
  <section class="skills-section" aria-labelledby="skills-heading">
    <h2 id="skills-heading" class="section-title skills-heading">
      Skills & Proficiency
    </h2>

    <!-- Category Tabs -->
    <div class="skill-tabs" role="tablist" aria-label="Skill categories">
      <button
        v-for="cat in skillCategories"
        :key="cat.id"
        class="skill-tab"
        :class="{ 'skill-tab--active': activeCategory === cat.id }"
        :aria-selected="activeCategory === cat.id"
        role="tab"
        @click="activeCategory = cat.id"
      >
        <span class="tab-icon" aria-hidden="true">{{ cat.icon }}</span>
        {{ cat.label }}
      </button>
    </div>

    <!-- Skills List -->
    <Transition name="skills-fade" mode="out-in">
      <div
        :key="activeCategory"
        class="skills-list"
        role="tabpanel"
      >
        <div
          v-for="skill in activeSkills"
          :key="skill.name"
          class="skill-item"
        >
          <div class="skill-header">
            <span class="skill-name">{{ skill.name }}</span>
            <span class="skill-level-label">{{ getLevelLabel(skill.level) }}</span>
          </div>
          <div class="skill-bar-track" :aria-label="`${skill.name}: ${skill.level}%`">
            <div
              class="skill-bar-fill"
              :style="{ width: `${skill.level}%` }"
            />
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
.skills-section {
  margin-bottom: 5rem;
}

.skills-heading {
  margin-bottom: 2.5rem;
}

/* Tabs */
.skill-tabs {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
}

.skill-tab {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.55rem 1.25rem;
  border-radius: 50px;
  font-size: 0.88rem;
  font-weight: 500;
  font-family: var(--font-main);
  color: var(--text-secondary);
  border: 1px solid var(--border-subtle);
  background: transparent;
  cursor: pointer;
  transition: all 0.25s ease;
}

.skill-tab:hover {
  color: var(--text-primary);
  border-color: rgba(59, 130, 246, 0.3);
}

.skill-tab--active {
  color: var(--text-accent);
  border-color: var(--text-accent);
  background: rgba(59, 130, 246, 0.08);
}

.tab-icon {
  font-size: 1rem;
}

/* Skill Item */
.skills-list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.skill-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.skill-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.skill-name {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-primary);
}

.skill-level-label {
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.skill-bar-track {
  height: 6px;
  background: var(--border-subtle);
  border-radius: 50px;
  overflow: hidden;
}

.skill-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--text-accent), #a78bfa);
  border-radius: 50px;
  transition: width 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 0 8px rgba(59, 130, 246, 0.4);
}

/* Transition */
.skills-fade-enter-active,
.skills-fade-leave-active {
  transition: opacity 0.2s ease;
}
.skills-fade-enter-from,
.skills-fade-leave-to {
  opacity: 0;
}
</style>
