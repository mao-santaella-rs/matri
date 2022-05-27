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
  ],
})

export default router
