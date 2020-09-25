<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="/">
      <img src="@/assets/logo.png" class="mr-1" alt="app-logo" />
      Vue-Apollo
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <ul class="navbar-nav ml-auto">
        <li v-if="!isLoggedIn" class="nav-item active">
          <router-link to="/auth/login" class="nav-link">Login</router-link>
        </li>
        <li v-if="!isLoggedIn" class="nav-item">
          <router-link to="/auth/register" class="nav-link"
            >Register</router-link
          >
        </li>
        <li v-if="isLoggedIn" class="nav-item">
          <router-link to="/dashboard/posts" class="nav-link"
            >My Posts</router-link
          >
        </li>
        <li v-if="isLoggedIn" class="nav-item">
          <router-link to="/dashboard/profile" class="nav-link"
            >My Profile</router-link
          >
        </li>
        <li class="nav-item" v-if="isLoggedIn">
          <router-link to="/dashboard/logout" class="nav-link"
            >Logout</router-link
          >
        </li>
      </ul>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      isLoggedIn: "Auth/isAuthenticated",
    }),
  },
};
</script>


<style lang="scss" scoped>
nav {
  img {
    height: 30px !important;
  }
}
</style>