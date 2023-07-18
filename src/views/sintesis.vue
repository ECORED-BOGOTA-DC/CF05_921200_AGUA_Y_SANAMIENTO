<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 Ya vistos los diferentes temas de este componente formativo es preciso revisar a través del siguiente mapa conceptual la síntesis al respecto:
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Representa la síntesis de los temas vistos en el componente formativo denominado Diagnóstico ambiental, que comprende conceptos, normatividad nacional vigente y el enfoque de comunidades y las características de cada uno de estos subtemas.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/anexo7.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
