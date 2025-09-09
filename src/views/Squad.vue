<script setup>
import Nav from '../components/Nav.vue'
import { ref } from 'vue';
import ImageSlider from '../components/ImageSlider.vue';
import players from '../data/players';
import Footer from '../components/Footer.vue';


const count = ref(0);

function incrementCount() {
    count.value++;
}

import coach from '../assets/squad/coach.jpg';
</script>



<template>
    <Nav />
    <div class="squad-heading flex w-screen h-screen">
        <div class="flex md: w-1/2 h-full">
            <div class="md: m-auto w-3/4">
                <img src = "../assets/squad/dean.jpg" alt="Dean Bugeja" class="w-full h-auto"/>
            </div>
        </div>
        <div class="flex w-1/2 h-full">
            <div class="md: m-auto text-center p-10 rounded-lg shadow-lg w-3/4">
                <p><span class="font-bold">Dean Bugeja</span>,<br /> one of our most highly potential players who recently joined and has already won 3 trophies.</p>
            </div>
        </div>
    </div>
    <div class="squad-content">
        <div>
            <h2 class="text-4xl font-bold text-gray-800 text-center my-8">Meet The Team</h2>
        </div>
        <div>
            <h3 class="text-3xl font-bold text-gray-800 text-center my-8">Technical Staff</h3>
        </div>
<div class="max-w-sm h-100 rounded overflow-hidden shadow-lg bg-white m-20" >
    <div class="h-80 overflow-hidden">
        <img class="w-full object-cover" :src="coach" alt="Profile Image"/>
    </div>
    <div class="px-6 py-4 text-center">
      <h2 class="text-xl font-semibold text-gray-800">Giorgios</h2>
      <p class="text-gray-600">Head Coach</p>
    </div>
  </div>
    </div>

    <div>

    </div>
    <div>
        <h3 class="text-3xl font-bold text-gray-800 text-center">Players</h3>
        <div class=" pt-5 flex justify-center">
            <div class="sm: grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 px-10">
            <div v-for="(player, index) in players" class="mb-5" key="index">
                <img :src="player.image" :alt="player.name" class="w-32 h-32 object-cover rounded-full pb-2"/>
                {{ player.name }} - {{ player.number }}
            </div>
        </div>
        </div>
    </div>
<Footer />
</template>

<style scoped>

</style>