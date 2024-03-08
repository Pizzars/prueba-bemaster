import { DataModel } from './dataModel'

export const taekwondoTrainingExercises: DataModel[] = [
  {
    id: '1',
    name: 'Saltos de Tijera',
    image: 'url_imagen_saltos_tijera',
    description: 'Mejora la agilidad y fuerza de piernas.',
    videos: [
      { name: 'Tutorial de Saltos de Tijera', url: 'url_tutorial_saltos_tijera' },
      { name: 'Ejemplo de Rutina', url: 'url_ejemplo_rutina_saltos_tijera' }
    ],
    definition: 'Ejercicio que consiste en saltar alternando las piernas hacia adelante y atrás.',
    links: [
      { name: 'Beneficios de los Saltos de Tijera', url: 'url_beneficios_saltos_tijera' },
      { name: 'Entrenamientos Relacionados', url: 'url_entrenamientos_relacionados_saltos_tijera' }
    ]
  },
  {
    id: '2',
    name: 'Flexiones (Push-ups)',
    image: 'url_imagen_flexiones',
    description: 'Fortalece brazos, hombros y tronco.',
    videos: [
      { name: 'Técnica de Flexiones', url: 'url_tecnica_flexiones' },
      { name: 'Variaciones Avanzadas', url: 'url_variaciones_flexiones' }
    ],
    definition:
      'Ejercicio que implica bajar y subir el cuerpo usando los brazos, trabajando principalmente la parte superior del cuerpo.',
    links: [
      { name: 'Beneficios de las Flexiones', url: 'url_beneficios_flexiones' },
      { name: 'Rutina de Flexiones para Taekwondo', url: 'url_rutina_flexiones_taekwondo' }
    ]
  },
  {
    id: '3',
    name: 'Planchas (Planks)',
    image: 'url_imagen_planchas',
    description: 'Fortalece el núcleo y mejora la estabilidad.',
    videos: [
      { name: 'Variación de Planchas Laterales', url: 'url_variacion_planchas_laterales' },
      { name: 'Rutina de Planchas para Taekwondo', url: 'url_rutina_planchas_taekwondo' }
    ],
    definition:
      'Ejercicio que implica mantener una posición similar a una plancha, fortaleciendo el abdomen y mejorando la estabilidad del cuerpo.',
    links: [
      { name: 'Cómo Mejorar en Planchas', url: 'url_consejos_mejorar_planchas' },
      { name: 'Beneficios de las Planchas', url: 'url_beneficios_planchas' }
    ]
  },
  {
    id: '4',
    name: 'Sprints y Carrera Continua',
    image: 'url_imagen_sprints_carrera',
    description: 'Desarrolla resistencia y velocidad.',
    videos: [
      { name: 'Técnica de Sprints', url: 'url_tecnica_sprints' },
      { name: 'Entrenamiento de Carrera Continua', url: 'url_entrenamiento_carrera_continua' }
    ],
    definition:
      'Ejercicios que incluyen sprints cortos para velocidad y carreras más largas para mejorar la resistencia cardiovascular.',
    links: [
      { name: 'Cómo Incorporar Sprints en tu Rutina', url: 'url_incorporar_sprints_rutina' },
      { name: 'Consejos para Mejorar Velocidad', url: 'url_consejos_mejorar_velocidad' }
    ]
  },
  {
    id: '5',
    name: 'Elevaciones Laterales de Piernas',
    image: 'url_imagen_elevaciones_piernas',
    description: 'Trabaja los músculos internos y externos del muslo.',
    videos: [
      { name: 'Técnica de Elevaciones Laterales', url: 'url_tecnica_elevaciones_laterales' },
      { name: 'Ejercicios Complementarios', url: 'url_ejercicios_complementarios_piernas' }
    ],
    definition:
      'Ejercicio acostado de lado que implica elevar la pierna hacia arriba, enfocado en fortalecer los músculos del muslo.',
    links: [
      { name: 'Cómo Mejorar Elevaciones Laterales', url: 'url_mejorar_elevaciones_laterales' },
      { name: 'Beneficios de este Ejercicio', url: 'url_beneficios_elevaciones_laterales' }
    ]
  },
  {
    id: '6',
    name: 'Flexiones Laterales',
    image: 'url_imagen_flexiones_laterales',
    description: 'Mejora la flexibilidad y fortalece los costados.',
    videos: [
      { name: 'Técnica de Flexiones Laterales', url: 'url_tecnica_flexiones_laterales' },
      {
        name: 'Estiramientos Relacionados',
        url: 'url_estiramientos_relacionados_flexiones_laterales'
      }
    ],
    definition:
      'Ejercicio que implica inclinar el tronco hacia un lado, trabajando la flexibilidad y fortalecimiento de los costados.',
    links: [
      { name: 'Cómo Lograr Mayor Flexión', url: 'url_consejos_flexiones_laterales' },
      { name: 'Beneficios de las Flexiones Laterales', url: 'url_beneficios_flexiones_laterales' }
    ]
  },
  {
    id: '7',
    name: 'Sentadillas (Squats)',
    image: 'url_imagen_sentadillas',
    description: 'Fortalece piernas y glúteos.',
    videos: [
      { name: 'Técnica de Sentadillas', url: 'url_tecnica_sentadillas' },
      { name: 'Variaciones de Sentadillas', url: 'url_variaciones_sentadillas' }
    ],
    definition:
      'Ejercicio que implica bajar y subir el cuerpo, trabajando principalmente las piernas y glúteos.',
    links: [
      { name: 'Beneficios de las Sentadillas', url: 'url_beneficios_sentadillas' },
      { name: 'Rutina para Fortalecer Piernas', url: 'url_rutina_fortalecer_piernas' }
    ]
  },
  {
    id: '8',
    name: 'Círculos de Brazos',
    image: 'url_imagen_circulos_brazos',
    description: 'Mejora la movilidad del hombro.',
    videos: [
      { name: 'Técnica de Círculos de Brazos', url: 'url_tecnica_circulos_brazos' },
      { name: 'Ejercicios Complementarios', url: 'url_ejercicios_complementarios_brazos' }
    ],
    definition:
      'Ejercicio que implica realizar círculos con los brazos hacia adelante y hacia atrás, mejorando la movilidad del hombro y calentando la parte superior del cuerpo.',
    links: [
      { name: 'Consejos para Círculos de Brazos', url: 'url_consejos_circulos_brazos' },
      { name: 'Beneficios de este Ejercicio', url: 'url_beneficios_circulos_brazos' }
    ]
  },
  {
    id: '9',
    name: 'Estiramientos Dinámicos',
    image: 'url_imagen_estiramientos_dinamicos',
    description: 'Incluye movimientos como patadas altas y giros de cadera.',
    videos: [
      { name: 'Técnica de Estiramientos Dinámicos', url: 'url_tecnica_estiramientos_dinamicos' },
      { name: 'Rutina de Estiramientos para Taekwondo', url: 'url_rutina_estiramientos_taekwondo' }
    ],
    definition:
      'Serie de movimientos dinámicos que involucran patadas altas, giros de cadera y otros ejercicios para mejorar la flexibilidad y preparar los músculos para la actividad física.',
    links: [
      {
        name: 'Cómo Incorporar Estiramientos Dinámicos',
        url: 'url_incorporar_estiramientos_dinamicos'
      },
      {
        name: 'Beneficios de Estiramientos Dinámicos',
        url: 'url_beneficios_estiramientos_dinamicos'
      }
    ]
  },
  {
    id: '10',
    name: 'Burpees',
    image: 'url_imagen_burpees',
    description: 'Ejercicio completo que trabaja fuerza y resistencia cardiovascular.',
    videos: [
      { name: 'Técnica de Burpees', url: 'url_tecnica_burpees' },
      { name: 'Variaciones Avanzadas', url: 'url_variaciones_burpees' }
    ],
    definition:
      'Ejercicio que combina salto, flexión y posición de plancha, trabajando diversos grupos musculares y mejorando la resistencia cardiovascular.',
    links: [
      { name: 'Beneficios de los Burpees', url: 'url_beneficios_burpees' },
      { name: 'Rutina de Burpees para Taekwondo', url: 'url_rutina_burpees_taekwondo' }
    ]
  }
]
