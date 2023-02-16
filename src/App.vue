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
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@use "style/main.scss";
</style>
