<template>
  <div class="post m-4 shadow-md p-3">
    <router-link :to="{ name: 'Details', params: { id: post.id } }">
      <h3 class="text-3xl font-black my-2">{{ post.title }}</h3>
    </router-link>
    <p class=" my-3 mx-1 text-lg ">{{ snippet }}</p>
    <span
      class="
      bg-blue-500
      text-white
       py-1 px-2
      rounded-lg
      cursor-pointer
      mx-1
      "
      v-for="tag in post.tags"
      :key="tag"
    >
      #{{ tag }}
    </span>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  props: ["post"],
  setup(props) {
    const snippet = computed(() => {
      return props.post.body.substring(0, 130) + "...";
    });
    return { snippet };
  },
};
</script>

<style></style>
