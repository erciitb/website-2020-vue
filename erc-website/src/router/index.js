import { createRouter, createWebHistory } from 'vue-router'
import { routeOptions } from '@/utils/constants'

const routes = routeOptions.map((route) => {
  return {
    ...route,
    component: () =>
      import(
        /* webpackChunkName: "[request]" */ `../pages/${route.componentFolder}/${route.componentName}.vue`
      )
  }
})

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
