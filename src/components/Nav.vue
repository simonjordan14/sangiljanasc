<template>
  <nav class="w-full bg-white shadow">
    <div class="container mx-auto px-4 py-4 flex items-center justify-between">
      <!-- Brand -->
      <div class="flex items-center">
        <img src="../assets/stjlogo.png" alt="San Giljan ASC Logo" class="h-10 w-auto"/>
      </div>

      <!-- Desktop Links -->
      <div class="hidden md:flex space-x-6">
        <router-link to="/" class="text-black hover:text-gray-600">Home</router-link>
        <router-link to="#" class="text-black hover:text-gray-600">About</router-link>
        <router-link to="/squad" class="text-black hover:text-gray-600">Squad</router-link>
        <router-link to="/contact" class="block text-black hover:text-gray-600">Contact</router-link>
      </div>

      <!-- Mobile Menu Button -->
      <button @click="isOpen = !isOpen" class="md:hidden text-black focus:outline-none">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isOpen" class="md:hidden px-4 pb-4 space-y-2">
      <router-link to="/" class="block text-black hover:text-gray-600">Home</router-link>
      <router-link to="#" class="block text-black hover:text-gray-600">About</router-link>
      <router-link to="/squad" class="text-black hover:text-gray-600">Squad</router-link>
      <router-link to="/contact" class="block text-black hover:text-gray-600">Contact</router-link>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router';
const isOpen = ref(false)
</script>
