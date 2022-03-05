<template>
  <example-container>
    <template #default="{ progress, slider, loading, noData, determinate }">
      <label class="block mb-5">
        Gap
        <slider
          class=""
          :min="-10"
          :max="100"
          v-model.number="gap"
          :step="0.5"
        />
      </label>
      <v-e-p
        :progress="progress"
        :size="200"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        :gap="gap"
        :data="data"
      >
      </v-e-p>
    </template>
    <template #code="{ progress }">
      <slot name="code" :progress="progress" :gap="gap"> </slot>
    </template>
  </example-container>
</template>

<script>
import ExampleContainer from "../../components/Base/ExampleContainer/ExampleContainer";
import VEP from "../../components/Base/VEP";
export default {
  name: "Gap",
  components: { VEP, ExampleContainer },
  data: () => ({
    gap: 10,
    data: [
      {
        color: "blue",
        thickness: 1
      },
      {
        color: "red",
        thickness: 3
      },
      {
        color: "green",
        thickness: 5
      },
      {
        color: "yellow",
        thickness: 7
      }
    ]
  }),
};
</script>

<style scoped></style>
