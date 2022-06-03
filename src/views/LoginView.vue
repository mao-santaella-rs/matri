<template>
  <div class="login">
    <div class="login__inner-container">
      <div class="login__icon mb-2">
        <img src="../assets/lock-icon.svg" alt="" />
      </div>
      <input
        v-model="code"
        ref="imputRef"
        type="text"
        name="code"
        id="code"
        class="login__input"
        :style="{ 'padding-left': 4 * code.length + 'px' }"
        maxlength="4"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useGuestsStore } from '../stores/guests'

const router = useRouter()
const guestsStore = useGuestsStore()
const code = ref('')
const imputRef = ref<HTMLInputElement | null>(null)
const errorClasses = [
  'animate__animated',
  'animate__tada',
  'login__input--error',
]
watch(code, async (newVal) => {
  if (newVal.length === 1) {
    imputRef.value?.classList.remove(...errorClasses)
  } else if (newVal.length === 4) {
    const guest = await guestsStore.fetchGuestByCode(newVal.toString())
    if (guest) {
      document.cookie = `guest=${guest.id}; SameSite=Strict; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`
      router.push({ name: 'invite' })
    } else {
      code.value = ''
      imputRef.value?.classList.add(...errorClasses)
    }
  }
})
</script>
<style lang="sass">
.login
  min-height: 100vh
  display: flex
  align-items: center
  justify-content: center
  &__inner-container
    display: flex
    flex-direction: column
    align-items: center
    color: red
  &__icon
    width: 24px

  &__input
    border: 2px solid #703138
    font-size: 30px
    padding: 5px 0 5px
    width: 150px
    letter-spacing: 11px
    text-align: center
    &--error
      border-color: red
      border-width: 3px
</style>
