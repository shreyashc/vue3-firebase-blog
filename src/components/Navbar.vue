<template>
  <header>
    <h1>The Blog</h1>
    <nav>
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'Create' }">Create Post</router-link>
      <button v-if="user" @click="signOut">Sign Out</button>
      <button v-else @click="signIn">SignIn with Google</button>
    </nav>
  </header>
</template>

<script>
import { firebaseAuth, provider } from "@/firebase/config";
export default {
  setup() {
    const signIn = () => {
      firebaseAuth.signInWithPopup(provider);
    };

    const signOut = () => {
      firebaseAuth.signOut();
    };

    const user = firebaseAuth.currentUser;

    return { signIn, signOut, user };
  },
};
</script>

<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
header h1 {
  color: #ff8902f5;
  font-size: 48px;
  margin: 5px;
}
header a {
  color: #bbb;
  text-decoration: none;
  margin-left: 20px;
}
header a.router-link-active {
  color: #444;
  font-weight: bold;
  font-size: 1.6rem;
}
</style>
