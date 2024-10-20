<script setup lang="ts">
defineProps<{
  title: string;
  link: string;
}>();
</script>

<template>
  <router-link class="card-link m-0" :to="link">
    {{link}}
    <div class="card-link-container p-3 px-3">
      <h4 class="card-link-title m-0 pt-0" style="padding-top: 0; margin: 0">
        {{ title }}
      </h4>
      <p class="card-link-content m-0 mt-2" style="margin-top: 16px">
        <slot> </slot>
      </p>
    </div>
  </router-link>
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
