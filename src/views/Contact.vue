
<script setup>
import { ref, computed } from 'vue'
import Footer from '../components/Footer.vue'

const name = ref('')
const email = ref('')
const message = ref('')

const recipientEmail = 'secretary.sangiljanasc@gmail.com'

const isDisabled = computed(() => {
  return (
    !name.value.trim() ||
    !email.value.trim() ||
    !message.value.trim()
  )
})

const handleSubmit = () => {
  if (isDisabled.value) return

  const subject = `Website Enquiry - ${name.value.trim()}`

  const body = [
    `Name: ${name.value.trim()}`,
    `Email: ${email.value.trim()}`,
    '',
    'Message:',
    message.value.trim(),
    '',
    'Sent via San Giljan ASC website'
  ].join('\n')

  const mailtoLink =
    `mailto:${recipientEmail}` +
    `?subject=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`

  window.location.href = mailtoLink
}
</script>

<template>
  <section class="contact-section relative overflow-hidden py-24 md:py-32">
    <div class="background-glow"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-6">

      <!-- Heading -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="section-eyebrow">
          CONNECT WITH US
        </span>

        <h1 class="mt-5 text-4xl md:text-6xl font-black tracking-tight text-white">
          GET IN
          <span class="text-red-600">TOUCH.</span>
        </h1>

        <p class="mt-6 text-gray-400 text-base md:text-lg leading-relaxed">
          Have a question about our programmes, training,
          or becoming part of San Giljan ASC?
          We'd love to hear from you.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-5 gap-8">

        <!-- Contact Form -->
        <div class="lg:col-span-3 contact-card">
          <div class="mb-10">
            <span class="card-eyebrow">SEND AN ENQUIRY</span>

            <h2 class="mt-3 text-3xl font-bold text-white">
              Drop us a message.
            </h2>

            <p class="mt-3 text-gray-400 text-sm leading-relaxed">
              Complete the form below and we'll prepare
              an email in your default email application.
            </p>
          </div>

          <form @submit.prevent="handleSubmit" class="space-y-6">

            <!-- Name -->
            <div>
              <label for="contact-name" class="form-label">
                FULL NAME
              </label>

              <input
                id="contact-name"
                v-model="name"
                type="text"
                autocomplete="name"
                placeholder="Enter your full name"
                required
                class="form-input"
              />
            </div>

            <!-- Email -->
            <div>
              <label for="contact-email" class="form-label">
                EMAIL ADDRESS
              </label>

              <input
                id="contact-email"
                v-model="email"
                type="email"
                autocomplete="email"
                placeholder="yourname@example.com"
                required
                class="form-input"
              />
            </div>

            <!-- Message -->
            <div>
              <label for="contact-message" class="form-label">
                YOUR MESSAGE
              </label>

              <textarea
                id="contact-message"
                v-model="message"
                rows="6"
                placeholder="How can we help you?"
                required
                class="form-input resize-y"
              ></textarea>
            </div>

            <!-- Submit -->
            <button
              type="submit"
              :disabled="isDisabled"
              class="submit-button"
            >
              <span>OPEN EMAIL APPLICATION</span>
              <span class="text-xl">↗</span>
            </button>

            <p class="text-xs text-gray-500 leading-relaxed">
              Your email application will open with your
              message prepared. Please press Send in your
              email application to complete your enquiry.
            </p>
          </form>
        </div>

        <!-- Contact Information -->
        <div class="lg:col-span-2 flex flex-col gap-6">

          <div class="contact-card flex-1">
            <span class="card-eyebrow">CONTACT DETAILS</span>

            <h2 class="mt-3 mb-10 text-3xl font-bold text-white">
              Find us.
            </h2>

            <!-- Address -->
            <div class="info-item">
              <div class="info-icon">⌖</div>

              <div>
                <span class="info-label">OUR LOCATION</span>
                <p class="info-value">
                  San Giljan ASC<br />
                  Triq Gorg Borg Olivier<br />
                  St Julian's, Malta
                </p>
              </div>
            </div>

            <!-- Phone -->
            <div class="info-item">
              <div class="info-icon">✆</div>

              <div>
                <span class="info-label">PHONE NUMBER</span>

                <a
                  href="tel:+35679228370"
                  class="info-value hover:text-red-400 transition"
                >
                  +356 7922 8370
                </a>
              </div>
            </div>

            <!-- Email -->
            <div class="info-item">
              <div class="info-icon">✉</div>

              <div class="min-w-0">
                <span class="info-label">EMAIL ADDRESS</span>

                <a
                  :href="`mailto:${recipientEmail}`"
                  class="info-value break-all hover:text-red-400 transition"
                >
                  {{ recipientEmail }}
                </a>
              </div>
            </div>
          </div>

          <!-- Social Media -->
          <div class="social-card">
            <span class="card-eyebrow">FOLLOW THE ACTION</span>

            <h3 class="mt-3 text-2xl font-bold text-white">
              Stay connected.
            </h3>

            <p class="mt-3 text-gray-400 text-sm">
              Follow San Giljan ASC for club updates,
              fixtures and the latest news.
            </p>

            <div class="mt-8 flex flex-wrap gap-3">
              <a
                href="https://www.facebook.com/sangiljanasc/"
                target="_blank"
                rel="noopener noreferrer"
                class="social-link"
              >
                FACEBOOK ↗
              </a>

              <a
                href="https://www.instagram.com/sangiljanaquaticsportsclub/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                class="social-link"
              >
                INSTAGRAM ↗
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom statement -->
      <div class="mt-16 border-t border-white/10 pt-10 text-center">
        <p class="text-gray-500 text-sm tracking-widest uppercase">
          One Club. One Passion. San Giljan ASC.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  background: #080a0f;
  color: white;
  min-height: 100vh;
}

