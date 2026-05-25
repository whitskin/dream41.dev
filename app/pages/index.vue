<template>
  <div class="relative min-h-screen selection:bg-rose-500 selection:text-white font-sans transition-colors duration-700 ease-in-out bg-slate-50 dark:bg-[#07070a] text-slate-900 dark:text-slate-100 overflow-x-hidden">
    
    <canvas v-show="isSnowing" ref="snowCanvas" class="fixed inset-0 z-[60] pointer-events-none opacity-50 dark:opacity-20"></canvas>

    <div class="fixed inset-0 z-0 pointer-events-none">
       <div class="absolute inset-0 opacity-[0.02] dark:opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
       <div class="absolute inset-0 bg-[radial-gradient(circle_at_var(--x,_50%)_var(--y,_50%),rgba(244,63,94,0.15)_0%,rgba(99,102,241,0.05)_30%,transparent_60%)] filter blur-[40px]"></div>
       <div class="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_80%)]"></div>
    </div>

    <header class="fixed top-6 inset-x-0 z-50 flex justify-center px-4">
      <nav class="bg-white/40 dark:bg-zinc-950/40 backdrop-blur-3xl border border-white/20 dark:border-white/5 rounded-full py-2.5 pl-6 pr-3 flex items-center justify-between w-full max-w-5xl transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.03)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
        
        <NuxtLink to="/" class="flex items-center gap-3.5 group">
           <div class="w-7 h-7 bg-rose-500 dark:bg-white flex items-center justify-center rounded-full transition-all duration-500 group-hover:scale-110 group-hover:rotate-[360deg]">
             <span class="text-white dark:text-black font-black text-xs">Δ</span>
           </div>
           <div class="flex flex-col">
             <span class="font-black tracking-widest text-xs uppercase bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-zinc-400">DREAM41</span>
             <span class="text-[6.5px] font-bold tracking-[0.4em] text-rose-500 uppercase">Aesthetic Core</span>
           </div>
        </NuxtLink>

        <div class="flex items-center gap-1.5">
           <button @click="toggleSnow" class="p-2 rounded-full hover:bg-slate-200/50 dark:hover:bg-white/5 transition-all duration-300" :class="isSnowing ? 'text-rose-500' : 'opacity-50'">
             <CloudIcon class="w-4 h-4" />
           </button>
           <button @click="toggleTheme" class="p-2 rounded-full bg-slate-100 dark:bg-zinc-900 border border-slate-200/50 dark:border-white/5 text-slate-700 dark:text-zinc-300 shadow-sm transition-transform active:scale-95">
             <SunIcon v-if="colorMode.value === 'light'" class="w-4 h-4" />
             <MoonIcon v-else class="w-4 h-4" />
           </button>
        </div>
      </nav>
    </header>

    <main class="relative z-10 pt-40 pb-24 px-4 max-w-5xl mx-auto space-y-40">
      
      <section class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div class="lg:col-span-8 space-y-8">
          <div v-motion :initial="{ opacity: 0, y: -10 }" :enter="{ opacity: 1, y: 0 }" class="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-rose-500/5 dark:bg-rose-500/10 border border-rose-500/10 text-rose-500">
            <span class="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></span>
            <span class="text-[9px] font-black uppercase tracking-[0.25em]">System Architect & Creator</span>
          </div>

          <h1 v-motion :initial="{ opacity: 0, x: -30 }" :enter="{ opacity: 1, x: 0, transition: { duration: 800 } }" class="text-5xl md:text-7xl font-black tracking-tight leading-[0.9] uppercase">
            Sculpting <br />
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-indigo-500 to-cyan-500">Digital Reality</span> <br />
            With Pixel Precision.
          </h1>
        </div>

        <div class="lg:col-span-4 lg:pt-14 space-y-8 flex flex-col justify-between h-full">
          <p v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 300 } }" class="text-base text-slate-500 dark:text-zinc-400 leading-relaxed font-light">
            Engineering lightning-fast digital pipelines and ultra-premium visual shells. Bridging high-scale execution with radical human-centered interfaces.
          </p>
          
          <div v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { delay: 500 } }" class="flex flex-wrap items-center gap-3">
            <a href="#projects" class="group px-6 py-3.5 bg-slate-900 dark:bg-white text-white dark:text-black rounded-full font-bold uppercase text-[9px] tracking-widest hover:bg-rose-500 hover:text-white dark:hover:bg-rose-500 dark:hover:text-white transition-all duration-300 shadow-xl shadow-rose-500/5 flex items-center gap-2">
              Explore Vault <ArrowRightIcon class="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="mailto:contact@dream41.dev" class="px-6 py-3.5 rounded-full border border-slate-200 dark:border-white/10 font-bold uppercase text-[9px] tracking-widest hover:border-slate-900 dark:hover:border-white transition-colors">
              Establish Liaison
            </a>
          </div>
        </div>
      </section>

      <section v-if="discordData" v-motion :initial="{ opacity: 0, scale: 0.95 }" :enter="{ opacity: 1, scale: 1, transition: { delay: 400 } }" class="flex justify-start">
        <div class="group relative flex items-center gap-5 p-4 rounded-3xl bg-gradient-to-br from-white/80 to-white/40 dark:from-zinc-900/80 dark:to-zinc-950/20 border border-white dark:border-white/5 shadow-2xl dark:shadow-black/40 backdrop-blur-2xl max-w-sm w-full transition-all duration-500 hover:scale-[1.02] hover:border-rose-500/20">
          <div class="relative shrink-0">
             <img :src="`https://cdn.discordapp.com/avatars/${discordData.discord_user.id}/${discordData.discord_user.avatar}`" class="w-12 h-12 rounded-2xl transition-all duration-500 object-cover border border-slate-100 dark:border-white/5" alt="Avatar Portfolio" />
             <div class="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full border-4 border-white dark:border-zinc-900" :class="statusColor"></div>
          </div>
          
          <div class="flex-1 min-w-0">
             <div class="flex items-center gap-1.5 mb-0.5 text-[8px] font-black uppercase tracking-[0.2em]">
                <span v-if="discordData.listening_to_spotify" class="text-emerald-500 animate-pulse">Streaming Audio</span>
                <span v-else class="text-rose-500">Live Telemetry</span>
             </div>
             <h4 class="text-xs font-black truncate uppercase tracking-wide text-slate-800 dark:text-zinc-200">
                {{ discordData.listening_to_spotify ? discordData.spotify.song : discordStatusText }}
             </h4>
             <p class="text-[10px] text-slate-400 dark:text-zinc-500 truncate font-mono">
                {{ discordData.listening_to_spotify ? `by ${discordData.spotify.artist}` : 'Awaiting Compile' }}
             </p>
          </div>

          <div v-if="discordData.listening_to_spotify" class="flex gap-0.5 items-end h-3 ml-2 shrink-0">
             <div class="w-0.5 bg-emerald-500 rounded-full animate-[bounce_0.8s_infinite] h-2"></div>
             <div class="w-0.5 bg-emerald-500 rounded-full animate-[bounce_1.2s_infinite] h-3.5"></div>
             <div class="w-0.5 bg-emerald-500 rounded-full animate-[bounce_1s_infinite] h-2.5"></div>
          </div>
        </div>
      </section>

      <section class="py-10 border-y border-slate-200 dark:border-white/5 relative overflow-hidden group">
        <div class="flex gap-16 animate-marquee whitespace-nowrap will-change-transform group-hover:[animation-play-state:paused]">
          <div class="flex gap-16 items-center shrink-0">
            <div v-for="skill in skills" :key="skill.name" class="flex items-center gap-4 group/skill">
              <div class="w-9 h-9 p-2 rounded-xl bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 flex items-center justify-center shadow-sm grayscale group-hover/skill:grayscale-0 transition-all duration-300 group-hover/skill:rotate-6">
                <img :src="skill.icon" :alt="skill.name" class="w-full h-full object-contain" />
              </div>
              <span class="text-xl font-black tracking-tight text-slate-300 dark:text-zinc-700 group-hover/skill:text-rose-500 transition-colors uppercase font-mono">{{ skill.name }}</span>
            </div>
          </div>
          <div class="flex gap-16 items-center shrink-0">
            <div v-for="skill in skills" :key="skill.name + '_copy'" class="flex items-center gap-4 group/skill">
              <div class="w-9 h-9 p-2 rounded-xl bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 flex items-center justify-center shadow-sm grayscale group-hover/skill:grayscale-0 transition-all duration-300 group-hover/skill:rotate-6">
                <img :src="skill.icon" :alt="skill.name" class="w-full h-full object-contain" />
              </div>
              <span class="text-xl font-black tracking-tight text-slate-300 dark:text-zinc-700 group-hover/skill:text-rose-500 transition-colors uppercase font-mono">{{ skill.name }}</span>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" class="space-y-12">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div class="space-y-1">
            <span class="text-[9px] font-black tracking-[0.4em] text-rose-500 uppercase">Selected Archetypes</span>
            <h2 class="text-3xl md:text-4xl font-black uppercase tracking-tight">Engineering Index</h2>
          </div>
          <p class="text-xs text-slate-400 dark:text-zinc-500 max-w-xs font-mono">
            // Real-time operations, high density rendering pipelines, production environments.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div class="md:col-span-7 group relative overflow-hidden rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/60 dark:border-white/5 shadow-sm transition-all duration-500 hover:shadow-2xl dark:hover:shadow-black/60" v-motion-slide-visible-once-bottom>
             <div class="aspect-[16/10] overflow-hidden relative">
                <img src="/images/grafiklab.png" class="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 filter saturate-75 group-hover:saturate-100" alt="GrafikLab Module" />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-all duration-500 flex flex-col justify-end p-8">
                  <span class="text-[8px] font-mono tracking-widest text-rose-400 uppercase mb-1">[ Cluster Project 01 ]</span>
                  <h3 class="text-2xl font-black uppercase tracking-tight text-white">GrafikLab.NET</h3>
                  <p class="text-zinc-400 text-xs max-w-md mt-2 font-light leading-relaxed">High-scale API distribution platform tailored for complex enterprise automated graphics distribution and multi-tenant management.</p>
                  <a href="https://grafiklab.net" target="_blank" class="mt-4 inline-flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest text-white bg-rose-500 px-4 py-2 rounded-full w-max hover:bg-white hover:text-black transition-all">
                    Launch Core <ArrowUpRightIcon class="w-3 h-3" />
                  </a>
                </div>
             </div>
          </div>

          <div class="md:col-span-5 flex flex-col justify-between bg-gradient-to-b from-white to-slate-50 dark:from-zinc-900 dark:to-zinc-950/50 p-8 rounded-3xl border border-slate-200/60 dark:border-white/5 group hover:border-rose-500/20 transition-all duration-500 shadow-sm" v-motion-slide-visible-once-bottom>
            <div class="space-y-4">
              <div class="aspect-[4/3] rounded-2xl overflow-hidden border border-slate-100 dark:border-white/5 relative bg-slate-100 dark:bg-zinc-900">
                 <img src="/images/sporapi.png" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-102" alt="Sports API Engine" />
              </div>
              <div class="space-y-1">
                <span class="text-[8px] font-mono tracking-widest text-slate-400 uppercase">// Streaming Engine</span>
                <h3 class="text-xl font-black uppercase tracking-tight text-slate-800 dark:text-zinc-100">Spor.GrafikLab</h3>
                <p class="text-slate-500 dark:text-zinc-400 text-xs font-light leading-relaxed">Reactive WebSocket interface engineered for millisecond precision sports data broadcast.</p>
              </div>
            </div>
            <a href="https://spor.grafiklab.net" target="_blank" class="mt-6 py-3 border border-slate-200 dark:border-white/10 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all font-bold uppercase tracking-widest text-[9px]">
              Access Simulation <ArrowRightIcon class="w-3 h-3" />
            </a>
          </div>
        </div>
      </section>

      <section id="contact" class="pb-16">
        <div class="relative p-8 md:p-16 rounded-[2.5rem] bg-gradient-to-tr from-slate-950 via-zinc-900 to-rose-950 text-white overflow-hidden group shadow-2xl border border-white/5">
          <div class="absolute inset-0 opacity-[0.08] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
          <div class="absolute -right-16 -top-16 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div class="relative z-10 max-w-2xl mx-auto text-center space-y-8">
            <h2 class="text-3xl md:text-6xl font-black uppercase tracking-tight leading-none">
              Initiate <br />
              The Next <span class="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-amber-300">Convergence.</span>
            </h2>
            <p class="text-xs md:text-sm text-zinc-400 font-light max-w-md mx-auto">
              Currently accepting global directives, core refactoring projects, and high-end collaborative application design architecture requests.
            </p>
            <div class="flex flex-wrap justify-center gap-3 pt-2">
              <a href="mailto:contact@dream41.dev" class="px-8 py-4 bg-rose-500 hover:bg-white hover:text-black text-white rounded-full font-black uppercase tracking-widest text-[9px] transition-all shadow-xl shadow-rose-500/20">
                Establish Direct Link
              </a>
              <a href="https://discord.com/users/1147956655384956978" target="_blank" class="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-full font-black uppercase tracking-widest text-[9px] transition-all">
                Secure Discord Uplink
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="py-12 border-t border-slate-200 dark:border-white/5 px-4 bg-slate-100/50 dark:bg-zinc-950/20">
       <div class="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 opacity-40 hover:opacity-100 transition-opacity duration-300">
          <div class="space-y-1 text-center md:text-left">
            <h5 class="text-sm font-black tracking-widest uppercase text-slate-800 dark:text-white">Dream41 Matrix v4.0</h5>
            <p class="text-[8px] font-mono uppercase tracking-[0.3em]">Autonomous Node // Istanbul, Turkey</p>
          </div>
          <p class="text-[8px] font-mono uppercase tracking-[0.2em] text-center md:text-right">Aesthetics // Full-Stack Architecture // 2026</p>
       </div>
    </footer>
  </div>
