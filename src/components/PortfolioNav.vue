<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const menuOpen = ref(false)

function handleScroll() {
  isScrolled.value = window.scrollY > 20
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <nav :class="['nav', { scrolled: isScrolled }]">
    <div class="container nav-inner">
      <a href="#hero" class="logo" @click="closeMenu">
        <span class="logo-mark">Gungde Pandu</span>
      </a>
      <button class="burger" :class="{ active: menuOpen }" @click="toggleMenu" aria-label="Toggle menu">
        <span /><span /><span />
      </button>
      <ul class="nav-links" :class="{ open: menuOpen }">
        <li><a href="#about" @click="closeMenu"><span class="link-text">Tentang</span></a></li>
        <li><a href="#skills" @click="closeMenu"><span class="link-text">Keahlian</span></a></li>
        <li><a href="#projects" @click="closeMenu"><span class="link-text">Proyek</span></a></li>
        <li><a href="#contact" @click="closeMenu"><span class="link-text">Kontak</span></a></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.nav {
  position: fixed;
  inset: 0 0 auto;
  z-index: 100;
  padding: 1rem 0;
  transition: background 0.3s, backdrop-filter 0.3s, box-shadow 0.3s;
}

.nav.scrolled {
  background: rgba(15, 23, 42, 0.75);
  backdrop-filter: blur(14px);
  box-shadow: 0 1px 12px rgba(0, 0, 0, 0.25);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: 1.6rem;
  font-weight: 800;
  color: var(--accent) !important;
  background: none;
  text-decoration: none;
}

.logo-mark {
  display: inline-block;
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}

.logo-mark:hover {
  transform: rotate(-12deg) scale(1.15);
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: var(--text-muted);
  font-weight: 500;
  font-size: 0.95rem;
  text-decoration: none;
  position: relative;
  padding: 0.25rem 0;
  transition: color 0.2s;
}

.nav-links a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, var(--accent), var(--accent-2));
  border-radius: 2px;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}

.nav-links a:hover {
  color: var(--accent);
}

.nav-links a:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

.link-text {
  position: relative;
  z-index: 1;
}

/* burger */
.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.burger span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--text);
  border-radius: 2px;
  transition: transform 0.3s, opacity 0.3s;
}

.burger:hover span {
  background: var(--accent);
}

.burger.active span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.burger.active span:nth-child(2) {
  opacity: 0;
}

.burger.active span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

@media (max-width: 640px) {
  .burger {
    display: flex;
  }

  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background: rgba(15, 23, 42, 0.92);
    backdrop-filter: blur(14px);
    padding: 0;
    gap: 0;
    max-height: 0;
    overflow: hidden;
    visibility: hidden;
    transition: max-height 0.4s ease, padding 0.3s ease, visibility 0s 0.4s;
  }

  .nav-links.open {
    max-height: 300px;
    padding: 1.5rem 0;
    visibility: visible;
    transition: max-height 0.4s ease, padding 0.3s ease, visibility 0s;
  }

  .nav-links li {
    padding: 0;
    text-align: center;
  }

  .nav-links.open li {
    text-align: center;
    animation: nav-item-fall 0.4s cubic-bezier(0.22, 1, 0.36, 1) both;
  }

  .nav-links.open li:nth-child(1) { animation-delay: 0.05s; }
  .nav-links.open li:nth-child(2) { animation-delay: 0.1s; }
  .nav-links.open li:nth-child(3) { animation-delay: 0.15s; }
  .nav-links.open li:nth-child(4) { animation-delay: 0.2s; }

  .nav-links a {
    display: block;
    padding: 0.65rem 1.5rem;
  }
}

@keyframes nav-item-fall {
  from {
    opacity: 0;
    transform: translateY(-12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>