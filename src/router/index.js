import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/posts/:id",
    name: "Details",
    component: import(/* webpackChunkName: "details" */ "../views/Details"),
    props: true,
  },
  {
    path: "/create",
    name: "Create",
    component: import(/* webpackChunkName: "create" */ "../views/Create"),
  },
  {
    path: "/tags/:tag",
    name: "Tag",
    component: import(/* webpackChunkName: "tag" */ "../views/Tag.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
