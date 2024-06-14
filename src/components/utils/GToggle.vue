<template>
  <span class="toggle-wrapper" @click="$emit('select')">
    <component
      :is="icon"
      size="26"
      stroke="3"
      :color="active ? 'var(--color-yellow)' : 'var(--color--grey)'"
    />
  </span>
</template>

<script setup lang="ts">
defineProps({
  icon: { type: Object, required: true },
  active: { type: Boolean, required: false, default: true }
})

defineEmits(['select'])
</script>

<style scoped>
.toggle-wrapper {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: var(--color-off-white);
  cursor: pointer;
}
</style>
