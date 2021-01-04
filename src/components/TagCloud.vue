<template>
  <div class="tag-cloud my-5 px-8">
    <h3 class="text-xl text-blue-500 font-black text-center">Tags</h3>
    <div v-for="tag in tags" :key="tag">
      <router-link :to="{ name: 'Tag', params: { tag } }">
        #{{ tag }}
      </router-link>
    </div>
  </div>
</template>

<script>
import useTags from "../composables/useTags";
export default {
  props: ["posts"],
  setup(props) {
    const { tags } = useTags(props.posts);

    return { tags };
  },
};
</script>

<style>
.tag-cloud div {
  display: inline-block;
  padding: 10px;
}
.tag-cloud a {
  color: #747171;
  text-decoration: none;
}
.tag-cloud a.router-link-active {
  color: #0084ff;
  font-weight: bold;
}
</style>
