<script setup>
const props = defineProps(["text"]);
</script>

<template>
  <button class="bg-blue-800 hover:bg-blue-700 text-white text-xl p-2 rounded-xl w-52">{{ props.text }}</button>
</template>
