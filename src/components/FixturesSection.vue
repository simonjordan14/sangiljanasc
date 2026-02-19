<template>
            <SectionDivider />
    <section class="bg-gray-50 py-20">
      <div class="mx-auto max-w-6xl px-6">
        <!-- Title -->
        <div class="text-center">
          <h2 class="text-4xl font-extrabold tracking-tight text-gray-900">Fixtures</h2>
          <p class="mt-3 text-lg text-gray-600">Upcoming matches.</p>
        </div>
  
        <!-- Date groups -->
        <div class="mt-12 space-y-10">
          <div
            v-for="group in groupedFixtures"
            :key="group.dateLabel"
            class="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm"
          >
            <!-- Date header -->
            <div class="px-6 py-5">
              <h3 class="text-2xl font-bold text-gray-900">{{ group.dateLabel }}</h3>
            </div>
            <div class="h-px bg-gray-200"></div>
  
            <!-- Matches -->
            <div class="divide-y divide-gray-200">
              <div
                v-for="match in group.matches"
                :key="match.id"
                class="flex items-center gap-6 px-6 py-6"
              >
                <!-- Icon -->
                <img
                  :src="fixtureIcon"
                  alt="Fixture icon"
                  class="h-14 w-14 rounded-full shadow-sm"
                />
  
                <!-- Teams -->
                <div class="flex-1">
                  <div class="flex items-center gap-4">
                    <div class="text-xl font-semibold text-gray-900">{{ match.home }}</div>
                    <span class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-sm font-bold text-gray-800">
                      VS
                    </span>
                    <div class="text-xl font-semibold text-gray-900">{{ match.away }}</div>
                  </div>
  
                  <div class="mt-1 text-sm text-gray-500">{{ match.venue }}</div>
                </div>
  
                <!-- Time / Venue -->
                <div class="text-right">
                  <div class="text-2xl font-extrabold text-gray-900">{{ match.time }}</div>
                  <div class="mt-1 text-sm text-gray-500">{{ match.venue }}</div>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Empty state -->
          <div
            v-if="!fixtures.length"
            class="rounded-3xl border border-gray-200 bg-white p-10 text-center text-gray-600"
          >
            No fixtures available yet.
          </div>
        </div>
  
        <!-- CTA -->
        <!-- <div class="mt-12 text-center">
          <router-link
            to="/contact"
            class="inline-flex items-center justify-center rounded-full bg-black px-8 py-3 font-semibold text-white hover:bg-gray-800 transition"
          >
            Contact Us
          </router-link>
        </div> -->
      </div>
    </section>
  </template>
  
  <script setup>
  import fixtures from '../data/fixtures.json'
  import fixtureIcon from '../assets/images/fixtureslogo.png'
  import SectionDivider from './SectionDivider.vue'
  
  const groupedFixtures = fixtures.reduce((acc, match) => {
    const found = acc.find((g) => g.dateLabel === match.dateLabel)
    if (found) {
      found.matches.push(match)
    } else {
      acc.push({ dateLabel: match.dateLabel, matches: [match] })
    }
    return acc
  }, [])
  
  </script>