<template>
<Layout>
    <div class="flex flex-col divide-y gap-8 bg-yellow-100 min-h-screen p-20 md:pl-40 pt-20">
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
        date
        title
        id
        content
      }
    }
  }
}
</page-query>

<style></style>
