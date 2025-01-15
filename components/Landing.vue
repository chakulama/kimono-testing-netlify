<template>
  <div class="min-h-screen relative overflow-hidden bg-gradient-to-b from-black to-gray-900 text-white flex flex-col items-center justify-center text-center px-4">
    <!-- Animated background elements -->
    <div class="absolute inset-0 overflow-hidden opacity-10">
      <div v-for="n in 20" :key="n" 
           class="floating-sushi"
           :style="{
             left: `${Math.random() * 100}%`,
             animationDelay: `${Math.random() * 15}s`,
             animationDuration: `${15 + Math.random() * 10}s`
           }">
        🍣
      </div>
      <div v-for="n in 20" :key="`ramen-${n}`" 
           class="floating-ramen"
           :style="{
             left: `${Math.random() * 100}%`,
             animationDelay: `${Math.random() * 15}s`,
             animationDuration: `${15 + Math.random() * 10}s`
           }">
        🍜
      </div>
    </div>

    <!-- Main content -->
    <div class="relative z-10 flex flex-col justify-center items-center">
      <img src="/public/logo-white.jpg" alt="Komono Sushi" class="w-48 mb-8 hover:scale-105 transition-transform" />
      <h1 class="font-bold mb-4 font-japanese">
        <span class="block text-red-500 text-4xl md:text-6xl ">Komono Kitchen</span>
        <span class="block text-white text-2xl md:text-4xl mt-2">Sushi & Ramen</span>
      </h1>
      <p class="text-xl md:text-2xl mb-12 font-sans tracking-wider text-gray-300">Coming Soon</p>
      
      <a href="/menu-en.pdf" 
         target="_blank"
         class="group relative px-8 py-3 bg-red-600 hover:bg-red-700 transition-all duration-300 rounded-full text-white font-semibold overflow-hidden">
        <span class="relative z-10">View Our Menu</span>
        <div class="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
// Simplified script since we're only showing static content for now
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap');

.font-japanese {
  font-family: 'Noto Sans JP', sans-serif;
}

.floating-sushi, .floating-ramen {
  position: absolute;
  font-size: 2rem;
  animation: float linear infinite;
  opacity: 0.5;
}

@keyframes float {
  0% {
    transform: translateY(100vh) rotate(0deg);
  }
  100% {
    transform: translateY(-100px) rotate(360deg);
  }
}

/* Add subtle hover effect to the logo */
img:hover {
  filter: drop-shadow(0 0 0.75rem rgba(239, 68, 68, 0.5));
}

/* Add a subtle text shadow to the main heading */
h1 {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

/* Custom animation for the coming soon text */
p {
  animation: pulse 3s infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}
</style>
