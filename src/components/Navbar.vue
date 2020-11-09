<template>
  <div
    class="invisible md:visible fixed top-0 left-0 w-full min-w-screen min-h-screen md:w-48  bg-green-600"
  >
    <div class="mx-auto mt-16 mb-16">
      <g-link to="/">
        <g-image class="mx-auto" src="~/logo.png" width="100"
      /></g-link>
    </div>
    <div
      class="mt-16 mb-16 flex flex-col justify-center items-center text-white"
    >
      <g-link to="/">Home</g-link>
      <g-link to="/blog">Blog</g-link>
      <g-link to="/gallery">Gallery</g-link>
      <g-link to="/about">About</g-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style></style>
