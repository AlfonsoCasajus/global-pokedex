<template>
  <div class="pokemon-row">
    <span class="name">{{ name }}</span>
    <GToggle :icon="IconStarFilled" :active="isFavorite" @click.stop="$emit('toggle-favorite')" />
  </div>
</template>

<script setup lang="ts">
import { IconStarFilled } from '@tabler/icons-vue'
import GToggle from '@/components/utils/GToggle.vue'

defineProps({
  name: { type: String, required: true },
  isFavorite: { type: Boolean, required: false, default: true }
})

defineEmits(['toggle-favorite'])
</script>

<style scoped>
.pokemon-row {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  background-color: #ffffff;
  cursor: pointer;
  padding: 0px 1rem;

  .name {
    text-transform: capitalize;
    color: var(--color-dark);
    font-size: 22px;
  }
}
</style>
