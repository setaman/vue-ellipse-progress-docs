<script setup lang="ts">
import Vep from "../../components/Vep.vue";
import { Lines, PluginConfig } from "../../types";
import { computed, ref } from "vue";
import axios from "axios";

const milestone = 500;
const isFlipped = ref(false);
const isFetchingStars = ref(true);
const starsCount = ref(0);
const counterValue = ref(0);
const commonProps: Partial<PluginConfig> = {
  dot: "1 transparent",
  hideLegend: true,
  color: "transparent",
  emptyColor: "transparent",
  size: 200,
  animation: "default 4000 1000",
  emptyThickness: 2,
  thickness: 4,
  line: Lines.butt,
};

const milestoneProgress = computed(() => {
  return (counterValue.value / milestone) * 100;
});
const progressOffsetForConicGradient = computed(() => {
  return `${milestoneProgress.value - 10}%`;
});
const progressForConicGradient = computed(() => {
  return `${milestoneProgress.value}%`;
});
const circles = computed<
  (Partial<PluginConfig> & {
    defaultSlot?: boolean;
    caption?: string;
    translateX: number;
    class?: string;
  })[]
>(() => [
  {
    ...commonProps,
    emptyColorFill: "rgba(230,233,240,0)",
    emptyLinePosition: "out 10",
    translateX: 200,
  },
  {
    ...commonProps,
    dash: "strict 60 0.8",
    emptyColor: "#e6e9f0",
    translateX: 100,
  },
  // fill color 1
  {
    ...commonProps,
    colorFill: {
      radial: true,
      colors: [
        {
          color: "#3260FC",
          offset: "0",
          opacity: "0.1",
        },
        {
          color: "#3260FC",
          offset: "90",
          opacity: "0.1",
        },
        {
          color: "transparent",
          offset: "90",
        },
        {
          color: "transparent",
          offset: "100",
        },
      ],
    },
    translateX: 60,
  },
  // fill color 2
  {
    ...commonProps,
    colorFill: {
      radial: true,
      colors: [
        {
          color: "#3260FC",
          offset: "0",
          opacity: "0.15",
        },
        {
          color: "#3260FC",
          offset: "70",
          opacity: "0.15",
        },
        {
          color: "transparent",
          offset: "70",
          opacity: "0.1",
        },
        {
          color: "transparent",
          offset: "100",
          opacity: "0.1",
        },
      ],
    },
    translateX: 40,
  },
  // fill color 3
  /*{
    ...commonProps,
    colorFill: {
      radial: true,
      colors: [
        {
          color: "#3260FC",
          offset: "50",
          opacity: "0.2",
        },
        {
          color: "transparent",
          offset: "50",
        },
        {
          color: "transparent",
          offset: "100",
        },
      ],
    },
    translateX: 60,
  },*/
  // progress
  {
    ...commonProps,
    color: "#324c7e",
    translateX: 10,
    legend: `${starsCount.value}`,
    loading: isFetchingStars.value,
    progress: 0,
  },
  {
    ...commonProps,
    class: "with-dot",
    dot: "1 transparent",
    translateX: -20,
    animation: "default 0 0",
    legend: `${starsCount.value}`,
    loading: isFetchingStars.value,
    progress: milestoneProgress.value,
  },
  {
    ...commonProps,
    legend: `${starsCount.value}`,
    loading: isFetchingStars.value,
    hideLegend: false,
    defaultSlot: true,
    translateX: -30,
  },
  {
    ...commonProps,
    //caption: "Next milestone: 1000",
    caption: isFetchingStars.value ? "Loading..." : "",
    translateX: 0,
  },
]);

const setCounterValue = (value: number) => {
  counterValue.value = value;
};

axios
  .get("https://api.github.com/repos/setaman/vue-ellipse-progress")
  .then((res) => {
    starsCount.value = res.data.stargazers_count ?? 356;
  })
  .catch((e) => {
    console.error(e);
    starsCount.value = 356;
  })
  .finally(() => {
    // starsCount.value = 250;
    setTimeout(() => {
      isFetchingStars.value = false;
    }, 2000);
  });
</script>

