<script setup>
import Button from "../components/Button.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const navigateToJugar = () => {
  router.push("/juego");
};
const navigateToPuntuacion = () => {
  router.push("/puntuacion");
};
const navigateToAyuda = () => {
  router.push("/ayuda");
};
</script>

<template>
  <img src="../assets/img/Icono.png" alt="Icono" />
  <div class="flex flex-col gap-2 m-9">
    <Button @click="navigateToJugar" text="Jugar"></Button>
    <Button @click="navigateToPuntuacion" text="Puntuacion"></Button>
    <Button @click="navigateToAyuda" text="Ayuda"></Button>
    <Button text="Salir"></Button>
  </div>
</template>
