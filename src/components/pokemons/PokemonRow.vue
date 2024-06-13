<template>
  <div class="pokemon-row">
    <span class="name">{{ name }}</span>
    <span class="star-wrapper">
      <IconStarFilled size="26" color="var(--color-yellow)" />
    </span>
  </div>
</template>

<script setup lang="ts">
import { IconStarFilled } from '@tabler/icons-vue'

defineProps<{
  name: String
}>()
</script>

<style scoped>
.pokemon-row {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  background-color: #ffffff;
  padding: 1rem;

  .name {
    color: var(--color-dark);
    font-size: 22px;
  }

  .star-wrapper {
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: var(--color-off-white);
  }
}
</style>
