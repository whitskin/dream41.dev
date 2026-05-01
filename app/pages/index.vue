<template>
  <!-- Renk moduna tam duyarlı ana kapsayıcı -->
  <div class="relative min-h-screen selection:bg-indigo-600 selection:text-white font-sans transition-colors duration-700 ease-in-out bg-zinc-50 dark:bg-[#050505] text-zinc-900 dark:text-zinc-100 overflow-x-hidden">
    
    <!-- Kar Efekti (Script Korundu) -->
    <canvas v-show="isSnowing" ref="snowCanvas" class="fixed inset-0 z-[60] pointer-events-none opacity-40 dark:opacity-20"></canvas>

    <!-- Dynamic Background Layer -->
    <div class="fixed inset-0 z-0 pointer-events-none">
       <div class="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
       <div class="absolute inset-0 bg-[radial-gradient(circle_at_var(--x,_50%)_var(--y,_50%),rgba(79,70,229,0.1)_0%,transparent_50%)]"></div>
       <div class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_90%)]"></div>
    </div>

    <!-- Minimalist Navigation -->
    <header class="fixed top-0 inset-x-0 z-50 flex justify-center p-6 md:p-8">
      <nav class="bg-white/70 dark:bg-zinc-900/40 backdrop-blur-2xl border border-zinc-200/50 dark:border-white/5 rounded-2xl py-3 px-6 flex items-center justify-between w-full max-w-6xl transition-all duration-500 shadow-xl shadow-black/5">
        
        <NuxtLink to="/" class="flex items-center gap-3 group">
           <div class="w-8 h-8 bg-zinc-900 dark:bg-white flex items-center justify-center rounded-lg transition-transform duration-500 group-hover:rotate-[90deg]">
             <span class="text-white dark:text-black font-black text-xs uppercase">D</span>
           </div>
           <div class="flex flex-col">
             <span class="font-bold tracking-tight text-sm">DREAM41</span>
             <span class="text-[7px] font-bold tracking-[0.3em] opacity-40 uppercase italic">Code & Aesthetics</span>
           </div>
        </NuxtLink>

        <div class="flex items-center gap-2">
           <button @click="toggleSnow" class="p-2 rounded-xl hover:bg-zinc-200 dark:hover:bg-white/10 transition-all" :class="isSnowing ? 'text-indigo-600' : 'opacity-40'">
             <CloudIcon class="w-4 h-4" />
           </button>
           <button @click="toggleTheme" class="p-2 rounded-xl hover:bg-zinc-200 dark:hover:bg-white/10 transition-all opacity-40 hover:opacity-100">
             <SunIcon v-if="colorMode.value === 'light'" class="w-4 h-4" />
             <MoonIcon v-else class="w-4 h-4" />
           </button>
        </div>
      </nav>
    </header>

    <main class="relative z-10 pt-48 pb-32 px-6 max-w-6xl mx-auto space-y-48">
      
      <!-- Hero Section -->
      <section class="space-y-10">
        <div v-motion :initial="{ opacity: 0, x: -20 }" :enter="{ opacity: 1, x: 0 }" class="flex items-center gap-3 text-indigo-600 dark:text-indigo-500">
          <div class="h-[1px] w-10 bg-current"></div>
          <span class="text-[9px] font-black uppercase tracking-[0.4em]">Software Engineer & UI/UX Designer</span>
        </div>

        <h1 v-motion :initial="{ opacity: 0, y: 30 }" :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }" class="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95] uppercase">
          Crafting <span class="text-zinc-400 dark:text-zinc-500 italic font-light">Intuitive</span> <br /> 
          Digital Ecosystems.
        </h1>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 pt-6">
          <p v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 400 } }" class="text-lg md:text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed font-light">
            I architect high-performance web applications that merge technical complexity with surgical aesthetic precision. Open for <span class="text-zinc-900 dark:text-white font-medium italic underline decoration-indigo-500/30 underline-offset-8">innovation</span>.
          </p>
          <div v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { delay: 600 } }" class="flex items-end md:justify-end gap-4">
            <a href="#projects" class="px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-xl font-bold uppercase text-[10px] tracking-widest hover:bg-indigo-600 hover:text-white transition-all shadow-xl shadow-black/10">
              Browse Work
            </a>
            <a href="mailto:contact@dream41.dev" class="px-8 py-4 border border-zinc-200 dark:border-white/10 rounded-xl font-bold uppercase text-[10px] tracking-widest hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
              Inquire
            </a>
          </div>
        </div>
      </section>

      <!-- Discord Status / Spotify Card (Kanka Burası Geri Geldi) -->
      <section v-if="discordData" v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { delay: 500 } }" class="flex justify-start">
        <div class="group relative flex items-center gap-5 p-4 rounded-[2rem] bg-white/80 dark:bg-zinc-900/60 border border-zinc-200 dark:border-white/5 shadow-2xl shadow-black/5 backdrop-blur-xl max-w-sm w-full transition-all duration-500 hover:border-indigo-500/30">
          <div class="relative shrink-0">
             <img :src="`https://cdn.discordapp.com/avatars/${discordData.discord_user.id}/${discordData.discord_user.avatar}`" class="w-14 h-14 rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-500 object-cover border border-zinc-100 dark:border-white/10" alt="Avatar" />
             <div class="absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-4 border-white dark:border-zinc-900 shadow-sm" :class="statusColor"></div>
          </div>
          
          <div class="flex-1 min-w-0">
             <div class="flex items-center gap-1.5 mb-1 text-[8px] font-black uppercase tracking-[0.2em] text-zinc-400">
                <span v-if="discordData.listening_to_spotify" class="text-green-500 animate-pulse">Spotify Syncing</span>
                <span v-else>Current Status</span>
             </div>
             <h4 class="text-sm font-black truncate uppercase tracking-tight">
                {{ discordData.listening_to_spotify ? discordData.spotify.song : discordStatusText }}
             </h4>
             <p class="text-[10px] font-bold text-zinc-500 truncate italic">
                {{ discordData.listening_to_spotify ? `by ${discordData.spotify.artist}` : 'Processing Code' }}
             </p>
          </div>

          <div v-if="discordData.listening_to_spotify" class="flex gap-0.5 items-end h-4 ml-2">
             <div class="w-0.5 bg-green-500 rounded-full animate-[bounce_0.8s_infinite] h-2"></div>
             <div class="w-0.5 bg-green-500 rounded-full animate-[bounce_1.2s_infinite] h-4"></div>
             <div class="w-0.5 bg-green-500 rounded-full animate-[bounce_1s_infinite] h-3"></div>
          </div>
        </div>
      </section>

      <!-- Tech Stack Marquee -->
      <section class="py-16 border-y border-zinc-200 dark:border-white/5 relative overflow-hidden group">
        <div class="flex gap-20 animate-marquee whitespace-nowrap will-change-transform group-hover:[animation-play-state:paused]">
          <div class="flex gap-20 items-center shrink-0">
            <div v-for="skill in skills" :key="skill.name" class="flex items-center gap-6 group/skill transition-all duration-500 hover:scale-105">
              <div class="w-12 h-12 p-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-white/5 flex items-center justify-center shadow-sm grayscale group-hover/skill:grayscale-0 transition-all">
                <img :src="skill.icon" :alt="skill.name" class="w-full h-full object-contain" />
              </div>
              <span class="text-3xl font-black italic tracking-tighter opacity-10 hover:opacity-100 transition-all uppercase">{{ skill.name }}</span>
            </div>
          </div>
          <!-- Loop Repeat -->
          <div class="flex gap-20 items-center shrink-0">
            <div v-for="skill in skills" :key="skill.name + '_copy'" class="flex items-center gap-6 group/skill transition-all duration-500 hover:scale-105">
              <div class="w-12 h-12 p-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-white/5 flex items-center justify-center shadow-sm grayscale group-hover/skill:grayscale-0 transition-all">
                <img :src="skill.icon" :alt="skill.name" class="w-full h-full object-contain" />
              </div>
              <span class="text-3xl font-black italic tracking-tighter opacity-10 hover:opacity-100 transition-all uppercase">{{ skill.name }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Projects Section -->
      <section id="projects" class="space-y-16">
        <div class="space-y-2">
          <span class="text-[9px] font-black tracking-[0.5em] text-indigo-600 dark:text-indigo-500 uppercase italic">Selected Productions</span>
          <h2 class="text-4xl md:text-5xl font-black uppercase tracking-tighter italic">Portfolio Showcase</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
          <!-- Project 01 -->
          <div class="md:col-span-8 group relative overflow-hidden rounded-[2.5rem] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 shadow-sm" v-motion-slide-visible-once-bottom>
             <div class="aspect-[16/9] overflow-hidden">
                <img src="/images/grafiklab.png" class="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105" />
             </div>
             <div class="absolute inset-0 bg-zinc-900/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                <h3 class="text-3xl font-black uppercase italic tracking-tighter text-white">GrafikLab.NET</h3>
                <p class="text-zinc-300 text-sm max-w-md mt-2 font-light">Comprehensive API distribution platform engineered for high-scale agency workflows.</p>
                <a href="https://grafiklab.net" target="_blank" class="mt-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-indigo-400">Launch Module <ArrowUpRightIcon class="w-4 h-4" /></a>
             </div>
          </div>

          <!-- Project 02 -->
          <div class="md:col-span-4 flex flex-col bg-white dark:bg-zinc-900/40 p-10 rounded-[2.5rem] border border-zinc-200 dark:border-white/5 group hover:border-indigo-600/30 transition-all shadow-sm" v-motion-slide-visible-once-bottom>
            <div class="aspect-square rounded-2xl overflow-hidden mb-8 border border-zinc-100 dark:border-white/5 relative bg-zinc-50 dark:bg-zinc-800">
               <img src="/images/sporapi.png" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
            </div>
            <div class="space-y-4">
              <span class="text-[9px] font-black tracking-widest opacity-30 uppercase italic italic">Live Data Ecosystem</span>
              <h3 class="text-2xl font-black uppercase tracking-tighter leading-none italic">Spor. <br/> GrafikLab</h3>
              <p class="text-zinc-500 dark:text-zinc-400 text-xs font-medium leading-relaxed italic">High-performance WebSocket architecture for real-time sports broadcasting.</p>
            </div>
            <a href="https://spor.grafiklab.net" target="_blank" class="mt-8 py-4 border border-zinc-200 dark:border-white/10 rounded-xl flex items-center justify-center gap-2 hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all font-black uppercase tracking-widest text-[9px]">
              Access Demo <ArrowRightIcon class="w-3 h-3" />
            </a>
          </div>
        </div>
      </section>

      <!-- Contact Interface -->
      <section id="contact" class="pb-32 text-center">
        <div class="relative p-12 md:p-24 rounded-[3.5rem] bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black overflow-hidden group shadow-2xl">
          <div class="absolute inset-0 opacity-[0.15] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
          <div class="relative z-10 space-y-10">
            <h2 class="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none italic italic">
              Ready for <br /> 
              The Next <span class="text-indigo-500 italic">Evolution.</span>
            </h2>
            <div class="flex flex-col sm:flex-row justify-center gap-4">
              <a href="mailto:contact@dream41.dev" class="px-10 py-5 bg-indigo-600 dark:bg-black text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-transform shadow-2xl shadow-indigo-500/20">
                Email Terminal
              </a>
              <a href="https://discord.com/users/1147956655384956978" target="_blank" class="px-10 py-5 bg-white/10 dark:bg-zinc-800 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-white/20 dark:hover:bg-black transition-all">
                Discord HQ
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="py-16 border-t border-zinc-200 dark:border-white/5 px-6">
       <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 opacity-30">
          <div class="space-y-2 text-center md:text-left">
            <h5 class="text-2xl font-black italic tracking-tighter uppercase leading-none">Dream41 // 4.0</h5>
            <p class="text-[8px] font-black uppercase tracking-[0.5em]">Digital Innovation Hub // Turkey</p>
          </div>
          <p class="text-[9px] font-black uppercase tracking-[0.3em]">Code // Architecture // Design</p>
       </div>
    </footer>
  </div>
</template>

<script setup>
import { 
  SunIcon, MoonIcon, ArrowRightIcon, ArrowUpRightIcon, 
  CloudIcon, RocketLaunchIcon, EnvelopeIcon, ChatBubbleLeftRightIcon
} from '@heroicons/vue/24/outline'
import { useDocumentVisibility, useWindowSize, useMouse } from '@vueuse/core'

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
    case 'online': return 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]'
    case 'idle': return 'bg-amber-500'
    case 'dnd': return 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]'
    default: return 'bg-zinc-500'
  }
})

const discordStatusText = computed(() => {
  const status = discordData.value?.discord_status
  if (!status) return 'Offline'
  return status.charAt(0).toUpperCase() + status.slice(1)
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
  const particleCount = windowWidth.value < 768 ? 30 : 80
  particles = []
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.5,
      speedY: Math.random() * 0.8 + 0.2,
      speedX: Math.random() * 0.3 - 0.15
    })
  }
  const draw = () => {
    if (visibility.value !== 'visible') { animationFrame = requestAnimationFrame(draw); return }
    ctx.clearRect(0, 0, width, height)
    ctx.fillStyle = colorMode.value === 'dark' ? '#ffffff' : '#475569'
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
    { name: 'theme-color', content: '#3B82F6' },
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
.animate-marquee { animation: marquee 45s linear infinite; }
@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

html { scroll-behavior: smooth; -webkit-font-smoothing: antialiased; }
body { transition: background-color 0.5s ease; }

::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: #050505; }
::-webkit-scrollbar-thumb { background: #1f1f1f; border-radius: 10px; }
::-webkit-scrollbar-thumb:hover { background: #4F46E5; }

</style>