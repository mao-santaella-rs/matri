<template>
  <div
    v-if="showForm"
    class="conf__modal animate__animated animate__fadeIn animate__faster"
  >
    <div
      class="card shadow-lg mb-3 animate__animated animate__zoomIn animate__faster"
      style="width: 100%; max-width: 600px"
    >
      <div class="card-header d-flex justify-content-between p-3 mb-2">
        <div class="h4 mb-0">Confirmar asistencia</div>
        <button @click="$emit('closeForm')" class="icon-btn--sm">
          <img src="../assets/close.png" alt="" />
        </button>
      </div>
      <table class="table mb-1">
        <thead>
          <tr>
            <th scope="col" class="h5 text-center">Asiste</th>
            <th style="width: 85%" scope="col" class="h5">Invitado</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(guest, guestIdx) in names"
            :key="'confirm-name-' + guestIdx"
          >
            <th scope="row">
              <div class="d-flex justify-content-center">
                <div class="form-check form-switch">
                  <input
                    v-model="names[guestIdx].confirmed"
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    :id="'guest-confirm-' + guestIdx"
                  />
                </div>
              </div>
            </th>
            <td style="width: 85%">
              <label :for="'guest-confirm-' + guestIdx" class="">
                {{ guest.name }}
              </label>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="card-body">
        <div class="d-flex align-items-center justify-content-center mb-3">
          <div class="form-check form-switch me-2">
            <input
              v-model="hotelPay"
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="hotelpay"
              :disabled="!confirmedNumber"
            />
            <label class="form-check-label" for="hotelpay">
              {{
                confirmedNumber > 1
                  ? hotelPay
                    ? 'Asumiremos nuestro'
                    : 'No asumiremos nuestro'
                  : hotelPay
                  ? 'Asumiré mi'
                  : 'No asumiré mi'
              }}
              hospedaje en el hotel
            </label>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <button @click="onConfirm" class="btn btn-primary btn-lg">
            Confirmar
            {{
              confirmedNumber
                ? confirmedNumber > 1
                  ? 'nuestra'
                  : 'única'
                : 'ninguna'
            }}
            asistencia
          </button>
        </div>
        <div
          v-if="showThnaks"
          class="d-flex justify-content-center mt-4 mb-1 animate__animated animate__zoomIn animate__faster"
        >
          <div class="h3 mb-0">Gracias por confirmar!</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { ConfirmationName } from '../types/confirmations.store'
import { defineProps, computed, onMounted, ref, watch, defineEmits } from 'vue'
import { useGuestsStore } from '../stores/guests'
import { useConfirmationsStore } from '../stores/confirmations'
const guestsStore = useGuestsStore()
const confirmationsStore = useConfirmationsStore()

const emit = defineEmits(['closeForm'])

const props = defineProps({
  guestsId: {
    type: String,
    default: '',
  },
  showForm: {
    type: Boolean,
    default: false,
  },
})

const guest = computed(() => guestsStore.getGuest)
const confirmedObj = computed(() => confirmationsStore.getConfirmation)

const names = ref<ConfirmationName[]>([])
const hotelPay = ref(true)
const showThnaks = ref(false)

onMounted(async () => {
  if (props.guestsId) {
    await confirmationsStore.fetchConfirmationById(props.guestsId) //('3VGoY9eOQ2F1Hx7Qa7Cj')
  }
  if (confirmedObj.value.id) {
    names.value = confirmedObj.value.names
    hotelPay.value = confirmedObj.value.hotelPay
  } else {
    names.value = guest.value.names.map((guest) => ({
      name: guest.name,
      confirmed: true,
    }))
    hotelPay.value = true
  }
})

watch(
  names,
  (newVal) => {
    if (newVal.filter((guest) => guest.confirmed).length <= 0) {
      hotelPay.value = false
    }
  },
  { deep: true },
)

const confirmedNumber = computed(
  () => names.value.filter((guest) => guest.confirmed).length,
)

function onConfirm() {
  showThnaks.value = true
  confirmationsStore.saveConfirmation({
    id: guest.value.id,
    hotelPay: hotelPay.value,
    names: names.value,
  })
  setTimeout(() => {
    showThnaks.value = false
    emit('closeForm')
  }, 2000)
}
</script>
<style lang="sass" scoped>
*
  font-family: Arial, Helvetica, sans-serif
.conf__modal
  position: fixed
  inset: 0
  display: flex
  justify-content: center
  align-items: center
  background-color: rgba(255,255,255,.90)

label
  cursor: pointer

// .form-check-label[disabled]
//   cursor: default
//   opacity: .5
</style>
