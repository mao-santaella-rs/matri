import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/:pathMatch(.*)*', redirect: { name: 'login' } },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/invite',
      name: 'invite',
      component: () => import('../views/InviteView.vue'),
    },
    {
      path: '/add',
      name: 'add',
      component: () => import('../views/AddGuests.vue'),
    },
  ],
})

export default router
