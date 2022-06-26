<template>
  <example-container>
    <template #default="{ progress, loading, slider, noData, determinate }">
      <v-e-p
        :progress="progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        :legend-formatter="
          ({ currentValue }) => `
            <span style='color: ${
              currentValue < 0 ? 'red' : 'green'
            }; font-weight: bold; border-bottom: 2px gray solid'>
              ${new Intl.NumberFormat('de-DE', {
                style: 'currency',
                currency: 'EUR',
              })
                .format(currentValue)
                .trim()}
            </span>
          `
        "
      />
    </template>
    <template #code="{ progress }">
      <slot name="code" :progress="progress"></slot>
    </template>
  </example-container>
</template>

<script>
import ExampleContainer from "../../Base/ExampleContainer/ExampleContainer";
import VEP from "../../Base/VEP";

export default {
  name: "LegendFormatterHtml",
  components: { VEP, ExampleContainer },
  data: () => ({
    counterProps: {},
  }),
  methods: {
    setCounterProps(props) {
      this.counterProps = props;
      return `Showing "currentFormattedValue"
        ${props.currentFormattedValue}
        `;
    },
  },
};
</script>

<style scoped></style>
