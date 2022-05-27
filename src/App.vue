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


.main-container
  min-height: 100vh
  background-image: url('./assets/bg.jpg')
  background-repeat: no-repeat
  background-attachment: fixed
  background-size: cover
</style>
