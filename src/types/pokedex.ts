declare module 'Pokedex' {
  export interface PokemonType {
    slot: number
    type: { name: string; url: string }
  }

  export interface PokeApiPokemon {
    name: string
    url: string
  }
  export interface BasicPokemon extends PokeApiPokemon {
    isFavorite: boolean
  }
  export interface DetailedPokemon extends Omit<BasicPokemon, 'url'> {
    height: number
    types: string[]
    weight: number
    name: string
    model_img: string
  }
}
