import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/Login";
import Landing from "../components/Landing";

const routes = [
  {
    path: "/",
    name: "home",
    component: Login,
  },
  {
    path: "/Landing",
    name: "landing",
    component: Landing,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
