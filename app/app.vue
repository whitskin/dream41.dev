<template>
  <div class="antialiased min-h-screen transition-colors duration-300 bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 selection:bg-indigo-500/30 selection:text-indigo-500">
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif;
  background-color: #000000; /* Dark modda varsayılan siyah */
}
html.light body { background-color: #ffffff; }
</style>