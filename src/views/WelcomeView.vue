<template>
  <section>
    <PikachuSvg />
    <h1>Welcome to Pokédex</h1>
    <p>
      The digital encyclopedia created by Proffesor Oak is an invaluable tool to Trainers in the
      Pokémon world
    </p>
    <div>
      <GButton @click="$router.push({ name: 'pokedex' })">Get Started</GButton>
    </div>
  </section>
</template>

<script setup lang="ts">
import PikachuSvg from '@/components/utils/svg/PikachuSvg.vue'
import GButton from '@/components/utils/GButton.vue'
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-weight: 700;
    font-size: 26px;
    line-height: 31.2px;
  }

  p {
    max-width: 570px;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
  }
}
</style>
