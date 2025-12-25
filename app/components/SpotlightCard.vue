<template>
  <div 
    ref="cardRef"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
    class="relative group rounded-[2.5rem] bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 overflow-hidden"
  >
    <div 
      class="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 hidden dark:block"
      :style="{
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.06), transparent 40%)`
      }"
    />
    
    <div class="relative z-20 h-full">
      <slot />
    </div>
  </div>
</template>

<script setup>
const cardRef = ref(null)
const position = reactive({ x: 0, y: 0 })

const handleMouseMove = (e) => {
  if (!cardRef.value) return
  const rect = cardRef.value.getBoundingClientRect()
  position.x = e.clientX - rect.left
  position.y = e.clientY - rect.top
}

const handleMouseLeave = () => {
  // Mouse çıkınca ışık olduğu yerde kalsın (daha doğal durur) veya sıfırlayabilirsin.
}
</script>