import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    user: {},
  }),
  getters: {
    getUser: (state) => state.user,
  },
  actions: {
    fetchUser() {
      this.user = { name: 'mao' }
    },
  },
})
