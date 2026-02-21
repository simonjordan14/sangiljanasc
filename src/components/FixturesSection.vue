<template>
    <section class="bg-gray-50 py-20">
      <div class="mx-auto max-w-6xl px-6">
        <!-- Title -->
        <div class="text-center">
          <h2 class="text-4xl font-extrabold tracking-tight text-gray-900">Fixtures</h2>
          <p class="mt-3 text-lg text-gray-600">Upcoming water polo fixtures and matches.</p>
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
  
            <!-- "Table" header -->
            <div class="px-6 py-4">
              <div
                class="grid grid-cols-2 gap-3 text-center text-xs font-bold uppercase tracking-wider text-gray-500
                       sm:grid-cols-4"
              >
                <div>Home</div>
                <div>Away</div>
                <div>Time</div>
                <div>Score</div>
              </div>
            </div>
            <div class="h-px bg-gray-200"></div>
  
            <!-- Rows -->
            <div class="divide-y divide-gray-200">
              <div
                v-for="match in group.matches"
                :key="match.id"
                class="px-6 py-6"
              >
                <div class="flex items-center gap-4">
                  <!-- Icon -->
                  <img
                    :src="fixtureIcon"
                    alt="Fixture icon"
                    class="h-12 w-12 rounded-full shadow-sm shrink-0"
                  />
  
                  <!-- Grid row -->
                  <div class="w-full">
                    <div
                      class="grid grid-cols-2 gap-3 text-center items-center
                             sm:grid-cols-4"
                    >
                      <!-- Home -->
                      <div class="font-semibold text-gray-900 text-base sm:text-lg">
                        <span
                          :class="isSanGiljan(match.home) ? 'sg-small' : ''"
                          class="inline-block"
                        >
                          {{ match.home }}
                        </span>
                      </div>
  
                      <!-- Away -->
                      <div class="font-semibold text-gray-900 text-base sm:text-lg">
                        <span
                          :class="isSanGiljan(match.away) ? 'sg-small' : ''"
                          class="inline-block"
                        >
                          {{ match.away }}
                        </span>
                      </div>
  
                      <!-- Time -->
                      <div class="font-extrabold text-gray-900 text-lg sm:text-xl">
                        {{ match.time }}
                      </div>
  
                      <!-- Score (defaults to TBC) -->
                      <div
                        class="font-extrabold text-gray-900 text-lg sm:text-xl"
                      >
                        {{ match.score ?? 'TBC' }}
                      </div>
                    </div>
  
                    <!-- Venue (full width, centered) -->
                    <div class="mt-2 text-center text-sm text-gray-500">
                      {{ match.venue }}
                    </div>
                  </div>
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
        <div class="mt-12 text-center">
          <router-link
            to="/contact"
            class="inline-flex items-center justify-center rounded-full bg-black px-8 py-3 font-semibold text-white hover:bg-gray-800 transition"
          >
            Contact Us
          </router-link>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import fixtures from '../data/fixtures.json'
  import fixtureIcon from '../assets/images/fixtureslogo.png'
  
  const groupedFixtures = fixtures.reduce((acc, match) => {
    const found = acc.find((g) => g.dateLabel === match.dateLabel)
    if (found) found.matches.push(match)
    else acc.push({ dateLabel: match.dateLabel, matches: [match] })
    return acc
  }, [])
  
  const isSanGiljan = (name = '') =>
    name.toLowerCase().includes('san ġiljan asc') ||
    name.toLowerCase().includes('san giljan asc')
  </script>
  
  <style scoped>
  /* make "San Ġiljan ASC" smaller + responsive */
  .sg-small {
    font-size: 0.95em;
  }
  @media (min-width: 640px) {
    .sg-small {
      font-size: 0.9em;
    }
  }
  </style>