<template>
  <div class="register">
    <div class="row">
      <div class="col-md-6 col-sm-12 mx-auto">
        <div class="card">
          <div class="card-header">
            <h3 class="text-primary font-weight-bold">Register</h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="signUp">
              <div class="form-group">
                <label
                  for="firstName"
                  class="text-primary font-size-sm font-weight-bold"
                  >First Name</label
                >
                <input
                  type="text"
                  id="firstName"
                  v-model="user.firstName"
                  class="form-control"
                  placeholder="First Name"
                />
              </div>
              <div class="form-group">
                <label
                  for="lastName"
                  class="text-primary font-size-sm font-weight-bold"
                  >Last Name</label
                >
                <input
                  type="text"
                  id="lastName"
                  v-model="user.lastName"
                  class="form-control"
                  placeholder="Last Name"
                />
              </div>
              <div class="form-group">
                <label
                  for="username"
                  class="text-primary font-size-sm font-weight-bold"
                  >Username</label
                >
                <input
                  type="text"
                  id="username"
                  v-model="user.username"
                  class="form-control"
                  placeholder="Username"
                />
              </div>
              <div class="form-group">
                <label
                  for="email"
                  class="text-primary font-size-sm font-weight-bold"
                  >Email</label
                >
                <input
                  id="email"
                  type="email"
                  v-model="user.email"
                  class="form-control"
                  placeholder="Email"
                />
              </div>
              <div class="form-group">
                <label
                  for="password"
                  class="text-primary font-size-sm font-weight-bold"
                  >Password</label
                >
                <input
                  id="password"
                  type="password"
                  v-model="user.password"
                  class="form-control"
                  placeholder="Password"
                />
              </div>
              <div class="form-group">
                <button class="btn btn-primary btn-block">Register</button>
              </div>
              <div class="form-group">
                <router-link to="/auth/login" class="mt-2">
                  Already have an account?
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
    user: {
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      email: "",
    },
  }),
  methods: {
    ...mapActions({
      register: "Auth/registerUser",
    }),
    async signUp() {
      await this.register(this.user);
    },
  },
};
</script>