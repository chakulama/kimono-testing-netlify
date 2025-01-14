<template>
  <Landing/>
  <div class="text-white hidden">
    <div class="relative">
      <img class="h-[100vh] w-[1512px] object-cover" src="/hero-image.jpg" alt="" />
      <div class="absolute inset-0 bg-black bg-opacity-60 flex items-center mx-auto gap-16 flex-col justify-center">
        <img class="h-[300px] w-[300px] object-cover rounded-xl" src="/logo.jpeg" alt="" />
        <div class="flex flex-col items-center justify-center p-8 mx-8">
          <span class="text-4xl md:text-5xl uppercase text-white font-bold drop-shadow-lg">
            restaurante mediterraneo bcn</span
          >
          <span class="text-lg text-white font-bold drop-shadow-lg">
            Estamos Abierto Martes a Domingo
          </span>
          <span class="text-lg text-white drop-shadow-lg">
            11:00 - 16:00 || 19:00 - 23:00
          </span>
          <div class="flex gap-4 items-center">
            <span class="text-md text-white drop-shadow-lg"> Para hacer reserva </span>
            <a class="text-lg text-white font-bold drop-shadow-lg" href="tel:+34932503376"
              >+34932503376</a
            >
          </div>
          <a href="https://maps.app.goo.gl/vXBz7zTENp6xD9xP8" target="_blank"
            >C/ de Josep Pla, 19, 08019 Bcn</a
          >
          <span
            class="text-2xl uppercase text-white font-bold drop-shadow-lg animate-marquee"
            >Venimos pronto con carta nueva
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@keyframes marquee {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
.animate-marquee {
  display: inline-block;
  white-space: nowrap;
  animation: marquee 10s linear infinite;
}
</style>
