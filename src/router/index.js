import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
  // 官方文档
  {
    path: "/doc",
    name: "doc",
    component: () => import("@/components/loadDoc/loadDoc.vue")
  },
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router