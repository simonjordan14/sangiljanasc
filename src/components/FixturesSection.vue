
<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import fixtures from '../data/fixtures.json'
import fixtureIcon from '../assets/images/fixtureslogo.png'

const now = ref(Date.now())
let intervalId

onMounted(() => {
  intervalId = window.setInterval(() => {
    now.value = Date.now()
  }, 60000)
})

onUnmounted(() => {
  window.clearInterval(intervalId)
})

const isSanGiljan = (name = '') =>
  name.toLowerCase().includes('san giljan') ||
  name.toLowerCase().includes('san ġiljan')

const sortedFixtures = computed(() =>
  [...fixtures].sort((a, b) =>
    `${a.date}T${a.time}`.localeCompare(`${b.date}T${b.time}`)
  )
)

const formatDate = (date) => {
  const [year, month, day] = date.split('-').map(Number)

  return new Intl.DateTimeFormat('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC'
  }).format(new Date(Date.UTC(year, month - 1, day)))
}

const formatShortDate = (date) => {
  const [year, month, day] = date.split('-').map(Number)

  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    timeZone: 'UTC'
  }).format(new Date(Date.UTC(year, month - 1, day)))
}

// Malta is UTC+1 in winter and UTC+2 in summer.
// Use Intl to calculate the correct offset.
const getKickoffTimestamp = (date, time) => {
  const [year, month, day] = date.split('-').map(Number)
  const [hour, minute] = time.split(':').map(Number)

  const target = Date.UTC(year, month - 1, day, hour, minute)

  const formatter = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Malta',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23'
  })

  let timestamp = target

  for (let i = 0; i < 3; i++) {
    const parts = Object.fromEntries(
      formatter.formatToParts(new Date(timestamp))
        .filter((part) => part.type !== 'literal')
        .map((part) => [part.type, Number(part.value)])
    )

    const represented = Date.UTC(
      parts.year,
      parts.month - 1,
      parts.day,
      parts.hour,
      parts.minute
    )

    timestamp += target - represented
  }

  return timestamp
}

const getStatus = (match) => {
  if (match.score != null && match.score !== '') {
    return 'FULL TIME'
  }

  const kickoff = getKickoffTimestamp(match.date, match.time)

  if (now.value < kickoff) return 'UPCOMING'

  if (now.value < kickoff + 2 * 60 * 60 * 1000) {
    return 'MATCH DAY'
  }

  return 'AWAITING RESULT'
}

const upcomingCount = computed(() =>
  sortedFixtures.value.filter(
    (match) => getStatus(match) === 'UPCOMING'
  ).length
)
</script>

