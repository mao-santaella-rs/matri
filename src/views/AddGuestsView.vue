<template>
  <div class="container pt-5">
    <div class="d-flex justify-content-between align-items-center">
      <h1 class="mb-4">Agregar invitados</h1>
      <button @click="logout" class="btn btn-primary">logOut</button>
    </div>

    <div v-if="editId.length" class="alert alert-info text-center" role="alert">
      EDITANDO INVITADO YA GUARDADO
    </div>
    <div class="row align-items-center">
      <div class="mb-3 col">
        <div class="input-group">
          <span class="input-group-text" id="greet"> Saludo </span>
          <input
            v-model="greet"
            type="text"
            class="form-control"
            aria-describedby="greet"
          />
        </div>
      </div>
      <div class="mb-3 col">
        <div class="input-group">
          <span class="input-group-text" id="code"> Codigo </span>
          <input
            v-model="code"
            type="text"
            class="form-control"
            aria-describedby="code"
          />
        </div>
      </div>
      <div class="mb-3 col-auto">
        <div class="form-check form-switch">
          <input
            v-model="notice"
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="notice"
            checked
          />
          <label class="form-check-label" for="notice"> Participación </label>
        </div>
      </div>
    </div>

    <label class="form-label">Nombres</label>
    <div
      v-for="(name, nameIdx) in names"
      :key="'name-' + nameIdx"
      class="row align-items-center"
    >
      <div class="col mb-2">
        <div class="input-group">
          <span class="input-group-text" :id="`name-${nameIdx}`"> Nombre </span>
          <input
            v-model="names[nameIdx].name"
            type="text"
            class="form-control"
            :aria-describedby="`name-${nameIdx}`"
          />
        </div>
      </div>
      <div class="col mb-2">
        <div class="input-group">
          <span class="input-group-text" :id="`name-${nameIdx}`"> Alias </span>
          <input
            v-model="names[nameIdx].alias"
            type="text"
            class="form-control"
            :aria-describedby="`alias-${nameIdx}`"
          />
        </div>
      </div>
      <div
        v-if="names.length > 1"
        class="col-auto mb-2 d-flex align-items-center"
      >
        <button @click="deleteName(nameIdx)" class="list-edit-btn">
          <img src="../assets/bin.png" alt="" />
        </button>
      </div>
    </div>
    <div class="d-flex justify-content-end mb-4">
      <button class="btn btn-secondary btn-sm" @click="addName">
        Agregar otro nombre
      </button>
    </div>

    <div class="d-flex justify-content-end">
      <button class="btn btn-primary btn-lg" @click="onSave">Guardar</button>
    </div>

    <hr />

    <h1 class="mb-4">Invitados</h1>

    <table class="table align-middle">
      <thead>
        <tr class="table-secondary">
          <th scope="col">Nombres</th>
          <th scope="col">Alias</th>
          <th scope="col" class="text-center">Invitación</th>
          <th scope="col" class="text-center">Saludo</th>
          <th scope="col" class="text-center">Código</th>
          <th scope="col" class="text-center">Editar</th>
        </tr>
      </thead>
      <tbody>
        <template
          v-for="(guest, guestIdx) in guests.invitation"
          :key="guest.id"
        >
          <tr
            v-for="(name, nameIdx) in guest.names"
            :key="guest.id + nameIdx"
            :class="[guestIdx % 2 == 0 ? 'table-light' : 'table-secondary']"
          >
            <td>{{ name.name }}</td>
            <td>{{ name.alias }}</td>
            <template v-if="nameIdx === 0">
              <td :rowspan="guest.names.length" class="text-center">
                {{ getName(guest.names) }}
              </td>
              <td :rowspan="guest.names.length" class="text-center">
                {{ guest.greet }}
              </td>
              <td :rowspan="guest.names.length" class="text-center">
                {{ guest.code }}
              </td>
              <td :rowspan="guest.names.length" class="text-center">
                <div class="d-flex align-items-center justify-content-center">
                  <button
                    @click="editGuestById(guest)"
                    class="list-edit-btn me-3"
                  >
                    <img src="../assets/edit.png" alt="" />
                  </button>
                  <button @click="openDeleteModal(guest)" class="list-edit-btn">
                    <img src="../assets/bin.png" alt="" />
                  </button>
                </div>
              </td>
            </template>
          </tr>
        </template>
      </tbody>
    </table>

    <h1 class="mb-4">Participaciones</h1>

    <table class="table align-middle">
      <thead>
        <tr class="table-secondary">
          <th scope="col">Nombres</th>
          <th scope="col">Alias</th>
          <th scope="col" class="text-center">Saludo</th>
          <th scope="col" class="text-center">Código</th>
          <th scope="col" class="text-center">Editar</th>
        </tr>
      </thead>
      <tbody>
        <template
          v-for="(guest, guestIdx) in guests.participation"
          :key="guest.id"
        >
          <tr
            v-for="(name, nameIdx) in guest.names"
            :key="guest.id + nameIdx"
            :class="[guestIdx % 2 == 0 ? 'table-light' : 'table-secondary']"
          >
            <td>{{ name.name }}</td>
            <td>{{ name.alias }}</td>
            <template v-if="nameIdx === 0">
              <td :rowspan="guest.names.length" class="text-center">
                {{ guest.greet }}
              </td>
              <td :rowspan="guest.names.length" class="text-center">
                {{ guest.code }}
              </td>
              <td :rowspan="guest.names.length" class="text-center">
                <div class="d-flex align-items-center justify-content-center">
                  <button
                    @click="editGuestById(guest)"
                    class="list-edit-btn me-3"
                  >
                    <img src="../assets/edit.png" alt="" />
                  </button>
                  <button @click="openDeleteModal(guest)" class="list-edit-btn">
                    <img src="../assets/bin.png" alt="" />
                  </button>
                </div>
              </td>
            </template>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
  <div v-if="deleteId.length" class="add__modal">
    <div class="card shadow-lg">
      <div class="card-header h4 px-4 py-3">
        Estas seguro que quieres eliminar:
      </div>
      <div class="card-body">
        <table class="table align-middle">
          <thead>
            <tr>
              <th scope="col">Nombres</th>
              <th scope="col">Alias</th>
              <th scope="col" class="text-center">Saludo</th>
              <th scope="col" class="text-center">Código</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(name, nameIdx) in names" :key="'name-' + nameIdx">
              <td>{{ name.name }}</td>
              <td>{{ name.alias }}</td>
              <template v-if="nameIdx === 0">
                <td :rowspan="names.length" class="text-center">
                  {{ greet }}
                </td>
                <td :rowspan="names.length" class="text-center">
                  {{ code }}
                </td>
              </template>
            </tr>
          </tbody>
        </table>
        <div class="d-flex justify-content-end align-items-center">
          <a @click.prevent="deleteGuest" href="" class="link-secondary me-4">
            Borrar definitivamente
          </a>
          <button @click="cancelDelete" class="btn btn-primary">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { storeSavedGuest, guestName } from '../types/guests.store'
