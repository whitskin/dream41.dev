<template>
  <div class="relative overflow-x-hidden">
    
    <div class="fixed inset-0 z-0 pointer-events-none overflow-hidden">
       <div class="absolute inset-0 opacity-[0.03] dark:opacity-[0.06] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
       
       <div class="hidden dark:block absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[120px] animate-blob"></div>
       <div class="hidden dark:block absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[120px] animate-blob" style="animation-delay: 2s"></div>

       <div class="block dark:hidden absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-100/80 rounded-full blur-[100px]"></div>
    </div>

    <header class="fixed top-6 inset-x-0 z-50 flex justify-center px-6">
      <nav class="bg-white/70 dark:bg-black/70 backdrop-blur-xl border border-zinc-200 dark:border-white/10 rounded-full py-2.5 px-6 shadow-sm flex items-center justify-between w-full max-w-5xl transition-all">
        
        <NuxtLink to="/" class="flex items-center gap-2.5 group">
           <div class="w-9 h-9 rounded-xl bg-zinc-900 dark:bg-white flex items-center justify-center text-white dark:text-black shadow-lg shadow-zinc-500/20 group-hover:scale-105 transition-transform">
             <span class="font-extrabold text-sm">D</span>
           </div>
           <span class="font-bold text-lg tracking-tight text-zinc-900 dark:text-white">Dream41</span>
        </NuxtLink>

        <div class="hidden md:flex items-center gap-1 bg-zinc-100/50 dark:bg-white/5 p-1 rounded-full border border-zinc-200/50 dark:border-white/5">
           <a href="#projects" class="px-5 py-1.5 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white rounded-full hover:bg-white dark:hover:bg-white/10 transition-all">Work</a>
           <a href="#contact" class="px-5 py-1.5 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white rounded-full hover:bg-white dark:hover:bg-white/10 transition-all">Contact</a>
        </div>

        <div class="flex items-center gap-3">
           <button 
             @click="toggleTheme" 
             class="group p-2.5 rounded-full text-zinc-500 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-white/10 transition-colors border border-transparent dark:border-white/5"
           >
             <ClientOnly>
                <SunIcon v-if="colorMode.value === 'light'" class="w-5 h-5 group-hover:rotate-90 transition-transform duration-500" />
                <MoonIcon v-else class="w-5 h-5 group-hover:-rotate-12 transition-transform duration-500" />
             </ClientOnly>
           </button>

           <a href="#contact" class="hidden sm:flex items-center gap-2 px-6 py-2.5 bg-zinc-900 dark:bg-white text-white dark:text-black text-sm font-bold rounded-full hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all">
             Let's Talk
             <ArrowRightIcon class="w-4 h-4" />
           </a>
        </div>
      </nav>
    </header>

    <main class="relative z-10 pt-44 pb-20 px-6 max-w-7xl mx-auto space-y-32">
      
      <section class="text-center space-y-8 relative">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-xs font-semibold text-zinc-600 dark:text-zinc-300">
           <span class="relative flex h-2 w-2">
             <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
             <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
           </span>
           Open for new opportunities
        </div>

        <h1 class="text-5xl sm:text-7xl md:text-8xl font-bold text-zinc-900 dark:text-white tracking-tight leading-[1.05]">
          Building the <br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 dark:from-indigo-400 dark:via-purple-400 dark:to-indigo-400">
            Modern Web
          </span>
        </h1>

        <p class="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Full-stack developer architecting scalable, user-centric solutions. 
        </p>

        <div class="flex flex-wrap justify-center gap-4 pt-6">
           <a href="#projects" class="flex items-center gap-2 px-8 py-4 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black font-bold transition-transform hover:-translate-y-1 shadow-xl shadow-zinc-900/20 dark:shadow-white/10">
              <BriefcaseIcon class="w-5 h-5" /> View Work
           </a>
           <a href="https://github.com/whitskin" target="_blank" class="flex items-center gap-2 px-8 py-4 rounded-full bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-700 dark:text-white font-bold hover:bg-zinc-50 dark:hover:bg-white/10 transition-colors">
              <CodeBracketIcon class="w-5 h-5" /> GitHub
           </a>
        </div>
      </section>

      <section id="skills" class="w-full border-y border-zinc-200 dark:border-white/5 bg-white/50 dark:bg-black/30 py-12 overflow-hidden backdrop-blur-sm">
        <div class="relative flex overflow-x-hidden group">
            <div class="animate-marquee whitespace-nowrap flex gap-16 items-center">
              <div v-for="i in 2" :key="i" class="flex gap-16 items-center shrink-0">
                  <div v-for="skill in skills" :key="skill.name" class="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 cursor-default">
                    <img :src="skill.icon" :alt="skill.name" class="w-9 h-9 object-contain drop-shadow-sm" />
                    <span class="text-xl font-bold text-zinc-800 dark:text-zinc-300 tracking-tight">{{ skill.name }}</span>
                  </div>
              </div>
            </div>
            <div class="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-black to-transparent z-10"></div>
            <div class="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-black to-transparent z-10"></div>
        </div>
      </section>

      <section id="projects">
         <div class="flex items-center justify-between mb-12 border-b border-zinc-200 dark:border-white/10 pb-6">
            <h2 class="text-3xl font-bold text-zinc-900 dark:text-white">Selected Work</h2>
         </div>

         <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div class="group md:col-span-2 relative rounded-3xl bg-white dark:bg-dark-card border border-zinc-200 dark:border-white/10 overflow-hidden hover:border-indigo-500/30 transition-all duration-500 flex flex-col hover:shadow-2xl dark:hover:shadow-indigo-500/5">
               <div class="h-[300px] sm:h-[400px] w-full overflow-hidden bg-zinc-100 dark:bg-[#121212] relative">
                  <div class="absolute inset-0 bg-gradient-to-t from-white dark:from-dark-card to-transparent z-10 opacity-50"></div>
                  <img src="/images/grafiklab.png" alt="GrafikLab" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
               </div>
               
               <div class="p-8 relative z-20">
                  <div class="flex gap-2 mb-4">
                     <span class="px-3 py-1 rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/5 text-xs font-semibold text-zinc-600 dark:text-zinc-300">PHP</span>
                     <span class="px-3 py-1 rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/5 text-xs font-semibold text-zinc-600 dark:text-zinc-300">Laravel</span>
                  </div>
                  <h3 class="text-2xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">GrafikLab.NET</h3>
                  <p class="text-zinc-600 dark:text-zinc-400 mb-6 max-w-lg">
                     High-performance digital platform offering robust API integrations.
                  </p>
                  <a href="https://grafiklab.net" target="_blank" class="inline-flex items-center gap-1 text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:underline">
                     Visit Website <ArrowUpRightIcon class="w-4 h-4" />
                  </a>
               </div>
            </div>

            <div class="flex flex-col gap-8">
                <div class="flex-1 group rounded-3xl bg-white dark:bg-dark-card border border-zinc-200 dark:border-white/10 p-8 flex flex-col justify-between hover:border-indigo-500/30 transition-all hover:shadow-xl dark:hover:shadow-indigo-500/5">
                   <div>
                      <div class="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center mb-6">
                         <CloudIcon class="w-6 h-6" />
                      </div>
                      <h3 class="text-xl font-bold text-zinc-900 dark:text-white mb-2">SubManager SaaS</h3>
                      <p class="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                         Subscription tracking dashboard for developers.
                      </p>
                   </div>
                   <div class="mt-6 flex items-center gap-2 text-xs font-bold text-amber-500 uppercase tracking-wider">
                      <span class="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span> In Development
                   </div>
                </div>

                <div class="flex-1 group rounded-3xl bg-white dark:bg-white/[0.03] border border-dashed border-zinc-300 dark:border-white/10 p-8 flex flex-col justify-center items-center text-center hover:bg-zinc-50 dark:hover:bg-white/5 transition-all cursor-pointer">
                   <div class="w-14 h-14 rounded-full bg-zinc-100 dark:bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-300">
                      <RocketLaunchIcon class="w-7 h-7 text-zinc-500 dark:text-white" />
                   </div>
                   <h3 class="font-bold text-zinc-900 dark:text-white">Next Project</h3>
                </div>
            </div>
         </div>
      </section>

      <section id="contact" class="pb-20">
         <div class="relative rounded-3xl bg-zinc-900 dark:bg-[#050505] overflow-hidden px-8 py-20 text-center border border-zinc-800 dark:border-white/10 shadow-2xl dark:shadow-black/50">
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none"></div>
            <div class="relative z-10 max-w-xl mx-auto space-y-6">
               <h2 class="text-3xl md:text-5xl font-bold text-white">Let's collaborate.</h2>
               <div class="flex flex-wrap justify-center gap-3 pt-4">
                  <a href="mailto:contact@dream41.dev" class="flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-zinc-900 font-bold hover:scale-105 transition-transform shadow-lg">
                     <EnvelopeIcon class="w-5 h-5" /> Email Me
                  </a>
                  <a href="https://discord.com/users/1147956655384956978" target="_blank" class="flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 backdrop-blur-md text-white font-bold border border-white/10 hover:bg-white/20 transition-all">
                     <ChatBubbleLeftRightIcon class="w-5 h-5" /> Discord
                  </a>
               </div>
            </div>
         </div>
      </section>
    </main>

    <footer class="border-t border-zinc-200 dark:border-white/10 py-10 bg-white dark:bg-black">
       <div class="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div class="flex items-center gap-2">
             <div class="w-2 h-2 rounded-full bg-indigo-500"></div>
             <span class="font-bold text-zinc-700 dark:text-zinc-300">Dream41</span>
          </div>
          <p class="text-sm text-zinc-500">© 2025. Nuxt 4 Ready.</p>
       </div>
    </footer>
  </div>
