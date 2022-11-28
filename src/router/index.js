import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../components/Calendar.vue")
  },
  {
    path: "/calendar",
    name: "Calendar",
    component: () => import("../components/Calendar.vue")
  },
  {
    path: "/timePicker",
    name: "TimePicker",
    component: () => import("../components/TimePicker.vue")
  },
  {
    path: "/addCourse",
    name: "AddCourse",
    component: () => import("../components/AddCourse.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  routes
});

export default router;
