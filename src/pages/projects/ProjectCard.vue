<script>
export default {
  props: {
    project: Object,
  },
  data() {
    return {
      backendUrl: "http://localhost:8000",
    };
  },
};
</script>
<template>
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
      <router-link :to="{ name: 'projects.show', params: { id: project.id } }"
        ><i class="fas fa-eye"></i
      ></router-link>
    </div>
  </div>
</template>
