import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
  {
    path: "/vue2",
    name: "vue2",
    component: () => import("@/views/frontEndFrame/vue2/index.vue")
  },
  {
    path: "/vue3",
    name: "vue3",
    component: () => import("@/views/frontEndFrame/vue3/index.vue")
  },
  {
    path: "/react",
    name: "react",
    component: () => import("@/views/frontEndFrame/react/index.vue")
  },
  {
    path: "/webpack",
    name: "webpack",
    component: () => import("@/views/frontEndBuildTool/webpack/index.vue")
  },
  {
    path: "/vite",
    name: "vite",
    component: () => import("@/views/frontEndBuildTool/vite/index.vue")
  },
  {
    path: "/node",
    name: "node",
    component: () => import("@/views/server/node/index.vue")
  },
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router