.background-glow {
  position: absolute;
  width: 700px;
  height: 700px;
  top: -300px;
  right: -250px;
  background: radial-gradient(
    circle,
    rgba(185, 28, 28, 0.15),
    transparent 70%
  );
  pointer-events: none;
}

.section-eyebrow,
.card-eyebrow {
  color: #ef4444;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 3px;
}

.contact-card {
  background: #11141b;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 40px;
}

/* Form */
.form-label {
  display: block;
  color: #d1d5db;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1.5px;
  margin-bottom: 12px;
}

.form-input {
  display: block;
  width: 100%;
  padding: 16px 18px;
  background: #1a1e27;
  border: 1px solid #303642;
  border-radius: 8px;
  color: white;
  font-size: 14px;
  outline: none;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

.form-input::placeholder {
  color: #777f8c;
}

.form-input:focus {
  border-color: #ef4444;
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.12);
}

.submit-button {
  width: 100%;
  padding: 17px 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #dc2626;
  color: white;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1.2px;
  transition:
    background 0.3s ease,
    transform 0.3s ease;
}

.submit-button:hover:not(:disabled) {
  background: #b91c1c;
  transform: translateY(-2px);
}

.submit-button:disabled {
  background: #3a2025;
  color: #a78b8b;
  cursor: not-allowed;
}

/* Contact details */
.info-item {
  display: flex;
  gap: 18px;
  padding-bottom: 25px;
  margin-bottom: 25px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.info-item:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.info-icon {
  width: 45px;
  height: 45px;
  min-width: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(220, 38, 38, 0.1);
  border: 1px solid rgba(220, 38, 38, 0.2);
  border-radius: 10px;
  color: #ef4444;
  font-size: 23px;
}

.info-label {
  display: block;
  color: #ef4444;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1.5px;
  margin-bottom: 9px;
}

.info-value {
  display: block;
  color: #e5e7eb;
  font-size: 14px;
  line-height: 1.8;
}

/* Social card */
.social-card {
  background: linear-gradient(
    135deg,
    #1b1014 0%,
    #11141b 100%
  );
  border: 1px solid rgba(220, 38, 38, 0.2);
  border-radius: 16px;
  padding: 35px;
}

.social-link {
  padding: 13px 17px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  color: white;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1px;
  transition:
    background 0.3s ease,
    border-color 0.3s ease;
}

.social-link:hover {
  background: #dc2626;
  border-color: #dc2626;
}

@media (max-width: 768px) {
  .contact-card {
    padding: 25px;
  }

  .social-card {
    padding: 25px;
  }

  .background-glow {
    width: 350px;
    height: 350px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .form-input,
  .submit-button,
  .social-link {
    transition: none;
  }
}
</style>
