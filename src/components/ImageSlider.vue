<template>
    <div
      class="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black"
      @touchstart="startTouch"
      @touchmove="moveTouch"
    >
      <div
        class="flex transition-transform duration-300 ease-in-out"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div
          v-for="(image, index) in images"
          :key="index"
          class="min-w-full flex-shrink-0 flex items-center justify-center"
        >
          <img
            :src="image"
            alt="Slide"
            class="w-4/5 h-auto rounded-xl shadow-lg object-contain"
          />
        </div>
      </div>
  
      <!-- Indicators -->
      <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <span
          v-for="(image, index) in images"
          :key="index"
          class="w-3 h-3 rounded-full"
          :class="index === currentIndex ? 'bg-white' : 'bg-gray-500'"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const images = ref([
    "https://picsum.photos/id/1015/600/900",
    "https://picsum.photos/id/1025/600/900",
    "https://picsum.photos/id/1035/600/900",
    "https://picsum.photos/id/1045/600/900",
  ]);
  
  const currentIndex = ref(0);
  let startX = 0;
  
  const startTouch = (e) => {
    startX = e.touches[0].clientX;
  };
  
  const moveTouch = (e) => {
    if (!startX) return;
  
    let diffX = startX - e.touches[0].clientX;
  
    if (diffX > 50) {
      // Swipe left → next
      nextSlide();
      startX = 0;
    } else if (diffX < -50) {
      // Swipe right → prev
      prevSlide();
      startX = 0;
    }
  };
  
  const nextSlide = () => {
    if (currentIndex.value < images.value.length - 1) {
      currentIndex.value++;
    }
  };
  
  const prevSlide = () => {
    if (currentIndex.value > 0) {
      currentIndex.value--;
    }
  };
  </script>
  
  <style>
  /* Optional smoother mobile feel */
  html, body {
    overscroll-behavior: contain;
  }
  </style>
  