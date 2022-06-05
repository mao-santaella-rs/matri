import type { ConfirmationStore } from '../types/confirmations.store'
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
const collectionName = 'confirmations'
const confRef = collection(db, collectionName)

export const useConfirmationsStore = defineStore({
  id: 'confirmationsStore',
  state: () => ({
    allConfirmations: [] as ConfirmationStore[],
    confirmation: {} as ConfirmationStore,
    suscriptionFn: null as Function | null,
  }),
  getters: {
    getAllConfirmations: (state) => state.allConfirmations,
    getConfirmation: (state) => state.confirmation,
  },
  actions: {
    suscribe() {
      if (this.suscriptionFn) return

      this.suscriptionFn = onSnapshot(confRef, (snapshot) => {
        this.allConfirmations = snapshot.docs.map(
          (doc) =>
            ({
              ...doc.data(),
              id: doc.id,
            } as ConfirmationStore),
        )
      })
    },
    unSuscribe() {
      if (this.suscriptionFn === null) return
      this.suscriptionFn()
    },
    async fetchConfirmationById(confirmedId: string) {
      try {
        const docRef = doc(db, collectionName, confirmedId)
        const response = await getDoc(docRef)
        const data = response.data()
        if (data) {
          this.confirmation = {
            ...response.data(),
            id: response.id,
          } as ConfirmationStore
        }
      } catch (error) {
        console.error(error)
      }
    },
    async saveConfirmation(confirmedObj: ConfirmationStore) {
      try {
        await setDoc(doc(db, collectionName, confirmedObj.id), {
          hotelPay: confirmedObj.hotelPay,
          names: confirmedObj.names,
        })
      } catch (error) {
        console.error(error)
      }
    },
    async updateConfirmation(confirmedObj: ConfirmationStore) {
      try {
        const docRef = doc(db, collectionName, confirmedObj.id)
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
        const docRef = doc(db, collectionName, confirmedId)
        await deleteDoc(docRef)
      } catch (error) {
        console.error(error)
      }
    },
  },
})
