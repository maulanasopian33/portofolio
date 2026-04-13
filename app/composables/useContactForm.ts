// ============================================================
// COMPOSABLE: useContactForm
// Logic form kontak dipisah dari komponen ContactForm.vue
//
// Active : Simulasi submit (alert/log)
// 🔌 API  : Lihat blok komentar untuk pola POST ke /api/contact
// ============================================================

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export function useContactForm() {
  const form = reactive<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const isSubmitting = ref(false)
  const isSuccess    = ref(false)
  const isError      = ref(false)
  const errorMessage = ref('')

  const resetForm = () => {
    Object.assign(form, {
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }

  const submitForm = async (): Promise<void> => {
    isSubmitting.value = true
    isSuccess.value    = false
    isError.value      = false
    errorMessage.value = ''

    try {
      // ============================================================
      // 🔌 API-READY (Tidak aktif — uncomment dan hapus simulasi di bawah)
      // ============================================================
      // await $fetch('/api/contact', {
      //   method: 'POST',
      //   body: {
      //     name:    form.name,
      //     email:   form.email,
      //     subject: form.subject,
      //     message: form.message,
      //   },
      // })
      // ============================================================

      // --- Simulasi pengiriman (hapus ini saat API aktif) ---
      await new Promise<void>((resolve) => setTimeout(resolve, 1200))
      console.log('[ContactForm] Data terkirim (simulasi):', { ...form })
      // --------------------------------------------------------

      isSuccess.value = true
      resetForm()
    }
    catch (err: unknown) {
      isError.value      = true
      errorMessage.value =
        err instanceof Error
          ? err.message
          : 'Terjadi kesalahan. Silakan coba beberapa saat lagi.'
    }
    finally {
      isSubmitting.value = false
    }
  }

  return {
    form,
    isSubmitting,
    isSuccess,
    isError,
    errorMessage,
    submitForm,
    resetForm,
  }
}
