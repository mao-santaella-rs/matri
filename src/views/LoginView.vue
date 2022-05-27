<template>
  <div class="login">
    <div class="login__inner-container">
      <div class="login__icon mb-2">
        <img src="../assets/lock-icon.svg" alt="" />
      </div>
      <input
        type="password"
        name="code"
        id="code"
        class="login__input"
        maxlength="4"
      />
    </div>
  </div>
</template>
<script setup lang="ts"></script>
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
    padding: 5px 10px 0
    width: 120px
    letter-spacing: 11px
</style>
