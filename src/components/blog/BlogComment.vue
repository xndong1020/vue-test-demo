<template>
  <div class="blog-comments">
    Comments for {{ id }}
    <Loader v-if="showLoader" :text="`Loading comments`" />
    <div v-for="comment in comments" :key="comment.id">{{ comment }}</div>
  </div>
</template>

<script>
import Loader from "@/components/Loader";
export default {
  components: {
    Loader
  },
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      comments: [],
      commentsLoaded: false,
      showLoader: false
    };
  },
  mounted() {
    this.showLoader = true;
    this.$store.dispatch("blog/getComments", this.id).then(data => {
      this.comments = data;
      this.commentsLoaded = true;
      this.showLoader = false;
    });
  }
};
</script>