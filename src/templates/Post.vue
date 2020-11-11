<template>
<Layout>
    <div class="bg-yellow-100 min-h-screen">
        <div class="mx-auto py-12 sm:py-20 px-6 max-w-sm md:max-w-xl">
            <h1 class="font-serif text-2xl md:text-4xl text-center leading-snug">{{$page.post.title}}</h1>
            <p class="font-sans text-lg text-center mb-6">{{$page.post.date}}</p>
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
            title: this.$page.post.title
        }
    }
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

<style lang="scss">
.markdown {

    p,
    ul,
    ol {
        @apply mb-6 leading-loose;
    }

    ul li,
    ol li {
        @apply mb-6;
    }

    ul {
        @apply list-disc pl-4;
    }

    ol {
        @apply list-decimal pl-4;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        @apply font-sans font-bold text-black my-8 leading-tight;
    }

    h5,
    h6 {
        @apply uppercase;
    }

    h1 {
        @apply text-3xl
    }

    h2 {
        @apply text-2xl;
    }

    h3 {
        @apply text-xl;
    }

    h4 {
        @apply text-lg;
    }

    h5 {
        @apply text-base;
    }

    h6 {
        @apply text-sm;
    }

    a {
        @apply text-blue-500 transition-colors duration-300;

        &:hover {
            @apply text-blue-700;
        }
    }

    dl {
        dt {
            @apply text-black text-sm font-sans font-bold uppercase mb-2;

            +dd {
                @apply mb-4 pl-2;
            }
        }

        dd {
            @apply mb-4;
        }
    }

    blockquote {
        @apply border-l-4 border-gray-300 p-4 mb-4 mx-4 italic;

        p {
            @apply mb-0;
        }
    }

    hr {
        @apply h-px bg-gray-300 my-8;
    }
}

@screen sm {

    .markdown {
        blockquote {
            @apply mx-10;
        }

        h1 {
            @apply text-4xl;
        }

        h2 {
            @apply text-3xl;
        }

        h3 {
            @apply text-2xl;
        }

        h4 {
            @apply text-xl;
        }

        h5 {
            @apply text-lg;
        }

        h6 {
            @apply text-base;
        }
    }
}
</style>
