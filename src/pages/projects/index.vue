<script>
import ProjectCard from "./ProjectCard.vue";
import axios from "axios";
export default {
  components: { ProjectCard },
  data() {
    return {
      backendUrl: "http://localhost:8000",
      projects: [],
    };
  },
  methods: {
    fetchProjects() {
      axios.get(this.backendUrl + "/api/projects/").then((resp) => {
        this.projects = resp.data;
      });
    },
  },
  mounted() {
    this.fetchProjects();
  },
};
</script>

<template>
  <div class="container">
    <div class="row py-5 gy-5">
      <div class="col-4" v-for="project in projects" :key="project.id">
        <ProjectCard :project="project"></ProjectCard>
      </div>
    </div>
  </div>
</template>
