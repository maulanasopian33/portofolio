<script setup lang="ts">
import { useCustomCursor } from '../composables/useCustomCursor'
import { usePortfolioData } from '../composables/usePortfolioData'

// Enable custom cursor behavior for this page too
useCustomCursor()
const { profile, experience, testimonials } = usePortfolioData()
</script>

<template>
  <div class="container about-container">
    
    <!-- Profile & Bio -->
    <section class="profile-section">
      <h1 class="profile-title">About Me</h1>
      <div class="content">
        <p class="profile-bio" v-for="(paragraph, index) in profile.bio" :key="index">
          {{ paragraph }}
        </p>
      </div>
    </section>

    <!-- Experience Timeline -->
    <section class="timeline-section">
      <h2 class="timeline-title">Experience</h2>
      <div class="timeline">
        <div class="timeline-item" v-for="(job, index) in experience" :key="index">
          <span class="timeline-date">{{ job.period }}</span>
          <h3 class="timeline-role">{{ job.role }}</h3>
          <span class="timeline-company">{{ job.company }}</span>
          <p class="timeline-desc">{{ job.description }}</p>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="testimonials-section">
      <h2 class="timeline-title">What People Say</h2>
      <div class="testimonials-grid">
        <div class="testimonial-card" v-for="(testimonial, index) in testimonials" :key="index">
          <p class="testimonial-text">{{ testimonial.text }}</p>
          <div class="client-info">
            <div class="client-avatar">{{ testimonial.initials }}</div>
            <div class="client-details">
              <h4>{{ testimonial.name }}</h4>
              <span>{{ testimonial.role }}, {{ testimonial.company }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
@import './AboutView.css';
</style>
