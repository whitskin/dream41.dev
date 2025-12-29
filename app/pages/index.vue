<template>
  <div class="relative overflow-x-hidden selection:bg-indigo-500/30 selection:text-indigo-500">
    
    <canvas v-show="isSnowing" ref="snowCanvas" class="fixed inset-0 z-[60] pointer-events-none w-full h-full"></canvas>

    <div class="fixed inset-0 z-0 pointer-events-none overflow-hidden">
       <div class="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
       <div class="hidden dark:block absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] animate-blob will-change-transform"></div>
       <div class="hidden dark:block absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-blob will-change-transform" style="animation-delay: 2s"></div>
       <div class="block dark:hidden absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-100/80 rounded-full blur-[100px] will-change-transform"></div>
    </div>

    <header class="fixed top-6 inset-x-0 z-50 flex justify-center px-6" v-motion :initial="{ y: -100, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { stiffness: 100, damping: 15 } }">
      <nav class="bg-white/80 dark:bg-black/60 backdrop-blur-2xl border border-zinc-200 dark:border-white/10 rounded-full py-2.5 px-6 shadow-xl shadow-black/5 dark:shadow-black/20 flex items-center justify-between w-full max-w-5xl transition-all hover:border-indigo-500/20">
        
        <NuxtLink to="/" class="flex items-center gap-2.5 group" aria-label="Home">
           <div class="w-9 h-9 rounded-xl bg-zinc-900 dark:bg-white flex items-center justify-center text-white dark:text-black shadow-lg group-hover:rotate-12 transition-transform duration-500">
             <span class="font-extrabold text-sm">D</span>
           </div>
           <span class="font-bold text-lg tracking-tight text-zinc-900 dark:text-white">Dream41</span>
        </NuxtLink>

        <div v-if="discordData" class="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/5 text-xs font-medium">
           <span class="relative flex h-2 w-2">
             <span class="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" :class="statusColor"></span>
             <span class="relative inline-flex rounded-full h-2 w-2" :class="statusColor"></span>
           </span>
           <span class="text-zinc-600 dark:text-zinc-400">{{ discordStatusText }}</span>
        </div>

        <div class="flex items-center gap-2">
           <button 
             @click="toggleSnow" 
             aria-label="Toggle Snow Effect"
             class="group p-2.5 rounded-full hover:bg-zinc-100 dark:hover:bg-white/10 transition-colors border border-transparent dark:border-white/5 relative" 
             :class="isSnowing ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400' : 'text-zinc-500 dark:text-zinc-400'"
           >
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 group-hover:rotate-180 transition-transform duration-700">
               <path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
               <path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1.001A3.75 3.75 0 0012 18z" />
             </svg>
           </button>

           <button 
             @click="toggleTheme" 
             aria-label="Toggle Dark Mode"
             class="group p-2.5 rounded-full text-zinc-500 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-white/10 transition-colors border border-transparent dark:border-white/5"
           >
             <ClientOnly>
                <SunIcon v-if="colorMode.value === 'light'" class="w-5 h-5 group-hover:rotate-90 transition-transform duration-500" />
                <MoonIcon v-else class="w-5 h-5 group-hover:-rotate-12 transition-transform duration-500" />
             </ClientOnly>
           </button>
        </div>
      </nav>
    </header>

    <main class="relative z-10 pt-44 pb-20 px-6 max-w-7xl mx-auto space-y-32 md:space-y-40">
      
      <section class="text-center space-y-8 relative">
        <div v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { delay: 100 } }" class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-xs font-semibold text-zinc-600 dark:text-zinc-300 backdrop-blur-md">
           <span class="relative flex h-2 w-2">
             <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
             <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
           </span>
           Open for new opportunities
        </div>

        <h1 v-motion :initial="{ opacity: 0, y: 50 }" :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 800, type: 'spring' } }" class="text-5xl sm:text-7xl md:text-9xl font-black text-zinc-900 dark:text-white tracking-tighter leading-[0.95] md:leading-[0.9]">
          Building the <br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 dark:from-indigo-400 dark:via-purple-400 dark:to-indigo-400 animate-pulse-glow">
            Modern Web
          </span>
        </h1>

        <p v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { delay: 400 } }" class="text-lg md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed font-light">
          Full-stack developer architecting <span class="text-zinc-900 dark:text-white font-medium">scalable</span>, user-centric solutions.
        </p>
        
        <div v-if="discordData" v-motion :initial="{ opacity: 0, scale: 0.9 }" :enter="{ opacity: 1, scale: 1, transition: { delay: 500 } }" class="flex justify-center mt-6">
           <div class="flex items-center gap-4 p-2 pr-6 rounded-full bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-white/10 shadow-lg backdrop-blur-md max-w-full overflow-hidden">
              <div class="relative shrink-0">
                 <img :src="`https://cdn.discordapp.com/avatars/${discordData.discord_user.id}/${discordData.discord_user.avatar}`" loading="lazy" decoding="async" class="w-10 h-10 rounded-full" alt="Dream41 Avatar" />
                 <div class="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white dark:border-zinc-900" :class="statusColor"></div>
              </div>
              <div class="text-left overflow-hidden">
                 <div class="text-xs font-bold text-zinc-500 uppercase tracking-wider">{{ discordData.listening_to_spotify ? 'Listening to Spotify' : 'Status' }}</div>
                 <div class="text-sm font-bold text-zinc-900 dark:text-white truncate max-w-[150px] md:max-w-[200px]">
                    {{ discordData.listening_to_spotify ? discordData.spotify.song : discordStatusText }}
                 </div>
              </div>
              <div v-if="discordData.listening_to_spotify" class="flex gap-1 items-end h-3 shrink-0">
                 <span class="w-1 bg-green-500 animate-[bounce_1s_infinite] h-2"></span>
                 <span class="w-1 bg-green-500 animate-[bounce_1.2s_infinite] h-3"></span>
                 <span class="w-1 bg-green-500 animate-[bounce_0.8s_infinite] h-1"></span>
              </div>
           </div>
        </div>

        <div v-motion :initial="{ opacity: 0, scale: 0.9 }" :enter="{ opacity: 1, scale: 1, transition: { delay: 600, type: 'spring' } }" class="flex flex-wrap justify-center gap-4 pt-6">
           <a href="#projects" class="group flex items-center gap-2 px-8 py-4 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black font-bold text-lg transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/20">
              <BriefcaseIcon class="w-5 h-5" /> View Work
           </a>
           <a href="https://github.com/whitskin" target="_blank" class="flex items-center gap-2 px-8 py-4 rounded-full bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-700 dark:text-white font-bold text-lg hover:bg-zinc-50 dark:hover:bg-white/10 transition-colors">
              <CodeBracketIcon class="w-5 h-5" /> GitHub
           </a>
        </div>
      </section>

      <section id="skills" v-motion-fade-visible class="w-full border-y border-zinc-200 dark:border-white/10 bg-white/50 dark:bg-black/30 py-16 overflow-hidden backdrop-blur-sm">
        <div class="relative flex overflow-x-hidden group [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <div class="flex gap-16 animate-marquee whitespace-nowrap hover:[animation-play-state:paused] will-change-transform">
              <div class="flex gap-16 items-center shrink-0">
                  <div v-for="skill in skills" :key="skill.name" class="flex items-center gap-3 opacity-50 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 cursor-default hover:scale-110">
                    <img :src="skill.icon" :alt="skill.name" loading="lazy" decoding="async" class="w-10 h-10 object-contain drop-shadow-lg" />
                    <span class="text-2xl font-bold text-zinc-800 dark:text-zinc-300 tracking-tight">{{ skill.name }}</span>
                  </div>
              </div>
              <div class="flex gap-16 items-center shrink-0">
                  <div v-for="skill in skills" :key="skill.name + '_duplicate'" class="flex items-center gap-3 opacity-50 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 cursor-default hover:scale-110">
                    <img :src="skill.icon" :alt="skill.name" loading="lazy" decoding="async" class="w-10 h-10 object-contain drop-shadow-lg" />
                    <span class="text-2xl font-bold text-zinc-800 dark:text-zinc-300 tracking-tight">{{ skill.name }}</span>
                  </div>
              </div>
            </div>
        </div>
      </section>

      <section id="projects">
         <div v-motion-slide-visible-once-bottom class="flex items-center justify-between mb-12 border-b border-zinc-200 dark:border-white/10 pb-6">
            <h2 class="text-4xl font-bold text-zinc-900 dark:text-white tracking-tight">Selected Work</h2>
         </div>

         <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <SpotlightCard class="group h-full">
               <div class="h-[300px] w-full overflow-hidden bg-zinc-100 dark:bg-[#121212] relative">
                  <div class="absolute inset-0 bg-gradient-to-t from-white dark:from-zinc-900 to-transparent z-10 opacity-60"></div>
                  <img src="/images/grafiklab.png" alt="GrafikLab Dashboard Preview" loading="lazy" decoding="async" class="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-out" />
               </div>
               <div class="p-8 relative z-20">
                  <div class="flex gap-2 mb-4">
                     <span class="px-3 py-1 rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/5 text-xs font-bold text-zinc-600 dark:text-zinc-300">PHP</span>
                     <span class="px-3 py-1 rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/5 text-xs font-bold text-zinc-600 dark:text-zinc-300">Laravel</span>
                  </div>
                  <h3 class="text-2xl font-bold text-zinc-900 dark:text-white mb-3">GrafikLab.NET</h3>
                  <p class="text-base text-zinc-600 dark:text-zinc-400 mb-6">Premium digital platform offering robust API integrations.</p>
                  <a href="https://grafiklab.net" target="_blank" aria-label="Visit GrafikLab" class="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:gap-3 transition-all">Visit Website <ArrowUpRightIcon class="w-4 h-4" /></a>
               </div>
            </SpotlightCard>

            <SpotlightCard class="group h-full">
               <div class="h-[300px] w-full overflow-hidden bg-zinc-100 dark:bg-[#121212] relative">
                  <div class="absolute inset-0 bg-gradient-to-t from-white dark:from-zinc-900 to-transparent z-10 opacity-60"></div>
                  <img src="/images/sporapi.png" alt="SporApi Live Data Preview" loading="lazy" decoding="async" class="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-out" />
               </div>
               <div class="p-8 relative z-20">
                  <div class="flex gap-2 mb-4">
                    <span class="px-3 py-1 rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/5 text-xs font-bold text-zinc-600 dark:text-zinc-300">NUXT</span>
                    <span class="px-3 py-1 rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/5 text-xs font-bold text-zinc-600 dark:text-zinc-300">VUE</span>
                    <span class="px-3 py-1 rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/5 text-xs font-bold text-zinc-600 dark:text-zinc-300">WebSocket</span>
                  </div>
                  <h3 class="text-2xl font-bold text-zinc-900 dark:text-white mb-3">SPOR.GrafikLab</h3>
                  <p class="text-base text-zinc-600 dark:text-zinc-400 mb-6">Live sports API service with real-time scores.</p>
                  <a href="https://spor.grafiklab.net" target="_blank" aria-label="Visit SporApi" class="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:gap-3 transition-all">Visit Website <ArrowUpRightIcon class="w-4 h-4" /></a>
               </div>
            </SpotlightCard>

