<template>
  <header
    class="h-screen w-full bg-cover bg-center flex flex-col relative overflow-hidden"
    :style="{ backgroundImage: `url(${flagBg})` }"
  >
    <!-- overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70"></div>


    <div class="flex-1 flex items-center justify-center relative z-10"> 
    </div>
  </header>
</template>

<script setup>
import flagBg from '../assets/flagbg.png'
</script>
