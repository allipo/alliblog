<template>
<Layout>
    <div class="min-h-screen bg-yellow-100 flex flex-col divide-y divide-dotted divide-gray-800 gap-8 p-20 md:p-64 md:pt-20 md:pb-20">
        <PostHeader v-for="edge in $page.posts.edges" :key="edge.node.id" :prop="{
          title: edge.node.title,
          date: edge.node.date,
          id: edge.node.id,
        }" />
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
