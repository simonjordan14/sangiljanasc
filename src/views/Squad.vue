<script setup>
import Nav from '../components/Nav.vue'
import { ref } from 'vue';
import ImageSlider from '../components/ImageSlider.vue';
import Footer from '../components/Footer.vue';
import PlayerCard from '../components/PlayerCard.vue';


const summarySection = ref(null);
const playerSummary = ref('Click on a player to see their details!');
const playerImage = ref('../assets/squad/dean.jpg'); // default image
const showPlayer =  ref(false);

const imageSection = ref(null); // 👈 new ref for the image only


// When child emits an event, update state
const handlePlayerClick = async (player) => {
  playerSummary.value = player.description;
  playerImage.value = player.image;
  showPlayer.value = true;

  await nextTick();

  if (imageSection.value) {
    const elementTop = imageSection.value.getBoundingClientRect().top + window.scrollY;
    const offset = 100; // tweak to stop slightly below the image
    window.scrollTo({
      top: elementTop - offset,
      behavior: "smooth",
    });
  }
};


import coach from '../assets/squad/coach.jpg';
</script>

<template>
  <Nav />

  <!-- Player summary at top -->

  <div class="squad-content">
    <h2 class="text-4xl font-bold text-gray-800 text-center my-8">Meet The Team</h2>
    <h3 class="text-3xl font-bold text-gray-800 text-center my-8">Technical Staff</h3>

    <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white m-20">
      <div class="h-80 overflow-hidden">
        <img class="w-full object-cover" :src="coach" alt="Profile Image"/>
      </div>
      <div class="px-6 py-4 text-center">
        <h2 class="text-xl font-semibold text-gray-800">Giorgios</h2>
        <p class="text-gray-600">Head Coach</p>
      </div>
    </div>

    <h3 class="text-3xl font-bold text-gray-800 text-center">Players</h3>
    <!-- Pass handler to child -->
    <div v-if="showPlayer" class="squad-heading flex w-screen h-screen">
    <div class="flex w-1/2 h-full" ref="imageSection">
      <div class="m-auto w-3/4">
        <img :src="playerImage" alt="Selected Player" class="w-full h-auto" />
      </div>
    </div>
    <div class="flex w-1/2 h-full">
      <div class="m-auto text-center p-10 rounded-lg shadow-lg w-3/4">
        {{ playerSummary }}
      </div>
    </div>
  </div>
    <PlayerCard @player-click="handlePlayerClick" />
  </div>

  <Footer />
</template>
