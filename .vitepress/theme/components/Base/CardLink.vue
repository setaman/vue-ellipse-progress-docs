<script setup lang="ts">
defineProps<{
  title: string;
  link: string;
}>();
</script>

<template>
  <a
    :href="link"
    class="h-full block max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-zinc-800 dark:border-gray-700 dark:hover:bg-gray-700 no-underline"
    style="text-decoration: none; background-color: var(--vp-c-bg-soft)"
  >
    <h5
      class="mb-2 text-2xl font-bold tracking-tight text-gray-500 dark:text-white"
    >
      {{ title }}
    </h5>
    <p
      class="font-normal text-gray-700 dark:text-gray-400 my-0"
      style="margin: 0"
    >
      <slot> </slot>
    </p>
  </a>
</template>

<style scoped lang="scss">
.card-link {
  display: block;
  height: 100%;
  text-decoration: none !important;
  transition: 0.3s;
  border-radius: 10px;
  border: 2px solid rgba(151, 151, 151, 0.2);
  box-sizing: border-box;
  &:hover {
    background-color: rgba(151, 151, 151, 0.06);
  }
}
.card-link-container {
  // padding: 14px;
  .card-link-content {
    font-size: 1rem;
    color: var(--vp-c-text);
  }
}
.card-link-title {
  letter-spacing: 0.05rem;
  font-size: 1rem;
}
</style>
