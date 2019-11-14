<template>
  <div class="blog-posts">
    Blog Posts
    <Loader :text="`Loading posts`" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Loader from "@/components/Loader";
export default {
  components: {
    Loader
  },
  computed: {
    ...mapGetters("blog", ["blogPosts", "hasBlogPosts", "numberOfPosts"])
  },
  created() {
    if (!this.hasBlogPosts) this.$store.dispatch("blog/getBlogPosts");
  }
};
</script>

<style scoped></style>

