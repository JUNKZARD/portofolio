<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import PortfolioNav from './components/PortfolioNav.vue'
import PortfolioHero from './components/PortfolioHero.vue'
import PortfolioAbout from './components/PortfolioAbout.vue'
import PortfolioSkills from './components/PortfolioSkills.vue'
import PortfolioProjects from './components/PortfolioProjects.vue'
import PortfolioContact from './components/PortfolioContact.vue'
import { useScrollReveal } from './composables/useScrollReveal'

useScrollReveal()

const showTopBtn = ref(false)

function handleScroll() {
  showTopBtn.value = window.scrollY > 600
}

function scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <PortfolioNav />
  <main>
    <PortfolioHero />
    <PortfolioAbout />
    <PortfolioSkills />
    <PortfolioProjects />
    <PortfolioContact />
  </main>

  <footer class="footer">
    <div class="container footer-inner">
      <p>&copy; 2026 Gungde Pandu.</p>
      <div class="footer-links">
        <a href="https://github.com/JUNKZARD" target="_blank" rel="noopener">GitHub</a>
        <a href="https://www.linkedin.com/in/gung-pandu-2869a936a/" target="_blank" rel="noopener">LinkedIn</a>
        <a href="mailto:gungpandu2006@gmail.com">Email</a>
      </div>
    </div>
  </footer>

  <button
    class="to-top"
    :class="{ show: showTopBtn }"
    @click="scrollTop"
    aria-label="Back to top"
  >
    ↑
  </button>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  background: rgba(15, 23, 42, 0.6);
  padding: 1.5rem 0;
}

.footer-inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.footer p {
  color: var(--text-muted);
  font-size: 0.9rem;
  margin: 0;
}

.footer-links {
  display: flex;
  gap: 1.25rem;
}

.footer-links a {
  color: var(--text-muted);
  font-size: 0.9rem;
  position: relative;
  transition: color 0.2s, transform 0.2s;
}

.footer-links a:hover {
  color: var(--accent);
  transform: translateY(-2px);
}

.to-top {
  position: fixed;
  right: 1.4rem;
  bottom: 1.4rem;
  z-index: 90;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: 1px solid rgba(56, 189, 248, 0.4);
  background: rgba(15, 23, 42, 0.85);
  backdrop-filter: blur(8px);
  color: var(--accent);
  font-size: 1.2rem;
  cursor: pointer;
  opacity: 0;
  pointer-events: none;
  transform: translateY(20px) scale(0.8);
  transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.3s ease;
}

.to-top.show {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0) scale(1);
}

.to-top:hover {
  box-shadow: 0 0 24px rgba(56, 189, 248, 0.4);
  transform: translateY(-3px) scale(1.08);
}

.to-top:active {
  transform: scale(0.9);
}

@media (max-width: 480px) {
  .footer-inner {
    justify-content: center;
    text-align: center;
  }
}
</style>