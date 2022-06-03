import type {
  confirmedForDb,
  storeSavedConfirmed,
} from '../types/confirmations.store'
import { defineStore } from 'pinia'

import { db } from './firestore'

import {
  collection,
  onSnapshot,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
  setDoc,
} from 'firebase/firestore'

const confRef = collection(db, 'allConfirmations')

export const useConfirmationsStore = defineStore({
  id: 'confirmationsStore',
  state: () => ({
    allConfirmations: [] as storeSavedConfirmed[],
    confirmation: {} as storeSavedConfirmed,
    // eslint-disable-next-line @typescript-eslint/ban-types
    suscriptionFn: null as Function | null,
  }),
  getters: {
    getAllConfirmations: (state) => state.allConfirmations,
    getConfirmation: (state) => state.confirmation,
  },
  actions: {
    suscribe() {
      this.suscriptionFn = onSnapshot(confRef, (snapshot) => {
        this.allConfirmations = snapshot.docs.map(
          (doc) =>
            ({
              ...doc.data(),
              id: doc.id,
            } as storeSavedConfirmed),
        )
      })
    },
    unSuscribe() {
      if (this.suscriptionFn === null) return
      this.suscriptionFn()
    },
    async fetchConfirmationById(confirmedId: string) {
      try {
        const docRef = doc(db, 'confirmations', confirmedId)
        const response = await getDoc(docRef)
        const data = response.data()
        if (data) {
          this.confirmation = {
            ...response.data(),
            id: response.id,
          } as storeSavedConfirmed
        }
      } catch (error) {
        console.error(error)
      }
    },
    async saveConfirmation(confirmedObj: storeSavedConfirmed) {
      try {
        await setDoc(doc(db, 'confirmations', confirmedObj.id), {
          hotelPay: confirmedObj.hotelPay,
          names: confirmedObj.names,
        })
      } catch (error) {
        console.error(error)
      }
    },
    async updateConfirmation(confirmedObj: storeSavedConfirmed) {
      try {
        const docRef = doc(db, 'confirmations', confirmedObj.id)
        await updateDoc(docRef, {
          hotelPay: confirmedObj.hotelPay,
          names: confirmedObj.names,
        })
      } catch (error) {
        console.error(error)
      }
    },
    async deleteConfirmation(confirmedId: string) {
      try {
        const docRef = doc(db, 'confirmations', confirmedId)
        await deleteDoc(docRef)
      } catch (error) {
        console.error(error)
      }
    },
  },
})
