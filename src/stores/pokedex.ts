import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const usePokedexStore = defineStore('pokedex', () => {
  const pokemons = ref([{ name: 'Sipa' }, { name: 'SI PAP' }, { name: 'APA' }, { name: 'SIA' }])

  // Filter pokemons
  const pokemonQueryFilter = ref('')

  const filteredPokemons = computed(() => {
    return pokemons.value.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(pokemonQueryFilter.value.toLowerCase())
    )
  })
  const isFetchingPokemons = ref(false)
  const fetcPokemons = async () => {
    isFetchingPokemons.value = true

    try {
      const response: any = await fetch('https://pokeapi.co/api/v2/pokemon/')
      console.log('FETCH POKEMONES', response.json())
    } catch (err) {
      console.error('Failed to fetch pokemons: ', err)
    } finally {
      isFetchingPokemons.value = false
    }
  }

  return { fetcPokemons, isFetchingPokemons, pokemonQueryFilter, filteredPokemons }
})
