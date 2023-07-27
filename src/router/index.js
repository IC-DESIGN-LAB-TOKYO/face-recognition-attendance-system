import { createRouter, createWebHistory } from "vue-router";

import DashboardIndex from "@/views/dashboard/Index.vue";
import SettingIndex from "@/views/settings/Index.vue";
import EmployeeIndex from "@/views/employees/Index.vue";
import ProfileIndex from "@/views/profile/Index.vue";
import ProjectsIndex from "@/views/projects/Index.vue";
import ProjectaddIndex from "@/views/project-add/Index.vue";
import ProjecteditIndex from "@/views/project-edit/Index.vue";
import ProjectdetailIndex from "@/views/project-detail/Index.vue";
import LoginIndex from "@/views/login/Index.vue";
import BlankIndex from "@/views/blank/Index.vue";



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: DashboardIndex,
      meta: { requiresAuth: false, authLayout: false },
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: DashboardIndex,
      meta: { requiresAuth: true, authLayout: true },
    },
    {
      path: "/settings",
      name: "setting",
      component: SettingIndex,
      meta: { requiresAuth: true, authLayout: true },
    },
    {
      path: "/employees",
      name: "employee",
      component: EmployeeIndex,
      meta: { requiresAuth: true, authLayout: true },
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileIndex,
      meta: { requiresAuth: true, authLayout: true },
    },
    {
      path: "/projects",
      name: "projects",
      component: ProjectsIndex,
      meta: { requiresAuth: true, authLayout: true },
    },
    {
      path: "/projectadd",
      name: "projectadd",
      component: ProjectaddIndex,
      meta: { requiresAuth: true, authLayout: true },
    },
    {
      path: "/projectedit",
      name: "projectedit",
      component: ProjecteditIndex,
      meta: { requiresAuth: true, authLayout: true },
    },
    {
      path: "/projectdetail",
      name: "projectdetail",
      component: ProjectdetailIndex,
      meta: { requiresAuth: true, authLayout: true },
    },
    {
      path: "/login",
      name: "login",
      component: LoginIndex,
      meta: { requiresAuth: true, authLayout: true },
    },
    {
      path: "/blank",
      name: "blank",
      component: BlankIndex,
      meta: { requiresAuth: true, authLayout: true },
    },
  ],
});

export default router;
