<script>
import TheHeader from "./components/TheHeader.vue";
import ProjectsIndex from "./pages/projects/index.vue";

export default {
  components: { TheHeader, ProjectsIndex },
  data() {
    return {};
  },
};
</script>

<template>
  <TheHeader></TheHeader>
  <div class="container">
    <h1>Ciao</h1>
    <ProjectsIndex></ProjectsIndex>
  </div>
</template>

<style lang="scss">
@use "style/main.scss";
</style>
