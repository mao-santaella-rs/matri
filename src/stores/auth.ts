import type { SuscribedUser } from '../types/auth.store'
import { defineStore } from 'pinia'
import { auth } from './firestore'
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth'

const authProvider = new GoogleAuthProvider()

export const useAuthStore = defineStore({
  id: 'authStore',
  state: () => ({
    user: {},
    suscribeUser: {} as SuscribedUser,
    allowedEmails: ['mao8a87@gmail.com', 'jhanabustillo1107@gmail.com'],
  }),
  getters: {
    isSignedIn: (state) => {
      console.log(state.suscribeUser.email)

      return !!state.suscribeUser.email
    },
    isUserAllowed: (state) => {
      if (!state.suscribeUser.email) return false
      return state.allowedEmails.includes(state.suscribeUser.email)
    },
  },
  actions: {
    async signInWithGoogle() {
      try {
        const response = await signInWithPopup(auth, authProvider)
        this.user = response.user
        return this.allowedEmails.includes(response.user.email as string)
      } catch (error) {
        console.error(error)
      }
    },
    async signOut() {
      try {
        await signOut(auth)
      } catch (error) {
        console.error(error)
      }
    },
    async suscribe() {
      return new Promise((resolve) => {
        onAuthStateChanged(auth, (user) => {
          resolve(!!user)
          // @ts-expect-error: user missing some data
          this.suscribeUser = user || {}
        })
      })
    },
  },
})
