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

  <router-view></router-view>
</template>

<style lang="scss">
@use "style/main.scss";
</style>
