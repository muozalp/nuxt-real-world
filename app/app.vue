<script setup lang="ts">
const counter = ref(0);
</script>
<template>
  <div class="flex flex-col gap-4 w-full items-center mt-10">
    <Button @click="counter++"> Click me </Button>
    <p>{{ counter }}</p>
  </div>
</template>
