<script setup lang="ts">
import DefaultTheme from "vitepress/theme";
import Vep from "./components/Vep.vue";

const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template #home-hero-image>
      <Vep :progress="10"> </Vep>
    </template>
  </Layout>
</template>

<style scoped></style>
