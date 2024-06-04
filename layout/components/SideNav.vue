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
    <!-- Each navigation item will be compared to current route -->
    <nav class="grid gap-2 py-4 px-3 items-center">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger as-child>
            <Button
              variant="ghost"
              size="icon"
              class="rounded-lg"
              :class="$route.path === '/' ? 'bg-muted' : ''"
              aria-label="Home"
            >
              <NuxtLink to="/">
                <Icon name="lucide:square-terminal" class="size-5" />
              </NuxtLink>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" :side-offset="5"> Home </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger as-child>
            <Button
              variant="ghost"
              size="icon"
              class="rounded-lg"
              :class="$route.path === '/models' ? 'bg-muted' : ''"
              aria-label="Models"
            >
              <NuxtLink to="/models">
                <Icon name="lucide:bot" class="size-5" />
              </NuxtLink>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" :side-offset="5">
            Models
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </nav>
  </aside>
</template>
