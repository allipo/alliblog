<template>
  <div
    class="invisible md:visible fixed top-0 left-0 w-full min-w-screen min-h-screen md:max-w-xs lg:max-w-sm  bg-green-900"
  >
    <div class="mx-auto mt-16 mb-16">
      <g-image class="mx-auto" src="~/favicon.png" width="100" />
    </div>
    <div class="mt-16 mb-16 flex flex-col justify-center items-center text-white">
      <p>About</p>
      <p>Blog</p>
      <p>Gallery</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style></style>
