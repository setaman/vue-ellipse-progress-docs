<template>
  <example-container :show-modes="false">
    <template #default="{ progress, loading, noData, determinate }">
      <div class="inline-block border-2 border-solid border-indigo-600 m-2">
        <v-e-p
          :progress="progress"
          :loading="loading"
          :no-data="noData"
          :determinate="determinate"
          :size="200"
          line-mode="in 30"
          :empty-thickness="0"
        >
          <span slot="legend-caption">200</span>
        </v-e-p>
      </div>
      <div class="inline-block border-2 border-solid border-indigo-600 m-2">
        <v-e-p
          :progress="progress"
          :loading="loading"
          :no-data="noData"
          :determinate="determinate"
          :size="200"
          dot="25 gray"
        >
          <span slot="legend-caption">200</span>
        </v-e-p>
      </div>
      <div class="inline-block border-2 border-solid border-indigo-600 m-2">
        <v-e-p
          :progress="progress"
          :loading="loading"
          :no-data="noData"
          :determinate="determinate"
          :size="200"
          line-mode="out"
          thickness="10%"
        >
          <span slot="legend-caption">200</span>
        </v-e-p>
      </div>
    </template>
  </example-container>
</template>

<script>
import ExampleContainer from "../../components/Base/ExampleContainer/ExampleContainer";
import VEP from "../../components/Base/VEP";
export default {
  name: "SizeDependencies",
  components: { VEP, ExampleContainer },
};
</script>

<style lang="scss">
.svg {
  border: 2px red solid;
}
</style>
