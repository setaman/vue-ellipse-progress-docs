<template>
  <example-container :range="[0, 100]">
    <template #default="{ progress, loading, slider, noData, determinate }">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <v-e-p
          :progress="progress"
          :loading="loading"
          :no-data="noData"
          :determinate="determinate"
          :legend="`00${slider}.000`"
          :legend-formatter="setCounterProps"
          font-size="0.9rem"
        />
        <div>
          <div v-for="pair in Object.entries(counterProps)">
            <span> {{ pair[0] }}: </span>
            <span>
              {{
                (pair[1].toString().split(".")[1] ?? "").length > 4
                  ? parseFloat(pair[1]).toFixed(4)
                  : pair[1]
              }}
            </span>
          </div>
        </div>
      </div>
    </template>
    <template #code="{ progress }">
      <slot name="code" :progress="progress"> </slot>
    </template>
  </example-container>
</template>

<script>
import ExampleContainer from "../../components/Base/ExampleContainer/ExampleContainer";
import VEP from "../../components/Base/VEP";
export default {
  name: "LegendFormatterProps",
  components: { VEP, ExampleContainer },
  data: () => ({
    counterProps: {},
  }),
  methods: {
    setCounterProps(props) {
      this.counterProps = props;
      return `"currentFormattedValue":
        ${props.currentFormattedValue}
        `;
    },
  },
};
</script>

<style scoped></style>
