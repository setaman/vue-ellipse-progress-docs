<script setup lang="ts">
import { computed } from "vue";

type Option = { title: string; icon?: string; color?: string };

const model = defineModel<string>({ required: true });
const {
  options,
  bg = "#4d7bff",
  round = true,
} = defineProps<{
  options: Option[];
  size: number;
  inverse?: boolean;
  mini?: boolean;
  small?: boolean;
  large?: boolean;
  bg?: string;
  color?: string;
  round?: boolean;
}>();

const selectedIndex = computed(() => {
  return options.findIndex(
    (option) => (option.title || option) === model.value,
  );
});
const indicatorWidth = computed(() => {
  return 100 / options.length;
});

const isActive = (option: Option) => {
  return option.title === model.value;
};
</script>
<template>
  <div
    class="switch-container rounded-lg"
    :style="{ width: `${size * options.length}px` }"
    :class="{
      inverse,
      large,
      small,
      mini,
      round,
    }"
  >
    <div class="switch">
      <span
        class="switch-indicator shadow-sm rounded-md"
        :style="{
          backgroundColor: bg,
          width: `${indicatorWidth}%`,
          left: `${indicatorWidth * selectedIndex}%`,
        }"
      ></span>
      <label
        v-for="option in options"
        class="rounded-md"
        :style="{ color: color }"
        :class="{ active: isActive(option) }"
        :key="option.title"
      >
        <input
          type="radio"
          :checked="isActive(option)"
          :value="option.title"
          @input="model = $event.target.value"
        />
        <span
          v-if="option.icon"
          v-html="option.icon"
          class="text-gray-500 dark:text-gray-300"
          :class="{
            'text-white dark:text-white': isActive(option),
          }"
        />
        <span v-else>{{ option.title }}</span>
      </label>
    </div>
  </div>
</template>
<style scoped lang="scss">
.switch-container {
  padding: 4px;
  background-color: var(--vp-c-default-soft);
  height: auto;
  &.inverse {
    background-color: white;
    box-shadow: 0 0 5px 2px rgba(#898989, 0.03);
  }
  &.mini {
    height: 20px;
    padding: 0;
    label {
      font-size: 0.7rem !important;
    }
  }
  &.small {
    height: 28px;
    padding: 0;
  }
  &.large {
    height: 54px;
  }
}
.switch {
  position: relative;
  display: flex;
  border-radius: 50px;
  height: 100%;
  .switch-indicator {
    height: 100%;
    transition: 0.3s;
    display: block;
    flex: 1;
    left: 0;
    background-color: #265cff;
    position: absolute;
    &.inverse {
      background-color: white;
    }
  }
  input {
    position: absolute;
    height: 0;
    width: 0;
    opacity: 0;
  }
  label {
    transition: 0.3s;
    cursor: pointer;
    font-size: 0.9rem;
    position: relative;
    z-index: 1;
    flex: 1;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    &:hover {
      background-color: rgba(#2d68fc, 0.1);
    }
    &.active {
      color: white;
    }
  }
}
[data-theme="dark"] {
  .switch-container {
    background-color: #22272e;
  }
}
</style>
