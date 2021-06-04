<template>
  <example-container>
    <template #default="{ progress, loading, noData, determinate }">
      <ve-progress :progress="progress" :loading="loading" :no-data="noData" :determinate="determinate"/>
    </template>
  </example-container>
</template>

<script>
import ExampleContainer from "../../components/Base/ExampleContainer/ExampleContainer";
export default {
  name: "ProgressBasic",
  components: {ExampleContainer}
}
</script>

<style scoped>

</style>
