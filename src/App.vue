<script setup>
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Nav />

    <!-- page content -->
    <div class="flex-1">
      <router-view />
    </div>

    <Footer />
  </div>
</template>

<style scoped></style>