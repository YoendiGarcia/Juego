<script setup>
import Button from "@/components/SmallButton.vue";
import { useRouter } from "vue-router";
import { onMounted } from "vue";

const router = useRouter();

const goMenu = () => {
  router.push("/menu");
};


const playAudio = async () => {
  try {
    const sound1 = await import("@/assets/audio/victory.mp3");
    const audio1 = new Audio(sound1.default);
    const sound2 = await import("@/assets/audio/audio_victoria.mp3");
    const audio2 = new Audio(sound2.default);
    setTimeout(()=>{audio2.play()}, 1000);
    audio1.play();
  } catch (error) {
    console.error("Error al cargar o reproducir el audio:", error);
  }
};

onMounted(playAudio);
</script>

<template>
  <div
    class="flex flex-col shadow-2xl p-4 rounded-2xl justify-center items-center"
  >
    <p class="text-3xl mb-10">Nivel completado🎉🎉🎉</p>
    <Button @click="goMenu" text="Continuar"></Button>
  </div>
</template>
