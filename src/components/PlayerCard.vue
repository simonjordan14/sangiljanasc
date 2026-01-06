<script setup>
  import players from "../data/players";
  import clubBadge from "../assets/stjlogo.png";

  
  const emit = defineEmits(["player-click"]);
  
  const handleClick = (player) => {
    emit("player-click", player);
  };
  </script>
  
  <template>
    <div class="pt-5 flex justify-center">
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0 w-full">
        <button
          v-for="(player, index) in players"
          :key="index"
          type="button"
          @click="handleClick(player)"
          class="group relative w-full aspect-square overflow-hidden rounded-none shadow-lg
                 border border-white/10 hover:border-white/70
                 transition-all duration-300 focus:outline-none"
        >
          <!-- Player Image -->
          <img
            :src="player.image"
            :alt="player.name"
            class="absolute inset-0 h-full w-full object-cover
                   transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
  

  
          <!-- Club badge -->
          <img
            :src="clubBadge"
            alt="San Ġiljan ASC"
            class="absolute top-3 left-3 h-8 w-8 opacity-90
                   drop-shadow-md transition-opacity duration-300
                   group-hover:opacity-100"
          />
  
          <!-- Hover text -->
          <div
            class="absolute inset-0 flex items-end p-3 opacity-0
                   transition-opacity duration-200 group-hover:opacity-100"
          >
            <div
              class="w-full rounded-xl bg-black/60 backdrop-blur-sm
                     px-3 py-2 text-left"
            >
              <div class="text-white font-bold leading-tight">
                {{ player.name }}
              </div>
              <div class="text-white/90 text-sm font-semibold">
                #{{ player.number }}
              </div>
            </div>
          </div>
  
          <!-- Mobile fallback (always visible text) -->
          <div
            class="absolute inset-0 flex items-end p-3 md:hidden"
          >
            <div
              class="w-full rounded-xl bg-black/50 backdrop-blur-sm
                     px-3 py-2 text-left"
            >
              <div class="text-white font-bold leading-tight">
                {{ player.name }}
              </div>
              <div class="text-white/90 text-sm font-semibold">
                #{{ player.number }}
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  </template>
  