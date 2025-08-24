<template>
    <footer class="bg-black text-white py-4 px-6 text-center">
      <p class="flex items-center justify-center space-x-2 text-sm md:text-base">
        <span>San Giljan ASC</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10
            10-4.48 10-10S17.52 2 12 2zm0 18c-4.41
            0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59
            8-8 8zm-.5-13H11v5.5c0
            1.1-.9 2-2 2h-.5v1.5h.5c1.93
            0 3.5-1.57 3.5-3.5V7z"/>
        </svg>
        <span>{{ currentYear }}</span>
      </p>
    </footer>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  const currentYear = new Date().getFullYear()
  </script>
  
  <style scoped>
  /* optional extra styling */
  </style>
  