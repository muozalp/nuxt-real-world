<template>
  <main
    class="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3"
  >
    <!-- Add the same id to Teleport -->
    <div
      id="sideContent"
      class="relative hidden flex-col items-start gap-8 md:flex"
    />

    <div
      class="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-stone-50 p-2 lg:col-span-2"
    >
      <slot />
      <!-- @slot where pages will render. It is reactive part where Vue will render content -->
    </div>
  </main>
</template>
