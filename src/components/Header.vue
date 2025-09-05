<template>
  <header
    class="h-screen w-full bg-cover bg-center flex flex-col relative"
    :style="{ backgroundImage: `url(${flagBg})` }"
  >
    <div class="absolute inset-0 bg-black/30"></div>

    <Nav class="relative z-10" />

    <div class="flex-1 flex items-center justify-center relative z-10">
      <h1 class="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
        San Giljan ASC
      </h1>
    </div>
  </header>
</template>

<script setup>
import Nav from './Nav.vue'
import flagBg from '../assets/flagbg.png'
</script>