<SpotlightCard class="group h-full min-h-[300px]">
   <div class="p-10 flex flex-col justify-between h-full relative overflow-hidden">
      <div>
         <p class="text-base text-zinc-600 dark:text-zinc-400">EPIN SCRIPT.</p>
      </div>
      
      <div class="mt-6 flex items-center gap-2 text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider">
        <span class="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse"></span> In Development
      </div>
   </div>
</SpotlightCard>

            <div class="group h-full min-h-[300px] rounded-[2.5rem] bg-zinc-50 dark:bg-white/[0.02] border border-dashed border-zinc-300 dark:border-white/10 p-10 flex flex-col justify-center items-center text-center hover:bg-zinc-100 dark:hover:bg-white/5 transition-all cursor-pointer">
               <div class="w-16 h-16 rounded-full bg-white dark:bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <RocketLaunchIcon class="w-8 h-8 text-zinc-400 dark:text-white" />
               </div>
               <h3 class="text-xl font-bold text-zinc-900 dark:text-white">Next Big Thing</h3>
               <p class="text-sm text-zinc-500 mt-2">Coming Soon</p>
            </div>

         </div>
      </section>

      <section id="contact" class="pb-20">
         <div v-motion :initial="{ opacity: 0, scale: 0.8, y: 100 }" :visibleOnce="{ opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 40 } }" class="relative rounded-[3rem] bg-zinc-900 dark:bg-[#050505] overflow-hidden px-8 py-32 text-center border border-zinc-800 dark:border-white/10 shadow-2xl dark:shadow-black/50 group">
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none group-hover:bg-indigo-500/30 transition-all duration-1000 will-change-transform"></div>
            <div class="relative z-10 max-w-2xl mx-auto space-y-8">
               <h2 class="text-4xl md:text-6xl font-black text-white tracking-tight">Let's create something <br/><span class="text-indigo-400">extraordinary.</span></h2>
               <div class="flex flex-wrap justify-center gap-4 pt-4">
                  <a href="mailto:contact@dream41.dev" aria-label="Send Email" class="flex items-center gap-2 px-8 py-4 rounded-full bg-white text-zinc-900 font-bold text-lg hover:scale-105 transition-transform">
                     <EnvelopeIcon class="w-5 h-5" /> Email Me
                  </a>
                  <a href="https://discord.com/users/1147956655384956978" target="_blank" aria-label="Join Discord" class="flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 backdrop-blur-md text-white font-bold text-lg border border-white/10 hover:bg-white/20 transition-all">
                     <ChatBubbleLeftRightIcon class="w-5 h-5" /> Discord
                  </a>
               </div>
            </div>
         </div>
      </section>
    </main>

    <footer class="border-t border-zinc-200 dark:border-white/10 py-12 bg-white dark:bg-black">
       <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div class="flex items-center gap-3">
             <div class="w-3 h-3 rounded-full bg-indigo-500 animate-pulse"></div>
             <span class="font-bold text-xl text-zinc-900 dark:text-white">Dream41</span>
          </div>
          <p class="text-sm text-zinc-600 dark:text-zinc-400">© 2025. Built with Nuxt 4 & Motion.</p>
       </div>
    </footer>
  </div>
