<script>
import ProjectsList from "../components/ProjectsList.vue";
export default {
  components: { ProjectsList },
  data() {
    return {};
  },
};
</script>

<template>
  <main>
    <div class="jumbo">
      <div class="text-center pt-5 mt-5">
        <h1>Sei nella home, usa la navbar per navigare</h1>
        <h3>Ecco alcuni progetti</h3>
      </div>
    </div>
    <div class="container py-5">
      <ProjectsList></ProjectsList>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.jumbo {
  background-image: url("../jumbo.jpg");
  background-size: contain;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-top: 256px;
}
</style>
