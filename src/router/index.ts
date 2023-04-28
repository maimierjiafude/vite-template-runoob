import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'homePage',
    component: () => import('@/views/login/LoginView.vue'),
    meta: {
      title: '首页',
    },
  },
]
const router = createRouter({
  history: createWebHashHistory(), // hash 模式
  routes,
})

export default router
