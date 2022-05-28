<template>
  <div class="main-container">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Sanskrit&display=swap')

*
  font-family: 'Tiro Devanagari Sanskrit', serif

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
</style>
