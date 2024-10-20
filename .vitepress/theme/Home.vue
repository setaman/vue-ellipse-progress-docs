<script setup>
import DefaultTheme from 'vitepress/theme'
import Vep from "./components/Vep.vue";

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #home-hero-image>
      <Vep/>
      <p class="italic">
        Hdaskjdh jaskhdkj asjd
      </p>
    </template>
  </Layout>
</template>

<style scoped>

</style>
