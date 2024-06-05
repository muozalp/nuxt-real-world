<template>
  <LayoutAside
    :nav-items="[{ key: 'edit', label: 'Edit', icon: 'lucide:settings-2' }]"
  >
    <template #edit> This is edit content of Models </template>
  </LayoutAside>
  <div class="flex flex-col items-center h-full">
    <h1 class="text-xl font-semibold">Models</h1>
  </div>
</template>
