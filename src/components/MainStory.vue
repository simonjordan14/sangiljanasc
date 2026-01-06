<template>
  <main class="bg-pink text-gray-900">

    <!-- Belgium Divider -->
    <div class="bg-black">
      <SectionDivider />
    </div>

    <section class="max-w-6xl mx-auto px-6 py-16 space-y-20 bg-white">
      <!-- Section 1 -->
      <div class="flex flex-col md:flex-row items-center md:items-start gap-8">
        <div class="md:w-1/2">
          <h2 class="text-3xl md:text-4xl font-extrabold text-gray-600 mb-4">
            Malta’s Dominant Force in Water Polo
          </h2>
          <p class="text-lg md:text-xl leading-relaxed">
            San Ġiljan ASC has dominated the stage in recent years,
            establishing itself as a powerhouse with multiple championships,
            thanks to relentless dedication and unmatched teamwork.
          </p>
        </div>
        <div class="md:w-1/2">
          <img
            src="../assets/fans1.jpg"
            alt="San Ġiljan ASC winning trophy"
            class="rounded-lg shadow-lg object-cover w-full h-64 md:h-80"
          />
        </div>
      </div>

      <!-- Section 2 -->
      <div class="flex flex-col md:flex-row items-center md:items-start gap-8 md:flex-row-reverse">
        <div class="md:w-1/2">
          <img
            src="../assets/russel.jpg"
            alt="San Ġiljan ASC players training"
            class="rounded-lg shadow-lg object-cover w-full h-64 md:h-80"
          />
        </div>
        <div class="md:w-1/2">
          <h2 class="text-3xl md:text-4xl font-extrabold text-gray-600 mb-4">
            Nurturing Maltese Water Polo Talent
          </h2>
          <p class="text-lg md:text-xl leading-relaxed">
            Proud developers of Malta’s finest athletes, many of whom now play abroad
            for top foreign clubs and proudly represent the national team on the world stage.
          </p>
        </div>
      </div>

      <!-- Section 3 -->
      <div class="flex flex-col md:flex-row items-center md:items-start gap-8">
        <div class="md:w-1/2">
          <h2 class="text-3xl md:text-4xl font-extrabold text-gray-600 mb-4">
            A Family Like No Other
          </h2>
          <p class="text-lg md:text-xl leading-relaxed">
            San Ġiljan ASC isn’t just a club — it’s a massive family with the most loyal
            and passionate fanbase. Together, players and supporters create an unbreakable bond.
          </p>
        </div>
        <div class="md:w-1/2">
          <img
            src="../assets/fansaway.jpg"
            alt="San Ġiljan ASC fans cheering"
            class="rounded-lg shadow-lg object-cover w-full h-64 md:h-80"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import SectionDivider from '../components/SectionDivider.vue'
</script>
