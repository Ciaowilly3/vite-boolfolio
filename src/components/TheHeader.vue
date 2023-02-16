<template>
  <div class="container-fluid">
    <nav
      class="navbar navbar-expand-lg navbar-light bg-light justify-content-center"
    >
      <a class="navbar-brand" href="#">Navbar</a>
      <div id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link :to="{ name: 'home' }" class="nav-link">
              <i class="fas fa-house"></i>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'projects.index' }" class="nav-link">
              Tutti i projects
            </router-link>
          </li>
          <!-- <li class="nav-item">
            <router-link :to="{ name: 'projects.show' }" class="nav-link">
              Tutti i projects
            </router-link>
          </li> -->
        </ul>
      </div>
    </nav>
  </div>
</template>
