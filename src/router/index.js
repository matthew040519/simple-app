import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Category from '../views/category.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/add-category',
      name: 'addcategory',
      component: () => import('../views/addcategory.vue')
    },
    {
      path: '/category',
      name: 'Category',
      component: () => import('../views/category.vue')
    },
    {
      path: '/ticket',
      name: 'Ticket',
      component: () => import('../views/ticket.vue')
    },
    {
      path: '/add-ticket',
      name: 'addticket',
      component: () => import('../views/addticket.vue')
    },
  ]
})

export default router
