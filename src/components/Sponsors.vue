<template>
  <section class="sponsors">
    <h2 class="sponsors-intro text-3xl md:text-4xl font-extrabold text-white text-center">
      Sponsors
    </h2>

    <!-- TOP ROW (scroll left) -->
    <div class="wrapper">
      <div
        v-for="(sponsor, i) in sponsorsTop"
        :key="sponsor.id"
        class="item"
        :style="itemStyle(i, sponsorsTop.length, 'left')"
      >
        <span>{{ sponsor.name }}</span>
      </div>
    </div>

    <!-- BOTTOM ROW (scroll right) -->
    <div class="wrapper">
      <div
        v-for="(sponsor, i) in sponsorsBottom"
        :key="sponsor.id"
        class="item reverse"
        :style="itemStyle(i, sponsorsBottom.length, 'right')"
      >
        <span>{{ sponsor.name }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type Sponsor = { id: string; name: string };

const sponsorsTop: Sponsor[] = [
  { id: 'maa-daiken', name: 'Maa Daiken' },
  { id: 'lotto-land', name: 'Lotto Land' },
  { id: 'eurosport', name: 'EuroSport' },
  { id: 'delicata', name: 'Delicata' },
  { id: 'gsd', name: 'GSD' },
  { id: 'nestle', name: 'Nestle' }
];

const sponsorsBottom: Sponsor[] = [
  { id: 'greens', name: 'Greens' },
  { id: 'il-pirata Senglea', name: 'Il Pirata Senglea' },
  { id: 'il-Pirata Valletta', name: 'Il Pirata Valletta' },
  { id: 'Mayfair laser clinic', name: 'Mayfair laser clinic' },
  { id: 'FGS', name: 'FGS' },
  // { id: 'sponsor-12', name: 'Sponsor 12' }
];

const ITEM_WIDTH = 200;
const DURATION = 30;

const itemStyle = (
  index: number,
  count: number,
  direction: 'left' | 'right'
) => {
  const delay = (DURATION / count) * (count - (index + 1)) * -1;

  return {
    animationDelay: `${delay}s`,
    [direction]: `max(calc(${ITEM_WIDTH}px * ${count}), 100%)`
  } as const;
};
</script>

<style scoped>
.wrapper {
  width: 90%;
  max-width: 1536px;
  margin-inline: auto;
  position: relative;
  height: 100px;
  overflow: hidden;
  margin-bottom: 1.5rem;
  mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1) 15%,
    rgba(0, 0, 0, 1) 85%,
    rgba(0, 0, 0, 0)
  );
}

.sponsors {
  background: #000;
  padding: 4rem 0;
}

/* LEFT SCROLL */
@keyframes scrollLeft {
  to {
    left: -200px;
  }
}

/* RIGHT SCROLL */
@keyframes scrollRight {
  to {
    right: -200px;
  }
}

.item {
  width: 200px;
  height: 70px;
  background-color: rgba(255, 255, 255, 0.06);
border: 1px solid rgba(255, 255, 255, 0.08);
backdrop-filter: blur(8px);  border-radius: 6px;
  position: absolute;

  animation: scrollLeft 30s linear infinite;

  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: white;
}

/* reverse row */
.reverse {
  animation: scrollRight 30s linear infinite;
}

.sponsors-intro {
  margin: 2rem 0;
}

.wrapper {
  margin-bottom: -1rem;
}
</style>