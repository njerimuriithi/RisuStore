import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  
  {
    path: "/bulbs",
    name: "Bulbs",
    component: () =>
      import( "../views/Bulbs.vue")
  },
  {
    path: "/extensions",
    name: "Extensions",
    component: () =>
      import( "../views/Extensions.vue")
  },
  {
    path: "/solar",
    name: "Solar",
    component: () =>
      import( "../views/Solar.vue")
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
