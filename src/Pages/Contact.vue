<template>
    <section class="bg-white py-16">
      <div class="container mx-auto px-6 max-w-lg">
        <h2 class="text-3xl font-bold text-center text-black mb-8">
          Contact Us
        </h2>
  
        <form class="space-y-6" @submit.prevent="handleSubmit">
          <!-- Name -->
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
            />
          </div>
  
          <!-- Email -->
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
            />
          </div>
  
          <!-- Message -->
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              v-model="form.message"
              rows="4"
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
            ></textarea>
          </div>
  
          <!-- Submit Button -->
          <div class="text-center">
            <button
              type="submit"
              class="w-full md:w-auto px-6 py-3 bg-black text-white font-semibold rounded-md shadow hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from "vue"
  
  const form = ref({
    name: "",
    email: "",
    message: ""
  })
  
  const handleSubmit = () => {
    console.log("Form submitted:", form.value)
    alert(`Thank you ${form.value.name}, your message has been sent!`)
    form.value = { name: "", email: "", message: "" } // reset form
  }
  </script>
    