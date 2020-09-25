<template>
  <div class="login">
    <div class="row">
      <div class="col-md-6 col-sm-12 mx-auto">
        <div class="card">
          <div class="card-header">
            <h3 class="text-primary font-weight-bold">Login</h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="authenticateUser">
              <div class="form-group">
                <label
                  for="username"
                  class="text-primary font-size-sm font-weight-bold"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  v-model="username"
                  class="form-control"
                  placeholder="Username"
                />
              </div>
              <div class="form-group">
                <label
                  for="username"
                  class="text-primary font-size-sm font-weight-bold"
                  >Password</label
                >
                <input
                  id="password"
                  type="password"
                  v-model="password"
                  class="form-control"
                  placeholder="Password"
                />
              </div>
              <div class="form-group">
                <button class="btn btn-primary btn-block">Login</button>
              </div>
              <div class="form-group">
                <router-link to="/auth/register" class="mt-2">
                  Need an account? Register Now!
                </router-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    username: "",
    password: "",
  }),
  methods: {
    ...mapActions({
      login: "Auth/login",
    }),
    async authenticateUser() {
      let { username, password } = this;
      await this.login({ username, password });
    },
  },
};
</script>