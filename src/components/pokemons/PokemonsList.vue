<template>
  <div class="list-wrapper">
    <PokemonRow
      v-for="(pokemon, index) of [...pokemonsList, ...pokemonsList, ...pokemonsList]"
      :key="index"
      class="pokemon"
      :name="pokemon.name"
    />
  </div>
</template>

<script setup lang="ts">
// Import Components
import PokemonRow from '@/components/pokemons/PokemonRow.vue'

defineProps<{
  pokemonsList: { name: string }[]
}>()
</script>

<style scoped>
.list-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;

  .pokemon {
    margin-bottom: 10px;
  }
}
</style>
