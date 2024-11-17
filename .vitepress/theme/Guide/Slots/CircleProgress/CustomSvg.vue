<script setup lang="ts">
import ExampleCode from "../../../components/ExampleCode/ExampleCode.vue";
import Vep from "../../../components/Vep.vue";
import { ref, useTemplateRef, watch } from "vue";

const flowerPathLength = ref(0);
const flower2PathLength = ref(0);
const flower3PathLength = ref(0);
const hartPathLength = ref(0);
const flower = useTemplateRef("flower");
const flower2 = useTemplateRef("flower2");
const flower3 = useTemplateRef("flower3");
const hart = useTemplateRef("hart");

watch(flower, () => {
  flowerPathLength.value = flower.value?.getTotalLength() ?? 0;
});
watch(flower2, () => {
  flower2PathLength.value = flower2.value?.getTotalLength() ?? 0;
});
watch(flower3, () => {
  flower3PathLength.value = flower3.value?.getTotalLength() ?? 0;
});
watch(hart, () => {
  hartPathLength.value = hart.value?.getTotalLength() ?? 0;
});
</script>

<template>
  <example-code>
    <template #default="{ progress, loading, noData, determinate }">
      <vep
        :progress="progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        empty-thickness="0"
        color="#1ABC9C"
      >
        <template #circle-progress="{ attrs }">
          <svg width="200" height="200" fill="none" viewBox="1 -1 51 55">
            <path
              ref="flower"
              :stroke-width="1"
              :stroke="attrs.color"
              :stroke-dashoffset="
                attrs.calculateProgressOffset(flowerPathLength)
              "
              :stroke-dasharray="flowerPathLength"
              fill="rgba(255, 251, 0, 1)"
              :style="attrs.baseStyles"
              d="M52.6 26.5c0-2.6-2.1-4.8-4.8-4.8h-3.7l3.2-1.9c2.3-1.3 3.1-4.2 1.7-6.5-1.3-2.3-4.2-3.1-6.5-1.7l-3.2 1.9 1.9-3.2c1.3-2.3.5-5.2-1.7-6.5-2.3-1.3-5.2-.5-6.5 1.7l-1.9 3.2V5c0-2.6-2.1-4.8-4.8-4.8-2.6 0-4.8 2.1-4.8 4.8v3.7l-1.9-3.2c-1.3-2.3-4.2-3.1-6.5-1.7-2.3 1.3-3.1 4.2-1.7 6.5l1.9 3.2-3.2-1.9c-2.3-1.3-5.2-.5-6.5 1.7-1.3 2.3-.5 5.2 1.7 6.5l3.2 1.9H4.8c-2.6 0-4.8 2.1-4.8 4.8 0 2.6 2.1 4.8 4.8 4.8h3.7l-3.2 1.9c-2.3 1.3-3.1 4.2-1.7 6.5 1.3 2.3 4.2 3.1 6.5 1.7l3.2-1.9-1.9 3.2c-1.3 2.3-.5 5.2 1.7 6.5 2.3 1.3 5.2.5 6.5-1.7l1.9-3.2V48c0 2.6 2.1 4.8 4.8 4.8 2.6 0 4.8-2.1 4.8-4.8v-3.7l1.9 3.2c1.3 2.3 4.2 3.1 6.5 1.7 2.3-1.3 3.1-4.2 1.7-6.5l-1.9-3.2 3.2 1.9c2.3 1.3 5.2.5 6.5-1.7 1.3-2.3.5-5.2-1.7-6.5l-3.2-1.9h3.7c2.7 0 4.8-2.1 4.8-4.8Z"
            ></path>
          </svg>
        </template>
      </vep>
      <vep
        :progress="progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        empty-thickness="0"
        color="#1ABC9C"
      >
        <template #circle-progress="{ attrs }">
          <svg width="200" height="200" fill="none" viewBox="-1 -1 60 60">
            <path
              :stroke-width="1"
              :stroke="attrs.emptyColor"
              :style="attrs.baseStyles"
              d="M29.4 54.8c-2.3 0-4.1-4.7-6.3-5.2-2.3-.5-5.9 2.8-7.9 1.7-2-1.1-1.4-6-3.1-7.5-1.7-1.5-6.5-.4-7.8-2.3-1.2-1.9 1.8-5.8 1.1-8-.6-2.1-5.3-3.8-5.3-6.1s4.7-4 5.3-6.1c.7-2.2-2.4-6.1-1.1-8 1.2-1.9 6.1-.8 7.8-2.3 1.7-1.5 1-6.4 3.1-7.5 2-1 5.7 2.3 7.9 1.7C25.3 4.7 27 0 29.3 0c2.3 0 4.1 4.7 6.3 5.2 2.3.5 5.9-2.8 7.9-1.7 2 1.1 1.4 6 3.1 7.5 1.7 1.5 6.5.4 7.8 2.3 1.2 1.9-1.8 5.8-1.1 8 .6 2.1 5.3 3.8 5.3 6.1s-4.7 4-5.3 6.1c-.7 2.2 2.4 6.1 1.2 8-1.2 1.9-6.1.8-7.8 2.3-1.7 1.5-1 6.4-3.1 7.5-2 1-5.7-2.3-7.9-1.7-2.3.5-4 5.2-6.3 5.2Z"
            ></path>
            <path
              ref="flower2"
              :stroke-width="1"
              :stroke="attrs.color"
              :stroke-dashoffset="
                attrs.calculateProgressOffset(flower2PathLength)
              "
              :stroke-dasharray="flower2PathLength"
              :style="attrs.baseStyles"
              d="M29.4 54.8c-2.3 0-4.1-4.7-6.3-5.2-2.3-.5-5.9 2.8-7.9 1.7-2-1.1-1.4-6-3.1-7.5-1.7-1.5-6.5-.4-7.8-2.3-1.2-1.9 1.8-5.8 1.1-8-.6-2.1-5.3-3.8-5.3-6.1s4.7-4 5.3-6.1c.7-2.2-2.4-6.1-1.1-8 1.2-1.9 6.1-.8 7.8-2.3 1.7-1.5 1-6.4 3.1-7.5 2-1 5.7 2.3 7.9 1.7C25.3 4.7 27 0 29.3 0c2.3 0 4.1 4.7 6.3 5.2 2.3.5 5.9-2.8 7.9-1.7 2 1.1 1.4 6 3.1 7.5 1.7 1.5 6.5.4 7.8 2.3 1.2 1.9-1.8 5.8-1.1 8 .6 2.1 5.3 3.8 5.3 6.1s-4.7 4-5.3 6.1c-.7 2.2 2.4 6.1 1.2 8-1.2 1.9-6.1.8-7.8 2.3-1.7 1.5-1 6.4-3.1 7.5-2 1-5.7-2.3-7.9-1.7-2.3.5-4 5.2-6.3 5.2Z"
            ></path>
          </svg>
        </template>
      </vep>
      <vep
        :progress="progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        empty-thickness="0"
        color="#1ABC9C"
      >
        <template #circle-progress="{ attrs }">
          <svg width="200" height="200" fill="none" viewBox="-5 -5 210 210">
            <path
              ref="flower3"
              fill="url(#paint0_linear_104_76)"
              :stroke-width="4"
              :stroke="attrs.color"
              :stroke-dashoffset="
                attrs.calculateProgressOffset(flower3PathLength)
              "
              :stroke-dasharray="flower3PathLength"
              :style="attrs.baseStyles"
              fill-rule="evenodd"
              d="M128.603 16.335c-12.778-21.78-44.267-21.78-57.045 0l-.464.79A33.07 33.07 0 0 1 42.803 33.46l-.917.006C16.635 33.643.89 60.912 13.363 82.869l.453.797a33.07 33.07 0 0 1 0 32.668l-.453.797c-12.472 21.957 3.272 49.226 28.523 49.403l.917.006a33.072 33.072 0 0 1 28.29 16.334l.465.791c12.778 21.78 44.267 21.78 57.045 0l.464-.791a33.073 33.073 0 0 1 28.291-16.334l.918-.006c25.251-.177 40.995-27.446 28.522-49.403l-.453-.797a33.07 33.07 0 0 1 0-32.668l.453-.797c12.473-21.957-3.271-49.226-28.522-49.403l-.918-.006a33.07 33.07 0 0 1-28.291-16.334l-.464-.791Zm-28.522 133.269c27.395 0 49.604-22.208 49.604-49.604s-22.209-49.605-49.604-49.605c-27.396 0-49.605 22.21-49.605 49.605 0 27.396 22.209 49.604 49.605 49.604Z"
              clip-rule="evenodd"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_104_76"
                x1="100.081"
                x2="100.081"
                y1="0"
                y2="200"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#DF99F7"></stop>
                <stop offset="1" stop-color="#FFDBB0"></stop>
              </linearGradient>
            </defs>
          </svg>
        </template>
      </vep>
      <vep
        :progress="progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        empty-thickness="0"
        color="#1ABC9C"
        :angle="0"
      >
        <template #circle-progress="{ attrs }">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-4 -40 520 520"
            width="200"
            height="200"
          >
            <path
              ref="hart"
              :stroke-width="10"
              stroke="red"
              :stroke-dashoffset="attrs.calculateProgressOffset(hartPathLength)"
              :stroke-dasharray="hartPathLength"
              :style="attrs.baseStyles"
              d="M471.383 44.578C444.879 15.832 408.512 0 368.973 0c-29.555 0-56.621 9.344-80.45 27.77C276.5 37.07 265.605 48.45 256 61.73c-9.602-13.277-20.5-24.66-32.527-33.96C199.648 9.344 172.582 0 143.027 0c-39.539 0-75.91 15.832-102.414 44.578C14.426 72.988 0 111.801 0 153.871c0 43.3 16.137 82.938 50.781 124.742 30.992 37.395 75.535 75.356 127.117 119.313 17.614 15.012 37.579 32.027 58.309 50.152A30.023 30.023 0 0 0 256 455.516a30.03 30.03 0 0 0 19.785-7.43c20.73-18.129 40.707-35.152 58.328-50.172 51.575-43.95 96.117-81.906 127.11-119.305C495.867 236.81 512 197.172 512 153.867c0-42.066-14.426-80.879-40.617-109.289zm0 0"
              fill='url("#SvgjsLinearGradient1040")'
            ></path>
            <defs>
              <linearGradient id="SvgjsLinearGradient1040">
                <stop stop-color="#d5dee7" offset="0"></stop>
                <stop stop-color="#ffffff" offset="1"></stop>
              </linearGradient>
            </defs>
          </svg>
        </template>
      </vep>
    </template>
    <template #code>
      <slot name="code"> </slot>
    </template>
  </example-code>
</template>
<style scoped></style>
