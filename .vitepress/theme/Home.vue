<script setup lang="ts">
import DefaultTheme from "vitepress/theme";
import CircleDemo from "./components/Home/CircleDemo.vue";

const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template #home-hero-before>
      <!--      <div class="moving-gradient"></div>-->
    </template>
    <template #home-hero-image>
      <CircleDemo />
    </template>
  </Layout>
</template>

<style scoped lang="scss">
:deep(.image-bg) {
  display: none !important;
}
:deep(.image-container) {
  transform: none !important;
}
:deep(.image) {
  margin: -30px 0 0 0;
}
/* Background container */
.moving-gradient {
  position: fixed;
  top: 0;
  right: 0;
  width: 50vw;
  height: 100vh;
  overflow: hidden;
  //border-radius: 100%;
  background-color: #e499ff;
  background: var(--vp-home-hero-name-background);
  animation: gradientAnimation 25s ease-in-out infinite;
  z-index: -1;
  filter: blur(100px);
  opacity: 1;
}
.dark {
  .moving-gradient {
    filter: blur(50px);
  }
}

/* Layered gradients for smooth, shifting effect */
.moving-gradient::before,
.moving-gradient::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--vp-home-hero-name-background);
  mix-blend-mode: screen;
  opacity: 0.6;
  animation: gradientAnimationAlt 25s ease-in-out infinite alternate;
}

.moving-gradient::after {
  animation-duration: 18s;
  opacity: 0.4;
}

/* Keyframes for smooth gradient movement */
@keyframes gradientAnimation {
  0% {
    opacity: 0.15;
    border-radius: 10%;
    transform: scale(1) translate(0, 0);
  }
  50% {
    transform: scale(1.2) translate(-25%, -45%);
    opacity: 0.5;
    border-radius: 200%;
  }
  100% {
    transform: scale(1) translate(0, 0);
    opacity: 0.15;
    border-radius: 10%;
  }
}

@keyframes gradientAnimationAlt {
  0% {
    transform: scale(1) rotate(0deg);
  }
  50% {
    transform: scale(1.2) rotate(90deg);
  }
  100% {
    transform: scale(1) rotate(180deg);
  }
}

:deep(.image-bg) {
  background-image: none !important;
}

@media (min-width: 640px) {
  :deep(.image) {
    margin: -50px 0;
  }
}

@media (max-width: 640px) {
  :deep(.container .text) {
    display: none;
  }
}
</style>
