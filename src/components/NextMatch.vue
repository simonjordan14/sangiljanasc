
<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import fixtures from '../data/fixtures.json'

// Current time, refreshed every minute.
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

const isSanGiljan = (name = '') => {
  const normalized = name.toLowerCase()

  return (
    normalized.includes('san giljan') ||
    normalized.includes('san ġiljan')
  )
}

const getTeamInitial = (name = '') => {
  if (isSanGiljan(name)) return 'STJ'

  return name.charAt(0).toUpperCase()
}

// Convert a Malta-local date/time into an absolute timestamp.
const getKickoffTimestamp = (date, time) => {
  const [year, month, day] = date.split('-').map(Number)
  const [hour, minute] = time.split(':').map(Number)

  const target = Date.UTC(
    year,
    month - 1,
    day,
    hour,
    minute
  )

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
      formatter
        .formatToParts(new Date(timestamp))
        .filter((part) => part.type !== 'literal')
        .map((part) => [
          part.type,
          Number(part.value)
        ])
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

// Automatically select the next upcoming match.
const nextMatch = computed(() => {
  return [...fixtures]
    .filter((match) => {
      const kickoff = getKickoffTimestamp(
        match.date,
        match.time
      )

      return kickoff > now.value
    })
    .sort((a, b) => {
      return (
        getKickoffTimestamp(a.date, a.time) -
        getKickoffTimestamp(b.date, b.time)
      )
    })[0] ?? null
})

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
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC'
  }).format(new Date(Date.UTC(year, month - 1, day)))
}
</script>

<template>
  <section class="next-match-section">
    <div class="section-glow"></div>

    <div class="relative z-10 mx-auto max-w-6xl px-5 sm:px-6">

      <!-- HEADING -->
      <div class="section-heading">
        <div>
          <div class="section-eyebrow">
            <span class="eyebrow-line"></span>
            THE NEXT CHALLENGE
          </div>

          <h2>
            NEXT <span>MATCH.</span>
          </h2>

          <p>
            The countdown is on. Stand behind San Ġiljan ASC.
          </p>
        </div>

        <router-link to="/fixtures" class="desktop-fixtures-link">
          ALL FIXTURES
          <span>↗</span>
        </router-link>
      </div>

      <!-- NEXT MATCH CARD -->
      <article v-if="nextMatch" class="match-card">

        <!-- TOP BAR -->
        <div class="card-top">
          <div class="card-top-left">
            <span class="competition-label">
              ENEMED CUP 2026/27
            </span>

            <span class="top-divider"></span>

            <span class="match-date">
              {{ formatDate(nextMatch.date) }}
            </span>
          </div>

          <span class="status-pill">
            <span class="status-dot"></span>
            UPCOMING
          </span>
        </div>

        <!-- MATCHUP -->
        <div class="matchup">

          <!-- HOME TEAM -->
          <div class="team team-home">
            <div
              class="team-badge"
              :class="{
                'san-giljan-badge': isSanGiljan(nextMatch.home)
              }"
            >
              <span
                :class="{
                  'san-giljan-initial': isSanGiljan(nextMatch.home)
                }"
              >
                {{ getTeamInitial(nextMatch.home) }}
              </span>
            </div>

            <span class="team-role">HOME</span>

            <h3
              :class="{
                'san-giljan-name': isSanGiljan(nextMatch.home)
              }"
            >
              {{ nextMatch.home }}
            </h3>
          </div>

          <!-- KICKOFF -->
          <div class="match-centre">
            <span class="kickoff-label">
              KICK OFF
            </span>

            <strong class="kickoff-time">
              {{ nextMatch.time }}
            </strong>

            <span class="vs-text">
              VS
            </span>
          </div>

          <!-- AWAY TEAM -->
          <div class="team team-away">
            <div
              class="team-badge"
              :class="{
                'san-giljan-badge': isSanGiljan(nextMatch.away)
              }"
            >
              <span
                :class="{
                  'san-giljan-initial': isSanGiljan(nextMatch.away)
                }"
              >
                {{ getTeamInitial(nextMatch.away) }}
              </span>
            </div>

            <span class="team-role">AWAY</span>

            <h3
              :class="{
                'san-giljan-name': isSanGiljan(nextMatch.away)
              }"
            >
              {{ nextMatch.away }}
            </h3>
          </div>
        </div>

        <!-- BOTTOM BAR -->
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
              aria-hidden="true"
            >
              <path
                d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"
              />
              <circle cx="12" cy="10" r="2.5" />
            </svg>

            {{ nextMatch.venue || 'Venue TBC' }}
          </div>

          <span class="bottom-date">
            {{ formatShortDate(nextMatch.date) }}
            · {{ nextMatch.time }}
          </span>
        </div>
      </article>

      <!-- NO UPCOMING MATCHES -->
      <div v-else class="empty-state">
        <div class="empty-icon">🏆</div>

        <h3>More matches coming soon.</h3>

        <p>
          The next fixture hasn't been announced yet.
          Check our full schedule for more information.
        </p>
      </div>

      <!-- MOBILE CTA -->
      <router-link to="/fixtures" class="mobile-fixtures-link">
        VIEW ALL FIXTURES
        <span>↗</span>
      </router-link>

    </div>
  </section>
