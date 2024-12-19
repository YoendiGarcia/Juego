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

const goOut = () =>{
  window.close()
}

</script>

<template>
  <img src="../assets/img/Icono.png" alt="Icono" />
  <div class="flex flex-col gap-2 m-9">
    <Button @click="navigateToJugar" text="Jugar"></Button>
    <Button @click="navigateToPuntuacion" text="Puntuación"></Button>
    <Button @click="navigateToAyuda" text="Ayuda"></Button>
    <Button @click="goOut" text="Salir"></Button>
  </div>
</template>
