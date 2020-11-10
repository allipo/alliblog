<template>
<Layout>
    <h1>{{ $page.post.title }}</h1>
    <div v-html="$page.post.content" class="markdown"></div>
</Layout>
</template>

<script>
export default {};
</script>

<page-query>
query getPostData ($path: String!) {
    post: post(path: $path) {
        title
        date (format: "MMMM DD YYYY")
        content
    }
    all: allPost {
        edges {
            node {
                id
                title
            }
        }
    }
}

</page-query>

<style>
</style>
