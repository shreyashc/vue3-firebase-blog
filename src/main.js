import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { firebaseAuth } from "./firebase/config";

firebaseAuth.onAuthStateChanged((user) => {
  store.dispatch("fetchUser", user);
});

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