</template>

<script setup>
import { 
  SunIcon, MoonIcon, ArrowRightIcon, ArrowUpRightIcon, 
  CloudIcon, RocketLaunchIcon, EnvelopeIcon, ChatBubbleLeftRightIcon,
  BriefcaseIcon, CodeBracketIcon
} from '@heroicons/vue/24/outline'
import { useDocumentVisibility, useWindowSize } from '@vueuse/core'

const colorMode = useColorMode()
const toggleTheme = () => { colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark' }
const visibility = useDocumentVisibility()

const { data: discordData, refresh } = await useFetch('https://api.lanyard.rest/v1/users/1147956655384956978', {
  transform: (res) => res.data,
  server: false,
})

if (import.meta.client) {
  setInterval(() => { 
    if (visibility.value === 'visible') {
        refresh() 
    }
  }, 10000)
}

const statusColor = computed(() => {
  switch(discordData.value?.discord_status) {
    case 'online': return 'bg-green-500'
    case 'idle': return 'bg-amber-500'
    case 'dnd': return 'bg-red-500'
    default: return 'bg-zinc-500'
  }
})

const discordStatusText = computed(() => {
  const status = discordData.value?.discord_status
  if (status === 'online') return 'Online'
  if (status === 'idle') return 'Idle'
  if (status === 'dnd') return 'Do Not Disturb'
  return 'Offline'
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
  
  const particleCount = windowWidth.value < 768 ? 30 : 100
  particles = []
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 3 + 1,
      speedY: Math.random() * 1 + 0.5,
      speedX: Math.random() * 0.5 - 0.25
    })
  }
  const draw = () => {
    if (visibility.value !== 'visible') {
        animationFrame = requestAnimationFrame(draw)
        return
    }
    ctx.clearRect(0, 0, width, height)
    ctx.fillStyle = colorMode.value === 'dark' ? '#ffffff' : '#94a3b8'
    ctx.beginPath()
    for (let i = 0; i < particleCount; i++) {
      const p = particles[i]
      ctx.moveTo(p.x, p.y)
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2, true)
    }
    ctx.fill()
    update()
    animationFrame = requestAnimationFrame(draw)
  }
  const update = () => {
    for (let i = 0; i < particleCount; i++) {
      const p = particles[i]
      p.y += p.speedY
      p.x += p.speedX
      if (p.y > height) { p.y = 0; p.x = Math.random() * width }
    }
  }
  draw()
}

onMounted(() => {
  window.addEventListener('resize', () => {
    if (isSnowing.value && snowCanvas.value) {
      snowCanvas.value.width = window.innerWidth
      snowCanvas.value.height = window.innerHeight
    }
  })
})

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
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap' },
    { rel: 'icon', type: 'image/png', href: 'https://cdn.discordapp.com/avatars/1147956655384956978/a_b05c99a6bc6eae33af22831d6e41341b.png?size=4096' },
  ],
});
</script>