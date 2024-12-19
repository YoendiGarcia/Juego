<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import SmallButton from "@/components/SmallButton.vue";
import arrayPoints from "@/main";

const positions = ref(Array(36).fill(1));
const rotations = ref(Array(36).fill(0));
const movements = ref(20);
const props = defineProps(["username", "level"]);
const router = useRouter();
const audioRef = ref()

const rotateImage = (index) => {
  audioRef.value.play()
  rotations.value[index] += 90;
  movements.value--;
  if (positions.value[index] == 4) {
    positions.value[index] = 1;
  } else {
    positions.value[index] += 1;
  }
  if (winGame()) {
    arrayPoints.push({
      username: props.username,
      value: 2,
    });
    router.push("/victory");
  }
  if (movements.value == 0) {
    router.push("/lose");
  }
};

const winGame = () => {
  if (
    positions.value[1] == 3 &&
    (positions.value[7] == 2 || positions.value[7] == 4) &&
    positions.value[12] == 2 &&
    positions.value[13] == 4 &&
    (positions.value[18] == 2 || positions.value[18] == 4) &&
    (positions.value[24] == 2 || positions.value[24] == 4) &&
    positions.value[30] == 1 &&
    positions.value[31] == 4 &&
    positions.value[25] == 2 &&
    (positions.value[26] == 1 || positions.value[26] == 3) &&
    positions.value[27] == 3 &&
    positions.value[33] == 1 &&
    (positions.value[34] == 1 || positions.value[34] == 3)
  ) {
    return true;
  }
  return false;
};

const goBack = () => {
  router.push("/menu");
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

onMounted(playAudio)

</script>

<template>
  <header class="flex flex-col text-blue-800 text-xl">
    <div class="flex justify-between">
      <p>Nivel: {{ props.level }}</p>
      <p>Jugador: {{ props.username }}</p>
    </div>
    <div>
      <p>Movimientos: {{ movements }}</p>
      <!-- <p>Tiempo: {{  }}</p> -->
    </div>
  </header>
  <hr />
  <p class="text-blue-800">Inicio</p>
  <main class="flex flex-col items-center">
    <!--Fila 1-->
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
        src="../../assets/img/Diapositiva3.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[2]}deg)` }"
        @click="rotateImage(2)"
      />
      <img
        src="../../assets/img/Diapositiva3.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[3]}deg)` }"
        @click="rotateImage(3)"
      />
      <img
        src="../../assets/img/Diapositiva1.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[4]}deg)` }"
        @click="rotateImage(4)"
      />
      <img
        src="../../assets/img/Diapositiva4.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[5]}deg)` }"
        @click="rotateImage(5)"
      />
    </div>

    <!--Fila 2-->
    <div>
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
      <img
        src="../../assets/img/Diapositiva4.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[8]}deg)` }"
        @click="rotateImage(8)"
      />
      <img
        src="../../assets/img/Diapositiva3.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[9]}deg)` }"
        @click="rotateImage(9)"
      />
      <img
        src="../../assets/img/Diapositiva1.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[10]}deg)` }"
        @click="rotateImage(10)"
      />
      <img
        src="../../assets/img/Diapositiva3.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[11]}deg)` }"
        @click="rotateImage(11)"
      />
    </div>
    <!--Fila 3-->
    <div>
      <img
        src="../../assets/img/Diapositiva2.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[12]}deg)` }"
        @click="rotateImage(12)"
      />
      <img
        src="../../assets/img/Diapositiva2.png"
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
        src="../../assets/img/Diapositiva4.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[15]}deg)` }"
        @click="rotateImage(15)"
      />
      <img
        src="../../assets/img/Diapositiva4.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[16]}deg)` }"
        @click="rotateImage(16)"
      />
      <img
        src="../../assets/img/Diapositiva1.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[17]}deg)` }"
        @click="rotateImage(17)"
      />
    </div>

    <!--Fila 4-->
    <div>
      <img
        src="../../assets/img/Diapositiva1.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[18]}deg)` }"
        @click="rotateImage(18)"
      />
      <img
        src="../../assets/img/Diapositiva3.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[19]}deg)` }"
        @click="rotateImage(19)"
      />
      <img
        src="../../assets/img/Diapositiva4.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[20]}deg)` }"
        @click="rotateImage(20)"
      />
      <img
        src="../../assets/img/Diapositiva3.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[21]}deg)` }"
        @click="rotateImage(21)"
      />
      <img
        src="../../assets/img/Diapositiva1.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[22]}deg)` }"
        @click="rotateImage(22)"
      />
      <img
        src="../../assets/img/Diapositiva1.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[23]}deg)` }"
        @click="rotateImage(23)"
      />
    </div>
    <!--Fila 5-->
    <div>
      <img
        src="../../assets/img/Diapositiva1.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[24]}deg)` }"
        @click="rotateImage(24)"
      />
      <img
        src="../../assets/img/Diapositiva2.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[25]}deg)` }"
        @click="rotateImage(25)"
      />
      <img
        src="../../assets/img/Diapositiva1.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[26]}deg)` }"
        @click="rotateImage(26)"
      />
      <img
        src="../../assets/img/Diapositiva2.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[27]}deg)` }"
        @click="rotateImage(27)"
      />
      <img
        src="../../assets/img/Diapositiva1.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[28]}deg)` }"
        @click="rotateImage(28)"
      />
      <img
        src="../../assets/img/Diapositiva4.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[29]}deg)` }"
        @click="rotateImage(29)"
      />
    </div>

    <!--Fila 6-->
    <div>
      <img
        src="../../assets/img/Diapositiva2.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[30]}deg)` }"
        @click="rotateImage(30)"
      />
      <img
        src="../../assets/img/Diapositiva2.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[31]}deg)` }"
        @click="rotateImage(31)"
      />
      <img
        src="../../assets/img/Diapositiva1.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[32]}deg)` }"
        @click="rotateImage(32)"
      />
      <img
        src="../../assets/img/Diapositiva2.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[33]}deg)` }"
        @click="rotateImage(33)"
      />
      <img
        src="../../assets/img/Diapositiva1.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[34]}deg)` }"
        @click="rotateImage(34)"
      />
      <img
        src="../../assets/img/Diapositiva1.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[35]}deg)` }"
        style="border: 1px solid blue"
      />
    </div>
  </main>
  <p class="text-blue-800 text-end">Fin</p>
  <SmallButton @click="goBack" text="Atrás"></SmallButton>
</template>

<style scoped>
img {
  height: 80px;
  width: 80px;
  border: 1px solid black;
}

img:hover {
  border: 1px solid blue;
}

div {
  display: flex;
}
</style>
