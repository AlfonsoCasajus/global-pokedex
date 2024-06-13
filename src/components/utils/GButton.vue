<template>
  <button v-bind="$attrs" :class="[{ active: active }]">
    <component :is="icon" size="22" stroke="3" v-if="icon" class="btn-icon" />
    <div class="slot-wrapper">
      <slot />
    </div>
  </button>
</template>

<script setup lang="ts">
defineProps({
  icon: { type: Object, required: false, default: null },
  active: { type: Boolean, required: false, default: true }
})
</script>

<style scoped>
button {
  min-width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color--grey);

  .btn-icon {
    margin-right: 11px;
  }
}

button:disabled {
  pointer-events: none;
  cursor: default;
  color: #ffffff;
  opacity: 0.7;
}

.active {
  background-color: var(--color-light-red);
}
</style>
