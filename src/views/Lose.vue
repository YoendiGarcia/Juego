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
    const sound = await import("@/assets/audio/lose.mp3");
    const audio = new Audio(sound.default);
    audio.play();
  } catch (error) {
    console.error("Error al cargar o reproducir el audio:", error);
  }
};

onMounted(playAudio);

</script>

<template>
  <div class="flex flex-col shadow-2xl p-4 rounded-2xl justify-center items-center">
    <p class="text-3xl text-red-600 mb-10">Has perdido❌</p>
    <Button @click="goMenu" text="Continuar"></Button>
  </div>
</template>