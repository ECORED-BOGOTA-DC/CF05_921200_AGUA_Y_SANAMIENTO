<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Normatividad nacional en educación ambiental
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema3/img1.png', style="width:450px", alt="Imagen decorativa").m-auto
      .col-lg-8(data-aos="fade-left")
        p Entender las bases normativas que rigen la educación ambiental, no solamente permite tener fundamentos para hacer valer los derechos, también sirve para fortalecer y garantizar los procesos de participación y de educación a las comunidades, con miras a promover un ambiente sano y el desarrollo sostenible en las mismas.
        .cajon.color-acento-botones.p-4
          p.mb-0 Por lo anterior, en este apartado se realizará un recorrido por algunas de las principales normas y eventos que soportan la política nacional de educación ambiental y que han brindado un punto de referencia para la normativa ambiental de nuestro país:
    .row.align-items-center.mb-4
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        LineaTiempoD.color-primario
          .row(numero="1" titulo="1972 - Conferencia de Estocolmo")
            .col-12
              p La Conferencia de las Naciones Unidas sobre el Medio Humano se realizó en Estocolmo del 5 al 16 de junio de 1972, contando con la participación de 113 países, 19 organismos internacionales y más de 400 ONG, dando inicio a la conciencia política y pública de los problemas ambientales (Hollmann, 2017, p. 8).
              p Como resultado, se emitió un total de 26 principios y 109 recomendaciones, así como la necesidad de abordar y controlar temas como la caza comercial de ballenas, el monitoreo del consumo energético y la descarga intencionada de petróleo en el mar.
          .row(numero="2" titulo="1974 - Decreto 2811 de 1974")
            .col-12
              p Dado en Bogotá el 28 de diciembre de 1974 por el Presidente de la República, tiene por objeto dictar el Código Nacional de Recursos Naturales Renovables y de Protección al Medio Ambiente. 
              p Involucra el componente ambiental en la educación mediante el siguiente artículo:
              .tarjeta.color-primario.p-3
                .row.justify-content-around.align-items-center
                  .col-3.col-sm-auto
                    img(src="@/assets/curso/tema3/img3.svg")
                  .col
                    .row.justify-content-between.align-items-center
                      .col.mb-3.mb-sm-0
                        h3.text-white.mb-1 Artículo de educación ambiental
                        p.text-small.text-white Con el propósito de conocer el artículo 14 se invita al aprendiz a consultar el siguiente documento:
                      .col-sm-auto
                        a.boton.color-primario.texto-blanco(:href="obtenerLink('/downloads/anexo5.pdf')" target="_blank")
                          span(style="color: #000 !important") Descargar
                          i.fas.fa-file-download(style="color: #000 !important")
          .row(numero="3" titulo="1975 - Seminario de Belgrado")
            .col-12
              p Realizado entre el 13 y el 22 de octubre de 1975, se centró en abordar temas relacionados con la educación ambiental, indicando que esta permite a la población adquirir una conciencia y mayor interés en el medio ambiente. Como resultado, se estipuló en el documento conocido como la Carta de Belgrado, un marco y unas instrucciones o normas para la educación ambiental en el mundo (Botero, 2013, p. 126). Así mismo, indica que la carta dejó claro que los programas de educación ambiental realizados en los diferentes países del mundo deben ayudar en diferentes aspectos a las personas.
          .row(numero="4" titulo="1982 - Conferencia de Nairobi")
            .col-12
              p Desarrollada del 10 al 18 de mayo de 1982. Conmemoraba el décimo aniversario de la conferencia de Estocolmo y realizaba un seguimiento a las prácticas adelantadas a partir de la formulación de los principios y plan de acción fijados en la primera conferencia. En términos generales, los resultados obtenidos indican la necesidad de aumentar los esfuerzos relacionados con la conservación del medio ambiente a una escala mundial.
          .row(numero="5" titulo="1991 - Constitución Política de Colombia")
            .col-12
              p Como punto de partida se tomará la Constitución Política, promulgada en julio de 1991, la cual propende porque en la Nación se involucre y asegure a sus integrantes, óptimas condiciones de desarrollo en un entorno político, económico y social justo.
              p Conformada por trece títulos, que establecen el marco de referencia para la organización y consolidación de temas como principios, derechos y deberes, participación democrática, ramas del Estado, entre otros. Incluye también artículos de gran importancia dentro del contexto de la educación ambiental:
              .tarjeta.color-primario.p-3
                .row.justify-content-around.align-items-center
                  .col-3.col-sm-auto
                    img(src="@/assets/curso/tema3/img3.svg")
                  .col
                    .row.justify-content-between.align-items-center
                      .col.mb-3.mb-sm-0
                        h3.text-white.mb-1 Artículo de educación ambiental
                        p.text-small.text-white Con el propósito de conocer el artículo de educación ambiental se invita al aprendiz a consultar el siguiente documento:
                      .col-sm-auto
                        a.boton.color-primario.texto-blanco(:href="obtenerLink('/downloads/anexo1.pdf')" target="_blank")
                          span(style="color: #000 !important") Descargar
                          i.fas.fa-file-download(style="color: #000 !important")
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img1.svg', style="width:450px", alt="Imagen decorativa").m-auto
    .row.align-items-center.mb-5
      .col-lg-5.order-2.order-lg-1(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema3/img2.svg', style="width:450px", alt="Imagen decorativa").m-auto
      .col-lg-7.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
        LineaTiempoD.color-primario
          .row(numero="6" titulo="1992 - Cumbre de la Tierra Río")
            .col-12
              p Celebrada en Río de Janeiro en 1992, permitió confirmar el crecimiento de la problemática ambiental, así como el aumento de la brecha económica entre países ricos y pobres. A partir de esta se plantea el Programa 21, que involucra cuatro secciones relacionadas con los siguientes temas:
              ul.lista-ul.mb-3
                li 
                  i.lista-ul__vineta
                  | Dimensiones sociales y económicas.
                li 
                  i.lista-ul__vineta
                  | Conservación y gestión de los recursos para el desarrollo.
                li 
                  i.lista-ul__vineta
                  | Fortalecimiento del papel de los grupos principales.
                li 
                  i.lista-ul__vineta
                  | Medios de ejecución.
              .cajon.color-secundario.p-4
                p.mb-0 También empieza a ganar relevancia el término Desarrollo Sostenible.
          .row(numero="7" titulo="1993 - Ley 99 de 1993")
            .col-12
              p Expedida por el Congreso de la República de Colombia en diciembre de 1993, reordena las responsabilidades en materia de gestión, control y vigilancia ambiental del sector público, a partir de la creación del Ministerio del Medio Ambiente, y organiza el Sistema Nacional Ambiental, SINA, permitiendo así una articulación con los contenidos indicados en la Constitución.
              p El SINA se conforma por:
              ul.lista-ul.mb-3
                li 
                  i.lista-ul__vineta
                  | Ministerio de Medio Ambiente.
                li 
                  i.lista-ul__vineta
                  | Corporaciones Autónomas Regionales.
                li 
                  i.lista-ul__vineta
                  | Entidades territoriales.
                li 
                  i.lista-ul__vineta
                  | Institutos de investigación adscritos y vinculados al Ministerio como:
                  ul.lista-ul.mb-3
                    li 
                      i.lista-ul__vineta
                      | IDEAM.
                    li 
                      i.lista-ul__vineta
                      | SINCHI.
                    li 
                      i.lista-ul__vineta
                      | Alexander Von Humboldt.
                    li 
                      i.lista-ul__vineta
                      | Invemar.
                    li 
                      i.lista-ul__vineta
                      | IIAP.
          .row(numero="8" titulo="1994 - Ley 134 de 1994")
            .col-12
              p Publicada en el Diario Oficial en mayo de 1994, esta ley define los mecanismos de participación ciudadana y establece los protocolos para el trámite de estos. Se incluyen mecanismos de participación definidos por la ley:
              .tarjeta.color-primario.p-3
                .row.justify-content-around.align-items-center
                  .col-3.col-sm-auto
                    img(src="@/assets/curso/tema3/img3.svg")
                  .col
                    .row.justify-content-between.align-items-center
                      .col.mb-3.mb-sm-0
                        h3.text-white.mb-1 Mecanismos de participación ciudadana
                        p.text-small.text-white Con el propósito de conocer esta ley se invita al aprendiz a consultar el siguiente documento:
                      .col-sm-auto
                        a.boton.color-primario.texto-blanco(:href="obtenerLink('/downloads/anexo2.pdf')" target="_blank")
                          span(style="color: #000 !important") Descargar
                          i.fas.fa-file-download(style="color: #000 !important")
          .row(numero="9" titulo="2002 - Política Nacional de Educación Ambiental")
            .col-12
              p En concordancia con sus objetivos, la política establece principios como ejes orientadores para la educación ambiental en Colombia:
              .tarjeta.color-primario.p-3
                .row.justify-content-around.align-items-center
                  .col-3.col-sm-auto
                    img(src="@/assets/curso/tema3/img3.svg")
                  .col
                    .row.justify-content-between.align-items-center
                      .col.mb-3.mb-sm-0
                        h3.text-white.mb-1 Política Nacional de Educación Ambiental
                        p.text-small.text-white Con el propósito de conocer estos principios se invita al aprendiz a consultar el siguiente documento:
                      .col-sm-auto
                        a.boton.color-primario.texto-blanco(:href="obtenerLink('/downloads/anexo3.pdf')" target="_blank")
                          span(style="color: #000 !important") Descargar
                          i.fas.fa-file-download(style="color: #000 !important")
          .row(numero="10" titulo="2012 - Ley 1549 del 2012")
            .col-12
              p Esta ley, promulgada en julio de 2012, tiene como objeto fortalecer la institucionalización de la Política Nacional de Educación Ambiental y su incorporación en el desarrollo territorial. Dentro de su contenido es conveniente resaltar algunos artículos, sin que esto implique restar importancia a los otros:
              .tarjeta.color-primario.p-3
                .row.justify-content-around.align-items-center
                  .col-3.col-sm-auto
                    img(src="@/assets/curso/tema3/img3.svg")
                  .col
                    .row.justify-content-between.align-items-center
                      .col.mb-3.mb-sm-0
                        h3.text-white.mb-1 Ley 1549 del 2012
                        p.text-small.text-white Con el propósito de conocer los artículos relacionados con el desarrollo territorial, se invita al aprendiz a consultar el siguiente documento:
                      .col-sm-auto
                        a.boton.color-primario.texto-blanco(:href="obtenerLink('/downloads/anexo4.pdf')" target="_blank")
                          span(style="color: #000 !important") Descargar
                          i.fas.fa-file-download(style="color: #000 !important")
    .tarjeta.color-secundario.p-3.shadow(data-aos="fade-down")
      .row.justify-content-around.align-items-center
        .col-4.col-md-2.col-lg-1.mb-4.mb-lg-0
          img(src="@/assets/curso/tema3/img4.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Programa 21 (Agenda 21)
              p.text-small Para complementar sus conocimientos en el proceso normativo, puede consultar el contenido del Programa 21 (Agenda 21), visitando la página de las Naciones Unidas.
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://www.un.org/spanish/esa/sustdev/agenda21/index.htm" target="_blank")
                span(style="color: #FFF !important") Ir a la página
                i.fas.fa-link(style="color: #FFF !important")

</template>

<script>
export default {
  name: 'Tema3',
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
