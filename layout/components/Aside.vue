<script setup lang="ts">
interface NavItem {
  label: string;
  icon: string;
  key: string;
}
const { navItems } = defineProps<{ navItems?: NavItem[] }>();

const { activeKey, setActive } = useLayout();

onMounted(() => {
  if (navItems) setActive(navItems[0]?.key);
});

onBeforeUnmount(() => {
  setActive("");
});

const activeNavLabel = computed(
  () => navItems?.find((item) => item.key === activeKey.value)?.label
);
</script>

<template>
  <ClientOnly>
    <Teleport to="#sideNav">
      <div v-for="{ key, label, icon } in navItems" :key="key">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger as-child>
              <!-- Set active nav item on click  -->
              <!-- Add class based on active key -->
              <Button
                variant="ghost"
                size="icon"
                class="rounded-lg"
                :class="activeKey === key ? 'bg-muted' : ''"
                :aria-label="label"
                @click="setActive(key)"
              >
                <Icon :name="icon" class="size-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" :side-offset="5">
              {{ label }}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </Teleport>
    <!-- Add new teleport to render into content-->
    <Teleport to="#sideContent">
      <fieldset class="grid gap-6 rounded-lg border p-4 w-full h-full">
        <legend class="-ml-1 px-1 text-sm font-medium">
          <!-- update label dynamically -->
          {{ activeNavLabel }}
        </legend>
        <!-- Add new slot to render into content on the key of active nav item -->
        <slot :name="activeKey" />
      </fieldset>
    </Teleport>
  </ClientOnly>
</template>
