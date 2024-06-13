declare module 'Pokedex' {
  export interface PokeApiPokemon {
    name: string
    url: string
  }
  export interface FormatedPokemon extends PokeApiPokemon {
    isFavorite: boolean
  }
}