<template>
  <main class="fixtures-page">
    <!-- Background decorations -->
    <div class="page-glow"></div>
    <div class="page-grid"></div>

    <div class="relative z-10 mx-auto max-w-6xl px-5 sm:px-6">

      <!-- HERO -->
      <header class="page-hero">
        <div class="eyebrow">
          <span class="eyebrow-line"></span>
          SAN ĠILJAN AQUATIC SPORTS CLUB
          <span class="eyebrow-line"></span>
        </div>

        <h1 class="hero-title">
          THE ROAD TO
          <span>VICTORY.</span>
        </h1>

        <p class="hero-description">
          Every match. Every moment. Every goal.
          Follow San Ġiljan ASC throughout the 2026/27 season.
        </p>

        <div class="hero-meta">
          <span class="competition-pill">
            <span class="red-dot"></span>
            ENEMED CUP 2026/27
          </span>

          <span class="fixture-counter">
            {{ upcomingCount }} UPCOMING MATCHES
          </span>
        </div>
      </header>

      <!-- FIXTURE SECTION -->
      <section class="fixtures-content">

        <div class="section-heading">
          <div>
            <p class="section-kicker">MATCH SCHEDULE</p>
            <h2>Upcoming <span>Fixtures</span></h2>
          </div>

          <div class="section-side">
            ALL TIMES IN MALTA LOCAL TIME
          </div>
        </div>

        <div v-if="sortedFixtures.length" class="fixture-list">
          <article
            v-for="(match, index) in sortedFixtures"
            :key="match.id"
            class="fixture-card"
          >
            <!-- Top bar -->
            <div class="card-top">
              <div class="card-top-left">
                <span class="match-number">
                  MATCH {{ String(index + 1).padStart(2, '0') }}
                </span>

                <span class="top-divider"></span>

                <span class="match-date">
                  {{ formatDate(match.date) }}
                </span>
              </div>

              <span
                class="status-pill"
                :class="{
                  'status-finished': getStatus(match) === 'FULL TIME',
                  'status-awaiting': getStatus(match) === 'AWAITING RESULT',
                  'status-matchday': getStatus(match) === 'MATCH DAY'
                }"
              >
                <span class="status-indicator"></span>
                {{ getStatus(match) }}
              </span>
            </div>

            <!-- Main matchup -->
            <div class="matchup">

              <!-- HOME -->
              <div class="team team-home">
                <div
                  class="crest-container"
                  :class="{ 'our-crest': isSanGiljan(match.home) }"
                >
                  <img
                    v-if="isSanGiljan(match.home)"
                    :src="fixtureIcon"
                    alt="San Ġiljan ASC crest"
                    class="crest-image"
                  />

                  <span v-else class="opponent-initial">
                    {{ match.home.charAt(0) }}
                  </span>
                </div>

                <div class="team-details">
                  <span class="team-role">HOME</span>

                  <h3
                    :class="{ 'our-team-name': isSanGiljan(match.home) }"
                  >
                    {{ match.home }}
                  </h3>
                </div>
              </div>

              <!-- CENTRE -->
              <div class="match-centre">
                <span class="centre-label">
                  {{ match.score ? 'FINAL RESULT' : 'KICK OFF' }}
                </span>

                <strong class="kickoff-time">
                  {{ match.score || match.time }}
                </strong>

                <span class="vs-text">VS</span>
              </div>

              <!-- AWAY -->
              <div class="team team-away">
                <div
                  class="crest-container"
                  :class="{ 'our-crest': isSanGiljan(match.away) }"
                >
                  <img
                    v-if="isSanGiljan(match.away)"
                    :src="fixtureIcon"
                    alt="San Ġiljan ASC crest"
                    class="crest-image"
                  />

                  <span v-else class="opponent-initial">
                    {{ match.away.charAt(0) }}
                  </span>
                </div>

                <div class="team-details">
                  <span class="team-role">AWAY</span>

                  <h3
                    :class="{ 'our-team-name': isSanGiljan(match.away) }"
                  >
                    {{ match.away }}
                  </h3>
                </div>
              </div>
            </div>

            <!-- Bottom bar -->
            <div class="card-bottom">
              <div class="venue-info">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"
                  />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>

                {{ match.venue || 'Venue TBC' }}
              </div>

              <span class="bottom-date">
                {{ formatShortDate(match.date) }} · {{ match.time }}
              </span>
            </div>
          </article>
        </div>

        <!-- EMPTY -->
        <div v-else class="empty-state">
          <h3>No fixtures announced yet.</h3>
          <p>Check back soon for the latest match schedule.</p>
        </div>
      </section>

      <!-- CTA -->
      <section class="bottom-cta">
        <div>
          <p class="section-kicker">MORE THAN A CLUB</p>

          <h2>STAND WITH <span>SAN ĠILJAN.</span></h2>

          <p>
            Show your support, follow the action and be part of
            the San Ġiljan family.
          </p>
        </div>

        <router-link to="/contact" class="cta-button">
          GET IN TOUCH
          <span>↗</span>
        </router-link>
      </section>

    </div>
  </main>
</template>

<style scoped>
.fixtures-page {
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  padding: 110px 0 90px;
  background: #080a0f;
  color: #fff;
}

.page-glow {
  position: absolute;
  top: -350px;
  right: -300px;
  width: 900px;
  height: 900px;
  background: radial-gradient(
    circle,
    rgba(220, 38, 38, 0.13) 0%,
    transparent 68%
  );
  pointer-events: none;
}

