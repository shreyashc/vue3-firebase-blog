<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post p-4">
    <h3 class="text-4xl font-black  mt-2 mb-1">{{ post.title }}</h3>
    <h5 class="my-0 mx-2 text-gray-600">
      By <span class="text-purple-600">{{ post.displayName }} </span>
    </h5>
    <p class="pre ">{{ post.body }}</p>
    <div class="my-2" v-if="user.data.uid === post.authorId">
      <button
        @click="handleClick"
        class="px-3 py-2 font-semibold  text-red-600 ring m-2  ring-red-100
      hover:bg-red-600 hover:text-white
      "
      >
        Delete
      </button>
      <button
        class="px-3 py-2 font-semibold  text-green-600 ring m-2 ring-green-100
      hover:bg-green-600 hover:text-white
      "
      >
        Edit
      </button>
    </div>
  </div>
  <div v-else><Spinner /></div>
</template>

<script>
import getPost from "@/composables/getPost";
import Spinner from "@/components/Spinner";
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import { projectFirestore } from "@/firebase/config";
export default {
  components: {
    Spinner,
  },
  props: ["id"],
  setup(props) {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const user = computed(() => store.state.user);
    const { error, post, load } = getPost(route.params.id);
    load();
    const handleClick = async () => {
      await projectFirestore
        .collection("posts")
        .doc(props.id)
        .delete();
      load();
      router.push("/");
    };
    return { error, post, handleClick, user };
  },
};
</script>

<style scoped>
.tags a {
  margin-right: 10px;
}
.post {
  max-width: 1200px;
  margin: 0 auto;
}
.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 20px;
  margin-bottom: 20px;
}
.pre {
  white-space: pre-wrap;
}
</style>
