<script setup>
import DefaultTheme from 'vitepress/theme'
import Vep from "./components/Vep.vue";
import ExampleCode from "./components/ExampleCode/ExampleCode.vue";

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #home-hero-image>
<!--      <Vep :progress="10">
        <template #default>
          <p class="italic">
            Hdaskjdh jaskhdkj asjd
          </p>
        </template>
      </Vep>-->

    </template>
  </Layout>
  <example-code/>
</template>

<style scoped>

</style>
