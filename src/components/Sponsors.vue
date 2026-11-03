
<script setup lang="ts">
import { ref } from 'vue';

const videoRef = ref<HTMLVideoElement | null>(null);
const isPlaying = ref(false);

const sponsors = [
  { name: 'SportMalta', logo: '/sponsors/sportsmalta.jpeg' },
  { name: 'VisitMalta', logo: '/sponsors/visitmalta.jpeg' },
  { name: 'Daikin', logo: '/sponsors/daikin.jpeg' },
  { name: 'MeDirect', logo: '/sponsors/medirect.jpeg' },
];

const toggleVideo = async () => {
  const video = videoRef.value;
  if (!video) return;

  if (video.paused) {
    try {
      await video.play();
    } catch (error) {
      console.error('Video playback failed:', error);
    }
  } else {
    video.pause();
  }
};
</script>

<template>
  <section class="bg-[#0b1112] px-4 py-16 text-white md:px-8">
    <div
      class="mx-auto max-w-7xl rounded-3xl bg-[#151d1f] p-6 md:p-12"
    >
      <!-- Header -->
      <div class="mb-10 flex flex-col justify-between gap-6 lg:flex-row">
        <div>
          <p class="mb-5 text-sm uppercase tracking-widest text-[#e5c47b]">
            — Our Sponsors
          </p>

          <h2 class="text-4xl font-bold leading-tight md:text-6xl">
            Stronger together.
            <span class="block text-[#e5c47b]">
              On and off the water.
            </span>
          </h2>
        </div>

        <p class="max-w-sm text-sm leading-7 text-gray-300">
          Our sponsors play a vital role in supporting
          San Ġiljan ASC, helping us develop our athletes,
          facilities and community, both in and out of the pool.
        </p>
      </div>

      <!-- Video and overlapping card -->
      <div class="relative lg:min-h-[460px]">
        <!-- Video -->
        <div
          class="relative ml-auto aspect-video w-full overflow-hidden
                 rounded-2xl bg-black
                 lg:h-[450px] lg:w-[72%] lg:aspect-auto"
        >
        <video
          src="/videos/sponsors.mp4"
          class="h-full w-full object-cover"
          autoplay
          muted
          loop
          playsinline
          preload="metadata"
        />

          <!-- Play / Pause -->
          <!-- <button
            type="button"
            :aria-label="isPlaying ? 'Pause video' : 'Play video'"
            class="absolute bottom-6 right-6 flex h-16 w-16
                   items-center justify-center rounded-full
                   border-2 border-white bg-black/30
                   text-2xl text-white backdrop-blur-sm
                   transition hover:scale-110"
            @click="toggleVideo"
          >
            {{ isPlaying ? 'Ⅱ' : '▶' }}
          </button> -->
        </div>

        <!-- Sponsorship information -->
        <div
            class="relative z-10 -mt-4 rounded-2xl
                  bg-[#080e0f] p-7 shadow-2xl
                  lg:absolute lg:-left-8 lg:top-[65%]
                  lg:mt-0 lg:w-[58%] lg:-translate-y-1/2"
          >
          <div class="grid gap-6 sm:grid-cols-3">
            <div>
              <div class="mb-3 text-3xl text-[#e5c47b]">♧</div>
              <h3 class="mb-2 text-xs font-bold uppercase">
                Club Exposure
              </h3>
              <p class="text-xs leading-6 text-gray-400">
                Your brand seen across matches, events and media.
              </p>
            </div>

            <div class="sm:border-l sm:border-white/20 sm:pl-5">
              <div class="mb-3 text-3xl text-[#e5c47b]">▥</div>
              <h3 class="mb-2 text-xs font-bold uppercase">
                Community Impact
              </h3>
              <p class="text-xs leading-6 text-gray-400">
                Support local sport, youth development
                and our community.
              </p>
            </div>

            <div class="sm:border-l sm:border-white/20 sm:pl-5">
              <div class="mb-3 text-3xl text-[#e5c47b]">♧</div>
              <h3 class="mb-2 text-xs font-bold uppercase">
                Grow Together
              </h3>
              <p class="text-xs leading-6 text-gray-400">
                Help shape the next generation of athletes.
              </p>
            </div>
          </div>

          <a
            href="mailto:info@sangiljanasc.com?subject=Sponsorship%20Enquiry"
            class="mt-8 inline-flex items-center gap-5 rounded-full
                   bg-[#e5c47b] px-7 py-4 text-sm font-bold
                   text-[#101718] transition hover:bg-[#f3d998]"
          >
            BECOME A SPONSOR
            <span class="text-xl">→</span>
          </a>
        </div>
      </div>

      <!-- Sponsor logos -->
      <div
        class="mt-12 grid grid-cols-2 items-center gap-8
               border-t border-white/10 pt-10
               md:grid-cols-4"
      >
        <div
          v-for="sponsor in sponsors"
          :key="sponsor.name"
          class="flex min-h-20 items-center justify-center"
        >
          <img
            :src="sponsor.logo"
            :alt="sponsor.name"
            loading="lazy"
            class="max-h-16 w-full max-w-40 object-contain
                   transition duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>
  </section>
</template>
