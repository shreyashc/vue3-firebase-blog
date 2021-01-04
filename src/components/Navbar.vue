<template>
  <header class="bg-blue-500 py-3 px-4">
    <router-link :to="{ name: 'Home' }">
      <h1 class="md:text-4xl font-black text-white sm:text-3xl">The Blog</h1>
    </router-link>
    <nav class="nav items-baseline">
      <router-link class="mx-2 font-light" :to="{ name: 'Home' }"
        >Home</router-link
      >
      <router-link
        v-if="user.loggedIn"
        class="font-lighter text-gray-200
         hover:text-gray-100 "
        :to="{ name: 'Create' }"
        >New Post</router-link
      >
      <button
        class="font-bold text-red-500 bg-white px-2 py-1 rounded cursor-pointer hover:text-white hover:bg-red-500 transition-colors ml-4"
        v-if="user.loggedIn"
        @click="signOut"
      >
        Sign Out
      </button>
      <button
        v-else
        @click="signIn"
        class="font-bold text-green-500 bg-white px-2 py-1 rounded cursor-pointer hover:text-white hover:bg-green-500 transition-colors ml-3"
      >
        Sign In
      </button>
    </nav>
  </header>
</template>

<script>
import { firebaseAuth, provider } from "@/firebase/config";
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const user = computed(() => store.state.user);

    const signIn = () => {
      firebaseAuth.signInWithPopup(provider);
    };

    const signOut = () => {
      firebaseAuth.signOut();
    };

    return { signIn, signOut, user };
  },
};
</script>

<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
}
header nav {
  display: flex;
}
header a {
  color: #f3eeee;
  text-decoration: none;
}

header a.router-link-active {
  color: #ffffff;
  font-weight: bold;
  color: #f8f8f8;
  font-size: 1.2rem;
}
</style>
