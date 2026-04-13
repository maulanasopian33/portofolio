<script setup lang="ts">
// Logic dipisah ke composable useContactForm
const {
  form,
  isSubmitting,
  isSuccess,
  isError,
  errorMessage,
  submitForm,
} = useContactForm()
</script>

<template>
  <div class="contact-form-wrapper">

    <!-- Success State -->
    <Transition name="fade-slide">
      <div v-if="isSuccess" class="form-success" role="alert" aria-live="polite">
        <div class="success-icon" aria-hidden="true">✓</div>
        <h3>Message Sent!</h3>
        <p>Thank you for reaching out. I'll get back to you within 1–2 business days.</p>
      </div>
    </Transition>

    <!-- Form -->
    <form
      v-if="!isSuccess"
      class="contact-form"
      novalidate
      @submit.prevent="submitForm"
    >
      <div class="form-row">
        <div class="form-group">
          <label for="contact-name" class="form-label">Full Name</label>
          <input
            id="contact-name"
            v-model="form.name"
            type="text"
            name="name"
            class="form-input"
            placeholder="Your Name"
            required
            autocomplete="name"
          />
        </div>

        <div class="form-group">
          <label for="contact-email" class="form-label">Email Address</label>
          <input
            id="contact-email"
            v-model="form.email"
            type="email"
            name="email"
            class="form-input"
            placeholder="your@email.com"
            required
            autocomplete="email"
          />
        </div>
      </div>

      <div class="form-group">
        <label for="contact-subject" class="form-label">Subject</label>
        <input
          id="contact-subject"
          v-model="form.subject"
          type="text"
          name="subject"
          class="form-input"
          placeholder="Project Inquiry, Collaboration..."
          required
        />
      </div>

      <div class="form-group">
        <label for="contact-message" class="form-label">Message</label>
        <textarea
          id="contact-message"
          v-model="form.message"
          name="message"
          class="form-textarea"
          placeholder="Tell me about your project, timeline, and budget..."
          rows="6"
          required
        />
      </div>

      <!-- Error -->
      <div v-if="isError" class="form-error" role="alert" aria-live="polite">
        ⚠ {{ errorMessage }}
      </div>

      <!-- Submit -->
      <button
        type="submit"
        class="submit-btn btn-primary glow-effect"
        :disabled="isSubmitting"
        :aria-busy="isSubmitting"
      >
        <span v-if="isSubmitting" class="spinner" aria-hidden="true" />
        <span>{{ isSubmitting ? 'Sending...' : 'Send Message' }}</span>
        <svg
          v-if="!isSubmitting"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <line x1="22" y1="2" x2="11" y2="13"/>
          <polygon points="22 2 15 22 11 13 2 9 22 2"/>
        </svg>
      </button>
    </form>
  </div>
</template>

<style scoped>
.contact-form-wrapper {
  width: 100%;
}

/* Form */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-label {
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.form-input,
.form-textarea {
  background: var(--bg-glass);
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
  padding: 0.875rem 1.1rem;
  color: var(--text-primary);
  font-family: var(--font-main);
  font-size: 0.95rem;
  transition: border-color 0.25s ease, background-color 0.25s ease, box-shadow 0.25s ease;
  width: 100%;
  outline: none;
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: var(--text-muted);
}

.form-input:focus,
.form-textarea:focus {
  border-color: var(--text-accent);
  background: rgba(59, 130, 246, 0.04);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.12);
}

.form-textarea {
  resize: vertical;
  min-height: 140px;
}

/* Submit Button */
.submit-btn {
  align-self: flex-start;
  font-size: 1rem;
  padding: 1rem 2rem;
  border-radius: 12px;
  gap: 0.6rem;
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none !important;
}

.spinner {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(120, 120, 120, 0.3);
  border-top-color: var(--text-accent);
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
  display: inline-block;
}

/* Error */
.form-error {
  padding: 0.875rem 1.25rem;
  border-radius: 10px;
  background: rgba(239, 68, 68, 0.08);
  border: 1px solid rgba(239, 68, 68, 0.25);
  color: #fca5a5;
  font-size: 0.9rem;
}

/* Success */
.form-success {
  text-align: center;
  padding: 4rem 2rem;
  border: 1px solid rgba(34, 197, 94, 0.2);
  border-radius: 20px;
  background: var(--bg-card);
}

.success-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(34, 197, 94, 0.15);
  color: #22c55e;
  font-size: 1.75rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
}

.form-success h3 {
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
}

.form-success p {
  color: var(--text-secondary);
}

/* Transitions */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(12px);
}

/* Responsive */
@media (max-width: 640px) {
  .form-row {
    grid-template-columns: 1fr;
  }

  .submit-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
