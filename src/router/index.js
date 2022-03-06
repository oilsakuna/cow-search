import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/result/:name",
    name: "Result",
    component: () => import("../views/Result.vue"),
  },
  {
    path: "/admin/add_data",
    name: "Add Data",
    component: () => import("../views/AddData.vue"),
  },
  {
    path: "/admin/view_data",
    name: "Edit Data",
    component: () => import("../views/ViewData.vue"),
  },
  {
    path: "/admin/update_data/:id",
    name: "Edit Data",
    component: () => import("../views/UpdateData.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
