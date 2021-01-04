import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router";
import store from "./store";
import { firebaseAuth } from "./firebase/config";

firebaseAuth.onAuthStateChanged((user) => {
  console.log(user);
  store.dispatch("fetchUser", user);
});

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
