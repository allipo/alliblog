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

<style lang="scss">
.markdown {
  p,
  ul,
  ol {
    @apply mb-6;
  }

  ul {
    @apply list-disc pl-6;
  }

  ol {
    @apply list-decimal pl-6;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply font-sans leading-tight font-bold my-6;
  }

  h5,
  h6 {
    @apply uppercase;
  }

  h1 {
    @apply text-3xl;
  }

  h2 {
    @apply text-xl;
  }

  h3 {
    @apply text-lg;
  }

  h4 {
    @apply text-base;
  }

  h5 {
    @apply text-sm;
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

      + dd {
        @apply mb-4 pl-2;
      }
    }

    dd {
      @apply mb-4;
    }
  }

  blockquote {
    @apply border-l-4 border-gray-500 p-4 mb-4 mx-4 italic;

    p {
      @apply mb-0;
    }
  }

  hr {
    @apply h-px border-gray-500 my-8;
  }

  img {
    @apply mx-auto my-4 object-scale-down;
  }

  @screen sm {
    p,
    ul,
    ol {
      @apply text-lg mb-8;
    }

    ul li,
    ol li {
      @apply mb-2;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      @apply font-sans leading-tight font-bold my-8;
    }

    h5,
    h6 {
      @apply uppercase;
    }

    h1 {
      @apply text-3xl;
    }

    h2 {
      @apply text-xl;
    }

    h3 {
      @apply text-lg;
    }

    h4 {
      @apply text-base italic;
    }

    h5 {
      @apply text-sm;
    }

    h6 {
      @apply text-sm italic;
    }

    blockquote {
      @apply border-l-4 border-gray-500 p-6 mb-6 mx-4 italic;

      p {
        @apply mb-0;
      }
    }

    hr {
      @apply h-px border-gray-500 my-10;
    }
  }

  @screen sm {
    p,
    ul,
    ol {
      @apply text-lg mb-8;
    }

    ul li,
    ol li {
      @apply mb-2;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      @apply font-sans leading-tight font-bold my-8;
    }

    h5,
    h6 {
      @apply uppercase;
    }

    h1 {
      @apply text-3xl;
    }

    h2 {
      @apply text-xl;
    }

    h3 {
      @apply text-lg;
    }

    h4 {
      @apply text-base italic;
    }

    h5 {
      @apply text-sm;
    }

    h6 {
      @apply text-sm italic;
    }

    blockquote {
      @apply border-l-4 border-gray-500 p-6 mb-6 mx-4 italic;

      p {
        @apply mb-0;
      }
    }

    hr {
      @apply h-px border-gray-500 my-10;
    }
  }
}
</style>