<template>
  <div>
    <div class="flex flex-col justify-center">
      <div
        class="circles cursor-pointer"
        :class="{ flipped: isFlipped }"
        style="min-height: 200px; width: 200px"
        @click="isFlipped = !isFlipped"
      >
        <div
          v-for="(c, i) in circles"
          class="absolute circle-container"
          :class="c.class"
          :style="{
            '--xoffset': `${c.translateX}px`,
            '--yoffset': `${i * 4}px`,
          }"
          :key="i"
        >
          <vep
            :progress="50"
            :loading="false"
            :no-data="false"
            :determinate="false"
            v-bind="c"
          >
            <template
              v-if="c.defaultSlot"
              #default="{ counterTick: { currentValue } }"
            >
              {{ setCounterValue(currentValue) }}
              <div class="flex items-end">
                <div class="flex">
                  <svg
                    class=""
                    width="10px"
                    height="10px"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512.001 512.001"
                    xml:space="preserve"
                  >
                    <path
                      style="fill: #f0d355"
                      d="M395.39 494.627c-3.437 0-6.886-.798-10.061-2.418L256 426.233l-129.33 65.976a22.143 22.143 0 0 1-31.95-23.088l22.248-144.787L14.681 220.43a22.143 22.143 0 0 1 12.213-37.388L170 159.688l66.266-130.213a22.141 22.141 0 0 1 39.468 0L342 159.688l143.106 23.354a22.14 22.14 0 0 1 12.213 37.388L395.031 324.334l22.248 144.787a22.143 22.143 0 0 1-21.889 25.506z"
                    />

                    <g style="opacity: 0.1">
                      <path
                        style="fill: #414042"
                        d="M150.139 479.088a22.145 22.145 0 0 1-8.916-21.311L163.47 312.99 61.183 209.087a22.143 22.143 0 0 1-5.27-22.41 22.086 22.086 0 0 1 5.999-9.349l-35.017 5.714a22.14 22.14 0 0 0-12.213 37.388L116.97 324.334 94.722 469.12a22.143 22.143 0 0 0 31.95 23.088l24.446-12.471c-.329-.212-.66-.418-.979-.649z"
                      />
                    </g>
                  </svg>
                  <b class="animate-character" style="font-size: 1.3rem">
                    {{ currentValue }}
                  </b>
                </div>
                <span class="text-xs text-slate-600 dark:text-slate-400 mx-1">
                  /
                </span>
                <span class="text-xs text-slate-600 dark:text-slate-400">
                  {{ milestone }}
                </span>
              </div>
            </template>
            <template v-if="c.caption" #legend-caption>
              <div class="mt-10 text-xs text-slate-600">{{ c.caption }}</div>
            </template>
          </vep>
        </div>
      </div>
    </div>
    <a
      href="https://github.com/setaman/vue-ellipse-progress"
      class="block mt-10 mb-10 md:mb-0"
      target="_blank"
    >
      <button
        type="button"
        class="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center justify-center inline-flex items-center"
      >
        <svg
          class="w-4 h-4 me-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
            clip-rule="evenodd"
          />
        </svg>
        Give your star
      </button>
    </a>
  </div>
</template>
<style scoped lang="scss">
:root {
  --text-color: #231557;
}

.circles {
  transform-style: preserve-3d;
  &.flipped {
    .circle-container {
      --xoffset: 0;
      --yoffset: 0;
      transform: rotateY(-50deg) translate(var(--xoffset), var(--yoffset));
    }
  }
}
.circle-container {
  transform-origin: center;
  transition: transform 4.5s;
}

.with-dot {
  :deep(.ep-circle--progress__dot-container) {
    transform: none !important;
  }
  :deep(.ep-circle--progress__dot.hidden) {
    transform: none !important;
  }
  :deep(.ep-circle--progress__dot) {
    position: relative;
    left: -1.5px;
    top: -2px;
    display: block;
    width: 200px !important;
    height: 200px !important;
    //background: rgba(255, 0, 0, 0.38) !important;
    border-radius: 100% !important;

    &:after {
      transition: 0.3s;
      --startColor: rgba(63, 121, 255, 0.1);
      --endColor: #3f79ff;
      --from: 0deg;
      --thickness: 4.5px;
      // we bind the computed progress value to reactively update the gradient
      --progress: v-bind(progressForConicGradient);
      content: "";
      display: block;
      position: absolute;
      width: 200px;
      height: 200px;
      background-color: red;
      border-radius: 100%;
      top: 0;
      left: 0;
      background: conic-gradient(
        from var(--from),
        #324c7e 0%,
        #324c7e v-bind(progressOffsetForConicGradient),
        #f0d355 var(--progress),
        transparent var(--progress)
      );
      mask: radial-gradient(
        farthest-side,
        transparent calc(100% - var(--thickness)),
        #fff calc(100% - var(--thickness) + 1px)
      );
    }
  }
}

.dark {
  .animate-character {
    background-image: linear-gradient(
      -225deg,
      #896cff 0%,
      #726488 29%,
      #f0d355 67%,
      #896cff 100%
    );
  }
}
.animate-character {
  text-transform: uppercase;
  background-image: linear-gradient(
    -225deg,
    #231557 0%,
    #44107a 29%,
    #ffd300 67%,
    #231557 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 5s linear infinite;
  display: inline-block;
}

@keyframes textclip {
  0% {
    background-position: 200% top;
  }
  10% {
    background-position: 0 top;
  }
  100% {
    background-position: 0 top;
  }
}
</style>
