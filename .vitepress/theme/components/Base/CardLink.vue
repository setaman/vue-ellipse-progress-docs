<script setup lang="ts">
import { useData } from "vitepress";
import { computed } from "vue";

const { link } = defineProps<{
  title: string;
  link: string;
}>();

const data = useData();

const normalizedLink = computed(() => {
  return `${data.site.value.base}${link}`;
});
</script>

<template>
  <a
    :href="normalizedLink"
    class="h-full block max-w-sm p-4 bg-gray-100 rounded-lg hover:bg-gray-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 no-underline"
    style="text-decoration: none"
  >
    <h5
      class="mb-2 text-lg font-bold tracking-tight"
      style="color: var(--vp-c-text-1)"
    >
      {{ title }}
    </h5>
    <p class="font-normal my-0" style="margin: 0; color: var(--vp-c-text-2)">
      <slot> </slot>
    </p>
  </a>
</template>

<style scoped lang="scss"></style>
