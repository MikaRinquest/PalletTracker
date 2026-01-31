import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import BackOrder from "../views/BackOrder.vue";
import Tracker from "../views/BackOrder.vue";
import History from "../views/BackOrder.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/orders",
    name: "backorder",
    component: BackOrder,
  },
  {
    path: "/track",
    name: "tracker",
    component: Tracker,
  },
  {
    path: "/history",
    name: "history",
    component: History,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