</template>

<style scoped>
.next-match-section {
  position: relative;
  overflow: hidden;
  padding: 90px 0 110px;
  background: #080a0f;
  color: #fff;
}

.section-glow {
  position: absolute;
  top: -200px;
  left: -300px;
  width: 800px;
  height: 800px;
  background: radial-gradient(
    circle,
    rgba(220, 38, 38, 0.1),
    transparent 70%
  );
  pointer-events: none;
}

/* HEADING */
.section-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 30px;
  margin-bottom: 35px;
}

.section-eyebrow {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #f87171;
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 3px;
}

.eyebrow-line {
  width: 25px;
  height: 2px;
  background: #dc2626;
}

.section-heading h2 {
  margin-top: 18px;
  font-size: clamp(36px, 5vw, 58px);
  font-weight: 900;
  letter-spacing: -2px;
  line-height: 1.1;
}

.section-heading h2 span {
  color: #dc2626;
}

.section-heading p {
  margin-top: 18px;
  color: #9ca3af;
  font-size: 15px;
}

.desktop-fixtures-link {
  display: inline-flex;
  align-items: center;
  gap: 15px;
  padding: 15px 23px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 6px;
  color: #fff;
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 1.5px;
  text-decoration: none;
  white-space: nowrap;
  transition:
    background 0.3s ease,
    border-color 0.3s ease,
    transform 0.3s ease;
}

.desktop-fixtures-link:hover {
  background: rgba(220, 38, 38, 0.1);
  border-color: #dc2626;
  transform: translateY(-2px);
}

/* CARD */
.match-card {
  overflow: hidden;
  background: #11141b;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 18px;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

.match-card:hover {
  border-color: rgba(239, 68, 68, 0.4);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
}

/* TOP BAR */
.card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  padding: 20px 30px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.card-top-left {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
}

.competition-label {
  color: #f87171;
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 1.8px;
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
  padding: 8px 13px;
  border-radius: 30px;
  background: rgba(220, 38, 38, 0.1);
  border: 1px solid rgba(220, 38, 38, 0.25);
  color: #f87171;
  font-size: 9px;
  font-weight: 900;
  letter-spacing: 1px;
  white-space: nowrap;
}

.status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #ef4444;
}

/* MATCHUP */
.matchup {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 160px minmax(0, 1fr);
  align-items: center;
  gap: 25px;
  padding: 50px 40px;
}

.team {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-width: 0;
}

.team-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 95px;
  height: 95px;
  margin-bottom: 20px;
  border-radius: 50%;
  background: #1c2029;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.team-badge span {
  color: #6b7280;
  font-size: 36px;
  font-weight: 900;
}