</template>

<script setup>
import { 
  SunIcon, MoonIcon, ArrowRightIcon, ArrowUpRightIcon, CloudIcon 
} from '@heroicons/vue/24/outline'
import { useDocumentVisibility, useWindowSize, useMouse } from '@vueuse/core'
import { computed, ref, watchEffect, nextTick } from 'vue'

const colorMode = useColorMode()
const toggleTheme = () => { colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark' }
const visibility = useDocumentVisibility()

const { x, y } = useMouse()
if (import.meta.client) {
  watchEffect(() => {
    document.documentElement.style.setProperty('--x', `${(x.value / window.innerWidth) * 100}%`)
    document.documentElement.style.setProperty('--y', `${(y.value / window.innerHeight) * 100}%`)
  })
}

const { data: discordData, refresh } = await useFetch('https://api.lanyard.rest/v1/users/1147956655384956978', {
  transform: (res) => res.data,
  server: false,
})

if (import.meta.client) {
  setInterval(() => { if (visibility.value === 'visible') refresh() }, 10000)
}

const statusColor = computed(() => {
  switch(discordData.value?.discord_status) {
    case 'online': return 'bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.6)]'
    case 'idle': return 'bg-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.4)]'
    case 'dnd': return 'bg-rose-500 shadow-[0_0_12px_rgba(244,63,94,0.6)]'
    default: return 'bg-slate-500'
  }
})

const discordStatusText = computed(() => {
  const status = discordData.value?.discord_status
  if (!status) return 'Offline Matrix'
  return status.charAt(0).toUpperCase() + status.slice(1) + ' Hub'
})

const isSnowing = ref(false)
const snowCanvas = ref(null)
const { width: windowWidth } = useWindowSize()
let animationFrame = null
let particles = []

const toggleSnow = () => {
  isSnowing.value = !isSnowing.value
  if (isSnowing.value) { nextTick(() => initSnow()) } 
  else { cancelAnimationFrame(animationFrame) }
}

const initSnow = () => {
  const canvas = snowCanvas.value
  if(!canvas) return
  const ctx = canvas.getContext('2d')
  let width = window.innerWidth
  let height = window.innerHeight
  canvas.width = width
  canvas.height = height
  const particleCount = windowWidth.value < 768 ? 25 : 70
  particles = []
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.2 + 0.4,
      speedY: Math.random() * 0.6 + 0.2,
      speedX: Math.random() * 0.2 - 0.1
    })
  }
  const draw = () => {
    if (visibility.value !== 'visible') { animationFrame = requestAnimationFrame(draw); return }
    ctx.clearRect(0, 0, width, height)
    ctx.fillStyle = colorMode.value === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(15, 23, 42, 0.5)'
    ctx.beginPath()
    for (let i = 0; i < particleCount; i++) {
      const p = particles[i]
      ctx.moveTo(p.x, p.y)
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2, true)
    }
    ctx.fill()
    for (let i = 0; i < particleCount; i++) {
      const p = particles[i]
      p.y += p.speedY
      p.x += p.speedX
      if (p.y > height) { p.y = 0; p.x = Math.random() * width }
    }
    animationFrame = requestAnimationFrame(draw)
  }
  draw()
}

