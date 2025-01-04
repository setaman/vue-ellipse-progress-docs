<script setup lang="ts">
import ExampleCode from "../../components/ExampleCode/ExampleCode.vue";
</script>

<template>
  <ExampleCode>
    <template #default="{ progress }">
      // #region snippet
      <ve-progress :progress="{{ progress }}" />
      // #endregion snippet
    </template>
  </ExampleCode>
</template>
