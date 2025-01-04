<template>
  <ve-progress
    class="my-circle"
    :progress="50"
    line-mode="in"
    empty-color="transparent"
    :determinate="determinate"
    dot="10 gray"
  />
  <ve-progress
    class="my-circle2"
    :progress="50"
    line-mode="in"
    :thickness="70"
    :empty-thickness="2"
    line="butt"
    color="Navy"
    :dot="{
      size: 70,
      backgroundColor: 'DarkCyan',
      width: '1px',
    }"
  />
</template>
<style scoped lang="scss">
.my-circle {
  :deep(.ep-circle--progress__dot) {
    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 15px;
      height: 15px;
      background-color: transparent;
      border: 2px gray solid;
      border-radius: 50%;
      right: -50%;
      top: -48%;
    }
  }
}
.my-circle2 {
  :deep(.ep-circle--progress__dot) {
    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 1px;
      height: 70%;
      background-color: DarkCyan;
      bottom: 15%;
      left: 5px;
    }
    &:before {
      content: "";
      display: block;
      position: absolute;
      width: 1px;
      height: 70%;
      background-color: DarkCyan;
      border-radius: 50%;
      bottom: 15%;
      right: 5px;
    }
  }
}
</style>
