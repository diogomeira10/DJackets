import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import Product from '@/views/Product.vue'
import SummerView from "@/views/SummerView.vue"
import WinterView from "@/views/WinterView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/log-in',
      name: 'login',
      component: LoginView,
    },
    {
      path:"/:category_slug/:product_slug",
      name: "product-detail",
      component: Product
    },
    {
      path:"/winter",
      name: "winter-products-list",
      component: WinterView
    },
    {
      path:"/summer",
      name: "summer-products-list",
      component: SummerView
    },
  ],
})

export default router