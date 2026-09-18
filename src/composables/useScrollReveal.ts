import { onMounted, onUnmounted } from 'vue'

export function useScrollReveal() {
  function init() {
    const els = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            const delay = el.dataset.delay || '0'
            el.style.transitionDelay = `${delay}ms`
            el.classList.add('is-revealed')
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.12 }
    )
    els.forEach((el) => observer.observe(el))
    return observer
  }

  let observer: IntersectionObserver | null = null

  onMounted(() => {
    observer = init()
  })

  onUnmounted(() => {
    observer?.disconnect()
  })
}