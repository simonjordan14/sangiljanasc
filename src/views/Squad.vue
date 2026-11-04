
<script setup>
import { ref, watch, onUnmounted } from 'vue'

import PlayerCard from '../components/PlayerCard.vue'
import SectionDivider from '../components/SectionDivider.vue'
import staff from '../data/coaching-staff'

const selectedPlayer = ref(null)

const handlePlayerClick = (player) => {
  selectedPlayer.value = player
}

const closePlayer = () => {
  selectedPlayer.value = null
}

const handleKeydown = (event) => {
  if (event.key === 'Escape') closePlayer()
}

watch(selectedPlayer, (player) => {
  document.body.style.overflow = player ? 'hidden' : ''
})

onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>

<template>
  <main class="bg-[#0b1112] text-white">

    <!-- HERO -->
    <section class="relative overflow-hidden bg-[#101819]">
      <div
        class="absolute inset-0 bg-gradient-to-b
               from-black/20 to-[#101819]"
      ></div>

      <div class="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div class="mb-6 flex items-center gap-3">
          <span class="h-px w-10 bg-[#e5c47b]"></span>
          <span class="text-xs font-semibold uppercase tracking-[0.25em] text-[#e5c47b]">
            San Ġiljan ASC
          </span>
        </div>

        <h1 class="text-5xl font-bold tracking-tight md:text-7xl">
          Meet the
          <span class="text-[#e5c47b]">Team.</span>
        </h1>

        <p class="mt-6 max-w-xl text-base leading-8 text-gray-400">
          Meet the players and technical staff representing
          San Ġiljan ASC. United by passion, driven by excellence.
        </p>
      </div>

    </section>

    <!-- PLAYERS -->
    <section class="px-4 py-20 md:px-8">
      <div class="mx-auto max-w-7xl">

        <div class="mb-12">
          <p class="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#e5c47b]">
            The Squad
          </p>

          <h2 class="text-3xl font-bold md:text-5xl">
            Our <span class="text-[#e5c47b]">Players</span>
          </h2>

          <p class="mt-4 text-gray-400">
            The athletes representing our club in the pool.
            Select a player to learn more.
          </p>
        </div>

        <PlayerCard @player-click="handlePlayerClick" />
      </div>
    </section>

    <!-- TECHNICAL STAFF -->
    <section class="bg-[#141c1e] px-4 py-20 md:px-8">
      <div class="mx-auto max-w-7xl">

        <div class="mb-12">
          <p class="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#e5c47b]">
            Behind the Team
          </p>

          <h2 class="text-3xl font-bold md:text-5xl">
            Technical <span class="text-[#e5c47b]">Staff</span>
          </h2>

          <p class="mt-4 text-gray-400">
            The people guiding our players both in and out of the water.
          </p>
        </div>

        <div
          class="grid grid-cols-1 gap-6 sm:grid-cols-2
                 lg:grid-cols-3 xl:grid-cols-4"
        >
          <div
            v-for="person in staff"
            :key="person.name"
            class="group overflow-hidden rounded-2xl
                   border border-white/10 bg-[#0b1112]
                   transition duration-300
                   hover:-translate-y-1 hover:border-[#e5c47b]/50"
          >
            <div class="aspect-[4/5] overflow-hidden">
              <img
                :src="person.image"
                :alt="person.name"
                loading="lazy"
                class="h-full w-full object-cover
                       transition-transform duration-500
                       group-hover:scale-105"
              />
            </div>

            <div class="p-6">
              <div class="mb-3 h-0.5 w-10 bg-[#e5c47b]"></div>

              <h3 class="text-xl font-bold">
                {{ person.name }}
              </h3>

              <p class="mt-2 text-sm text-[#e5c47b]">
                {{ person.role }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PLAYER MODAL -->
    <div
      v-if="selectedPlayer"
      class="fixed inset-0 z-50 flex items-center
             justify-center bg-black/85 p-4 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      :aria-label="selectedPlayer.name"
      @keydown="handleKeydown"
      @click.self="closePlayer"
    >
      <div
        class="relative flex max-h-[90vh] w-full max-w-5xl
               flex-col overflow-y-auto rounded-2xl
               border border-white/10 bg-[#141c1e]
               shadow-2xl md:flex-row"
      >
        <!-- CLOSE -->
        <button
          type="button"
          class="absolute right-5 top-5 z-20 flex h-10 w-10
                 items-center justify-center rounded-full
                 bg-black/70 text-xl text-white
                 transition hover:bg-[#e5c47b] hover:text-black"
          aria-label="Close player details"
          @click="closePlayer"
        >
          ✕
        </button>

        <!-- IMAGE -->
        <div class="bg-[#080d0e] md:w-1/2">
          <img
            :src="selectedPlayer.image"
            :alt="selectedPlayer.name"
            class="h-full max-h-[65vh] w-full object-contain"
          />
        </div>

        <!-- DETAILS -->
        <div
          class="flex flex-col justify-center p-8
                 md:w-1/2 md:p-12"
        >
          <p class="mb-4 text-xs font-semibold uppercase tracking-widest text-[#e5c47b]">
            San Ġiljan ASC · First Team
          </p>

          <h2 class="text-3xl font-bold md:text-5xl">
            {{ selectedPlayer.name }}
          </h2>

          <p
            v-if="selectedPlayer.number != null"
            class="mt-3 text-2xl font-bold text-[#e5c47b]"
          >
            #{{ selectedPlayer.number }}
          </p>

          <div class="my-8 h-px w-full bg-white/10"></div>

          <p class="whitespace-pre-line text-base leading-8 text-gray-300">
            {{ selectedPlayer.description }}
          </p>
        </div>
      </div>
    </div>

  </main>
</template>
