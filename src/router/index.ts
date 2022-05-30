import { createRouter, createWebHistory } from 'vue-router'
import { useGuestsStore } from '../stores/guests'

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
      beforeEnter: async (to, from, next) => {
        const guestsStore = useGuestsStore()
        const guestKookie = getCookie('guest')
        if (guestsStore.getGuest.id) {
          return next()
        } else if (guestKookie) {
          await guestsStore.fetchGuestById(guestKookie)
          return next()
        } else {
          return next({ name: 'login' })
        }
      },
    },
    {
      path: '/add',
      name: 'add',
      component: () => import('../views/AddGuests.vue'),
    },
  ],
})

function getCookie(cname: string) {
  const cookies = ` ${document.cookie}`.split(';')
  for (const cookieRaw of cookies) {
    const [key, value] = cookieRaw.replace(' ', '').split('=')
    if (key == cname) {
      return value
    }
  }
  return ''
}

export default router
