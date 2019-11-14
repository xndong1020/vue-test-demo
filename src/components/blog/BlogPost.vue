<template>
  <div class="blog-post">
    <h3 class="title">{{ post.title }}</h3>
    <div v-if="showBody" class="body">{{ post.body }}</div>
  </div>
</template>

<script>
export default {
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