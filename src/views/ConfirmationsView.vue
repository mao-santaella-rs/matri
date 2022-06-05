<template>
  <div class="confirmations container mt-5">
    <table class="table align-middle">
      <thead>
        <tr class="table-secondary">
          <th scope="col">Nombres</th>
          <th scope="col">Confirma</th>
          <th scope="col" class="text-center">Asume Hotel</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(guest, guestIdx) in confirmations" :key="guest.id">
          <tr
            v-for="(name, nameIdx) in guest.names"
            :key="guest.id + nameIdx"
            :class="[guestIdx % 2 == 0 ? 'table-light' : 'table-secondary']"
          >
            <td>{{ name.name }}</td>
            <td>{{ displayConfirm(name.confirmed) }}</td>
            <template v-if="nameIdx === 0">
              <td :rowspan="guest.names.length" class="text-center">
                {{ displayConfirm(guest.hotelPay) }}
              </td>
            </template>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity'
import { useConfirmationsStore } from '../stores/confirmations'
const confirmationsStore = useConfirmationsStore()
confirmationsStore.suscribe()
const confirmations = computed(() => confirmationsStore.getAllConfirmations)

function displayConfirm(confirmation: boolean): string {
  return confirmation ? 'Si' : 'No'
}
</script>

<style lang="sass"></style>
