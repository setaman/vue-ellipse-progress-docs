<script setup lang="ts">
defineProps<{
  collapsed?: boolean;
}>();
const emit = defineEmits<{
  toggle: [];
  reload: [];
}>();
</script>

<template>
  <button
    type="button"
    class="text-xs text-white bg-gray-300 dark:bg-[#24292F] hover:bg-gray-200/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg px-2 py-1 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30"
    @click="emit('toggle')"
  >
    <svg
      class="w-6 h-6 text-gray-800 dark:text-gray-300"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        v-if="collapsed"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m8 10 4 4 4-4"
      />
      <path
        v-else
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m16 14-4-4-4 4"
      />
    </svg>
  </button>
  <button
    v-if="!collapsed"
    type="button"
    class="ml-1 text-xs text-white bg-gray-300 dark:bg-[#24292F] hover:bg-gray-200/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg px-2 py-1 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30"
    @click="emit('reload')"
  >
    <svg
      class="w-6 h-6 text-gray-800 dark:text-gray-300"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"
      />
    </svg>
  </button>
</template>

<style scoped></style>
