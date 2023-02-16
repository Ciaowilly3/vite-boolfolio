<script>
import { onMounted } from "vue";
import axios from "axios";
export default {
  data() {
    return {
      backendUrl: "http://127.0.0.1:8000",
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
  <div v-for="project in projects" :key="project.id">
    {{ project.name }}
  </div>
</template>
