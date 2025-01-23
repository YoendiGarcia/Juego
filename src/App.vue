<script setup>

import { onMounted } from "vue";

const playAudio = async () => {
  try {
    const sound = await import("@/assets/audio/musicadefondo.mp3");
    const audio = new Audio(sound.default);
    audio.play();
  } catch (error) {
    console.error("Error al cargar o reproducir el audio:", error);
  }
};

onMounted(playAudio);
</script>

<template>
  <RouterView />
</template>
