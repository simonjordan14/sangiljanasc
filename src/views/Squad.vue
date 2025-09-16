<script setup>
import Nav from '../components/Nav.vue'
import { ref, nextTick } from 'vue';
import Footer from '../components/Footer.vue';
import PlayerCard from '../components/PlayerCard.vue';
import staff from '../data/coaching-staff';

const playerSummary = ref('');
const playerImage = ref('');
const showPlayer = ref(false);

const handlePlayerClick = async (player) => {
  playerSummary.value = player.description;
  playerImage.value = player.image;
  showPlayer.value = true;

  await nextTick();
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const closePlayer = () => {
  showPlayer.value = false;
};

</script>

<template>
  <Nav />

  <div class="squad-content">
    <h2 class="text-4xl font-bold text-gray-800 text-center my-8">Meet The Team</h2>

    <div class="py-10">
        <h3 class="text-3xl font-bold text-gray-800 text-center">Players</h3>
        <PlayerCard @player-click="handlePlayerClick" />
    </div>


    <h3 class="text-3xl font-bold text-gray-800 text-center my-8">Technical Staff</h3>

    <div class="flex flex-wrap justify-center">
    <div
      v-for="(person, index) in staff"
      :key="index"
      class="max-w-sm rounded overflow-hidden shadow-lg bg-white m-6 w-60"
    >
      <div class="h-80 overflow-hidden">
        <img
          class="w-full object-cover"
          :src="person.image"
          :alt="staff.name"
        />
      </div>
      <div class="px-6 py-4 text-center">
        <h2 class="text-xl font-semibold text-gray-800">{{ person.name }}</h2>
        <p class="text-gray-600">{{ person.role }}</p>
      </div>
    </div>
  </div>
  </div>

  <!-- Player Modal Overlay -->
  <div
    v-if="showPlayer"
    class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
  >
    <div
      class="bg-white rounded-lg shadow-lg relative w-full max-w-4xl flex flex-col md:flex-row overflow-hidden"
    >
      <!-- Close Button -->
      <button
        @click="closePlayer"
        class="absolute top-4 right-4 text-gray-500 hover:text-black text-xl font-bold"
      >
        ✕
      </button>

      <!-- Image -->
      <div class="md:w-1/2 flex items-center justify-center p-4">
        <img :src="playerImage" alt="Selected Player" class="rounded-lg max-h-[80vh] object-contain"/>
      </div>

      <!-- Text -->
      <div class="md:w-1/2 flex items-center justify-center p-6 text-center">
        <p class="text-lg">{{ playerSummary }}</p>
      </div>
    </div>
  </div>

  <Footer />
</template>
