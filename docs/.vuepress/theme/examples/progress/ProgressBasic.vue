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
import ExampleContainer from "../../components/Base/ExampleContainer/ExampleContainer";
import VEP from "../../components/Base/VEP";
export default {
  name: "ProgressBasic",
  components: { VEP, ExampleContainer },
};
</script>

<style scoped></style>
