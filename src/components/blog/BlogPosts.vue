<template>
  <div class="blog-posts">
    Blog Posts
    <Loader v-if="!this.hasBlogPosts" :text="`Loading posts`" />
    <div v-for="post in blogPosts" class="post" :key="post.id">{{ post }}</div>
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

