<template>
  <example-container>
    <template #default="{ progress, slider, loading, noData, determinate }">
      <v-e-p
        :progress="slider"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
      >
        <template #default="{ counterTick }">
          <div>
            <span>i can</span> <br />
            <span>put </span>
            <b style="color: #2d68fc; font-size: 1.5rem">
              {{ counterTick.currentValue }}
            </b>
            <span> anything</span><br />
            <span>here</span>
          </div>
        </template>
      </v-e-p>
    </template>
    <template #code>
      <slot name="code"> </slot>
    </template>
  </example-container>
</template>

<script>
import ExampleContainer from "../../Base/ExampleContainer/ExampleContainer.vue";
import VEP from "../../Base/VEP.vue";
export default {
  name: "DefaultSlot",
  components: { VEP, ExampleContainer },
};
</script>

<style scoped></style>
