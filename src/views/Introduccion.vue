<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.bg-c1
      .col-12
        .px-5
          .row.align-items-center.mb-4
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/intro/img1.svg', style="width:350px").m-auto
            .col-lg-8
              .row
                .col-12.bg-c2.p-4
                  p Estimado aprendiz, a través de este componente formativo conocerá aspectos  relacionados con la educación ambiental, abarcando algunos conceptos que tienen que ver con el desarrollo sostenible, la normatividad que siempre le da la viabilidad a todo proceso y por último, los diferentes enfoques diferenciales existentes en las comunidades.
                  p.mb-0 Así que, ¡Bienvenido!
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
