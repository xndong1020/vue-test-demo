<template>
  <div class="blog-post" :class="{ expanded: showBody }">
    <h3 class="title" @click.stop="showBody = !showBody">{{ post.title }}</h3>
    <div v-if="showBody" class="body">
      {{ post.body }}
      <BlogComment :id="post.id" />
    </div>
  </div>
</template>

<script>
import BlogComment from "@/components/blog/BlogComment";
export default {
  components: {
    BlogComment
  },
  props: {
    post: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      showBody: false
    };
  }
};
</script>

<style lang="scss" scoped>
.expanded {
  border: 1px solid rgba(0, 0, 0, 0.2);
}
</style>