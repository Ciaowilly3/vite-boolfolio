<script>
import axios from "axios";
import ProjectCard from "../pages/projects/ProjectCard.vue";

export default {
  name: "Projectslist",
  components: { ProjectCard },
  data() {
    return {
      projects: [],
      backendUrl: "http://localhost:8000",
    };
  },
  mounted() {
    axios
      .get(this.backendUrl + "/api/projects", {
        params: {
          last4: true,
        },
      })
      .then((resp) => {
        this.projects = resp.data;
      });
  },
};
</script>

<template>
  <div class="row py-3">
    <div class="col-3" v-for="project in projects" :key="project.id">
      <ProjectCard :project="project"></ProjectCard>
    </div>
  </div>
</template>
