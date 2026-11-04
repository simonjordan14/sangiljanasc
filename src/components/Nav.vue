
<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'History', path: '/history' },
  { name: 'Squad', path: '/squad' },
  { name: 'Contact', path: '/contact' },
  { name: 'Fixtures', path: '/fixtures' }
]
</script>

<template>
  <nav class="navbar">
    <div class="nav-container">

      <!-- LOGO -->
      <router-link to="/" class="brand" @click="closeMenu">
        <img
          src="../assets/stjlogo.png"
          alt="San Ġiljan ASC Logo"
          class="brand-logo"
        />
      </router-link>

      <!-- DESKTOP NAVIGATION -->
      <div class="desktop-nav">
        <router-link
          v-for="link in links"
          :key="link.path"
          :to="link.path"
          class="nav-link"
        >
          {{ link.name }}
        </router-link>
      </div>

      <!-- MOBILE MENU BUTTON -->
      <button
        type="button"
        class="menu-toggle"
        @click="toggleMenu"
        :aria-expanded="isOpen"
        aria-controls="mobile-menu"
        :aria-label="isOpen ? 'Close menu' : 'Open menu'"
      >
        <!-- HAMBURGER -->
        <svg
          v-if="!isOpen"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>

        <!-- CLOSE ICON -->
        <svg
          v-else
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- MOBILE NAVIGATION -->
    <div
      v-if="isOpen"
      id="mobile-menu"
      class="mobile-nav"
    >
      <router-link
        v-for="link in links"
        :key="link.path"
        :to="link.path"
        class="mobile-nav-link"
        @click="closeMenu"
      >
        {{ link.name }}
      </router-link>
    </div>
  </nav>
</template>

<style scoped>
/* NAVBAR */

.navbar {
  width: 100%;
  background: #000;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 100;
}

/* CONTAINER */

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}

/* LOGO */

.brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.brand-logo {
  height: 44px;
  width: auto;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.brand-logo:hover {
  transform: scale(1.05);
}

/* DESKTOP NAVIGATION */

.desktop-nav {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 30px;
}

.nav-link {
  position: relative;
  display: inline-block;
  padding: 10px 0;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  white-space: nowrap;
  transition: color 0.25s ease;
}

.nav-link:hover {
  color: #f87171;
}

/* ACTIVE PAGE */

.nav-link.router-link-exact-active {
  color: #f87171;
  font-weight: 700;
}

/* UNDERLINE */

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 3px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #dc2626;
  border-radius: 2px;
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.25s ease;
}

.nav-link:hover::after,
.nav-link.router-link-exact-active::after {
  transform: scaleX(1);
}

/* MOBILE MENU BUTTON */

.menu-toggle {
  display: none;
  align-items: center;
  justify-content: center;
  padding: 8px;
  background: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  transition: color 0.2s ease;
}

.menu-toggle:hover {
  color: #f87171;
}

/* MOBILE NAVIGATION */

.mobile-nav {
  display: none;
  flex-direction: column;
  padding: 10px 24px 24px;
  background: #080808;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.mobile-nav-link {
  display: block;
  padding: 13px 12px;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  border-radius: 6px;
  transition:
    background 0.2s ease,
    color 0.2s ease;
}

.mobile-nav-link:hover {
  background: rgba(220, 38, 38, 0.08);
  color: #f87171;
}

.mobile-nav-link.router-link-exact-active {
  color: #f87171;
  background: rgba(220, 38, 38, 0.1);
  font-weight: 700;
}

/* RESPONSIVE */

@media (max-width: 767px) {
  .nav-container {
    padding: 14px 20px;
  }

  .brand-logo {
    height: 40px;
  }

  .desktop-nav {
    display: none;
  }

  .menu-toggle {
    display: flex;
  }

  .mobile-nav {
    display: flex;
  }
}

/* SMALL SCREENS */

@media (max-width: 380px) {
  .nav-container {
    padding: 12px 15px;
  }

  .mobile-nav {
    padding: 10px 15px 20px;
  }
}

/* ACCESSIBILITY */

@media (prefers-reduced-motion: reduce) {
  .nav-link,
  .nav-link::after,
  .brand-logo,
  .mobile-nav-link,
  .menu-toggle {
    transition: none;
  }
}
</style>