</template>

<script setup>
// Script kısmı aynı kalacak (importlar ve colorMode)
import { 
  SunIcon, MoonIcon, ArrowRightIcon, ArrowUpRightIcon, 
  CloudIcon, RocketLaunchIcon, EnvelopeIcon, ChatBubbleLeftRightIcon,
  BriefcaseIcon, CodeBracketIcon
} from '@heroicons/vue/24/outline'

const colorMode = useColorMode()
const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const skills = [
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/tailwindcss/tailwindcss-original.svg' },
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
  props: { 
    title: 'Dream41', 
    description: `Hello, I'm Dream41 — a passionate full stack developer with a deep interest in building modern, scalable web applications. I enjoy turning creative ideas into clean, efficient code. Always learning, always improving — let's create something remarkable together.`,    

  }, 
});

useHead({
  title: 'Dream41 | Full-Stack Developer Portfolio',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'author', content: 'Dream41' },
    { name: 'theme-color', content: '#3B82F6' },
    { name: 'description', content: 'Premium portfolio of Dream41, a full-stack developer specializing in modern web applications.' },
    { name: 'og:title', content: 'Dream41 | Full-Stack Developer Portfolio' },
    { name: 'og:description', content: 'Premium portfolio of Dream41, a full-stack developer specializing in modern web applications.' },
    { name: 'og:type', content: 'website' },
    { name: 'og:url', content: 'https://dream41.dev' },
  ],
  link: [
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap' },
    { rel: 'icon', type: 'image/png', href: 'https://cdn.discordapp.com/avatars/1147956655384956978/a_b05c99a6bc6eae33af22831d6e41341b.png?size=4096' },
  ],
});
</script>