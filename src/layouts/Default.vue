<template>
  <div class="md:ml-48 min-h-screen">
    <Navbar />
    <slot></slot>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style src="~/assets/css/global.css"></style>
