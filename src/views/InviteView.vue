<template>
  <div class="invite__container">
    <div class="invite__greet">
      <div class="display-1 text-center invite__greet__salutation">
        Queridos
      </div>
      <div class="display-3 text-center invite__greet__names">
        Tio P, Leona y Juanita
      </div>
      <div class="h2 text-center invite__greet__text">
        Con amor y profunda alegría queremos que hagan parte de un día muy
        especial, porque…
      </div>
    </div>
    <div class="invite__top-flowers">
      <img src="../assets/flores1.png" alt="" />
    </div>
  </div>
  <div class="container">
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
        <div class="col-8 col-md-7">
          <div class="invite__flores-1">
            <img class="d-block d-md-none" src="../assets/flores1.png" alt="" />
            <img class="d-none d-md-block" src="../assets/flores2.png" alt="" />
          </div>
        </div>
        <div class="col-md">
          <div class="invite__texto-fecha-img">
            <img src="../assets/texto-fecha.svg" alt="" />
          </div>
          <div class="invite__devider--hor" />
          <div class="row">
            <div class="col-5">
              <div class="invite__texto-1-img">
                <img src="../assets/texto1.svg" alt="" />
              </div>
            </div>
            <div class="col-auto">
              <div class="invite__devider--vert"></div>
            </div>
            <div class="col align-self-center">
              <div class="invite__texto-2-img">
                <img src="../assets/texto2.svg" alt="" />
              </div>
            </div>
          </div>
          <div class="invite__devider--hor" />
          <div class="h2 text-center invite__extra-text">
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
          <div class="invite__devider--hor" />
        </div>
      </div>
    </div>
    <div class="invite__container">
      <div class="row w-100 justify-content-center">
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
    position: relative

  &__greet
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

  &__top-flowers
    position: absolute
    width: 70%
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
</style>
