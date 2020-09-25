<template>
  <div id="wrapper" class="d-flex flex-column">
    <Navbar />
    <div class="container flex-grow-1 py-5">
      <routerView />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Layouts/Navbar";
import Footer from "@/components/Layouts/Footer";
export default {
  components: {
    Navbar,
    Footer,
  },
  async created() {
    this.$store.dispatch("Auth/setUser");
  },
};
</script>
