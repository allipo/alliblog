<template>
  <Layout>
    <div class="bg-yellow-100 min-h-screen">
      <div class="flex flex-col divide-y divide-dotted divide-gray-800 gap-8 mx-auto py-12 pb-16 px-6 max-w-sm md:max-w-xl">
        <PostHeader
          v-for="edge in $page.posts.edges"
          :key="edge.node.id"
          :prop="{
            title: edge.node.title,
            date: edge.node.date,
            id: edge.node.id,
          }"
        />
      </div>
    </div>
  </Layout>
</template>

<script>
import PostHeader from "~/components/PostHeader.vue";

export default {
  components: {
    PostHeader,
  },
};
</script>

<page-query>
query Post {
  posts: allPost{
    edges{
      node{
        date(format: "MMMM DD, YYYY")
        title
        id
        content
      }
    }
  }
}
</page-query>

<style></style>
