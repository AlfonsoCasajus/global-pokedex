<template>
  <div class="list-wrapper">
    <PokemonRow
      v-for="(pokemon, index) of pokemonsList"
      :key="index"
      class="pokemon"
      :name="pokemon.name"
      :is-favorite="pokemon.isFavorite"
      @click="$emit('select', pokemon)"
      @toggle-favorite="$emit('toggle-favorite', pokemon)"
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

defineEmits(['select', 'toggle-favorite'])
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
