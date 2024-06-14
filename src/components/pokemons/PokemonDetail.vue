<template>
  <div class="model-displayer">
    <img
      width="100%"
      height="220px"
      src="@/assets/images/pokemon_background.png"
      alt="Pokemon background image"
    />
    <img class="pokemon-model" :src="pokemon.model_img" alt="Pokemon background image" />
  </div>
  <div class="details">
    <div class="detail">
      <span class="key">Name:</span>
      <span class="value">{{ pokemon.name }}</span>
    </div>
    <div class="detail">
      <span class="key">Weight:</span>
      <span class="value">{{ pokemon.weight }}</span>
    </div>
    <div class="detail">
      <span class="key">Height:</span>
      <span class="value">{{ pokemon.height }}</span>
    </div>
    <div class="detail">
      <span class="key">Types:</span>
      <span class="value">{{ pokemon.types.join(', ') }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { DetailedPokemon } from 'Pokedex'

defineProps<{
  pokemon: DetailedPokemon
}>()
</script>

<style scoped>
.model-displayer {
  position: relative;
  margin-bottom: 10px;

  .pokemon-model {
    position: absolute;
    aspect-ratio: 1/1;
    width: 180px;
    left: calc(50% - 90px);
    top: 20px;
  }
}

.details {
  padding: 0 30px;

  .detail {
    padding: 10px 0;
    color: var(--color-light-dark);
    font-size: 18px;
    line-height: 27px;
    text-transform: capitalize;
    border-bottom: solid 1px var(--color--light-grey);

    .key {
      font-weight: 700;
      margin-right: 0.5rem;
    }

    .value {
      font-weight: 500;
    }
  }
}
</style>
