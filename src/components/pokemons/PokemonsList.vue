<template>
  <div class="list-wrapper">
    <span>
      <GInput
        :modelValue="inputQuery"
        placeholder="Search..."
        type="text"
        :input-delay="500"
        @input="handleQueryInput"
      />
    </span>
    <div v-if="filteredPokemons.length">
      <PokemonRow
        v-for="(pokemon, index) of [...filteredPokemons, ...filteredPokemons, ...filteredPokemons]"
        :key="index"
        class="pokemon"
        :name="pokemon.name"
      />
    </div>
    <EmptyMsg
      v-else
      message="You look lost on your journey!"
      action-msg="Go back home"
      @action="inputQuery = ''"
    />
  </div>
  <dialog :open="false">
    <PokemonDetail v-if="false" />
    <GButton>Share to my friends</GButton>
  </dialog>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// Import Components
import PokemonRow from '@/components/pokemons/PokemonRow.vue'
import PokemonDetail from '@/components/pokemons/PokemonDetail.vue'
import GButton from '@/components/utils/GButton.vue'
import GInput from '@/components/utils/GInput.vue'
import EmptyMsg from '../utils/EmptyMsg.vue'

const pokemons = [{ name: 'Sipa' }, { name: 'SI PAP' }, { name: 'APA' }, { name: 'SIA' }]

// Filter pokemons
const inputQuery = ref('')

const handleQueryInput = (query: string) => {
  inputQuery.value = query
  console.log(query)
}

const filteredPokemons = computed(() => {
  // return pokemons.filter((pokemon) => pokemon.name === inputQuery.value)
  return pokemons
})
</script>

<style scoped>
.list-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 570px;
  margin: auto;
  overflow: auto;
}

input,
.pokemon {
  margin-bottom: 10px;
}

dialog {
  width: 315px;

  border: solid red;
}
</style>
