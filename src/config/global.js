export default {
  global: {
    componenteFormativo: 'Diagnóstico en educación ambiental',
    descripcionCurso:
      'La educación ambiental no es solamente un proceso de transformación de costumbres y hábitos en una comunidad, también es considerado una estrategia clave para garantizar el cumplimiento o éxito de las intervenciones ambientales en un territorio, ya que se fundamenta en involucrar a las personas activamente en el diagnóstico de los mismos y en la búsqueda de alternativas viables para sus necesidades ambientales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Reflexión inicial',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Conceptos de desarrollo sostenible y educación ambiental',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Normatividad nacional en educación ambiental',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Enfoque diferencial de las comunidades',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Enfoque diferencial étnico',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo:
              'Enfoque diferencial de orientaciones sexuales e identidad de género',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo:
              'Enfoque diferencial de personas en condición de discapacidad',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Enfoque diferencial de edad',
            hash: 't_4_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/921200_CF05_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Normatividad nacional en educación ambiental',
      referencia:
        'Organización de las Naciones Unidas. (1992). <em>Programa 21</em>.',
      tipo: 'Página web',
      link: 'https://www.un.org/spanish/esa/sustdev/agenda21/index.htm',
    },
  ],
  glosario: [
    {
      termino: 'Ambiente',
      significado:
        'es el entorno, incluyendo el agua, el aire y el suelo, y su interrelación, así como las relaciones entre estos elementos y cualesquiera organismos vivos. Decreto 775 de 1990, por el cual se reglamentan parcialmente los títulos III, V, VI, VII y XI de la Ley 09 de 1979, sobre uso y manejo de plaguicidas, derogada por el Decreto 1843/91 (CAR, s.f.).',
    },
    {
      termino:
        'Comité Técnico Interinstitucional de Educación Ambiental [CIDEA]',
      significado:
        'es un grupo de profesionales e instituciones de diferentes ramas de la ciencia que asume el debate y la formulación de los planes de educación ambiental en los niveles municipal, departamental o regional y busca consolidar y articular los diversos actores públicos y privados asentados en el territorio, que tienen competencias, responsabilidades o intereses en el desarrollo de programas, proyectos y acciones de Educación Ambiental (CAR, s.f.).',
    },
    {
      termino: 'Desarrollo sostenible',
      significado:
        'proceso de transformaciones naturales, económico-sociales, culturales e institucionales, que tienen por objeto asegurar el mejoramiento de las condiciones de vida del ser humano, la producción de bienes y prestación de servicios, sin deteriorar el ambiente natural ni comprometer las bases de un desarrollo similar para las futuras generaciones (CAR, s.f.).',
    },
    {
      termino: 'Diagnóstico ambiental',
      significado:
        'descripción del estado de situación ambiental de un área, sobre la base de la utilización integradora de indicadores con origen en las ciencias sociales, exactas y naturales (CAR, s.f.).',
    },
    {
      termino: 'Proyecto Ambiental Escolar [PRAE]',
      significado:
        'se elabora en cada institución educativa para fortalecer la cultura ambiental y consolidar acciones participativas que aborden la problemática ambiental local (CAR, s.f.).',
    },
    {
      termino: 'Proyecto Ciudadano de Educación Ambiental [PROCEDA]',
      significado:
        'proyecto de iniciativa comunitaria con el objeto de fortalecer la cultura ambiental y la autogestión de las comunidades y sus organizaciones para desarrollar acciones que aborden la problemática ambiental local (CAR, s.f.).',
    },
    {
      termino: 'Sistema Nacional Ambiental [SINA]',
      significado:
        'según el Artículo 4 de la Ley 99 de 1993, es el conjunto de orientaciones, normas, actividades, recursos, programas e instituciones que permiten la puesta en marcha de los principios generales ambientales contenidos en ella; fue reglamentado parcialmente por el Decreto 1600 de julio 27 de 1994 (CAR, s.f.).',
    },
  ],
  referencias: [
    {
      referencia:
        'Asamblea Nacional Constituyente. (1991). <em>Constitución Política de Colombia</em>. ',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/constitucion_politica_1991.html',
    },
    {
      referencia:
        'Botero, H. (2013). <em>Construcción de un marco legal nacional e internacional a considerar para el concepto de ambiente. Revista de educación y pensamiento, p.p. 120-132</em>. ',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=4786023',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1993). Ley 99. <em>Por la cual se crea el Ministerio del Medio Ambiente, se reordena el Sector Público encargado de la gestión y conservación del medio ambiente y los recursos naturales renovables, se organiza el Sistema Nacional Ambiental, SINA, y se dictan otras disposiciones</em>. ',
      link: 'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=297',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1994). Ley 134. <em>Por la cual se dictan normas sobre mecanismos de participación ciudadana</em>. ',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0134_1994.html',
    },
    {
      referencia:
        'Defensoría del Pueblo de Colombia. (2014). <em>Enfoque diferencial, un principio transversal en la materialización de los derechos de los grupos étnicos en su condición de víctimas</em>. ',
      link: '',
    },
    {
      referencia:
        'Hollmann, M. (2017). Construcción histórica del actual concepto de desarrollo sostenible. <em>Antecedentes de problemáticas socioeconómicas y ambientales</em>. ',
      link:
        'https://www.redalyc.org/jatsRepo/5116/511653854002/511653854002.pdf',
    },
    {
      referencia:
        'Ministerio del Interior. (2012). <em>El enfoque diferencial y étnico en la política pública de víctimas del conflicto armado. ISBN: 978-958-8909-38-7</em>. ',
      link: '',
    },
    {
      referencia:
        'Ministerio de Ambiente, Vivienda y Desarrollo Territorial [MAVDT]. (2006). <em>Programa de Educación Ambiental y Participación Ciudadana</em>. ',
      link: '',
    },
    {
      referencia:
        'Secretaría Distrital de Integración Social. (s.f.). <em>Enfoque diferencial</em>. ',
      link:
        'https://www.integracionsocial.gov.co/index.php/politicas-publicas/la-sdis-aporta-a-la-implementacion/politica-publica-enfoque-diferencial',
    },
    {
      referencia:
        'Secretaría Distrital de Ambiente (2014). <em>Portafolio de la Oficina de Participación Educación y Localidades (OPEL)</em>. ',
      link: 'https://oab.ambientebogota.gov.co/?post_type=dlm_download&p=3500',
    },
    {
      referencia:
        'Sarmiento, P. (2015). Educación ambiental con enfoque diferencial. <em>Comunidad indígena Concordia, Inírida Guainía</em>. ',
      link:
        'https://repository.libertadores.edu.co/bitstream/handle/11371/517/SarmientoD%C3%ADazPedroAlejandro.pdf?sequence=2',
    },
    {
      referencia:
        'Unidad para la atención y reparación integral de víctimas. (s.f.). <em>Enfoque étnico</em>. ',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Poltica%20de%20Vctimas/Enfoques%20Diferenciales/Enfoque%20%C3%89tnico.PDF',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Xiomara Becerra Aldana',
          cargo: 'Instructora ambiental',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Lubin Andrés Hernández Sanabria',
          cargo: 'Instructor',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Jesús Ricardo Arias Munévar',
          cargo: 'Instructor',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Javier Ricardo Luna Pineda',
          cargo: 'Diseñador instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Adriana Lozano Zapata',
          cargo: 'Revisora de estilo',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Adecuación instruccional',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Metodología para la formación virtual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jesús Antonio Vecino Valero',
          cargo: 'Diseño web',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Jhon Jairo Urueta Alvarez',
          cargo: 'Desarrollo fullstack',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Leyson Fabian Castaño Pérez',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
