<script setup>
import { useRouter } from "vue-router";
import SmallButton from "@/components/SmallButton.vue";

const router = useRouter();

const goBack = () => {
  router.push("/menu");
};
</script>

<template>
  <h1 class="text-3xl text-blue-800 text-center">Ayuda</h1>
  <ul class="ul">
    <li>
      Haga click encima de un trozo de puente para que este gire 90 grados, gana
      si logra conectar sin interrupción desde el inicio hasta el fin
    </li>
    <li>
      Niveles de dificultad:
      <ul class="ul1">
        <li>Fácil: sin limite de tiempo ni movimientos</li>
        <li>Intermedio: sin limite de tiempo pero si de movimientos</li>
        <li>Dificil: con limite de tiempo y de movimientos</li>
      </ul>
    </li>
    <li>Podra ver las puntuaciones obtenidas por cada jugador</li>
  </ul>
  <div class="absolute bottom-10 left-10">
    <SmallButton @click="goBack" text="Atras"></SmallButton>
  </div>
</template>

<style scoped>
    .ul{
        list-style-type: circle;
    }
    .ul1{
        list-style-type: disc;
    }

    .ul1 li{
        margin-left: 20px;
    }
</style>
