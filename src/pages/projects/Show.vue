<script>
import ProjectCard from "./ProjectCard.vue";
import axios from "axios";
export default {
  name: "Show",
  components: { ProjectCard },
  data() {
    return {
      backendUrl: "http://localhost:8000",
      project: {},
    };
  },
  mounted() {
    axios
      .get(this.backendUrl + "/api/projects/" + this.$route.params.id)
      .then((resp) => {
        this.project = resp.data;
      })
      .catch((er) => {
        this.$router.push({ name: "projects.index" });
      });
  },
};
</script>

<template>
  <div class="container">
    <h3 class="text-center pt-3 pb-2">Show progetto</h3>
    <div class="d-flex justify-content-center" v-if="project.cover_img">
      <ProjectCard :project="project"></ProjectCard>
    </div>
  </div>
</template>
