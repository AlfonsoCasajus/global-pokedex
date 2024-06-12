<template>
  <button v-bind="$attrs">
    <component :is="icon" v-if="icon" class="btn-icon" />
    <div class="slot-wrapper">
      <slot />
    </div>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    icon: {
      type: Object,
      required: false,
      default: () => null
    }
  }
})
</script>

<style scoped>
button {
  .btn-icon {
    width: 100%;
    height: 100%;
    align-self: center;
    justify-self: center;
  }

  .slot-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

button:disabled {
  pointer-events: none;
  cursor: default;
  color: #ffffff;
  opacity: 0.7;
}
</style>
