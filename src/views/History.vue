<!-- src/pages/History.vue -->
<template>
    <main class="bg-white">
      <!-- Hero -->
      <section class="relative overflow-hidden">
        <!-- Replace with your import / asset -->
        <img
          :src="historyCollage"
          alt="San Ġiljan ASC history collage"
          class="h-[420px] w-full object-cover"
        />
        <div class="absolute inset-0 bg-black/55" />
  
        <div class="absolute inset-0 flex items-center">
          <div class="mx-auto w-full max-w-6xl px-6">
            <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Our History
            </h1>
            <p class="mt-4 max-w-3xl text-base leading-relaxed text-white/90 sm:text-lg">
              From humble beginnings in 1949 to becoming one of Malta’s most successful waterpolo clubs.
            </p>
          </div>
        </div>
      </section>
  
      <!-- Content -->
      <section class="mx-auto max-w-6xl px-6 py-14 sm:py-16">
        <div class="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <!-- Story -->
          <article class="space-y-6 text-gray-800">
            <h2 class="text-2xl font-bold tracking-tight">A legacy built in Balluta</h2>
  
            <p class="leading-relaxed">
              Founder <strong>Guzi Tanti</strong> gathered around him a group of boys, founding a waterpolo team by the
              name of <strong>Balluta</strong> that in <strong>1949</strong> participated for the first time in the
              National Waterpolo League.
            </p>
  
            <p class="leading-relaxed">
              The Club won its first League title and Double in <strong>1952</strong>.
            </p>
  
            <p class="leading-relaxed">
              The Female Squad of the Club also won several titles since it was established back in <strong>1977</strong>.
              The Club participated in overseas tournaments not less than seven times and organizes an annual
              International Waterpolo Tournament for both males and females.
            </p>
  
            <p class="leading-relaxed">
              The Club had amongst its ranks some of the best players to ever play the game on the island such as
              <strong>Freddie Grixti</strong> and <strong>Kurt Dowling</strong>, the latter winning for three consecutive
              years the player of the year award.
            </p>
  
            <p class="leading-relaxed">
              San Ġiljan ASC has also brought over as the senior team’s foreigner some of the best players in the world
              including world stars and Olympic gold medal winners <strong>Igor Milanovic</strong>,
              <strong>Peter Biros</strong> and <strong>Dubravko Simenc</strong>.
            </p>
  
            <p class="leading-relaxed">
              It is also the proud holder of an unbeaten record of <strong>32 matches</strong>.
            </p>
  
            <p class="leading-relaxed">
              The Committee of San Ġiljan ASC is very well on the way of culminating a long term plan which aims at
              embellishing the Club House and Hospitality premises, further establish the Club Squad as a top team in the
              Premier Division League while also establishing the Club’s junior sector as one of the best on the island.
            </p>
          </article>
  
          <!-- Highlights / Timeline -->
          <aside class="space-y-6">
            <div class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 class="text-lg font-bold tracking-tight text-gray-900">Highlights</h3>
  
              <ul class="mt-5 space-y-4">
                <li class="flex gap-3">
                  <span class="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-gray-900" />
                  <div>
                    <p class="font-semibold text-gray-900">1949</p>
                    <p class="text-sm text-gray-600">First participation in the National Waterpolo League.</p>
                  </div>
                </li>
  
                <li class="flex gap-3">
                  <span class="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-gray-900" />
                  <div>
                    <p class="font-semibold text-gray-900">1952</p>
                    <p class="text-sm text-gray-600">First League title and Double.</p>
                  </div>
                </li>
  
                <li class="flex gap-3">
                  <span class="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-gray-900" />
                  <div>
                    <p class="font-semibold text-gray-900">1977</p>
                    <p class="text-sm text-gray-600">Female squad established; multiple titles since.</p>
                  </div>
                </li>
  
                <li class="flex gap-3">
                  <span class="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-gray-900" />
                  <div>
                    <p class="font-semibold text-gray-900">Overseas</p>
                    <p class="text-sm text-gray-600">Overseas tournaments on 7+ occasions; hosts an annual international tournament.</p>
                  </div>
                </li>
  
                <li class="flex gap-3">
                  <span class="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-gray-900" />
                  <div>
                    <p class="font-semibold text-gray-900">32 matches</p>
                    <p class="text-sm text-gray-600">Proud holder of an unbeaten run.</p>
                  </div>
                </li>
              </ul>
            </div>
  
            <!-- Optional small image card (if you want the image again) -->
            <div class="rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <p class="text-sm font-semibold text-gray-900">Long-term vision</p>
              <p class="mt-2 text-sm leading-relaxed text-gray-600">
                Enhancing the Club House & hospitality premises, strengthening the senior squad in the Premier Division,
                and building one of the strongest junior sectors on the island.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  </template>
  
  <script setup>
    import historyCollage from "../assets/images/historycollage.jpg";
  </script>