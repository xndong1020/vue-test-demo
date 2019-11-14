<template>
  <div class="blog-posts">
    Blog Posts
    <Loader :text="`Loading posts`" />
  </div>
</template>

<script>
import Loader from '@/components/Loader'
export default {
  components: {
    Loader
  }
}
</script>

<style scoped></style>
