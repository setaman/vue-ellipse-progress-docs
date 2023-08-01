<template>
  <example-container :range="[-1000.5, 1000.5]" :step="0.1">
    <template #default="{ progress, slider, loading, noData, determinate }">
      <v-e-p
        :progress="progress"
        :legend="slider"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
      >
        <template #default="{ counterTick: { currentValue } }">
          <div
            :style="{ color: determineColor(currentValue), fontSize: '2rem' }"
          >
            <span>
              {{
                new Intl.NumberFormat("de-DE", {
                  style: "currency",
                  currency: "EUR",
                }).format(currentValue)
              }}
            </span>
          </div>
        </template>
      </v-e-p>
      <v-e-p
        :progress="50"
        :legend="10"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
      >
        <template #default="{ counterTick }">
          <span>
            <span class="mr-2" style="font-size: 0.9rem">WON</span>
            <b style="font-size: 2rem">{{ counterTick.currentValue }}</b>
            /
          </span>
          <span>20</span>
          <span class="ml-1" style="font-size: 0.9rem">PLAYED</span>
        </template>
        <template #caption>
          <span>Manchester United</span>
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
  name: "DefaultSlotColored",
  components: { VEP, ExampleContainer },
  data: () => ({
    colorSteps: {
      20: "RED",
      40: "LIGHTCORAL",
      60: "DARKORANGE",
      80: "PALEGOLDENROD",
      100: "SPRINGGREEN",
    },
  }),
  methods: {
    determineColor(value) {
      const progress = (value * 100) / 1000;
      const closest = [20, 40, 60, 80, 100].reduce((prev, curr) =>
        Math.abs(curr - progress) < Math.abs(prev - progress) ? curr : prev
      );
      return this.colorSteps[closest];
    },
  },
};
</script>
