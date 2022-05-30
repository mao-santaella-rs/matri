<template>
  <div class="main-container">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Abhaya+Libre&display=swap')

*
  font-family: 'Abhaya Libre', serif

h1, h2, h3
  color: #703138

.main-container
  min-height: 100vh
  background-image: url('./assets/bg.jpg')
  background-repeat: no-repeat
  background-attachment: fixed
  background-size: cover

img
  display: block
  width: 100%

.button
  background-color: #703138
  border: none
  color: white
  padding: 10px 15px
  font-size: 24px
  text-decoration: none
  &:hover
    color: white
</style>