import { ref, toRaw, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useGuestsStore } from '../stores/guests'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const guestsStore = useGuestsStore()
const authStore = useAuthStore()

guestsStore.suscribe()

// data
const editId = ref('')
const deleteId = ref('')
const greet = ref('Queridos')
const code = ref('')
const names = ref([
  {
    name: '',
    alias: '',
  },
])
const notice = ref(false)

function getName(names: guestName[]) {
  return names.reduce((finalStr, name, idx, arr) => {
    let separator = ''
    if (idx === arr.length - 1 && arr.length > 1) {
      separator = ' y '
    } else if (idx > 0) {
      separator = ', '
    }
    return finalStr + separator + name.alias
  }, '')
}

// Form
function addName() {
  names.value.push({
    name: '',
    alias: '',
  })
}

function resetForm() {
  names.value = [
    {
      name: '',
      alias: '',
    },
  ]
  code.value = ''
  greet.value = 'Queridos'
  notice.value = false
}

function onSave() {
  if (editId.value.length) {
    updateGuest()
  } else {
    addGuest()
  }
}

function deleteName(nameIdx: number) {
  names.value.splice(nameIdx, 1)
}

// manipulate db
function addGuest() {
  guestsStore
    .addGuest({
      code: code.value.length
        ? code.value
        : `${Math.floor(1000 + Math.random() * 9000)}`,
      greet: greet.value,
      names: toRaw(names.value),
      notice: toRaw(notice.value),
    })
    .then(() => {
      resetForm()
    })
}

function updateGuest() {
  guestsStore
    .updateGuest({
      id: toRaw(editId.value),
      code: toRaw(code.value),
      greet: toRaw(greet.value),
      names: toRaw(names.value),
      notice: toRaw(notice.value),
    })
    .then(() => {
      editId.value = ''
      resetForm()
    })
}

function deleteGuest() {
  guestsStore.deleteGuest(toRaw(deleteId.value)).then(() => {
    cancelDelete()
  })
}

function logout() {
  router.push({ name: 'invite' })
  authStore.signOut()
}

// List
const allGuests = computed(() => guestsStore.getAllGuests)

const guests = computed(() => {
  const invitation: storeSavedGuest[] = []
  const participation: storeSavedGuest[] = []
  allGuests.value.forEach((guest) => {
    if (guest.notice) {
      participation.push(guest)
    } else {
      invitation.push(guest)
    }
  })
  return { invitation, participation }
})

function editGuestById(guestObj: storeSavedGuest) {
  editId.value = guestObj.id
  greet.value = guestObj.greet
  code.value = guestObj.code
  names.value = guestObj.names
  notice.value = !!guestObj.notice
}

function openDeleteModal(guestObj: storeSavedGuest) {
  deleteId.value = guestObj.id
  greet.value = guestObj.greet
  code.value = guestObj.code
  names.value = guestObj.names
  notice.value = !!guestObj.notice
}

function cancelDelete() {
  deleteId.value = ''
  resetForm()
}
</script>
<style lang="sass" scoped>
*
  font-family: Arial, Helvetica, sans-serif

.list-edit-btn
  border: none
  background-color: transparent
  padding: 0
  img
    width: 24px

.add__modal
  position: absolute
  inset: 0
  display: flex
  align-items: center
  justify-content: center
  &:before
    content: ''
    display: block
    position: absolute
    inset: 0
    background-color: rgba(255,255,255,.95)
  & > div
    position: relative
  .card
    width: 600px

.form-check >*
  cursor: pointer
</style>
