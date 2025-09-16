<script setup>
import players from '../data/players';

// define the event the child will emit
const emit = defineEmits(["player-click"]);

const handleClick = (player) => {
  emit("player-click", player); // send player back to parent
};
</script>

<template>
  <div class="pt-5 flex justify-center">
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 px-10">
      <div
        v-for="(player, index) in players"
        :key="index"
        class="mb-5 cursor-pointer text-center"
        @click="handleClick(player)"
      >
        <img
          :src="player.image"
          :alt="player.name"
          class="w-32 h-32 object-cover rounded-full pb-2 mx-auto"
        />
        <div>
          <strong>{{ player.name }}</strong><br />
          #{{ player.number }}
        </div>
      </div>
    </div>
  </div>
</template>
