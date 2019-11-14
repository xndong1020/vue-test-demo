<template>
  <div class="blog-comments">
    Comments for {{ id }}
    <Loader v-if="showLoader" :text="`Loading comments`" />
    <div class="comments" v-if="hasComments">
      <div v-for="comment in comments" :key="comment.id" class="comment">{{ comment }}</div>
    </div>
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
  computed: {
    hasComments() {
      return this.commentsLoaded && !!this.comments.length;
    }
  },
  mounted() {
    this.showLoader = true;
    this.$store
      .dispatch("blog/getComments", this.id)
      .then(data => {
        this.comments = data;
        this.commentsLoaded = true;
      })
      .finally(() => {
        this.showLoader = false;
      });
  }
};
</script>