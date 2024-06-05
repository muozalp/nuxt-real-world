<template>
  <aside
    class="inset-y fixed left-0 z-20 flex h-full flex-col border-r items-center"
  >
    <div
      class="border-b w-full h-[57px] flex flex-col justify-center items-center"
    >
      <Button variant="outline" size="icon" aria-label="Home">
        <NuxtLink to="https://github.com/muozalp/nuxt-real-world">
          <Icon name="lucide:github" color="black" class="size-6 fill-black" />
        </NuxtLink>
      </Button>
    </div>

    <!-- Add the same id to Teleport -->
    <nav id="sideNav" class="grid gap-2 py-4 px-3 min-w-[53px] items-center" />
  </aside>
</template>
