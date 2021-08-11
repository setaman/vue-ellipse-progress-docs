<template>
  <section id="home" class="p-8">
    <h1>hello home</h1>
    <ExampleContainer>
      <template #default="{ progress, state }">
        <ve-progress
          :progress="progress"
          :loading="state === 'Loading'"
          :determinate="state === 'Determinate'"
          :no-data="state === 'No data'"
        />
      </template>
    </ExampleContainer>
  </section>
</template>

<script>
import ExampleContainer from "../components/Base/ExampleContainer/ExampleContainer";

export default {
  name: "HomeLayout",
  components: { ExampleContainer },
};
</script>

<style scoped></style>
