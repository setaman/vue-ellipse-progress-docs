<template>
  <button :class="[{icon: icon}]">
    <slot>
    </slot>
  </button>
</template>

<script>
export default {
  name: "Btn",
  props: {
    icon: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style lang="scss">
button {
  cursor: pointer;
  &.icon {
    width: 38px;
    height: 38px;
    padding: 2px;
    border: none;
    background-color: transparent;
    border-radius: 50px;
    color: rgba(38, 92, 255, 1);
    &:hover {
      background-color: rgba(38, 92, 255, 0.11);
    }
  }
}
</style>
