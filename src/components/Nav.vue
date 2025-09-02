<template>
  <nav class="w-full bg-white shadow">
    <div class="container mx-auto px-4 py-4 flex items-center justify-between">
      <!-- Brand -->
      <div class="flex items-center">
        <img src="../assets/stjlogo.png" alt="San Giljan ASC Logo" class="h-10 w-auto" />
      </div>

      <!-- Desktop Links -->
      <div class="hidden md:flex space-x-6">
        <a href="#" class="text-black hover:text-gray-600">Home</a>
        <a href="#" class="text-black hover:text-gray-600">About</a>
        <a href="#" class="text-black hover:text-gray-600">Teams</a>
        <a href="#" class="text-black hover:text-gray-600">Contact</a>
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
      <a href="#" class="block text-black hover:text-gray-600">Home</a>
      <a href="#" class="block text-black hover:text-gray-600">About</a>
      <a href="#" class="block text-black hover:text-gray-600">Teams</a>
      <a href="#" class="block text-black hover:text-gray-600">Contact</a>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
</script>
