<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import SmallButton from "@/components/SmallButton.vue";
import arrayPoints from "@/main";

const positions = ref(Array(64).fill(1));
const rotations = ref(Array(64).fill(0));
const movements = ref(30);
const time = ref(60);
const props = defineProps(["username", "level"]);
const router = useRouter();
const audioRef = ref();
let intevalId;

const rotateImage = (index) => {
  audioRef.value.play();
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
      value: 3 + movements.value + time.value,
    });
    router.push("/victory");
  } else if (movements.value == 0) {
    router.push("/lose");
  }
};

const winGame = () => {
  if (
    (positions.value[1] == 1 || positions.value[1] == 3) &&
    (positions.value[2] == 2 || positions.value[2] == 4) &&
    positions.value[3] == 2 &&
    positions.value[11] == 1 &&
    positions.value[12] == 3 &&
    positions.value[20] == 4 &&
    (positions.value[21] == 1 || positions.value[21] == 3) &&
    (positions.value[22] == 2 || positions.value[22] == 4) &&
    positions.value[23] == 3 &&
    positions.value[28] == 1 &&
    (positions.value[29] == 1 || positions.value[29] == 3) &&
    (positions.value[30] == 2 || positions.value[40] == 4) &&
    positions.value[31] == 4 &&
    positions.value[36] == 4 &&
    (positions.value[37] == 1 || positions.value[37] == 3) &&
    (positions.value[38] == 1 || positions.value[38] == 3) &&
    positions.value[39] == 3 &&
    (positions.value[45] == 2 || positions.value[45] == 3) &&
    (positions.value[46] == 2 || positions.value[46] == 4) &&
    positions.value[47] == 3 &&
    positions.value[53] == 1 &&
    (positions.value[54] == 1 || positions.value[54] == 3) &&
    positions.value[55] == 2
  ) {
    return true;
  }
  return false;
};

const startTimer = () => {
  intevalId = setInterval(() => {
    if (time.value == 0) {
      router.push("/lose");
    }
    time.value--;
  }, 1000);
};

