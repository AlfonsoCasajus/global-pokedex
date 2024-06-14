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
      <dialog ref="dialog" :open="Boolean(selectedPokemon)">
        <div class="close-btn" @click="handlePokemonSelection(null)">
          <IconCircleXFilled color="white" size="26" stroke="2" />
        </div>
        <div v-if="selectedPokemon && !isFetchingPokemon">
          <div>
            <PokemonDetail :pokemon="selectedPokemon" />
          </div>
          <div class="dialog-actions">
            <span>
              <GButton @click="copyToClipBoard">Share to my friends</GButton>
            </span>
            <GToggle
              :icon="IconStarFilled"
              :active="selectedPokemon.isFavorite"
              @click="() => handleFavorite(selectedPokemon.name)"
            />
          </div>
        </div>
        <GLoader v-else />
      </dialog>
      <PokemonsList
        v-if="filteredPokemons.length"
        :pokemons-list="filteredPokemons"
        @select="handlePokemonSelection"
        @toggle-favorite="(pokemon: BasicPokemon) => handleFavorite(pokemon.name)"
      />
      <EmptyMsg
        v-else
        message="You look lost on your journey!"
        action-msg="Go back home"
        @action="resetPokemonSearch"
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
  </section>
  <GLoader v-else />
</template>

<script setup lang="ts">
// Vue
import { computed, onMounted, ref } from 'vue'

// Components
import PokemonsList from '@/components/pokemons/PokemonsList.vue'
import GLoader from '@/components/utils/GLoader.vue'
import GButton from '@/components/utils/GButton.vue'
import GInput from '@/components/utils/GInput.vue'
import PokemonDetail from '@/components/pokemons/PokemonDetail.vue'
import EmptyMsg from '@/components/utils/EmptyMsg.vue'
import GToggle from '@/components/utils/GToggle.vue'

// Icons
import { IconList, IconStarFilled, IconCircleXFilled } from '@tabler/icons-vue'

// Pinia
import { storeToRefs } from 'pinia'
import { usePokedexStore } from '@/stores/pokedex'
import type { BasicPokemon } from 'Pokedex'

const pokedexStore = usePokedexStore()
const {
  pokemonQueryFilter,
  isFetchingPokemons,
  isFetchingPokemon,
  onlyFavorites,
  selectedPokemon
} = storeToRefs(pokedexStore)

onMounted(() => {
  fetcPokemons()
})

const filteredPokemons = computed(() => {
  return pokedexStore.filteredPokemons
})

const fetcPokemons = async () => {
  await pokedexStore.fetcPokemons()
}

const fetchPokemon = async (name: string) => {
  await pokedexStore.fetchPokemon(name)
}

const dialog = ref<HTMLDialogElement>()
const handlePokemonSelection = (pokemon: BasicPokemon | null) => {
  if (pokemon) {
    dialog.value?.showModal()
    fetchPokemon(pokemon.name)
  } else {
    dialog.value?.close()
    selectedPokemon.value = null
  }
}

const handleFavorite = (pokemonName: string) => {
  pokedexStore.selectFavoritePokemon(pokemonName)
}

const resetPokemonSearch = () => {
  pokemonQueryFilter.value = ''
  onlyFavorites.value = false
}

const copyToClipBoard = () => {
  if (!selectedPokemon.value) return
  const { name, weight, height, types } = selectedPokemon.value
  navigator.clipboard.writeText(`
  "name: ${name}", "weight: ${weight}", "height: ${height}", "types: ${types.join(', ')}"`)
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
  padding: 0;
  min-width: 315px;
  max-width: 570px;
  background-color: #ffffff;
  border: none;
  position: relative;

  .close-btn {
    z-index: 1;
    top: 1rem;
    right: 1rem;
    position: absolute;
    cursor: pointer;
  }

  .dialog-actions {
    padding: 20px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

dialog::backdrop {
  background-color: #000000;
  opacity: 0.6;
}
</style>