.san-giljan-badge {
  background: rgba(220, 38, 38, 0.08);
  border-color: rgba(220, 38, 38, 0.3);
}

.team-badge span.san-giljan-initial {
  color: #f87171;
  font-size: 29px;
  letter-spacing: -1px;
}

.team-role {
  color: #6b7280;
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 2px;
}

.team h3 {
  margin-top: 12px;
  color: #fff;
  font-size: clamp(16px, 2vw, 23px);
  font-weight: 900;
  line-height: 1.3;
  overflow-wrap: anywhere;
}

.team h3.san-giljan-name {
  color: #f87171;
}

/* CENTRE */
.match-centre {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.kickoff-label {
  color: #6b7280;
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 2px;
}

.kickoff-time {
  margin-top: 12px;
  color: #fff;
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 900;
  letter-spacing: -2px;
}

.vs-text {
  margin-top: 8px;
  color: #ef4444;
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 3px;
}

/* BOTTOM BAR */
.card-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  padding: 20px 30px;
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
  flex-shrink: 0;
  color: #ef4444;
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
  border-radius: 18px;
  background: #11141b;
  border: 1px solid rgba(255, 255, 255, 0.08);
  text-align: center;
}

.empty-icon {
  margin-bottom: 20px;
  font-size: 40px;
}

.empty-state h3 {
  font-size: 25px;
  font-weight: 900;
}

.empty-state p {
  max-width: 420px;
  margin: 15px auto 0;
  color: #9ca3af;
  line-height: 1.7;
}

.mobile-fixtures-link {
  display: none;
}

/* TABLET */
@media (max-width: 900px) {
  .matchup {
    grid-template-columns: minmax(0, 1fr) 110px minmax(0, 1fr);
    gap: 15px;
    padding: 40px 20px;
  }

  .team-badge {
    width: 75px;
    height: 75px;
  }

  .team-badge span {
    font-size: 29px;
  }

  .team-badge span.san-giljan-initial {
    font-size: 23px;
  }
}

/* MOBILE */
@media (max-width: 600px) {
  .next-match-section {
    padding: 70px 0 85px;
  }

  .section-heading {
    margin-bottom: 25px;
  }

  .section-heading h2 {
    font-size: 40px;
  }

  .section-heading p {
    font-size: 14px;
  }

  .desktop-fixtures-link {
    display: none;
  }

  .card-top {
    padding: 17px;
  }

  .card-top-left {
    gap: 8px;
  }

  .top-divider {
    display: none;
  }

  .competition-label {
    font-size: 9px;
  }

  .match-date {
    font-size: 10px;
  }

  .status-pill {
    font-size: 8px;
    padding: 7px 9px;
  }

  .matchup {
    grid-template-columns: minmax(0, 1fr) 75px minmax(0, 1fr);
    gap: 5px;
    padding: 35px 10px;
  }

  .team-badge {
    width: 60px;
    height: 60px;
    margin-bottom: 15px;
  }

  .team-badge span {
    font-size: 25px;
  }

  .team-badge span.san-giljan-initial {
    font-size: 19px;
  }

  .team-role {
    font-size: 8px;
  }

  .team h3 {
    font-size: 12px;
  }

  .kickoff-label {
    font-size: 8px;
  }

  .kickoff-time {
    font-size: 25px;
    letter-spacing: -1px;
  }

  .vs-text {
    font-size: 10px;
  }

  .card-bottom {
    padding: 15px;
  }

  .venue-info {
    font-size: 11px;
  }

  .bottom-date {
    font-size: 10px;
  }

  .mobile-fixtures-link {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin-top: 25px;
    padding: 17px 25px;
    border-radius: 6px;
    background: #dc2626;
    color: #fff;
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 1.5px;
    text-decoration: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .match-card,
  .desktop-fixtures-link {
    transition: none;
  }
}
</style>
