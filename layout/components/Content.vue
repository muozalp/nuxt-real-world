<template>
  <main
    class="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3"
  >
    <div class="relative hidden flex-col items-start gap-8 md:flex">
      <fieldset class="grid gap-6 rounded-lg border p-4 w-full h-full">
        <legend class="-ml-1 px-1 text-sm font-medium">Settings</legend>
      </fieldset>
    </div>

    <div
      class="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-stone-50 p-2 lg:col-span-2"
    >
      <slot />
      <!-- @slot where pages will render. It is reactive part where Vue will render content -->
    </div>
  </main>
</template>
