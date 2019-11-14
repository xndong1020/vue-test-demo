<template>
  <div class="blog-post" :class="{ expanded: showBody }">
    <h3 class="title" @click.stop="showBody = !showBody">{{ post.title }}</h3>
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

<style lang="scss" scoped>
.expanded {
  border: 1px solid rgba(0, 0, 0, 0.2);
}
</style>