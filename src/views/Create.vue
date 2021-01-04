<template>
  <div class="create p-4">
    <h1 class="font-black text-center">Create A New Post</h1>
    <form @submit.prevent="handleSubmit">
      <label>Title:</label>
      <input
        v-model="title"
        type="text"
        class="focus:outline-none focus:ring focus:border-blue-300"
        required
      />
      <label>Content:</label>
      <textarea
        v-model="body"
        required
        class="focus:outline-none focus:ring focus:border-blue-300"
      ></textarea>
      <label>Tags (hit enter to add a tag):</label>
      <input
        @keydown.enter.prevent="handleKeydown"
        v-model="tag"
        type="text"
        class="focus:outline-none focus:ring focus:border-blue-300"
      />

      <div v-for="tag in tags" :key="tag" class="pill">#{{ tag }}</div>
      <button class="bg-blue-500 text-white py-2 px-3 rounded-md block my-3">
        Add Post
      </button>
    </form>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { projectFirestore, timestamp } from "../firebase/config";
import { useRouter } from "vue-router";
export default {
  setup() {
    const store = useStore();
    const user = computed(() => store.state.user);
    const title = ref("");
    const body = ref("");
    const tags = ref([]);
    const tag = ref("");
    const router = useRouter();

    if (!user.value.loggedIn) {
      router.push({ name: "Home" });
    }

    const handleKeydown = () => {
      if (!tag.value.trim()) {
        return;
      }
      if (!tags.value.includes(tag.value)) {
        tag.value = tag.value.replace(/\s/g, "");
        tags.value.push(tag.value);
      }
      tag.value = "";
    };

    const handleSubmit = async () => {
      const post = {
        title: title.value,
        body: body.value,
        tags: tags.value,
        createdAt: timestamp(),
        displayName: user.value.data.displayName,
        authorId: user.value.data.uid,
      };
      const res = await projectFirestore.collection("posts").add(post);
      router.push({ name: "Home" });
    };

    return { body, title, tag, tags, handleKeydown, handleSubmit };
  },
};
</script>

<style scoped>
form {
  max-width: 480px;
  margin: 0 auto;
  text-align: left;
}
input,
textarea {
  display: block;
  margin: 5px 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #eee;
}
textarea {
  height: 160px;
}
label {
  display: inline-block;
  margin-top: 30px;
  position: relative;
  font-size: 20px;
  color: #0f0f0f;
  margin-bottom: 5px;
}

.pill {
  display: inline-block;
  margin: 10px 10px 0 0;
  color: #444;
  background: #ddd;
  padding: 8px;
  border-radius: 20px;
  font-size: 14px;
}
</style>
