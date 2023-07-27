<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Reflexión inicial
    .row.bg-c1
      .col-12
        .px-5
          .row.align-items-center.mb-4
            .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema1/img1.svg', style="width:350px", alt="Imagen decorativa").m-auto
            .col-lg-8(data-aos="fade-left")
              p.mb-4 La relación existente entre el desarrollo económico y social con el ambiental se ha hecho más evidente durante los últimos años, en parte porque se ha modificado la concepción de recursos naturales como un bien para el desarrollo del ser humano, al constatarse los cambios irreparables que se han producido en estos recursos, así como su inminente deterioro y pérdida.
              h4 Interpretación del territorio
              p.mb-0 Como proceso reflexivo realice la observación directa en su zona de residencia o comunidad sobre las condiciones actuales del entorno natural y dé respuesta a los siguientes interrogantes:
          .row.justify-content-center.mb-4(data-aos="fade-down")
            .col-10.col-md-8.col-lg.ps-0.pe-4.py-4.bg-c3.m-3.shadow-sm
              .row
                .col-auto
                  figure.fig-p1
                    img(src='@/assets/curso/tema1/img2.svg', style="width:40px").m-auto
                .col
                  p.mb-0 ¿Cómo es la relación de su comunidad con el ambiente?
            .col-10.col-md-8.col-lg.ps-0.pe-4.py-4.bg-c3.m-3.shadow-sm
              .row
                .col-auto
                  figure.fig-p1
                    img(src='@/assets/curso/tema1/img3.svg', style="width:40px").m-auto
                .col
                  p.mb-0 ¿Es posible identificar diferentes tipos de comunidades en su entorno?
            .col-10.col-md-8.col-lg.ps-0.pe-4.py-4.bg-c3.m-3.shadow-sm
              .row
                .col-auto
                  figure.fig-p1
                    img(src='@/assets/curso/tema1/img4.svg', style="width:40px").m-auto
                .col
                  p.mb-0 ¿Conoce o ha escuchado de actividades de educación ambiental desarrolladas en la zona en la que reside o lugares que frecuenta?
            .col-10.col-md-8.col-lg.ps-0.pe-4.py-4.bg-c3.m-3.shadow-sm
              .row
                .col-auto
                  figure.fig-p1
                    img(src='@/assets/curso/tema1/img5.svg', style="width:40px").m-auto
                .col
                  p.mb-0 Aplicando el concepto de desarrollo sostenible, ¿cuáles elementos ambientales de su comunidad le gustaría que pudiera disfrutar las próximas generaciones?
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
