<script setup lang="ts">
import ExampleCode from "../../components/ExampleCode/ExampleCode.vue";
import Vep from "../../components/Vep.vue";
import { ref } from "vue";

type CounterProps = {
  currentValue: number;
  currentFormattedValue: string;
  [key: string]: unknown;
};

const counterProps = ref<CounterProps>({
  currentValue: 0,
  currentFormattedValue: "",
});

const setCounterProps = (props: CounterProps) => {
  counterProps.value = props;
  return `"currentFormattedValue":
        ${props.currentFormattedValue}
        `;
};
</script>

<template>
  <example-code :range="[0, 100]">
    <template #default="{ loading, slider, progress, noData, determinate }">
      <vep
        :progress="progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        :legend="`00${slider}.000`"
        :legend-formatter="setCounterProps"
      >
      </vep>
      <div class="text-xs">
        <div v-for="(pair, i) in Object.entries(counterProps)" :key="i">
          <span> {{ pair[0] }}: </span>
          <span>
            {{
              (pair[1].toString().split(".")[1] ?? "").length > 4
                ? parseFloat(pair[1] as string).toFixed(4)
                : pair[1]
            }}
          </span>
        </div>
      </div>
    </template>
    <template #code="{ progress, slider }">
      <slot name="code" :progress :legend="`00${slider}.000`"></slot>
    </template>
  </example-code>
</template>