.page-grid {
  position: absolute;
  inset: 0;
  opacity: 0.025;
  background-image:
    linear-gradient(#fff 1px, transparent 1px),
    linear-gradient(90deg, #fff 1px, transparent 1px);
  background-size: 70px 70px;
  pointer-events: none;
}

/* HERO */
.page-hero {
  text-align: center;
  padding-bottom: 90px;
}

.eyebrow {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  color: #f87171;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 3px;
}

.eyebrow-line {
  width: 24px;
  height: 1px;
  background: #dc2626;
}

.hero-title {
  margin-top: 25px;
  font-size: clamp(45px, 7vw, 88px);
  line-height: 1.05;
  font-weight: 900;
  letter-spacing: -3px;
}

.hero-title span {
  display: block;
  color: #dc2626;
}

.hero-description {
  max-width: 520px;
  margin: 25px auto 0;
  color: #9ca3af;
  font-size: 16px;
  line-height: 1.8;
}

.hero-meta {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 25px;
  margin-top: 35px;
}

.competition-pill {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 11px 18px;
  background: rgba(220, 38, 38, 0.1);
  border: 1px solid rgba(220, 38, 38, 0.25);
  border-radius: 30px;
  color: #fca5a5;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1.5px;
}

.red-dot,
.status-indicator {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #ef4444;
}

.fixture-counter {
  color: #6b7280;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1.5px;
}

/* SECTION */
.section-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 30px;
}

.section-kicker {
  color: #ef4444;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 3px;
}

.section-heading h2 {
  margin-top: 12px;
  font-size: clamp(28px, 4vw, 42px);
  font-weight: 900;
  letter-spacing: -1px;
}

.section-heading h2 span {
  color: #ef4444;
}

.section-side {
  color: #6b7280;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.5px;
}

/* FIXTURE CARDS */
.fixture-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.fixture-card {
  overflow: hidden;
  background: #11141b;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  transition:
    border-color 0.3s ease,
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.fixture-card:hover {
  transform: translateY(-3px);
  border-color: rgba(239, 68, 68, 0.4);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
}

/* TOP BAR */
.card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  padding: 18px 30px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.card-top-left {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
}

.match-number {
  color: #ef4444;
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 2px;
}

.top-divider {
  width: 1px;
  height: 15px;
  background: rgba(255, 255, 255, 0.15);
}

.match-date {
  color: #9ca3af;
  font-size: 12px;
  font-weight: 600;
}

.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
  padding: 8px 12px;
  background: rgba(220, 38, 38, 0.09);
  border: 1px solid rgba(220, 38, 38, 0.2);
  border-radius: 30px;
  color: #f87171;
  font-size: 9px;
  font-weight: 900;
  letter-spacing: 1px;
}

.status-finished,
.status-awaiting {
  color: #9ca3af;
  background: rgba(156, 163, 175, 0.08);
  border-color: rgba(156, 163, 175, 0.15);
}

.status-finished .status-indicator,
.status-awaiting .status-indicator {
  background: #9ca3af;
}

.status-matchday {
  color: #fbbf24;
  background: rgba(251, 191, 36, 0.08);
  border-color: rgba(251, 191, 36, 0.2);
}

.status-matchday .status-indicator {
  background: #fbbf24;
}

/* MATCHUP */
.matchup {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 170px minmax(0, 1fr);
  align-items: center;
  gap: 25px;
  padding: 40px 45px;
}

.team {
  display: flex;
  align-items: center;
  gap: 20px;
  min-width: 0;
}

.team-away {
  flex-direction: row-reverse;
  text-align: right;
}

.crest-container {
  flex-shrink: 0;
  width: 82px;
  height: 82px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #1c2029;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.our-crest {
  background: rgba(220, 38, 38, 0.08);
  border-color: rgba(220, 38, 38, 0.3);
}

.crest-image {
  width: 62px;
  height: 62px;
  object-fit: contain;
}

.opponent-initial {
  color: #6b7280;
  font-size: 32px;
  font-weight: 900;
}

.team-details {
  min-width: 0;
}

.team-role {
  color: #6b7280;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 2px;
}

.team-details h3 {
  margin-top: 8px;
  color: #fff;
  font-size: clamp(15px, 2vw, 23px);
  font-weight: 900;
  line-height: 1.3;
  overflow-wrap: anywhere;
}

.team-details h3.our-team-name {
  color: #f87171;
}

/* CENTRE */
.match-centre {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.centre-label {
  color: #6b7280;
  font-size: 9px;
  font-weight: 900;
  letter-spacing: 2px;
}

.kickoff-time {
  margin-top: 10px;
  color: #fff;
  font-size: clamp(28px, 3vw, 40px);
  font-weight: 900;
  letter-spacing: -1px;
  white-space: nowrap;
}

.vs-text {
  margin-top: 5px;
  color: #dc2626;
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 3px;
}

/* BOTTOM BAR */
.card-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  padding: 17px 30px;
  background: rgba(255, 255, 255, 0.015);
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.venue-info {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #9ca3af;
  font-size: 12px;
  font-weight: 600;
}

.venue-info svg {
  color: #ef4444;
  flex-shrink: 0;
}

.bottom-date {
  color: #6b7280;
  font-size: 11px;
  font-weight: 600;
  white-space: nowrap;
}

/* EMPTY */
.empty-state {
  padding: 70px 25px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  background: #11141b;
  text-align: center;
}

.empty-state h3 {
  font-size: 24px;
  font-weight: 800;
}

.empty-state p {
  margin-top: 12px;
  color: #9ca3af;
}

/* CTA */
.bottom-cta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  margin-top: 100px;
  padding-top: 45px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.bottom-cta h2 {
  margin-top: 12px;
  font-size: clamp(25px, 3vw, 35px);
  font-weight: 900;
}

.bottom-cta h2 span {
  color: #ef4444;
}

.bottom-cta p:last-child {
  margin-top: 12px;
  color: #9ca3af;
  font-size: 14px;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-shrink: 0;
  padding: 17px 27px;
  border-radius: 6px;
  background: #dc2626;
  color: #fff;
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 1.5px;
  text-decoration: none;
  transition:
    background 0.3s ease,
    transform 0.3s ease;
}

.cta-button:hover {
  background: #b91c1c;
  transform: translateY(-3px);
}

/* TABLET */
@media (max-width: 900px) {
  .matchup {
    grid-template-columns: minmax(0, 1fr) 110px minmax(0, 1fr);
    gap: 15px;
    padding: 35px 20px;
  }

  .team,
  .team-away {
    flex-direction: column;
    text-align: center;
    gap: 15px;
  }

  .crest-container {
    width: 70px;
    height: 70px;
  }

  .crest-image {
    width: 52px;
    height: 52px;
  }
}

/* MOBILE */
@media (max-width: 600px) {
  .fixtures-page {
    padding: 75px 0 65px;
  }

  .page-hero {
    padding-bottom: 65px;
  }

  .hero-title {
    letter-spacing: -1.5px;
  }

  .hero-description {
    font-size: 14px;
  }

  .section-heading {
    align-items: start;
    flex-direction: column;
  }

  .card-top {
    padding: 15px;
  }

  .card-top-left {
    gap: 8px;
  }

  .match-date {
    font-size: 10px;
  }

  .top-divider {
    display: none;
  }

  .status-pill {
    font-size: 8px;
    padding: 7px 9px;
  }

  .matchup {
    grid-template-columns: minmax(0, 1fr) 80px minmax(0, 1fr);
    gap: 5px;
    padding: 30px 10px;
  }

  .crest-container {
    width: 55px;
    height: 55px;
  }

  .crest-image {
    width: 43px;
    height: 43px;
  }

  .opponent-initial {
    font-size: 24px;
  }

  .team-details h3 {
    font-size: 12px;
  }

  .team-role {
    font-size: 8px;
  }

  .kickoff-time {
    font-size: 24px;
  }

  .centre-label {
    font-size: 8px;
  }

  .card-bottom {
    padding: 14px 15px;
  }

  .bottom-date {
    font-size: 10px;
  }

  .venue-info {
    font-size: 11px;
  }

  .bottom-cta {
    align-items: flex-start;
    flex-direction: column;
    margin-top: 70px;
  }

  .cta-button {
    width: 100%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .fixture-card,
  .cta-button {
    transition: none;
  }
}
</style>
