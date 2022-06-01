import type { guestForDb, storeSavedGuest } from '../types/guests.store'

import { defineStore } from 'pinia'
import {
  collection,
  getDocs,
  addDoc,
  onSnapshot,
  query,
  where,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore'
import { db } from './firestore'

const usersRef = collection(db, 'guests')

export const useGuestsStore = defineStore({
  id: 'guestsStore',
  state: () => ({
    guests: [] as storeSavedGuest[],
    guest: {} as storeSavedGuest,
  }),
  getters: {
    getAllGuests: (state) => state.guests,
    getGuest: (state) => state.guest,
  },
  actions: {
    async fetchGuests() {
      try {
        const snapshot = await getDocs(usersRef)
        this.guests = snapshot.docs.map(
          (doc) => ({ ...doc.data(), id: doc.id } as storeSavedGuest),
        )
      } catch (error) {
        console.error(error)
      }
    },
    suscribeToGuests() {
      onSnapshot(usersRef, (snapshot) => {
        this.guests = snapshot.docs.map(
          (doc) => ({ ...doc.data(), id: doc.id } as storeSavedGuest),
        )
      })
    },
    async fetchGuestByCode(code: string) {
      const fetchQuery = query(usersRef, where('code', '==', code))
      try {
        const snapshot = await getDocs(fetchQuery)
        const response = snapshot.docs[0]
        if (response) {
          const storeGuest = {
            ...response.data(),
            id: response.id,
          } as storeSavedGuest
          this.guest = storeGuest
          return storeGuest
        } else {
          return response
        }
      } catch (error) {
        console.error(error)
      }
    },
    async fetchGuestById(guestId: string) {
      try {
        const docRef = doc(db, 'guests', guestId)
        const response = await getDoc(docRef)
        this.guest = { ...response.data(), id: response.id } as storeSavedGuest
      } catch (error) {
        console.error(error)
      }
    },
    async addGuest(guest: guestForDb) {
      try {
        await addDoc(usersRef, guest)
      } catch (error) {
        console.error(error)
      }
    },
    async updateGuest(guestObj: storeSavedGuest) {
      try {
        const docRef = doc(db, 'guests', guestObj.id)
        await updateDoc(docRef, {
          code: guestObj.code,
          greet: guestObj.greet,
          names: guestObj.names,
        })
      } catch (error) {
        console.error(error)
      }
    },
    async deleteGuest(guestId: string) {
      try {
        const docRef = doc(db, 'guests', guestId)
        await deleteDoc(docRef)
      } catch (error) {
        console.error(error)
      }
    },
  },
})
