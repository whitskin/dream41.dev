<template>
  <div
    class="w-[1200px] h-[630px] text-white flex flex-col items-start justify-center px-24 font-sans gap-4"
    style="background: linear-gradient(195deg, #ff00c3, #d123ba, #a42dab, #7b2f97, #552b80, #342465, #181a48, #050b2b);"
  >
    <!-- Title + Description -->
    <div class="flex flex-col gap-1 max-w-[900px]">
      <h1 class="text-4xl font-extrabold leading-tight tracking-tight">
        {{ title }}
      </h1>
      <p class="text-2xl text-gray-300 leading-snug">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, default: 'Dream41 Developer' },
  description: {
    type: String,
    default: `Hello, I'm Dream41 — a passionate full stack developer with a deep interest in building modern, scalable web applications. I enjoy turning creative ideas into clean, efficient code. Always learning, always improving — let’s create something remarkable together.`,
  }
});
</script>
