<template>
  <div class="input-wrapper">
    <IconSearch size="18" stroke="3" color="var(--color--grey)" class="icon" />
    <input v-bind="$attrs" :value="modelValue" @input="handleInput" />
  </div>
</template>

<script setup lang="ts">
// Icons
import { IconSearch } from '@tabler/icons-vue'

const props = defineProps({
  modelValue: {
    type: [String, Number],
    required: true
  },
  inputDelay: {
    type: Number,
    required: false,
    default: 0
  }
})

const emit = defineEmits(['update:modelValue', 'input'])

let timeoutId: number | null = null
const handleInput = (input: Event) => {
  const inputElement = input.target as HTMLInputElement
  emit('update:modelValue', inputElement.value)

  if (timeoutId) clearTimeout(timeoutId)

  timeoutId = setTimeout(() => {
    emit('input', inputElement.value)
  }, props.inputDelay)
}
</script>

<style scoped>
.input-wrapper {
  width: 100%;
  height: 50px;
  padding-left: 15px;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0px 2px 10px 0px #0000000a;

  .icon {
    margin-right: 10px;
  }

  input {
    font-weight: 500;
    font-size: 16px;
    color: var(--color-dark);
    line-height: 22.4px;
    border: solid 2px transparent;
  }
}

input:focus {
  outline: none;
}

input::placeholder {
  color: var(--color--grey);
}

input:disabled {
  pointer-events: none;
  cursor: default;
  color: #ffffff;
  opacity: 0.7;
}
</style>
