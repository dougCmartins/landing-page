<template>
  <div id="portfolio-particles" class="particle-background" aria-hidden="true" />
</template>

<script setup lang="ts">
type ParticleInstance = {
  pJS: {
    fn: { drawAnimFrame?: number; checkAnimFrame?: number }
    canvas: { el: HTMLCanvasElement }
  }
}

type ParticleWindow = Window & {
  particlesJS?: (id: string, config: object) => void
  pJSDom?: ParticleInstance[]
}

type TrackedListener = {
  target: EventTarget
  name: string
  callback: EventListenerOrEventListenerObject
  options: boolean | AddEventListenerOptions | undefined
}

let scriptPromise: Promise<void> | undefined

function loadParticles() {
  if (!scriptPromise) {
    scriptPromise = new Promise<void>((resolve, reject) => {
      const script = document.createElement('script')
      script.src = '/vendor/particles.min.js'
      script.onload = () => resolve()
      script.onerror = () => {
        scriptPromise = undefined
        reject(new Error('Particles could not load'))
      }
      document.head.appendChild(script)
    })
  }
  return scriptPromise
}

let teardown = () => {}
let disposed = false
let motionQuery: MediaQueryList | undefined
let mobileQuery: MediaQueryList | undefined
let onQueryChange: (() => void) | undefined

async function start(motion: MediaQueryList, mobile: MediaQueryList) {
  teardown()
  if (motion.matches || disposed) {
    return
  }
  try {
    await loadParticles()
  }
  catch {
    return
  }
  const particleWindow = window as ParticleWindow
  if (disposed || motion.matches || !particleWindow.particlesJS) {
    return
  }
  const container = document.getElementById('portfolio-particles')
  if (!container) {
    return
  }
  const colors = getComputedStyle(container)
  const listeners: TrackedListener[] = []
  const original = EventTarget.prototype.addEventListener
  EventTarget.prototype.addEventListener = function (name, callback, options) {
    if (callback) {
      listeners.push({ target: this, name, callback, options })
    }
    return original.call(this, name, callback, options)
  }
  try {
    particleWindow.particlesJS('portfolio-particles', {
      particles: {
        number: { value: mobile.matches ? 28 : 80, density: { enable: true, value_area: 800 } },
        color: { value: colors.getPropertyValue('--particle-dot').trim() },
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: false },
        size: { value: mobile.matches ? 2 : 3, random: true },
        line_linked: {
          enable: true,
          distance: 180,
          color: colors.getPropertyValue('--particle-line').trim(),
          opacity: 0.4,
          width: 1.5,
        },
        move: {
          enable: true,
          speed: 1.2,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
        },
      },
      interactivity: {
        detect_on: 'window',
        events: {
          onhover: { enable: !mobile.matches, mode: 'repulse' },
          onclick: { enable: false },
          resize: true,
        },
        modes: { repulse: { distance: 160, duration: 0.5 } },
      },
      retina_detect: true,
    })
  }
  finally {
    EventTarget.prototype.addEventListener = original
  }
  const instance = particleWindow.pJSDom?.find(item => container.contains(item.pJS.canvas.el))
  teardown = () => {
    if (instance?.pJS.fn.drawAnimFrame) {
      cancelAnimationFrame(instance.pJS.fn.drawAnimFrame)
    }
    if (instance?.pJS.fn.checkAnimFrame) {
      cancelAnimationFrame(instance.pJS.fn.checkAnimFrame)
    }
    for (const listener of listeners) {
      listener.target.removeEventListener(listener.name, listener.callback, listener.options)
    }
    instance?.pJS.canvas.el.remove()
    particleWindow.pJSDom = particleWindow.pJSDom?.filter(item => item !== instance) ?? []
    teardown = () => {}
  }
}

onMounted(() => {
  motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  mobileQuery = window.matchMedia('(max-width: 639px)')
  onQueryChange = () => {
    if (!motionQuery || !mobileQuery) {
      return
    }
    void start(motionQuery, mobileQuery)
  }
  void start(motionQuery, mobileQuery)
  motionQuery.addEventListener('change', onQueryChange)
  mobileQuery.addEventListener('change', onQueryChange)
})

onBeforeUnmount(() => {
  disposed = true
  teardown()
  if (motionQuery && onQueryChange) {
    motionQuery.removeEventListener('change', onQueryChange)
  }
  if (mobileQuery && onQueryChange) {
    mobileQuery.removeEventListener('change', onQueryChange)
  }
})
</script>

<style scoped>
.particle-background {
  position: fixed;
  inset: 0;
  pointer-events: none;
}

.particle-background :deep(canvas) {
  display: block;
  pointer-events: none;
}
</style>
