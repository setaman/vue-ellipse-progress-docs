<template>
  <section>
    <h1>Hello there!</h1>
    <div>
      <ExampleContainer>
        <template #default="{ progress }">
          <ve-progress :progress="progress" />
        </template>
      </ExampleContainer>
    </div>
  </section>
</template>

<script>
import ExampleContainer from "../components/Base/ExampleContainer/ExampleContainer";
export default {
  name: "Introduction",
  components: { ExampleContainer },
};
</script>

<style scoped></style>
