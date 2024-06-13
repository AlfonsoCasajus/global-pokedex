<template>
  <section v-if="true">
    <PokemonsList />
    <footer>
      <span class="all-btn">
        <GButton :icon="IconList" :active="true">All</GButton>
      </span>
      <span>
        <GButton :icon="IconStarFilled" :active="false">Favorites</GButton>
      </span>
    </footer>
  </section>
  <GLoader v-else />
</template>

<script setup lang="ts">
import PokemonsList from '@/components/pokemons/PokemonsList.vue'
import GLoader from '@/components/utils/GLoader.vue'
import GButton from '@/components/utils/GButton.vue'
import { IconList, IconStarFilled } from '@tabler/icons-vue'
</script>

<style scoped>
footer {
  width: 100%;
  height: 80px;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #ffffff;
  box-shadow: 0px -5px 4px 0px #0000000d;
  display: flex;
  align-items: center;
  justify-content: center;

  .all-btn {
    margin-right: 15px;
  }
}
</style>
