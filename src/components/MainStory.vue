<template>
  <section class="relative overflow-hidden bg-black text-white">
    <!-- Subtle background texture -->
    <div class="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_55%)]"></div>

    <!-- Content -->
    <div class="relative max-w-6xl mx-auto px-6 py-24 space-y-24">
      <!-- Header -->
      <div class="text-center max-w-3xl mx-auto">
        <p class="uppercase tracking-[0.35em] text-white/60 text-sm">
          San Ġiljan ASC
        </p>
        <h2 class="mt-3 text-4xl md:text-5xl font-extrabold">
          Built on tradition. Driven by ambition.
        </h2>
        <p class="mt-4 text-white/70 text-lg leading-relaxed">
          From championship nights to developing Malta’s finest talent — the story continues,
          season after season.
        </p>
      </div>

      <!-- Story Block 1 -->
      <div class="group grid lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-6">
          <!-- Belgium accent line -->
          <div class="flex items-center gap-2">
            <span class="h-1 w-10 bg-yellow-400 rounded-full"></span>
            <span class="h-1 w-10 bg-red-500 rounded-full"></span>
            <span class="h-1 w-10 bg-white/80 rounded-full"></span>
          </div>

          <h3 class="text-3xl md:text-4xl font-extrabold leading-tight">
            Malta’s Dominant Force in Water Polo
          </h3>

          <p class="text-white/70 text-lg leading-relaxed">
            San Ġiljan ASC has dominated the stage in recent years, establishing itself as a powerhouse
            with multiple championships — powered by relentless dedication and unmatched teamwork.
          </p>

          <div class="inline-flex items-center gap-3 text-sm text-white/70">
            <span class="h-2 w-2 rounded-full bg-yellow-400"></span>
            <span>Championship mentality • Elite standards • Club pride</span>
          </div>
        </div>

        <div class="relative">
          <div class="absolute -inset-2 rounded-3xl bg-gradient-to-r from-yellow-400/20 via-red-500/15 to-white/10 blur-xl opacity-70 group-hover:opacity-100 transition"></div>
          <img
            src="../assets/fans1.jpg"
            alt="San Ġiljan ASC winning trophy"
            class="relative rounded-3xl shadow-2xl object-cover w-full h-72 md:h-96
                   ring-1 ring-white/10 transition duration-500 group-hover:scale-[1.02]"
          />
        </div>
      </div>

      <!-- Story Block 2 -->
      <div class="group grid lg:grid-cols-2 gap-12 items-center">
        <div class="relative order-2 lg:order-1">
          <div class="absolute -inset-2 rounded-3xl bg-gradient-to-r from-white/10 via-red-500/15 to-yellow-400/20 blur-xl opacity-70 group-hover:opacity-100 transition"></div>
          <img
            src="../assets/russel.jpg"
            alt="San Ġiljan ASC players training"
            class="relative rounded-3xl shadow-2xl object-cover w-full h-72 md:h-96
                   ring-1 ring-white/10 transition duration-500 group-hover:scale-[1.02]"
          />
        </div>

        <div class="space-y-6 order-1 lg:order-2">
          <div class="flex items-center gap-2">
            <span class="h-1 w-10 bg-white/80 rounded-full"></span>
            <span class="h-1 w-10 bg-yellow-400 rounded-full"></span>
            <span class="h-1 w-10 bg-red-500 rounded-full"></span>
          </div>

          <h3 class="text-3xl md:text-4xl font-extrabold leading-tight">
            Nurturing Maltese Water Polo Talent
          </h3>

          <p class="text-white/70 text-lg leading-relaxed">
            Proud developers of Malta’s finest athletes — many now playing abroad for top foreign clubs
            and representing the national team on the world stage.
          </p>

          <div class="inline-flex items-center gap-3 text-sm text-white/70">
            <span class="h-2 w-2 rounded-full bg-red-500"></span>
            <span>Youth development • Discipline • Professional pathways</span>
          </div>
        </div>
      </div>

      <!-- Story Block 3 -->
      <div class="group grid lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-6">
          <div class="flex items-center gap-2">
            <span class="h-1 w-10 bg-red-500 rounded-full"></span>
            <span class="h-1 w-10 bg-white/80 rounded-full"></span>
            <span class="h-1 w-10 bg-yellow-400 rounded-full"></span>
          </div>

          <h3 class="text-3xl md:text-4xl font-extrabold leading-tight">
            A Family Like No Other
          </h3>

          <p class="text-white/70 text-lg leading-relaxed">
            San Ġiljan ASC isn’t just a club — it’s a family. The most loyal and passionate supporters,
            united with the players by an unbreakable bond.
          </p>

          <div class="inline-flex items-center gap-3 text-sm text-white/70">
            <span class="h-2 w-2 rounded-full bg-white/80"></span>
            <span>Community • Loyalty • Identity</span>
          </div>
        </div>

        <div class="relative">
          <div class="absolute -inset-2 rounded-3xl bg-gradient-to-r from-red-500/15 via-yellow-400/15 to-white/10 blur-xl opacity-70 group-hover:opacity-100 transition"></div>
          <img
            src="../assets/fansaway.jpg"
            alt="San Ġiljan ASC fans cheering"
            class="relative rounded-3xl shadow-2xl object-cover w-full h-72 md:h-96
                   ring-1 ring-white/10 transition duration-500 group-hover:scale-[1.02]"
          />
        </div>
      </div>
    </div>
  </section>
</template>