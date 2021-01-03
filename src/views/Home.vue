<template>
  <div class="home">
    <div v-if="user" class="user">
      {{ user.displayName }}
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
import { ref } from "vue";
import PostList from "../components/PostList";
import getPosts from "../composables/getPosts";
import Spinner from "../components/Spinner";
import TagCloud from "../components/TagCloud.vue";
import { firebaseAuth } from "@/firebase/config";
export default {
  name: "Home",
  components: {
    PostList,
    Spinner,
    TagCloud,
  },
  setup() {
    const { posts, error, load } = getPosts();
    const user = firebaseAuth.currentUser;
    console.log(user);
    load();

    return { posts, error, user };
  },
};
</script>
