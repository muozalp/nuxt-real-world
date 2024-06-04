<script setup lang="ts">
const counter = ref(0);
</script>

<template>
  <div class="flex flex-col items-center h-full">
    <h1 class="text-xl font-semibold">Home</h1>
    <div class="flex flex-col grow gap-2 justify-center items-center">
      <Button @click="counter++"> Click from App </Button>
      <p>{{ counter }}</p>
    </div>
  </div>
</template>
