<template>
  <div class="blog-comments">
    Comments for {{ id }}
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true
    }
  }
}
</script>