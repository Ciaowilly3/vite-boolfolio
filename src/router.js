import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  // Serve ad indicare come gestire l'url al cambio pagina
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "projects.index",
      component: ProjectsIndex,
    },

    {
      path: "/projects/:id",
      name: "projects.show",
      component: PostsShowPage,
    },
  ],
});

export { router };
