<template>
  <div>
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

<style></style>
