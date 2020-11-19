<template>
  <Layout>
    <div class="bg-yellow-100 min-h-screen">
      <div class="mx-auto py-16 sm:py-24 px-8 max-w-sm sm:max-w-lg">
        <h1 class="font-serif text-4xl text-center leading-snug">
          {{ $page.post.title }}
        </h1>
        <p class="font-sans text-center mb-16">{{ $page.post.date }}</p>
        <article class="markdown" v-html="$page.post.content"></article>
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
  metaInfo() {
    return {
      title: this.$page.post.title,
    };
  },
};
</script>

<page-query>
query getPostData ($path: String!) {
    post: post(path: $path) {
        title
        date (format: "MMMM DD, YYYY")
        content
    }
}

</page-query>

<style></style>
