<template >
    <div >
        <h2 class="sponsors-intro text-3xl md:text-4xl font-extrabold text-gray-600 text-center">
  Sponsors
</h2>
    </div>
<div class="wrapper">
    <div class="item item1 text-center">
        <span>Maa Daiken</span>
    </div>
  <div class="item item2 text-center">        
        <span>Lotto Land</span>
  </div>
  <div class="item item3 text-center">
    <span>EuroSport</span>
    </div>
  <div class="item item4 text-center">
    <span>Delicata</span>
</div>
  <div class="item item5 text-center">
    <span>GSD</span>
</div>
  <div class="item item6 text-center">
    <span>Nestle</span>
</div>
  <div class="item item7 text-center">
    <span>Greens</span>
</div>
  <div class="item item8 text-center">
    <span>Pirata</span>
</div>
</div>
</template>

<script setup>
</script>

<style scoped>*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

.wrapper {
  width: 90%;
  max-width: 1536px;
  margin-inline: auto;
  position: relative;
  height: 100px;
  overflow: hidden;
  margin-bottom: 2rem;
  mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1) 20%,
    rgba(0, 0, 0, 1) 80%,
    rgba(0, 0, 0, 0)
  );
}

@keyframes scrollLeft {
  to {
    left: -200px;
  }
}

.item {
  width: 200px;
  height: 100px;
  background-color: rgba(97, 93, 95, 0.8);
  border-radius: 6px;
  position: absolute;
  left: max(calc(200px * 8), 100%);
  animation-name: scrollLeft;
  animation-duration: 30s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  display:flex;
  flex-direction: column;
    justify-content: center;
}

.item1 {
  animation-delay: calc(30s / 8 * (8 - 1) * -1);
}

.item2 {
  animation-delay: calc(30s / 8 * (8 - 2) * -1);
}

.item3 {
  animation-delay: calc(30s / 8 * (8 - 3) * -1);
}

.item4 {
  animation-delay: calc(30s / 8 * (8 - 4) * -1);
}

.item5 {
  animation-delay: calc(30s / 8 * (8 - 5) * -1);
}

.item6 {
  animation-delay: calc(30s / 8 * (8 - 6) * -1);
}

.item7 {
  animation-delay: calc(30s / 8 * (8 - 7) * -1);
}

.item8 {
  animation-delay: calc(30s / 8 * (8 - 8) * -1);
}

.sponsors-intro {
  margin: 2rem 0;
}
</style>