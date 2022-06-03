<template>
  <div class="invite__container">
    <div class="invite__top-flowers">
      <img src="../assets/flores1.png" alt="" />
    </div>
    <div class="invite__greet">
      <div class="display-1 text-center invite__greet__salutation animate">
        {{ guest.greet }}
      </div>
      <div
        class="display-3 text-center invite__greet__names animate animate__delay-1s"
      >
        {{ guestNames }}
      </div>
      <div class="h2 text-center invite__greet__text animate animate__delay-2s">
        Con amor y profunda alegría queremos que
        {{ guest.names.length > 1 ? 'hagan' : 'hagas' }} parte de un día muy
        especial, porque…
      </div>
    </div>
  </div>

  <div class="container">
    <div class="invite__container">
      <div class="row gx-0 justify-content-center">
        <div class="col-10 col-md">
          <div class="invite__flores-1 animate left">
            <img src="../assets/flores1.png" alt="" />
          </div>
        </div>
        <div class="col">
          <h2 class="display-4 text-center mb-4 mb-md-5 animate">
            Nos casamos!
          </h2>
          <div class="invite__logo animate animate__delay-1s">
            <img src="../assets/maoyjhana.svg" alt="" />
          </div>
          <div class="invite__p px-md-5 animate animate__delay-2s">
            <p class="text-center mb-0 px-md-4">
              Con la ayuda de Dios y de los Ángeles nos conocimos, con su guía
              divina nos realizamos y en nuestro amor su presencia descubrimos,
              por lo que queremos
              {{
                guest.names.length > 1
                  ? 'hacerlos partícipes'
                  : 'hacerte partícipe'
              }}
              de la unión que a ellos consagramos.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="invite__container">
      <div class="row justify-content-center">
        <div class="col-md-10">
          <div class="invite__video animate">
            <iframe
              src="https://www.youtube.com/embed/g62fEahdm9k"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
            <img src="../assets/frame.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="invite__container">
      <div class="row align-items-center justify-content-center gx-0">
        <div class="col-8 col-md-7">
          <div class="invite__flores-1 animate left">
            <img class="d-block d-md-none" src="../assets/flores1.png" alt="" />
            <img class="d-none d-md-block" src="../assets/flores2.png" alt="" />
          </div>
        </div>
        <div class="col-md">
          <div class="invite__texto-fecha-img animate top">
            <img src="../assets/texto-fecha.svg" alt="" />
          </div>
          <div class="invite__devider--hor animate top" />
          <div class="row">
            <div class="col-5">
              <div class="invite__texto-1-img animate left animate__delay-1s">
                <img src="../assets/texto1.svg" alt="" />
              </div>
            </div>
            <div class="col-auto">
              <div class="invite__devider--vert animate animate__delay-1s" />
            </div>
            <div class="col align-self-center animate right animate__delay-1s">
              <div class="invite__texto-2-img">
                <img src="../assets/texto2.svg" alt="" />
              </div>
            </div>
          </div>
          <div class="invite__devider--hor animate animate__delay-2s" />
          <div
            class="h2 text-center invite__extra-text animate animate__delay-2s"
          >
            Ceremonia espiritual y<br />
            recepción a continuación.
            <br />
            <br />
            Ellas: bonitas como siempre
            <br />
            Ellos: con su mejor pinta.
            <br />
            (boda campestre)
          </div>
          <div class="invite__devider--hor animate animate__delay-2s" />
          <div class="d-flex justify-content-center animate animate__delay-3s">
            <button @click="showConfirmForm = true" class="button">
              Confirmar aquí
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="invite__container">
      <div class="row w-100 justify-content-center">
        <div class="col-md-10 mb-4">
          <div class="invite__map animate">
            <img src="../assets/mapa.svg" alt="" />
          </div>
        </div>
        <div class="col-12">
          <div class="d-flex justify-content-center animate animate__delay-3s">
            <a
              href="https://g.page/HotelBuenosAiresBarichara?share"
              target="_blank"
              class="button"
            >
              Abrir en google maps
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ConfirmationComp
    :guestsId="guest.id"
    :show-form="showConfirmForm"
    @close-form="showConfirmForm = false"
  />
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, computed, ref } from 'vue'
import { useGuestsStore } from '../stores/guests'
import ConfirmationComp from '../components/ConfirmationComp.vue'
// displayed data
const guestsStore = useGuestsStore()

const guest = computed(() => guestsStore.getGuest)
const guestNames = computed(() => {
  if (!guest.value.id) return ''
  return guest.value.names.reduce((finalStr, name, idx, arr) => {
    let separator = ''
    if (idx === arr.length - 1 && arr.length > 1) {
      separator = ' y '
    } else if (idx > 0) {
      separator = ', '
    }
    return finalStr + separator + name.alias
  }, '')
})

const showConfirmForm = ref(false)

// animations
const animationQuery = '.animate'
const intersectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const animateClasses = ['animate__animated']
      const classList = entry.target.classList
      if (classList.contains('left')) {
        animateClasses.push('animate__fadeInLeft')
      } else if (classList.contains('right')) {
        animateClasses.push('animate__fadeInRight')
      } else if (classList.contains('top')) {
        animateClasses.push('animate__fadeInDown')
      } else {
        animateClasses.push('animate__fadeInUp')
      }
      classList.add(...animateClasses)
    }
  })
})
onMounted(() => {
  const animateElements = document.querySelectorAll(animationQuery)
  animateElements.forEach((elm) => {
    intersectionObserver.observe(elm)
  })
})
onBeforeUnmount(() => {
  const animateElements = document.querySelectorAll(animationQuery)
  animateElements.forEach((elm) => {
    intersectionObserver.unobserve(elm)
  })
})
</script>

<style lang="sass">
.invite
  &__container
    min-height: 100vh
    min-width: 100%
    display: flex
    align-items: center
    justify-content: center
    position: relative
    padding: 50px 0

  &__greet
    position: relative
    max-width: 600px
    &__salutation
      font-size: 100px
      color: #764443
      margin-bottom: 10px
    &__names
      font-size: 60px
      color: #7b6b59
      margin-bottom: 25px
    &__text
      font-size: 34px
      color: #764443
      padding: 0 5%

    @media (max-width: 768px)
      .invite__greet
        &__salutation
          font-size: 80px
        &__names
          font-size: 50px
        &__text
          font-size: 25px


  &__top-flowers
    position: absolute
    width: 60%
    top: 0
    left: 0
    transform: translate(-36%, -34%) rotate(130deg)

  &__p
    p
      font-size: 25px
      color: #703138
  &__video
    position: relative
    width: 100%
    // padding-top: 177.7777778%
    img
      position: relative
      pointer-events: none
      box-shadow: 4.3px 8.6px 8.6px hsl(0deg 0% 0% / 0.37)
    iframe
      position: absolute
      top: 9%
      left: 14%
      width: 72%
      height: 81%

  &__extra-text
    color: #7b6b59

  &__devider
    &--hor, &--vert
      opacity: 1
      background-color: #703138
    &--hor
      height: 2px
      margin: 8% 0
    &--vert
      width: 2px
      height: 100%

.animate
  opacity: 0
</style>
