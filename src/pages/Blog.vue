<template>
<Layout>
    <div class="flex flex-col bg-yellow-100 min-h-screen p-20 md:pl-40 pt-20">
        <PostHeader v-for="edge in $page.posts.edges" :key="edge.node.id" :prop="{
          title: edge.node.title,
          date: edge.node.date,
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
        date
        title
        path
        id
      }
    }
  }
}
</page-query>

<style></style>
