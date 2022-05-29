import type { guestForDb, storeSavedGuest, storeState } from '../types/guests'

import { defineStore } from 'pinia'
import { collection, getDocs, addDoc } from 'firebase/firestore'
import db from './firestore'

const usersRef = collection(db, 'guests')

export const useGuestsStore = defineStore({
  id: 'guestsStore',
  state: (): storeState => ({
    guests: [],
  }),
  getters: {
    getUser: (state) => state.guests,
  },
  actions: {
    async fetchGuests() {
      try {
        const snapshot = await getDocs(usersRef)
        snapshot.docs.forEach((doc) => {
          this.guests.push({ ...doc.data(), id: doc.id } as storeSavedGuest)
        })
      } catch (error) {
        console.error(error)
      }
    },
    async addGuest(guest: guestForDb) {
      addDoc(usersRef, guest)
    },
  },
})
