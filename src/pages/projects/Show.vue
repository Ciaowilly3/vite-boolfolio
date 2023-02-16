<script>
import axios from "axios";
export default {
  name: "Show",
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
  <h3 class="text-center">Show progetto</h3>
  <div class="d-flex justify-content-center">
    <div class="card" style="width: 18rem">
      <img
        class="card-img-top"
        :src="backendUrl + '/storage/' + project.cover_img"
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title">{{ project.name }}</h5>
        <p class="card-text">
          {{ project.description }}
        </p>
        <router-link
          class="text-black text-decoration-none"
          :to="{ name: 'projects.index', params: { id: project.id } }"
          ><span class="me-2">torna all'index</span> <i class="fas fa-bars"></i
        ></router-link>
      </div>
    </div>
  </div>
</template>
