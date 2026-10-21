
<template>
  <section class="services-section relative overflow-hidden py-24 md:py-32">
    <!-- Background decoration -->
    <div class="background-glow"></div>
    <div class="background-grid"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-6">
      <!-- Section heading -->
      <div class="text-center max-w-3xl mx-auto">
        <span class="section-eyebrow">
          SAN GILJAN ASC
        </span>

        <h2 class="mt-5 text-4xl md:text-6xl font-black tracking-tight text-white">
          BUILT FOR THE
          <span class="text-red-600"> WATER.</span>
        </h2>

        <p class="mt-6 text-gray-400 text-base md:text-lg leading-relaxed">
          From your first stroke to championship-level competition,
          discover your potential with San Giljan ASC.
          Two disciplines. One passion.
        </p>
      </div>

      <!-- Services -->
      <div class="mt-16 grid grid-cols-1 md:grid-cols-2 gap-7">

        <!-- Waterpolo -->
        <router-link
          to="/contact"
          class="service-card group"
        >
          <img
            src="../assets/images/xelshot.jpg"
            alt="San Giljan Waterpolo"
            class="service-image"
          />

          <div class="image-overlay"></div>

          <div class="card-content">
            <div class="flex items-center gap-3 mb-5">
              <span class="red-line"></span>
              <span class="category-label">01 / TEAM SPORT</span>
            </div>

            <h3 class="text-4xl md:text-5xl font-black text-white">
              WATERPOLO
            </h3>

            <p class="mt-4 text-gray-200 max-w-sm leading-relaxed">
              Strength. Strategy. Teamwork.
              Develop your skills and compete with a club
              driven by passion and sporting excellence.
            </p>

            <div class="card-action mt-8">
              <span>EXPLORE WATERPOLO</span>
              <span class="action-arrow">↗</span>
            </div>
          </div>
        </router-link>

        <!-- Swimming -->
        <router-link
          to="/contact"
          class="service-card group"
        >
          <img
            src="../assets/images/swimming.jpg"
            alt="San Giljan Swimming"
            class="service-image"
          />

          <div class="image-overlay"></div>

          <div class="card-content">
            <div class="flex items-center gap-3 mb-5">
              <span class="red-line"></span>
              <span class="category-label">02 / AQUATICS</span>
            </div>

            <h3 class="text-4xl md:text-5xl font-black text-white">
              SWIMMING
            </h3>

            <p class="mt-4 text-gray-200 max-w-sm leading-relaxed">
              Every champion starts somewhere.
              Build confidence, improve technique,
              and reach new milestones in the pool.
            </p>

            <div class="card-action mt-8">
              <span>EXPLORE SWIMMING</span>
              <span class="action-arrow">↗</span>
            </div>
          </div>
        </router-link>
      </div>

      <!-- Bottom CTA -->
      <div class="mt-16 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-white/10 pt-10">
        <div class="text-center md:text-left">
          <h3 class="text-2xl font-bold text-white">
            Ready to make a splash?
          </h3>
          <p class="mt-2 text-gray-400">
            Your journey with San Giljan ASC starts here.
          </p>
        </div>

        <router-link to="/contact" class="contact-button">
          JOIN THE CLUB
          <span class="ml-3">↗</span>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-section {
  background: #080a0f;
  color: white;
}

/* Subtle background glow */
.background-glow {
  position: absolute;
  width: 600px;
  height: 600px;
  top: -300px;
  right: -200px;
  background: radial-gradient(
    circle,
    rgba(185, 28, 28, 0.14),
    transparent 70%
  );
  pointer-events: none;
}

/* Decorative grid */
.background-grid {
  position: absolute;
  inset: 0;
  opacity: 0.035;
  background-image:
    linear-gradient(white 1px, transparent 1px),
    linear-gradient(90deg, white 1px, transparent 1px);
  background-size: 70px 70px;
  pointer-events: none;
}

.section-eyebrow {
  color: #ef4444;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 4px;
}

/* Cards */
.service-card {
  position: relative;
  display: block;
  height: 540px;
  border-radius: 16px;
  overflow: hidden;
  isolation: isolate;
  background: #151515;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition:
    transform 0.4s ease,
    border-color 0.4s ease;
}

.service-card:hover {
  transform: translateY(-8px);
  border-color: rgba(239, 68, 68, 0.6);
}

.service-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s ease;
}

.service-card:hover .service-image {
  transform: scale(1.08);
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.97) 0%,
    rgba(0, 0, 0, 0.65) 38%,
    rgba(0, 0, 0, 0.08) 100%
  );
}

.card-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 36px;
  z-index: 2;
}

.red-line {
  width: 28px;
  height: 2px;
  background: #ef4444;
}

.category-label {
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 2px;
  color: #f87171;
}

.card-action {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1.5px;
  color: white;
  border-top: 1px solid rgba(255, 255, 255, 0.25);
  padding-top: 20px;
}

.action-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #dc2626;
  font-size: 20px;
  transition:
    background 0.3s ease,
    transform 0.3s ease;
}

.service-card:hover .action-arrow {
  background: #ef4444;
  transform: rotate(45deg);
}

/* Contact button */
.contact-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 16px 30px;
  border-radius: 6px;
  background: #dc2626;
  color: white;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1.5px;
  transition:
    background 0.3s ease,
    transform 0.3s ease;
}

.contact-button:hover {
  background: #b91c1c;
  transform: translateY(-3px);
}

@media (max-width: 768px) {
  .service-card {
    height: 470px;
  }

  .card-content {
    padding: 25px;
  }

  .background-glow {
    width: 350px;
    height: 350px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .service-card,
  .service-image,
  .action-arrow,
  .contact-button {
    transition: none;
  }
}
</style>
