<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Enfoque diferencial de las comunidades
    p(data-aos="fade-right") Vamos a hablar de un aspecto que es muy importante para realizar los diagnósticos ambientales en las comunidades: el enfoque diferencial y por ello, es importante definir algunos interrogantes:
    p.mb-5(data-aos="fade-right") ¿Qué es el enfoque diferencial?
    .row.mb-4(data-aos="fade-down")
      .col-auto.bg-c5
        h3.text-white.mb-0.px-4.py-3 ¿Qué es el enfoque diferencial?
    figure.mb-5(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/qfUwkGkNtXs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.mb-4(data-aos="fade-right")
      .col-auto.bg-c5
        h3.text-white.mb-0.px-4.py-3 ¿Cuál es el papel del Ministerio de Ambiente y Desarrollo Sostenible?
    .row.align-items-center.mb-4
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p El Ministerio de Ambiente crea primero la oficina de educación y participación, la cual tiene la responsabilidad de aportar los elementos técnicos y conceptuales para la formulación, divulgación, ejecución y seguimiento de las políticas de educación ambiental y de participación ciudadana, así como promover y orientar el diseño y la evaluación de programas nacionales, regionales y sectoriales de educación ambiental en el sector productivo, instituciones del Estado, organizaciones de la sociedad civil y medios de comunicación; apoyar procesos de educación y participación en materia de desarrollo territorial, vivienda, agua potable y saneamiento básico y ambiental; y orientar procesos de organización social para la concertación, definición y puesta en marcha de agendas regionales y locales para el desarrollo sostenible (MAVDT, 2006, p,15.).
        .cajon.color-primario.p-4
          p.mb-0 Posteriormente, se crea la Red Colombiana de Formación Ambiental, que es un programa que cuenta con el apoyo del Ministerio de Ambiente, Vivienda y Desarrollo Territorial, que a su vez es punto focal del Programa de Naciones Unidas para el Medio Ambiente PNUMA. Es una organización que agrupa las entidades que requieren formar en la dimensión ambiental el recurso humano de las instituciones, cuyo objetivo primordial es la investigación y la formación.
      .col-lg-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema4/img1.png', style="width:450px", alt="Imagen decorativa").m-auto
    .row.align-items-center.mb-4
      .col-lg-4.mb-4.mb-lg-0.order-2.order-lg-1(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema4/img1.svg', style="width:450px", alt="Imagen decorativa").m-auto
      .col-lg-8.order-1.order-lg-2(data-aos="fade-left")
        p Para cubrir el territorio nacional, la Red Colombiana de Formación Ambiental está conformada por siete (7) nodos regionales, coordinados por el mismo número de universidades regionales:
        ul.lista-ul--color.ms-3
          li 
            i.fas.fa-check(style="color: #FFA031")
            | Nodo de la Costa Atlántica.
          li 
            i.fas.fa-check(style="color: #FFA031")
            | Nodo del Nororiente.
          li 
            i.fas.fa-check(style="color: #FFA031")
            | Nodo de Antioquia – Chocó (Universidad de Medellín).
          li 
            i.fas.fa-check(style="color: #FFA031")
            | Nodo del Pacífico.
          li 
            i.fas.fa-check(style="color: #FFA031")
            | Nodo del Eje Cafetero.
          li 
            i.fas.fa-check(style="color: #FFA031")
            | Nodo Centro.
          li 
            i.fas.fa-check(style="color: #FFA031")
            | Nodo de la Amazonía.
    .tarjeta.color-primario.p-3(data-aos="fade-down")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-auto
          img(src="@/assets/curso/tema3/img3.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.text-white.mb-1 Red Colombiana de Formación Ambiental
              p.text-small.text-white Para ampliar la información lo invitamos a revisar el documento Red colombiana de formación ambiental que encontrará en material de apoyo del Ministerio de Ambiente, Vivienda y Desarrollo Sostenible.
            .col-sm-auto
              a.boton.color-primario.texto-blanco(:href="obtenerLink('/downloads/anexo6.pdf')" target="_blank")
                span(style="color: #000 !important") Descargar
                i.fas.fa-file-download(style="color: #000 !important")
    Separador
    #t_4_1
    .titulo-segundo.color-acento-botones
      h2 4.1 Enfoque diferencial étnico
    p(data-aos="fade-right") Dentro de este enfoque se caracterizan las comunidades y pueblos indígenas, comunidades negras, afrocolombianas, raizales, palenqueras y pueblo Rrom.
    .row.bg-c6
      .col-12
        .px-5
          .row.align-items-center.mb-4
            .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema4/img2.png', style="width:350px", alt="Imagen decorativa").m-auto
            .col-lg-8(data-aos="fade-left")
              .row
                .col-12.bg-c2.p-4
                  p Los cuales se han identificado y se han caracterizado para procesos políticos, culturales y de educación desde  los Decretos Ley 4633 (2011) (para comunidades y pueblos indígenas), Ley 4634 (2011) (para el pueblo Rrom) y Ley 4635 (2011) (para las comunidades negras, afrocolombianas, raizales y palenqueras), que forman lo que tiene que ver con la atención, asistencia y reparación a víctimas de grupos étnicos, constituyen un gran avance en el reconocimiento y la reivindicación de los derechos de los colectivos étnicos, sus unidades familiares y sus miembros individualmente considerados, que por más de 50 años han experimentado el conflicto interno de una manera particular, dada sus condiciones geográficas, culturales, territoriales, históricas, contextuales, sociales y culturales específicas (Unidad para la atención y reparación de las víctimas, s.f., p.3).
          p(data-aos="fade-down") Conózcanos entones un poco más de cada una de este tipo de comunidades:
          TabsC.color-acento-contenido(data-aos="fade-right")
            .py-3.py-md-4(titulo="Pueblos Rrom")
              .row.align-items-center.justify-content-center
                .col-lg-7.mb-4.mb-lg-0
                  p El pueblo gitano o Rrom hace parte de la diversidad étnica y cultural de la nación y, de acuerdo con sus elementos, valores culturales y étnicos, se considera como un pueblo que posee características propias que los diferencian de otros y del resto de la sociedad mayoritaria: no reconocen un territorio como propio, poseen un idioma llamado Romaní, son patrilineales y patrilocales. Siguen una ley llamada Kriss Romaní y tienen conceptos de tiempo y lugar de acuerdo a usos y costumbres ancestrales (Unidad para la atención y reparación de las víctimas. s.f. p.7).
                  p Su forma tradicional de organización social y política es la Kumpany, la cual, para el caso de Colombia, son grupos patrilineales de por lo menos 3 familias que se asientan en municipios y ciudades a lo largo del país. En ella ejercen su justicia propia, y autonomía tanto en sus formas de sustento económico como en la toma de decisiones. En Colombia encontramos en Kumpanias en Sabanalarga (Atlántico), Sampués (Sucre), Sahagún (Córdoba), San Pelayo (Córdoba), Cúcuta (Norte de Santander), Girón (Santander), Envigado (Antioquia), Ataco (Tolima), y Bogotá (Dividida en dos: los pertenecientes a Y Unión Romaní y Prorrom) (Unidad para la atención y reparación de las víctimas, s.f., p.7).
                .col-lg-4
                  figure
                    img(src='@/assets/curso/tema4/img3.png', style="width:450px", alt="Imagen decorativa").m-auto
            .py-3.py-md-4(titulo="Indígenas")
              .row.align-items-center.justify-content-center
                .col-lg-7.mb-4.mb-lg-0
                  p Son aquellos grupos de ascendencia amerindia que mantienen vivas sus tradiciones lingüísticas y culturales, una fuerte relación con el territorio ancestral y la naturaleza, así como una organización social, jurídica y política propia. Están en 102 pueblos diferentes, establecidos en 27 departamentos del país, y más de 730 resguardos (Unidad para la atención y reparación de las víctimas, s.f., p.10). 
                  p Es de notar, que la dispersión de las comunidades indígenas es alta, pero existen ciertos departamentos donde se concentran en mayor medida, como en Vaupés y Guainía, donde representan más del 65% de la población, o la Guajira, Vichada y Amazonas donde superan el 45 % de la población. Asimismo, en los Departamentos de La Guajira, Cauca, Nariño, Córdoba y Sucre se encuentran las mayores concentraciones, representando cerca del 63% de la población indígena del país; pero es en la Amazonía y sus seis (6) departamentos donde se aísla la mayor diversidad: 56 pueblos de los 102 que se han reconocido, aunque no estén censalmente reportados (p.15).
                .col-lg-4
                  figure
                    img(src='@/assets/curso/tema4/img4.png', style="width:450px", alt="Imagen decorativa").m-auto
            .py-3.py-md-4(titulo="Comunidades negras")
              .row.align-items-center.justify-content-center
                .col-lg-7.mb-4.mb-lg-0
                  p Es el conjunto de familias de ascendencia afrocolombiana que poseen una cultura propia, comparten una historia y tienen sus propias tradiciones y costumbres dentro de la relación campo - poblado, que revelan y conservan conciencia de identidad que las distinguen de otros grupos étnicos (Ley 70 de 1993, art. 2, numeral 5).
                .col-lg-4
                  figure
                    img(src='@/assets/curso/tema4/img5.png', style="width:450px", alt="Imagen decorativa").m-auto
            .py-3.py-md-4(titulo="Afrodescendientes")
              .row.align-items-center.justify-content-center
                .col-lg-7.mb-4.mb-lg-0
                  p Este concepto agrupa la comunidad humana en su conjunto, en tanto científicamente se reconoce que ésta desciende de África. No obstante y como categoría jurídica – política, la III Conferencia Mundial contra el Racismo, la Discriminación Racial, la Xenofobia y demás formas conexas de intolerancia, adoptó este término para referirse a la diáspora africana. Como categoría jurídica, el concepto de afrodescendiente da estatus de sujeto de derechos internacionales (Unidad para la atención y reparación de las víctimas, s.f., p.20).
                .col-lg-4
                  figure
                    img(src='@/assets/curso/tema4/img6.png', style="width:450px", alt="Imagen decorativa").m-auto
            .py-3.py-md-4(titulo="Comunidad negra de San Basilio de Palenque")
              .row.align-items-center.justify-content-center
                .col-lg-7.mb-4.mb-lg-0
                  p Se diferencia del resto de comunidades negras del país por contar con un dialecto propio, producto de la mezcla de lenguas africanas con el castellano.
                .col-lg-4
                  figure
                    img(src='@/assets/curso/tema4/img7.png', style="width:450px", alt="Imagen decorativa").m-auto
            .py-3.py-md-4(titulo="Raizales del Archipiélago de San Andrés y Providencia")
              .row.align-items-center.justify-content-center
                .col-lg-7.mb-4.mb-lg-0
                  p Se diferencian de las comunidades negras del continente porque cuentan con un dialecto propio y con prácticas culturales y religiosas más cercanas a la cultura antillana y a la influencia anglosajona en la región Caribe (Unidad para la atención y reparación de las víctimas, s.f., p.26).
                .col-lg-4
                  figure
                    img(src='@/assets/curso/tema4/img8.png', style="width:450px", alt="Imagen decorativa").m-auto
    Separador
    #t_4_2
    .titulo-segundo.color-acento-botones
      h2 4.2 Enfoque diferencial de orientaciones sexuales e identidad de género
    .bloque-texto-a.color-primario.p-4(data-aos="fade-down")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/tema4/img3.svg', style="width:350px", alt="Imagen decorativa").m-auto
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p Este enfoque reúne a todas las personas con orientaciones sexuales y con una identidad de género diferencial; en este enfoque no solo parte de los significados de la comunidad LGBTI, sino, a su vez, de las limitaciones y segregaciones a los que son sometidos. Conocer sus costumbres y procesos culturales es necesario para el trabajo directo de educación ambiental con estas comunidades.
    Separador
    #t_4_3
    .titulo-segundo.color-acento-botones
      h2 4.3 Enfoque diferencial de personas en condición de discapacidad
    .row.bg-c7
      .col-12
        .px-5
          .row.align-items-center
            .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema4/img9.png', style="width:350px", alt="Imagen decorativa").m-auto
            .col-lg-8(data-aos="fade-left")
              p Dentro de este enfoque se involucran las personas que presenten una o varias condiciones de discapacidad (física, sensorial, cognitiva o mental), de acuerdo con la Unidad para la Atención y Reparación de las Víctimas. Estas pueden categorizarse así:
              ImagenInfografica.color-acento-botones
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/tema4/img5.svg', alt='')
                .tarjeta.color-acento-botones1.p-3(x="10.7%" y="25.3%" numero="+")
                  p.text-white.mb-0 Incluye en general a las personas que por cualquier razón tengan movilidad reducida, que encuentran barreras para movilizarse, cambiar o mantener una posición corporal, manipular objetos de forma autónoma e independiente o que usan ayudas técnicas, prótesis u órtesis.
                .tarjeta.color-acento-botones2.p-3(x="36.8%" y="25.3%" numero="+")
                  p.text-white.mb-0 Incluye en general a las personas que, por alguna afectación, completa o parcial, en los sentidos de la visión o de la audición o en ambos, encuentran dificultades para comunicarse o desempeñarse en sus actividades cotidianas en igualdad de condiciones.
                .tarjeta.color-acento-botones3.p-3(x="63.1%" y="25.3%" numero="+")
                  p.text-white.mb-0 Incluye en general personas cuyo proceso de pensamiento, aprendizaje y adquisición del conocimiento es diferente. No hace referencia a una incapacidad para aprender, pensar o adquirir el conocimiento, sino a quienes se enmarcan en este tipo de discapacidad de otras maneras, en otros tiempos y a otros ritmos.
                .tarjeta.color-acento-botones4.p-3(x="89.2%" y="25.3%" numero="+")
                  p.text-white.mb-0 Incluye en general a las personas cuyas funciones o estructuras mentales o psicosociales son diferentes, presentando dificultad en la ejecución de sus actividades […]. Este tipo de discapacidad hace referencia a personas con diagnósticos como depresión profunda, trastorno bipolar y esquizofrenia, entre otras (Unidad para la atención y reparación de las víctimas, s.f., p.5).
    Separador
    #t_4_4
    .titulo-segundo.color-acento-botones
      h2 4.4 Enfoque diferencial de edad
    .row.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p En este se incluyen niños y niñas y la población de personas mayores como diferenciales en los procesos de educación.
        .cajon.color-primario.p-4
          p.mb-0 De acuerdo con la Estrategia Nacional de Atención Integral a la Primera Infancia de Cero a Siempre, Fundamentos Políticos, Técnicos y de Gestión del año 2013, los niños y niñas son ciudadanos sujetos plenos de derechos, sociales, culturales, diversos, capaces, completos y activos, que al igual que los demás seres humanos, están en proceso de desarrollo. Esto significa que son capaces, que pueden participar en lo que atañe a su vida y según su momento de desarrollo y que deben ser valorados en el presente y no solo cómo las personas del futuro.
      .col-lg-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema4/img10.png', style="width:350px", alt="Imagen decorativa").m-auto
    .row.bg-c8.mb-5
      .col-12
        .p-5
          .row.align-items-center(data-aos="fade-down")
            .col-lg-auto.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema4/img10.svg', style="width:70px", alt="Imagen decorativa").m-auto
            .col-lg
              p.mb-0 #[b En cuanto a la persona mayor]: es aquella persona que cuenta con sesenta (60) años de edad o más. Una persona podría ser clasificada dentro de este rango, siendo menor de 60 años y mayor de 55, cuando sus condiciones de desgaste físico, vital y psicológico así lo determinen.
    .row.justify-content-center(data-aos="fade-right")
      .col-lg-10
        .bloque-texto-a.color-primario.p-4
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema4/img11.svg', style="width:350px", alt="Imagen decorativa").m-auto
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p Se podría concluir que, si no se tienen en cuenta los enfoques diferenciales en el diagnóstico de una comunidad, se estarían excluyendo características, costumbres y culturas que influyen directamente en el ambiente y sus condiciones.

</template>

<script>
export default {
  name: 'Tema4',
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
