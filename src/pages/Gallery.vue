<template>
  <Layout>
    <div class="flex flex-wrap overflow-hidden bg-indigo-100">
      <g-image
        class="p-1 w-full overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 object-cover enlargeable"
        v-for="edge in $page.images.edges"
        :key="edge.node.name"
        :src="require(`../../static/uploads/${edge.node.name}`)"
      />
    </div>
  </Layout>
</template>

<script>
export default {
  components: {},
  methods: {
    toggleEnlarge(e) {
      e.target.classList.toggle("enlarged");
    },
  },
  mounted() {
    let images = document.querySelectorAll(".enlargeable");
    images.forEach((x) => x.addEventListener("click", this.toggleEnlarge));
  },
};
</script>

<style lang="scss" scoped>
.enlarged {
  z-index: 9999;
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  object-fit: scale-down;
  backdrop-filter: blur(20px);
  padding: 2em;
}
</style>

<page-query>
  query Image {
    images: allImages {
      edges {
        node{
          path
          name
        }
      }
    }
  }
</page-query>
