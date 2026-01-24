<script setup lang="ts">
import { useCustomCursor } from '../composables/useCustomCursor'
import { usePortfolioData } from '../composables/usePortfolioData'

// Logic extracted to composable
const { cursorX, cursorY, trailerX, trailerY, isHovering } = useCustomCursor()
const { profile, techStack, services, featuredProjects } = usePortfolioData()
</script>

<template>
  <div class="home-container">
    <div class="background-grid"></div>
    <div class="background-glow"></div>
    
    <!-- Custom Cursor Elements -->
    <div 
      class="cursor-dot" 
      :style="{ left: `${cursorX}px`, top: `${cursorY}px` }"
    ></div>
    <div 
      class="cursor-outline" 
      :class="{ 'cursor-hover': isHovering }"
      :style="{ left: `${trailerX}px`, top: `${trailerY}px` }"
    ></div>

    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title animate-fade-up" style="animation-delay: 0.1s;">
          Building 
          <span class="highlight">Digital Experiences</span>
          <br>That Matter.
        </h1>
        
        <p class="hero-subtitle animate-fade-up" style="animation-delay: 0.2s;">
          I'm <span class="name-highlight">{{ profile.name }}</span>, a {{ profile.title }} crafting pixel-perfect, 
          performant, and accessible web interfaces with modern technologies.
        </p>

        <div class="cta-group animate-fade-up" style="animation-delay: 0.3s;">
          <router-link to="/projects" class="btn-primary glow-effect hover-trigger">
            Browse Projects
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </router-link>
          <router-link to="/about" class="btn-secondary hover-trigger">
            More About Me
          </router-link>
        </div>

        <!-- Additional Information (Stats) -->
        <div class="info-section animate-fade-up" style="animation-delay: 0.5s;">
          <div class="info-item" v-for="(stat, index) in profile.stats" :key="index">
            <span class="info-number">{{ stat.number }}</span>
            <span class="info-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Stack Marquee -->
    <section class="tech-stack">
      <div class="marquee-content">
        <!-- Duplicate items for seamless loop -->
        <div class="tech-group" v-for="n in 2" :key="n">
          <div 
            v-for="(tech, index) in techStack" 
            :key="index" 
            class="tech-icon-item hover-trigger"
            :title="tech.name"
          >
            <img :src="`https://cdn.simpleicons.org/${tech.slug}/${tech.color}`" :alt="tech.name" class="tech-icon" />
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services-section">
      <div class="section-header">
        <span class="section-subtitle">What I Do</span>
        <h2 class="section-title">Specialized Services</h2>
      </div>
      <div class="services-grid">
        <div class="service-card hover-trigger" v-for="(service, index) in services" :key="index">
          <span class="service-icon">{{ service.icon }}</span>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </div>
      </div>
    </section>

    <!-- Featured Projects Preview -->
    <section class="projects-section">
      <div class="section-header">
        <span class="section-subtitle">Selected Work</span>
        <h2 class="section-title">Featured Projects</h2>
      </div>
      
      <div class="project-preview" v-for="project in featuredProjects" :key="project.id">
        <div class="project-image hover-trigger"></div>
        <div class="project-info">
          <h3>{{ project.title }}</h3>
          <p class="project-desc">{{ project.description }}</p>
          <div class="project-tags">
            <span class="tag" v-for="tech in project.tech" :key="tech">{{ tech }}</span>
          </div>
          <router-link :to="`/projects/${project.id}`" class="btn-primary" style="display:inline-flex;">View Case Study</router-link>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <h2>Ready to start your next project?</h2>
      <p>Let's collaborate to build something amazing together.</p>
      <a href="mailto:contact@example.com" class="btn-primary glow-effect hover-trigger">Get In Touch</a>
    </section>
  </div>
</template>

<style scoped>
@import './HomeView.css';
</style>
