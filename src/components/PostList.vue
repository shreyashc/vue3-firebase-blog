<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script>
import SinglePost from "./SinglePost.vue";
export default {
  props: ["posts"],
  components: { SinglePost },
  setup() {},
};
</script>

<style></style>
