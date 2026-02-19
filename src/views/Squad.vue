<script setup>
  import PlayerCard from '../components/PlayerCard.vue'
  import SectionDivider from '../components/SectionDivider.vue'
  
  import staff from '../data/coaching-staff'
  import { ref, nextTick } from 'vue'
  
  const playerSummary = ref('')
  const playerImage = ref('')
  const showPlayer = ref(false)
  
  const handlePlayerClick = async (player) => {
    playerSummary.value = player.description
    playerImage.value = player.image
    showPlayer.value = true
  
    await nextTick()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  
  const closePlayer = () => {
    showPlayer.value = false
  }
  </script>
  
  <template>
  
    <!-- HERO -->
    <section class="relative bg-black text-white">
      <div class="mx-auto max-w-6xl px-4 py-20 text-center">
        <h2 class="text-4xl font-bold tracking-tight">Meet The Team</h2>
        <p class="mt-4 text-white/80">
          Players and technical staff representing San Ġiljan ASC.
        </p>
      </div>
  
      <!-- Divider -->
      <SectionDivider />
    </section>
  
    <!-- CONTENT -->
    <section class="bg-white">
      <div class="mx-auto max-w-6xl px-4 py-16">
        <div class="py-6">
          <h3 class="text-3xl font-bold text-gray-800 text-center">Players</h3>
          <div class="mt-8">
            <PlayerCard @player-click="handlePlayerClick" />
          </div>
        </div>
  
        <h3 class="text-3xl font-bold text-gray-800 text-center my-10">Technical Staff</h3>
  
        <div class="flex flex-wrap justify-center">
          <div
            v-for="(person, index) in staff"
            :key="index"
            class="m-6 w-60 max-w-sm overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg"
          >
            <div class="h-80 overflow-hidden">
              <img
                class="h-full w-full object-cover"
                :src="person.image"
                :alt="person.name"
                loading="lazy"
              />
            </div>
  
            <div class="px-6 py-4 text-center">
              <h2 class="text-xl font-semibold text-gray-800">{{ person.name }}</h2>
              <p class="text-gray-600">{{ person.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    <!-- Player Modal Overlay -->
    <div
      v-if="showPlayer"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
    >
      <div
        class="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-lg flex flex-col md:flex-row"
      >
        <!-- Close Button -->
        <button
          @click="closePlayer"
          class="absolute right-4 top-4 text-xl font-bold text-gray-500 hover:text-black"
          aria-label="Close"
        >
          ✕
        </button>
  
        <!-- Image -->
        <div class="flex items-center justify-center p-4 md:w-1/2">
          <img
            :src="playerImage"
            alt="Selected Player"
            class="max-h-[80vh] rounded-xl object-contain"
          />
        </div>
  
        <!-- Text -->
        <div class="flex items-center justify-center p-6 text-center md:w-1/2">
          <p class="text-lg">{{ playerSummary }}</p>
        </div>
      </div>
    </div>
  
  </template>
  