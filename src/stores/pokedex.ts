import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { FormatedPokemon, PokeApiPokemon } from 'Pokedex'

export const usePokedexStore = defineStore('pokedex', () => {
  const pokemons = ref<PokeApiPokemon[]>([])

  const formatedPokemons = computed<FormatedPokemon[]>(() => {
    return pokemons.value.map((pokemon) => ({
      ...pokemon,
      isFavorite: favoritePokemons.value.includes(pokemon.name)
    }))
  })

  // Filter pokemons
  const pokemonQueryFilter = ref('')
  const onlyFavorites = ref(false)

  const filteredPokemons = computed<FormatedPokemon[]>(() => {
    return formatedPokemons.value.filter((pokemon) => {
      const matchesQuery = pokemon.name
        .toLowerCase()
        .includes(pokemonQueryFilter.value.toLowerCase())
      const matchesFavorites = !onlyFavorites.value || pokemon.isFavorite
      return matchesQuery && matchesFavorites
    })
  })

  // Fetch pokemons list
  const isFetchingPokemons = ref(false)
  const fetcPokemons = async () => {
    isFetchingPokemons.value = true

    try {
      const baseUrl = import.meta.env.VITE_POKEAPI_BASE_URL
      const response: any = await fetch(`${baseUrl}/pokemon?limit=100000&offset=0.`)

      if (!response.ok) throw new Error('Failed to fetch pokemons')

      const data = await response.json()
      pokemons.value = [...data.results]
    } catch (err) {
      console.error('Failed to fetch pokemons: ', err)
    } finally {
      isFetchingPokemons.value = false
    }
  }

  // Handle favorite pokemons
  const favoritePokemons = ref<string[]>([])
  const selectFavoritePokemon = (pokemonName: string) => {
    const pokemonIndex = favoritePokemons.value.indexOf(pokemonName)

    if (pokemonIndex < 0) favoritePokemons.value.push(pokemonName)
    else favoritePokemons.value.splice(pokemonIndex, 1)
  }

  return {
    fetcPokemons,
    isFetchingPokemons,

    // Filter pokemons
    pokemonQueryFilter,
    filteredPokemons,
    onlyFavorites,

    // Favorite pokemons
    favoritePokemons,
    selectFavoritePokemon
  }
})
