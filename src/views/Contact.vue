<script setup>
import Nav from '../components/Nav.vue'
import Footer from '../components/Footer.vue'
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')

const handleSubmit = () => {
  console.log({
    name: name.value,
    email: email.value,
    message: message.value
  })
  alert('Message sent! (stub)')
  name.value = ''
  email.value = ''
  message.value = ''
}
</script>

<template>
  <Nav />

  <section class="container mx-auto px-4 py-12">
    <h2 class="text-4xl font-bold text-center text-gray-800 mb-4">Contact Us</h2>
    <p class="text-center text-gray-600 mb-10">
      We'd love to hear from you! Fill out the form below or reach us directly.
    </p>

    <!-- Responsive grid: form + info -->
    <div class="grid md:grid-cols-2 gap-10">
      
      <!-- Contact Form -->
      <form @submit.prevent="handleSubmit" class="bg-white shadow-lg rounded-lg p-8">
        <div class="mb-4">
          <label class="block text-gray-700 mb-2">Name</label>
          <input v-model="name" type="text" required
                 class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"/>
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 mb-2">Email</label>
          <input v-model="email" type="email" required
                 class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"/>
        </div>

        <div class="mb-6">
          <label class="block text-gray-700 mb-2">Message</label>
          <textarea v-model="message" rows="5" required
                    class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"></textarea>
        </div>

        <button type="submit"
                class="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition">
          Send Message
        </button>
      </form>

      <!-- Contact Info -->
      <div class="flex flex-col justify-center bg-gray-100 rounded-lg p-8 shadow-lg">
        <h3 class="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h3>
        <p class="text-gray-600 mb-2"><strong>Address:</strong> 123 Main Street, San Ġiljan, Malta</p>
        <p class="text-gray-600 mb-2"><strong>Phone:</strong> +356 1234 5678</p>
        <p class="text-gray-600 mb-6"><strong>Email:</strong> info@sangiljanasc.com</p>

        <div class="flex space-x-4">
          <a href="#" class="text-blue-600 hover:text-blue-800">Facebook</a>
          <a href="#" class="text-blue-400 hover:text-blue-600">Twitter</a>
          <a href="#" class="text-pink-600 hover:text-pink-800">Instagram</a>
        </div>
      </div>

    </div>
  </section>

  <Footer />
</template>
