<script setup>
import { useRouter } from "vue-router";
import SmallButton from "@/components/SmallButton.vue";
import PuntuationCard from "@/components/PuntuationCard.vue";

const router = useRouter();

const goBack = () => {
  router.push("/menu");
};
</script>

<template>
  <h1 class="text-center text-3xl text-blue-800 mb-10">Puntuacion</h1>
  <div class="flex flex-col justify-center items-center">
    <PuntuationCard username="Yoendi" points="100"></PuntuationCard>
  </div>
  <div class="absolute bottom-10 left-10">
    <SmallButton @click="goBack" text="Atras"></SmallButton>
  </div>
</template>
