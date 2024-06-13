<template>
  <div class="list-wrapper">
    <PokemonRow
      v-for="(pokemon, index) of pokemonsList"
      :key="index"
      class="pokemon"
      :name="pokemon.name"
      @click="$emit('select')"
    />
  </div>
</template>

<script setup lang="ts">
// Import Components
import PokemonRow from '@/components/pokemons/PokemonRow.vue'

// Types
import type { BasicPokemon } from 'Pokedex'

defineProps<{
  pokemonsList: BasicPokemon[]
}>()

defineEmits(['select'])
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
