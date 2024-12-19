<script setup></script>

<template>
  <header class="flex justify-around text-blue-800 text-3xl mb-8">
    <div>
      <p>Nivel: {{ props.level }}</p>
      <p>Jugador: {{ props.username }}</p>
    </div>
    <div>
      <p>Movimientos: {{}}</p>
      <!-- <p>Tiempo: {{  }}</p> -->
    </div>
  </header>
  <p>Inicio</p>
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
</template>
