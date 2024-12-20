<script setup>
import SmallButton from "../components/SmallButton.vue";
import Easy from "./Levels/Easy.vue";
import Intermediate from "./Levels/Intermediate.vue";
import Hard from "./Levels/Hard.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const username = ref("");
const disabledButton = ref(true);
const router = useRouter();
const visible = ref(true);
const isDisabled = ref(true);
const levelSelected = ref("facil");
const showError = ref(false);
let levelToPlay = "";

const handleUsername = () => {
  if (username.value.length == 0) {
    showError.value = false;
  } else if (username.value.length < 3) {
    disabledButton.value = true;
    isDisabled.value = true;
    showError.value = true;
  } else {
    disabledButton.value = false;
    isDisabled.value = false;
    showError.value = false;
  }
};

const goBack = () => {
  router.push("/menu");
};

const goGame = () => {
  visible.value = false;
  levelToPlay = levelSelected.value;
};
</script>

<template>
  <div
    class="flex flex-col shadow-2xl rounded-2xl p-4 bg-blue-100"
    v-show="visible"
  >
    <h1 class="text-4xl text-center text-blue-800">Juego</h1>
    <div class="flex gap-3 justify-center items-center">
      <label class="text-xl text-blue-800" for="">Nombre: </label>
      <input
        class="border-blue-800 border-2 rounded-md w-56 m-4 p-1"
        type="text"
        v-model="username"
        @input="handleUsername"
        placeholder="Entra el nombre del jugador"
      />
    </div>
    <p class="text-red-600" v-show="showError">
      El nombre de jugador debe tener 3 caracteres o más
    </p>
    <div class="flex justify-center items-center gap-3">
      <label class="text-blue-800 text-xl m-4">Dificultad: </label>
      <select
        class="bg-white border-blue-800 border-2 h-7 rounded-md pl-1"
        v-model="levelSelected"
      >
        <option value="facil" selected>Fácil</option>
        <option value="intermedio">Intermedio</option>
        <option value="dificil">Difícil</option>
      </select>
    </div>
    <div class="flex justify-between mt-3">
      <SmallButton @click="goBack" text="Atrás"></SmallButton>
      <SmallButton
        @click="goGame"
        text="Aceptar"
        :disabled="disabledButton"
        :class="{ disabled: isDisabled }"
      ></SmallButton>
    </div>
  </div>
  <Easy v-if="levelToPlay == 'facil'" :username="username" level="Fácil"></Easy>
  <Intermediate
    v-else-if="levelToPlay == 'intermedio'"
    :username="username"
    level="Intermedio"
  ></Intermediate>
  <Hard
    v-else-if="levelToPlay == 'dificil'"
    :username="username"
    level="Difícil"
  ></Hard>
</template>

<style scoped>
.disabled {
  background-color: darkblue;
}
</style>
