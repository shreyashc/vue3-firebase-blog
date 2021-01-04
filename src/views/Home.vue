<template>
  <div class="home">
    <div v-if="user.data" class="user">
      {{ user.data.displayName }}
    </div>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";

import PostList from "../components/PostList";
import getPosts from "../composables/getPosts";
import Spinner from "../components/Spinner";
import TagCloud from "../components/TagCloud.vue";

export default {
  name: "Home",
  components: {
    PostList,
    Spinner,
    TagCloud,
  },
  setup() {
    const { posts, error, load } = getPosts();
    const store = useStore();
    const user = computed(() => store.state.user);
    load();
    return { posts, error, user };
  },
};
</script>
