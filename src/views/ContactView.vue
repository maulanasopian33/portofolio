<script setup lang="ts">
import { ref } from 'vue'
import { useCustomCursor } from '../composables/useCustomCursor'

useCustomCursor()

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const submitForm = () => {
  // Placeholder for form submission logic
  console.log('Form submitted:', form.value)
  alert('Thank you for your message! This is a demo form.')
}
</script>

<template>
  <div class="container contact-container">
    <div class="contact-header animate-fade-up">
      <span class="section-subtitle">Get In Touch</span>
      <h1 class="contact-title">Let's Work Together</h1>
    </div>

    <form @submit.prevent="submitForm" class="contact-form animate-fade-up" style="animation-delay: 0.2s;">
      <div class="form-group">
        <label for="name" class="form-label">Name</label>
        <input type="text" id="name" v-model="form.name" class="form-input" placeholder="Your Name" required>
      </div>

      <div class="form-group">
        <label for="email" class="form-label">Email</label>
        <input type="email" id="email" v-model="form.email" class="form-input" placeholder="your@email.com" required>
      </div>

      <div class="form-group">
        <label for="subject" class="form-label">Subject</label>
        <input type="text" id="subject" v-model="form.subject" class="form-input" placeholder="Project Inquiry" required>
      </div>

      <div class="form-group">
        <label for="message" class="form-label">Message</label>
        <textarea id="message" v-model="form.message" class="form-textarea" placeholder="Tell me about your project..." required></textarea>
      </div>

      <button type="submit" class="submit-btn hover-trigger">Send Message</button>
    </form>

    <div class="contact-info animate-fade-up" style="animation-delay: 0.4s;">
      <p>Or email me directly at <a href="mailto:hello@maulana.dev" class="hover-trigger">hello@maulana.dev</a></p>
    </div>
  </div>
</template>

<style scoped>
@import './ContactView.css';

/* Keyframes for entrance animation */
.animate-fade-up {
  opacity: 0;
  animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fadeUp {
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
}
</style>
