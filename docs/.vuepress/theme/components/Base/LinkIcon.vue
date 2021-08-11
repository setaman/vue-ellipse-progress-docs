<template>
  <a class="link-icon">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "LinkIcon",
};
</script>

<style scoped lang="scss">
.link-icon {
  transition: 0.2s;
  border-radius: 50px;
  display: inline-flex;
  justify-content: center;
  align-content: center;
  padding: 5px;
  &:hover {
    background-color: rgba(38, 92, 255, 0.11);
  }
}
</style>