const skills = [
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'Tailwind', icon: 'https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Nuxt / Vue', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
]

defineOgImage({ 
  component: 'DreamTemplate', 
  props: { title: 'Dream41', 
  description: `Hello, I'm Dream41 — a passionate full stack developer with a deep interest in building modern, scalable web applications. I enjoy turning creative ideas into clean, efficient code. Always learning, always improving — let's create something remarkable together.` }, 
});

useHead({
  title: 'Dream41 | Full-Stack Developer Portfolio',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'author', content: 'Dream41' },
    { name: 'theme-color', content: '#F43F5E' },
    { name: 'description', content: 'Premium portfolio of Dream41, a full-stack developer specializing in modern, scalable web applications, clean code, high performance, and innovative digital solutions.' },
    { name: 'og:title', content: 'Dream41 | Full-Stack Developer Portfolio' },
    { name: 'og:description', content: 'Premium portfolio of Dream41, a full-stack developer specializing in modern, scalable web applications, clean code, high performance, and innovative digital solutions.' },
    { name: 'og:type', content: 'website' },
    { name: 'og:url', content: 'https://dream41.dev' },
  ],
  link: [
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;500;900&display=swap' },
    { rel: 'icon', type: 'image/png', href: 'https://cdn.discordapp.com/avatars/1147956655384956978/a_b05c99a6bc6eae33af22831d6e41341b.png?size=4096' },
  ],
});
</script>

<style>
.animate-marquee { animation: marquee 35s linear infinite; }
@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

html { scroll-behavior: smooth; -webkit-font-smoothing: antialiased; }

::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: #07070a; }
::-webkit-scrollbar-thumb { background: #1e1e24; border-radius: 99px; }
::-webkit-scrollbar-thumb:hover { background: #f43f5e; }
</style>