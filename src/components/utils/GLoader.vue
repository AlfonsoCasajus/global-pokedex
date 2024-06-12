<template>
  <div class="loader-wrapper">
    <PokeBallSvg class="rotating" />
  </div>
</template>

<script setup lang="ts">
import PokeBallSvg from './svg/PokeBallSvg.vue'
</script>

<style scoped>
.loader-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}
.rotating {
  margin: auto;
  animation: rotation 1.5s infinite linear;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
