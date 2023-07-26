<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Conceptos de desarrollo sostenible y educación ambiental
    .row.bg-c4
      .col-12
        .px-5
          .row.justify-content-center.mb-5(data-aos="fade-right")
            .col-lg-10
              .bloque-texto-a.color-primario.p-4
                .row.m-0.align-items-center.justify-content-between
                  .col-lg-4.mb-4.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema2/img1.svg', style="width:350px").m-auto
                  .col-lg-8
                    .bloque-texto-a__texto.p-4
                      p Estimado aprendiz, para iniciar el recorrido por la educación ambiental, le invitamos a ver el siguiente video, el cual le ayuda a comprender terminología y conceptos de suma importancia para las acciones realizadas como promotor ambiental:
          figure(data-aos="fade-left")
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/_oj2vI5DwFE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
