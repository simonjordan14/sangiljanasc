
<script setup>
import players from '../data/players'

const emit = defineEmits(['player-click'])

const handleClick = (player) => {
  emit('player-click', player)
}
</script>

<template>
  <div
    class="grid grid-cols-2 gap-4
           sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5
           md:gap-6"
  >
    <button
      v-for="(player, index) in players"
      :key="player.name || index"
      type="button"
      class="group relative aspect-[3/4] overflow-hidden
             rounded-2xl border border-white/10
             bg-[#141c1e] text-left shadow-xl
             transition-all duration-300
             hover:-translate-y-1 hover:border-[#e5c47b]/60
             focus-visible:outline focus-visible:outline-2
             focus-visible:outline-offset-2
             focus-visible:outline-[#e5c47b]"
      :aria-label="`View ${player.name} details`"
      @click="handleClick(player)"
    >
      <!-- PLAYER IMAGE -->
      <img
        :src="player.image"
        :alt="player.name"
        loading="lazy"
        class="absolute inset-0 h-full w-full object-cover
               transition-transform duration-500
               group-hover:scale-110"
      />

      <!-- GRADIENT -->
      <div
        class="absolute inset-0 bg-gradient-to-t
               from-black via-black/25 to-transparent"
      ></div>

      <!-- PLAYER NUMBER -->
      <div
        v-if="player.number != null"
        class="absolute left-4 top-4 rounded-lg
               border border-white/20 bg-black/50
               px-3 py-2 text-lg font-bold
               text-[#e5c47b] backdrop-blur-sm"
      >
        {{ player.number }}
      </div>

      <!-- PLAYER DETAILS -->
      <div class="absolute inset-x-0 bottom-0 p-4 md:p-5">
        <div class="mb-3 h-0.5 w-8 bg-[#e5c47b]"></div>

        <h3 class="text-base font-bold leading-tight text-white md:text-xl">
          {{ player.name }}
        </h3>

        <p class="mt-2 text-xs font-medium uppercase tracking-widest text-[#e5c47b]">
          San Ġiljan ASC
        </p>

        <div
          class="mt-3 flex items-center gap-2
                 text-xs text-gray-300 transition-colors
                 group-hover:text-white"
        >
          View Profile
          <span aria-hidden="true">→</span>
        </div>
      </div>
    </button>
  </div>
</template>