const endTimer = () => {
  clearInterval(intevalId);
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

onMounted(playAudio);
onMounted(startTimer);
onUnmounted(endTimer);
</script>

<template>
  <header class="flex flex-col text-blue-800 text-xl">
    <div class="flex justify-between">
      <p>Nivel: {{ props.level }}</p>
      <p>Jugador: {{ props.username }}</p>
    </div>
    <div class="flex justify-between">
      <p>Movimientos: {{ movements }}</p>
      <p>Tiempo: {{ time }}</p>
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
        src="../../assets/img/Diapositiva1.png"
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
        src="../../assets/img/Diapositiva4.png"
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
        src="../../assets/img/Diapositiva3.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[5]}deg)` }"
        @click="rotateImage(5)"
      />
      <img
        src="../../assets/img/Diapositiva1.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[6]}deg)` }"
        @click="rotateImage(6)"
      />
      <img
        src="../../assets/img/Diapositiva4.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[7]}deg)` }"
        @click="rotateImage(7)"
      />
    </div>

    <!--Fila 2-->
    <div>
      <img
        src="../../assets/img/Diapositiva1.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[8]}deg)` }"
        @click="rotateImage(8)"
      />
      <img
        src="../../assets/img/Diapositiva2.png"
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
        src="../../assets/img/Diapositiva2.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[11]}deg)` }"
        @click="rotateImage(11)"
      />
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
        src="../../assets/img/Diapositiva3.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[14]}deg)` }"
        @click="rotateImage(14)"
      />
      <img
        src="../../assets/img/Diapositiva1.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[15]}deg)` }"
        @click="rotateImage(15)"
      />
    </div>

    <!--Fila 3-->
    <div>
      <img
        src="../../assets/img/Diapositiva3.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[16]}deg)` }"
        @click="rotateImage(16)"
      />
      <img
        src="../../assets/img/Diapositiva2.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[17]}deg)` }"
        @click="rotateImage(17)"
      />
      <img
        src="../../assets/img/Diapositiva4.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[18]}deg)` }"
        @click="rotateImage(18)"
      />
      <img
        src="../../assets/img/Diapositiva1.png"
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
        src="../../assets/img/Diapositiva1.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[21]}deg)` }"
        @click="rotateImage(21)"
      />
      <img
        src="../../assets/img/Diapositiva3.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[22]}deg)` }"
        @click="rotateImage(22)"
      />
      <img
        src="../../assets/img/Diapositiva2.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[23]}deg)` }"
        @click="rotateImage(23)"
      />
    </div>

    <!--Fila 4-->
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
        src="../../assets/img/Diapositiva4.png"
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
        src="../../assets/img/Diapositiva4.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[28]}deg)` }"
        @click="rotateImage(28)"
      />
      <img
        src="../../assets/img/Diapositiva1.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[29]}deg)` }"
        @click="rotateImage(29)"
      />
      <img
        src="../../assets/img/Diapositiva3.png"
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
    </div>

    <!--Fila 5-->
    <div>
      <img
        src="../../assets/img/Diapositiva3.png"
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
        src="../../assets/img/Diapositiva2.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[34]}deg)` }"
        @click="rotateImage(34)"
      />
      <img
        src="../../assets/img/Diapositiva1.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[35]}deg)` }"
        @click="rotateImage(35)"
      />
      <img
        src="../../assets/img/Diapositiva4.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[36]}deg)` }"
        @click="rotateImage(36)"
      />
      <img
        src="../../assets/img/Diapositiva1.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[37]}deg)` }"
        @click="rotateImage(37)"
      />
      <img
        src="../../assets/img/Diapositiva5.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[38]}deg)` }"
        @click="rotateImage(38)"
      />
      <img
        src="../../assets/img/Diapositiva2.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[39]}deg)` }"
        @click="rotateImage(39)"
      />
    </div>

    <!--Fila 6-->
    <div>
      <img
        src="../../assets/img/Diapositiva1.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[40]}deg)` }"
        @click="rotateImage(40)"
      />
      <img
        src="../../assets/img/Diapositiva3.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[41]}deg)` }"
        @click="rotateImage(41)"
      />
      <img
        src="../../assets/img/Diapositiva2.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[42]}deg)` }"
        @click="rotateImage(42)"
      />
      <img
        src="../../assets/img/Diapositiva1.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[43]}deg)` }"
        @click="rotateImage(43)"
      />
      <img
        src="../../assets/img/Diapositiva2.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[44]}deg)` }"
        @click="rotateImage(44)"
      />
      <img
        src="../../assets/img/Diapositiva5.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[45]}deg)` }"
        @click="rotateImage(45)"
      />
      <img
        src="../../assets/img/Diapositiva3.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[46]}deg)` }"
        @click="rotateImage(46)"
      />
      <img
        src="../../assets/img/Diapositiva4.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[47]}deg)` }"
        @click="rotateImage(47)"
      />
    </div>

    <!--Fila 7-->
    <div>
      <img
        src="../../assets/img/Diapositiva2.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[48]}deg)` }"
        @click="rotateImage(48)"
      />
      <img
        src="../../assets/img/Diapositiva2.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[49]}deg)` }"
        @click="rotateImage(49)"
      />
      <img
        src="../../assets/img/Diapositiva3.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[50]}deg)` }"
        @click="rotateImage(50)"
      />
      <img
        src="../../assets/img/Diapositiva3.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[51]}deg)` }"
        @click="rotateImage(51)"
      />
      <img
        src="../../assets/img/Diapositiva1.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[52]}deg)` }"
        @click="rotateImage(52)"
      />
      <img
        src="../../assets/img/Diapositiva2.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[53]}deg)` }"
        @click="rotateImage(53)"
      />
      <img
        src="../../assets/img/Diapositiva1.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[54]}deg)` }"
        @click="rotateImage(54)"
      />
      <img
        src="../../assets/img/Diapositiva4.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[55]}deg)` }"
        @click="rotateImage(55)"
      />
    </div>

    <!--Fila 8-->
    <div>
      <img
        src="../../assets/img/Diapositiva2.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[56]}deg)` }"
        @click="rotateImage(56)"
      />
      <img
        src="../../assets/img/Diapositiva2.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[57]}deg)` }"
        @click="rotateImage(57)"
      />
      <img
        src="../../assets/img/Diapositiva3.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[58]}deg)` }"
        @click="rotateImage(58)"
      />
      <img
        src="../../assets/img/Diapositiva3.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[59]}deg)` }"
        @click="rotateImage(59)"
      />
      <img
        src="../../assets/img/Diapositiva1.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[60]}deg)` }"
        @click="rotateImage(60)"
      />
      <img
        src="../../assets/img/Diapositiva4.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[61]}deg)` }"
        @click="rotateImage(61)"
      />
      <img
        src="../../assets/img/Diapositiva1.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[62]}deg)` }"
        @click="rotateImage(62)"
      />
      <img
        src="../../assets/img/Diapositiva2.png"
        alt="Block"
        :style="{ transform: `rotate(${rotations[63]}deg)` }"
        style="border: 1px solid blue"
      />
    </div>
  </main>
  <p class="text-blue-800 text-end">Fin</p>
  <SmallButton @click="goBack" text="Atrás"></SmallButton>
</template>

<style scoped>
img {
  height: 60px;
  width: 60px;
  border: 1px solid black;
}

img:hover {
  border: 1px solid blue;
}

div {
  display: flex;
}
</style>
