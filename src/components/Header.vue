<template>
    <header
      class="h-screen w-full bg-cover bg-center relative"
      :style="{ backgroundImage: `url(${headerImage})` }"
    >
      <div class="absolute inset-0 bg-width-100"></div>
      <div class="relative z-10">
        <Nav />
        <div class="flex justify-center items-center h-full text-white">
          <h1 class="text-4xl md:text-6xl font-bold">SAN GILJAN ASC</h1>
        </div>
      </div>
    </header>
  </template>
  
  <script setup>
  import Nav from './Nav.vue'
  import headerImage from '../assets/bg.png'
  </script>
  
  <style scoped>
  /* optional extra styling */
  </style>
  