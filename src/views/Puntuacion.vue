<script setup>
import { useRouter } from "vue-router";
import SmallButton from "@/components/SmallButton.vue";
import PuntuationCard from "@/components/PuntuationCard.vue";
import { ref, onMounted } from "vue";
import arrayPoints from "@/main";

const router = useRouter();
const points = ref([])

const goBack = () => {
  router.push("/menu");
};

onMounted(()=>{
  points.value = arrayPoints
})

</script>

<template>
  <h1 class="text-center text-3xl text-blue-800 mb-10">Puntuación</h1>
  <div class="flex flex-col justify-center items-center">
    <div v-for="item in points" :key="item">
      <PuntuationCard
        :username="item.username"
        :points="item.value"
      ></PuntuationCard>
    </div>
  </div>
  <div class="absolute bottom-10 left-10">
    <SmallButton @click="goBack" text="Atrás"></SmallButton>
  </div>
</template>
