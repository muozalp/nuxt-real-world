<template>
  <div class="grid h-screen w-full pl-[53px]">
    <LayoutSideNav />
    <div class="flex flex-col">
      <LayoutHeader />
      <LayoutContent>
        <slot />
      </LayoutContent>
    </div>
  </div>
</template>
