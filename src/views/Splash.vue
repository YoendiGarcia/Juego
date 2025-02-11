<script setup>
import { ref,onMounted } from "vue";
import { useRouter } from "vue-router";

const progressBar = ref(0);
const router = useRouter()

function updateProgress() {
  setInterval(() => {
    progressBar.value += 20;
    if (progressBar.value === 100) {
        router.push("/menu")
    }
  }, 1000);
}

const playAudio = async () => {
  try {
    const sound = await import("@/assets/audio/bienvenida.mp3");
    const audio = new Audio(sound.default);
    const sound1 = await import("@/assets/audio/musicadefondo.mp3");
    const audio1 = new Audio(sound1.default);
    audio1.loop = true;
    audio1.volume = 0.3
    audio.play()
    audio1.play();
  } catch (error) {
    console.error("Error al cargar o reproducir el audio:", error);
  }
};


onMounted(playAudio);

updateProgress();
</script>

<template>
  <div class="flex flex-col">
    <img src="../assets/img/Icono.png" alt="Icono" />
    <h1 class="text-center text-3xl text-blue-800 m-3">Cargando...</h1>
    <progress
      class="rounded-lg h-6"
      v-bind:value="progressBar"
      max="100"
    ></progress>
  </div>
</template>

<style scoped></style>
