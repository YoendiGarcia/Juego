<script setup>
const props = defineProps(["text"]);
</script>

<template>
  <button
    class="bg-blue-800 hover:bg-blue-700 text-white text-md p-2 rounded-xl w-20"
  >
    {{ props.text }}
  </button>
</template>
