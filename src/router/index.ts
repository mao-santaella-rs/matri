import { createRouter, createWebHistory } from 'vue-router'
import { useGuestsStore } from '../stores/guests'
import { useAuthStore } from '../stores/auth'

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
      component: () => import('../views/AddGuestsView.vue'),
      beforeEnter: async (to, from, next) => checkGoogleSignIn(next),
    },
    {
      path: '/confirm',
      name: 'confirm',
      component: () => import('../views/ConfirmationsView.vue'),
      beforeEnter: async (to, from, next) => checkGoogleSignIn(next),
    },
  ],
})

async function checkGoogleSignIn(next: Function) {
  const authStore = useAuthStore()
  try {
    await authStore.suscribe()
    if (!authStore.isSignedIn) {
      await authStore.signInWithGoogle()
    }
    if (authStore.isSignedIn) {
      if (authStore.isUserAllowed) {
        next()
      } else {
        authStore.signOut()
        next({ name: 'login' })
      }
    } else {
      next({ name: 'login' })
    }
  } catch (error) {
    console.error(error)
    next({ name: 'login' })
  }
}

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
