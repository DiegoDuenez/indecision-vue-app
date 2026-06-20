<template>
  <h3>Counter: {{ counter }}</h3>
  <h3>Square: {{ squareCounter }}</h3>

  <div>
    <button @click="increment()">+1</button>
    <button @click="decrement()">-1</button>
  </div>
</template>

<script lang="ts" setup>
import { useCounter } from '@/composables/useCounter';

const props = defineProps<{
  value: number;
}>();

const { counter, squareCounter } = useCounter(props.value);


const increment = () => {
  counter.value++;
};
const decrement = () => {
  counter.value--;
};
</script>
