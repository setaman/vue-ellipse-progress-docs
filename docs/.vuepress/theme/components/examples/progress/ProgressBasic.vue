<template>
  <example-container :show-modes="false">
    <template #default="{ progress, loading, noData, determinate }">
      <v-e-p
        :progress="progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
      />
    </template>
  </example-container>
</template>

<script>
import ExampleContainer from "../../Base/ExampleContainer/ExampleContainer.vue";
import VEP from "../../Base/VEP.vue";
export default {
  name: "ProgressBasic",
  components: { VEP, ExampleContainer },
};
</script>

<style scoped></style>
