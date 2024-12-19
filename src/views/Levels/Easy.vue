<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import SmallButton from "@/components/SmallButton.vue";
import arrayPoints from "@/main";

const positions = ref(Array(16).fill(1));
const rotations = ref(Array(16).fill(0));
const props = defineProps(["username", "level"]);
const router = useRouter();
const audioRef = ref();

const rotateImage = (index) => {
  audioRef.value.play();
  rotations.value[index] += 90;
  if (positions.value[index] == 4) {
    positions.value[index] = 1;
  } else {
    positions.value[index] += 1;
  }
  if (winGame()) {
    router.push("/victory");
  }
};

const winGame = () => {
  if (
    positions.value[1] == 3 &&
    positions.value[5] == 1 &&
    positions.value[6] == 3 &&
    positions.value[10] == 1 &&
    positions.value[11] == 3
  ) {
    arrayPoints.push({
      username: props.username,
      value: 1,
    });
    return true;
  }
  return false;
};

const playAudio = async () => {
  try {
    const sound = await import("@/assets/audio/rotation.mp3");
    const audio = new Audio(sound.default);
    audioRef.value = audio;
  } catch (error) {
    console.error("Error al cargar o reproducir el audio:", error);
  }
};

const goBack = () => {
  router.push("/menu");
};

onMounted(playAudio)
</script>

<template>
  <header class="flex justify-around text-blue-800 text-3xl mb-2">
    <p>Nivel: {{ props.level }}</p>
    <p>Jugador: {{ props.username }}</p>
  </header>
  <hr />
  <p class="text-blue-800">Inicio</p>
  <div>
    <img
      src="../../assets/img/Diapositiva2.png"
      alt="Block"
      :style="{ transform: `rotate(${rotations[0]}deg)` }"
      style="border: 1px solid blue"
    />
    <img
      src="../../assets/img/Diapositiva2.png"
      alt="Block"
      :style="{ transform: `rotate(${rotations[1]}deg)` }"
      @click="rotateImage(1)"
    />
    <img
      src="../../assets/img/Diapositiva1.png"
      alt="Block"
      :style="{ transform: `rotate(${rotations[2]}deg)` }"
      @click="rotateImage(2)"
    />
    <img
      src="../../assets/img/Diapositiva1.png"
      alt="Block"
      :style="{ transform: `rotate(${rotations[3]}deg)` }"
      @click="rotateImage(3)"
    />
  </div>
  <div>
    <img
      src="../../assets/img/Diapositiva2.png"
      alt="Block"
      :style="{ transform: `rotate(${rotations[4]}deg)` }"
      @click="rotateImage(4)"
    />
    <img
      src="../../assets/img/Diapositiva2.png"
      alt="Block"
      :style="{ transform: `rotate(${rotations[5]}deg)` }"
      @click="rotateImage(5)"
    />
    <img
      src="../../assets/img/Diapositiva2.png"
      alt="Block"
      :style="{ transform: `rotate(${rotations[6]}deg)` }"
      @click="rotateImage(6)"
    />
    <img
      src="../../assets/img/Diapositiva1.png"
      alt="Block"
      :style="{ transform: `rotate(${rotations[7]}deg)` }"
      @click="rotateImage(7)"
    />
  </div>
  <div>
    <img
      src="../../assets/img/Diapositiva2.png"
      alt="Block"
      :style="{ transform: `rotate(${rotations[8]}deg)` }"
      @click="rotateImage(8)"
    />
    <img
      src="../../assets/img/Diapositiva1.png"
      alt="Block"
      :style="{ transform: `rotate(${rotations[9]}deg)` }"
      @click="rotateImage(9)"
    />
    <img
      src="../../assets/img/Diapositiva2.png"
      alt="Block"
      :style="{ transform: `rotate(${rotations[10]}deg)` }"
      @click="rotateImage(10)"
    />
    <img
      src="../../assets/img/Diapositiva2.png"
      alt="Block"
      :style="{ transform: `rotate(${rotations[11]}deg)` }"
      @click="rotateImage(11)"
    />
  </div>
  <div>
    <img
      src="../../assets/img/Diapositiva2.png"
      alt="Block"
      :style="{ transform: `rotate(${rotations[12]}deg)` }"
      @click="rotateImage(12)"
    />
    <img
      src="../../assets/img/Diapositiva1.png"
      alt="Block"
      :style="{ transform: `rotate(${rotations[13]}deg)` }"
      @click="rotateImage(13)"
    />
    <img
      src="../../assets/img/Diapositiva1.png"
      alt="Block"
      :style="{ transform: `rotate(${rotations[14]}deg)` }"
      @click="rotateImage(14)"
    />
    <img
      src="../../assets/img/Diapositiva2.png"
      alt="Block"
      :style="{ transform: `rotate(${rotations[15]}deg)` }"
      style="border: 1px solid blue"
    />
  </div>
  <p class="text-blue-800 text-end">Fin</p>
  <SmallButton @click="goBack" text="Atrás"></SmallButton>
</template>

<style scoped>
img {
  height: 100px;
  width: 100px;
  border: 1px solid black;
}

img:hover {
  border: 1px solid blue;
}

div {
  display: flex;
}
</style>
