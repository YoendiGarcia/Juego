<script setup>
import Button from "@/components/SmallButton.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const goMenu = () => {
  router.push("/menu");
};
</script>

<template>
  <div class="flex flex-col shadow-2xl p-4 rounded-2xl justify-center items-center">
    <p class="text-3xl text-red-600 mb-10">Has perdido❌</p>
    <Button @click="goMenu" text="Continuar"></Button>
  </div>
</template>