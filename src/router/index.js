import { createRouter, createWebHistory } from "vue-router";

import DashboardIndex from "@/views/dashboard/Index.vue";
import SettingIndex from "@/views/settings/Index.vue";
import EmployeeIndex from "@/views/employees/Index.vue";

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
  ],
});

export default router;
