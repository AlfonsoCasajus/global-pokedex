import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { BasicPokemon } from 'Pokedex'

export const usePokedexStore = defineStore('pokedex', () => {
  const pokemons = ref<BasicPokemon[]>([])

  // Filter pokemons
  const pokemonQueryFilter = ref('')

  const filteredPokemons = computed(() => {
    return pokemons.value.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(pokemonQueryFilter.value.toLowerCase())
    )
  })

  // Fetch pokemons list
  const isFetchingPokemons = ref(false)
  const fetcPokemons = async () => {
    isFetchingPokemons.value = true

    try {
      const baseUrl = import.meta.env.VITE_POKEAPI_BASE_URL
      const response: any = await fetch(`${baseUrl}/pokemon`)

      if (!response.ok) throw new Error('Failed to fetch pokemons')

      const data = await response.json()
      pokemons.value = [...data.results]
    } catch (err) {
      console.error('Failed to fetch pokemons: ', err)
    } finally {
      isFetchingPokemons.value = false
    }
  }

  return { fetcPokemons, isFetchingPokemons, pokemonQueryFilter, filteredPokemons }
})
