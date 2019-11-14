<template>
  <div class="blog-posts">
    Blog Posts
    <Loader v-if="!this.hasBlogPosts" :text="`Loading posts`" />
    <BlogPost v-for="post in blogPosts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Loader from "@/components/Loader";
import BlogPost from "@/components/blog/BlogPost";

export default {
  components: {
    Loader,
    BlogPost
  },
  computed: {
    ...mapGetters("blog", ["blogPosts", "hasBlogPosts", "numberOfPosts"])
  },
  created() {
    if (!this.hasBlogPosts) this.$store.dispatch("blog/getBlogPosts");
  }
};
</script>

