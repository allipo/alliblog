<template>
  <Layout>
    <div class="flex flex-wrap overflow-hidden">
      <g-image
        class="p-px w-full overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 object-cover"
        v-for="edge in $page.images.edges"
        :key="edge.node.name"
        :src="require(`~/assets/images/gallery/${edge.node.name}`)"
      />
    </div>
  </Layout>
</template>

<script>
export default {};
</script>

<style></style>

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
