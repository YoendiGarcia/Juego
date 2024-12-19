<script setup>
import { ref } from "vue";
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
