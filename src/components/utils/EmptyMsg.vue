<template>
  <div class="empty-display-msg">
    <span class="title">{{ title }}</span>
    <p>{{ message }}</p>
    <span v-if="actionMsg">
      <GButton @click="$emit('action')">Go back home</GButton>
    </span>
  </div>
</template>

<script setup lang="ts">
import GButton from '@/components/utils/GButton.vue'

defineProps({
  title: { type: String, required: false, default: 'Uh-oh!' },
  message: { type: String, required: false, default: 'No messages to display' },
  actionMsg: { type: String, required: false, default: '' }
})
</script>

<style scoped>
.empty-display-msg {
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    color: var(--color-dark);
    font-size: 36px;
    font-weight: 700;
  }
}
</style>
