<script setup>
import fixtures from '../data/fixtures.json';
</script>

<template>
  <section class="min-h-screen bg-white px-6 py-20">
    <div class="max-w-5xl mx-auto">
      <h1 class="text-4xl font-extrabold text-center text-gray-900 mb-4">
        Fixtures
      </h1>

      <p class="text-center text-gray-500 mb-12">
        San Ġiljan ASC Summer League 2026
      </p>

      <div class="grid gap-5">
        <div
          v-for="fixture in fixtures"
          :key="`${fixture.date}-${fixture.time}-${fixture.homeTeam}`"
          class="rounded-2xl border border-gray-200 shadow-sm p-5 bg-white"
        >
          <div class="flex justify-between items-center mb-3">
            <span class="text-sm font-bold text-red-900">
              {{ fixture.competition }}
            </span>

            <span class="text-sm text-gray-500">
              {{ fixture.date }} · {{ fixture.time }}
            </span>
          </div>

          <div class="grid grid-cols-3 items-center text-center">
            <h2 class="font-bold text-lg text-gray-900">
              {{ fixture.homeTeam }}
            </h2>

            <span class="font-extrabold text-red-900">
              VS
            </span>

            <h2 class="font-bold text-lg text-gray-900">
              {{ fixture.awayTeam }}
            </h2>
          </div>

          <p class="text-center text-sm text-gray-400 mt-3">
            {{ fixture.day }} · Match Day {{ fixture.matchDay }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>