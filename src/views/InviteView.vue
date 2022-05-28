<template>
  <div class="container">
    <div class="invite__container">
      <div class="invite__greet">
        <h1 class="display-2 text-center mb-5">
          Hola <br />
          Tio P, Leona y Juanita
        </h1>
        <h2 class="display-5 text-center">
          Con amor y profunda alegría queremos invitarlos a que nos acompañen en
          un día muy especial, porque…
        </h2>
      </div>
    </div>
    <div class="invite__container">
      <div class="row gx-0 justify-content-center">
        <div class="col-10 col-md">
          <div class="invite__flores-1">
            <img src="../assets/flores1.png" alt="" />
          </div>
        </div>
        <div class="col">
          <h2 class="display-4 text-center mb-4 mb-md-5">Nos casamos!</h2>
          <div class="invite__logo">
            <img src="../assets/maoyjhana.svg" alt="" />
          </div>
          <div class="invite__p px-md-5">
            <p class="text-center mb-0 px-md-4">
              Con la ayuda de Dios y de los Ángeles nos conocimos, con su guía
              divina nos realizamos y en nuestro amor su presencia descubrimos,
              por lo que queremos hacerlos partícipes de la unión que a ellos
              consagramos.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="invite__container">
      <div class="row justify-content-center">
        <div class="col">
          <div class="invite__video">
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
        <div class="col-8 col-md">
          <div class="invite__flores-1">
            <img class="d-block d-md-none" src="../assets/flores1.png" alt="" />
            <img class="d-none d-md-block" src="../assets/flores2.png" alt="" />
          </div>
        </div>
        <div class="col-md">
          <div class="invite__texto-fecha-img">
            <img src="../assets/texto-fecha.svg" alt="" />
          </div>
          <div class="invite__devider" />
          <div class="invite__texto-1-img">
            <img src="../assets/texto1.svg" alt="" />
          </div>
          <div class="invite__devider" />
          <div class="invite__texto-2-img">
            <img src="../assets/texto2.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="invite__container">
      <div class="row justify-content-center">
        <div class="col-md-10">
          <div class="invite__map">
            <img src="../assets/mapa.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
.invite
  &__container
    min-height: 100vh
    min-width: 100%
    display: flex
    align-items: center
    justify-content: center
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
      top: 10%
      left: 14%
      width: 72%
      height: 80%
  &__texto-1-img
    padding-left: 15%
    padding-right: 15%
  &__texto-2-img
    padding-left: 10%
    padding-right: 10%

  &__devider
    opacity: 1
    margin: 8% 0
    height: 2px
    background-color: #703138
</style>
