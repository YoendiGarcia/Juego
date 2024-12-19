<script setup>
const props = defineProps(["username", "points"]);
</script>

<template>
  <div
    class="shadow-lg rounded-lg h-10 flex justify-center items-center p-4 hover:bg-blue-400"
  >
    <p class="text-xl text-blue-950">{{ props.username }} : {{ props.points }}</p>
  </div>
</template>
