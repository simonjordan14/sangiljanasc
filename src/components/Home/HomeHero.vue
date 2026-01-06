<script setup>
    import SectionDivider from '../SectionDivider.vue'
    import Nav from './Nav.vue'
    
    // Change this to your real file path
    const heroImage = '../../assetsflagbg.png'
    </script>
    
    <template>
      <section class="relative bg-black text-white">
        <!-- Background image + overlay -->
        <div class="absolute inset-0">
          <img
            :src="heroImage"
            alt="San Ġiljan ASC"
            class="h-full w-full object-cover opacity-90"
          />
          <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/85"></div>
        </div>
    
        <!-- Content -->
        <div class="relative mx-auto max-w-6xl px-4 py-24 sm:py-32">
          <div class="text-center">
            <h1 class="text-4xl font-bold tracking-tight sm:text-6xl">
              San Ġiljan ASC
            </h1>
    
            <p class="mx-auto mt-5 max-w-2xl text-base text-white/80 sm:text-lg">
              Founded in 1949. Built in Balluta. Driven by tradition, community, and ambition.
            </p>
    
            <!-- CTAs -->
            <div class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <RouterLink
                to="/squad"
                class="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black shadow-sm transition hover:bg-white/90"
              >
                View Squad
              </RouterLink>
    
              <RouterLink
                to="/about"
                class="inline-flex items-center justify-center rounded-xl border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                About the Club
              </RouterLink>
            </div>
    
            <!-- Scroll hint (optional) -->
            <div class="mt-14 text-xs text-white/60">
              Scroll to explore
              <div class="mx-auto mt-2 h-8 w-5 rounded-full border border-white/25">
                <div class="mx-auto mt-2 h-2 w-1 rounded-full bg-white/60"></div>
              </div>
            </div>
          </div>
        </div>
    
        <!-- Divider -->
        <SectionDivider />
      </section>
    </template>
    