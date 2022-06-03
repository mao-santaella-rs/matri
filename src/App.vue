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
  &:before
    content: ''
    display: block
    position: fixed
    top: 0
    left: 0
    width: 100vw
    height: 100vh
    background-image: url('./assets/bg.jpg')
    background-repeat: no-repeat
    background-size: cover

  &>div
    position: relative

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

.icon-btn
  border: none
  background-color: transparent
  padding: 0
  img
    width: 24px

  &--sm
    @extend .icon-btn
    img
      width: 18px
</style>
