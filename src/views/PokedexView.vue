<template>
  <section v-if="!isFetchingPokemons">
    <div class="pokemon-search">
      <GInput
        :model-value="pokemonQueryFilter"
        placeholder="Search..."
        type="text"
        :input-delay="500"
        autofocus
        @input="(input: string) => (pokemonQueryFilter = input)"
      />
      <PokemonsList
        v-if="filteredPokemons.length"
        :pokemons-list="filteredPokemons"
        @select="handlePokemonSelection"
        @toggle-favorite="handleFavorite"
      />
      <EmptyMsg
        v-else
        message="You look lost on your journey!"
        action-msg="Go back home"
        @action="pokemonQueryFilter = ''"
      />
    </div>

    <footer>
      <span class="all-btn">
        <GButton :icon="IconList" :active="!onlyFavorites" @click="onlyFavorites = false"
          >All</GButton
        >
      </span>
      <span>
        <GButton :icon="IconStarFilled" :active="onlyFavorites" @click="onlyFavorites = true"
          >Favorites</GButton
        >
      </span>
    </footer>

    <dialog :open="false">
      <PokemonDetail v-if="false" />
      <GButton>Share to my friends</GButton>
    </dialog>
  </section>
  <GLoader v-else />
</template>

<script setup lang="ts">
// Vue
import { computed, onMounted } from 'vue'

// Components
import PokemonsList from '@/components/pokemons/PokemonsList.vue'
import GLoader from '@/components/utils/GLoader.vue'
import GButton from '@/components/utils/GButton.vue'
import GInput from '@/components/utils/GInput.vue'
import PokemonDetail from '@/components/pokemons/PokemonDetail.vue'
import EmptyMsg from '@/components/utils/EmptyMsg.vue'

// Icons
import { IconList, IconStarFilled } from '@tabler/icons-vue'

// Pinia
import { storeToRefs } from 'pinia'
import { usePokedexStore } from '@/stores/pokedex'
import type { FormatedPokemon } from 'Pokedex'

const pokedexStore = usePokedexStore()
const { pokemonQueryFilter, isFetchingPokemons, onlyFavorites } = storeToRefs(pokedexStore)

onMounted(() => {
  fetcPokemons()
})

const filteredPokemons = computed(() => {
  return pokedexStore.filteredPokemons
})

async function fetcPokemons() {
  await pokedexStore.fetcPokemons()
}

const handlePokemonSelection = (pokemon: FormatedPokemon) => {
  console.log('SELECT POKEMON')
}

const handleFavorite = (pokemon: FormatedPokemon) => {
  pokedexStore.selectFavoritePokemon(pokemon.name)
}
</script>

<style scoped>
section {
  overflow: auto;
  .pokemon-search {
    max-width: 570px;
    margin: auto;
  }
}

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

dialog {
  width: 315px;

  border: solid red;
}
</style>
