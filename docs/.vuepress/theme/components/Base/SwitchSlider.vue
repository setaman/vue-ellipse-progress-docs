<template>
  <div
    class="switch-container"
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
        class="switch-indicator shadow-sm"
        :style="{
          backgroundColor: bg,
          width: `${indicatorWidth}%`,
          left: `${indicatorWidth * selectedIndex}%`,
        }"
      ></span>
      <label
        :style="{ color: color }"
        :class="{ active: (option.title || option) === modelValue }"
        v-for="option in options"
        :key="option.title || option"
      >
        <input
          type="radio"
          :checked="(option.title || option) === modelValue"
          :value="option.title || option"
          @input="$emit('update:modelValue', $event.target.value)"
        />
        <component v-if="option.icon" :is="iconComponent(option.icon)" :color="option.color"/>
        <span v-else>{{ option }}</span>
      </label>
    </div>
  </div>
</template>

<script>
import SvgIcon from "./SvgIcon";
import CodeIcon from "../SvgIcons/CodeIcon";
import MonitorIcon from "../SvgIcons/MonitorIcon";
import RowsIcon from "../SvgIcons/RowsIcon";
export default {
  name: "SwitchSlider",
  components: { RowsIcon, MonitorIcon, CodeIcon, SvgIcon },
  emits: ["update:modelValue"],
  props: {
    modelValue: String,
    options: {
      type: Array,
      required: true,
    },
    size: {
      type: Number,
      required: true,
    },
    inverse: {
      type: Boolean,
      default: false,
    },
    mini: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: false,
    },
    large: {
      type: Boolean,
      default: false,
    },
    bg: {
      type: String,
      default: "#4d7bff",
    },
    color: {
      type: String,
      default: "",
    },
    round: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    selectedIndex() {
      return this.options.findIndex(
        (option) => (option.title || option) === this.modelValue
      );
    },
    indicatorWidth() {
      return 100 / this.options.length;
    },
  },
  methods: {
    iconComponent(icon) {
      const iconsMap = {
        "code": CodeIcon,
        "monitor": MonitorIcon,
        "rows": RowsIcon,
      }
      return iconsMap[icon];
    },
  }
};
</script>

<style scoped lang="scss">
.switch-container {
  padding: 4px;
  background-color: white;
  height: 32px;
  box-shadow: inset 0 0 2px 1px rgba(0, 0, 0, 0.1);
  &.round {
    border-radius: 30px;
    label,
    .switch-indicator {
      border-radius: 30px;
    }
  }
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
.dark {
  .switch-container {
    background-color: #22272e;
  }
}
</style>
