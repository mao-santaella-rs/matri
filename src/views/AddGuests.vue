<template>
  <div class="container pt-5">
    <h1 class="mb-5">Agregar invitados</h1>
    <div class="row">
      <div class="col">
        <div class="input-group mb-3">
          <span class="input-group-text" id="greet"> Saludo </span>
          <input
            v-model="greet"
            type="text"
            class="form-control"
            aria-describedby="greet"
          />
        </div>
      </div>
      <div class="col">
        <div class="input-group mb-3">
          <span class="input-group-text" id="code"> Codigo </span>
          <input
            v-model="code"
            type="text"
            class="form-control"
            aria-describedby="code"
          />
        </div>
      </div>
    </div>

    <label class="form-label">Nombres</label>
    <div v-for="(name, nameIdx) in names" :key="'name-' + nameIdx" class="row">
      <div class="col">
        <div class="input-group mb-3">
          <span class="input-group-text" :id="`name-${nameIdx}`"> Nombre </span>
          <input
            v-model="names[nameIdx].name"
            type="text"
            class="form-control"
            :aria-describedby="`name-${nameIdx}`"
          />
        </div>
      </div>
      <div class="col">
        <div class="input-group mb-3">
          <span class="input-group-text" :id="`name-${nameIdx}`"> Alias </span>
          <input
            v-model="names[nameIdx].alias"
            type="text"
            class="form-control"
            :aria-describedby="`alias-${nameIdx}`"
          />
        </div>
      </div>
    </div>
    <button class="btn btn-primary" @click="addName">
      Agregar otro nombre
    </button>

    <div class="row mt-5">
      <div class="col-12 mb-4">
        <button class="btn btn-primary" @click="addGuest">Guardar</button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, toRaw } from 'vue'
// store
import { useGuestsStore } from '../stores/guests'

const guestsStore = useGuestsStore()

guestsStore.fetchGuests()

// Form
let greet = ref('Queridos')
let code = ref('')
let names = ref([
  {
    name: 'Paulo Javier Ochoa',
    alias: 'Tio P',
  },
])

function addName() {
  names.value.push({
    name: '',
    alias: '',
  })
}

function addGuest() {
  guestsStore.addGuest({
    code: code.value,
    greet: greet.value,
    names: toRaw(names.value),
  })
}
</script>
<style lang="sass" scoped>
.container
  *
    font-family: Arial, Helvetica, sans-serif
</style>
