import { DataModel } from './dataModel'

export const equiposData: DataModel[] = [
  {
    id: '1',
    name: 'Dobok',
    image: 'url_de_la_imagen_dobok.jpg',
    description:
      'El dobok es el uniforme tradicional de taekwondo, que consta de una chaqueta, pantalones y un cinturón. Los colores pueden variar según el nivel del practicante.',
    videos: [
      { name: 'Cómo ponerse el Dobok', url: 'url_del_video_tutorial' },
      { name: 'Historia del Dobok', url: 'url_del_video_informativo' }
    ],
    definition:
      'El dobok es una vestimenta simbólica que representa la disciplina y la tradición en taekwondo.',
    links: [
      { name: 'Taekwondo Wiki - Dobok', url: 'url_wiki_dobok' },
      { name: 'Tienda de Equipamiento de Taekwondo - Dobok', url: 'url_tienda_dobok' }
    ]
  },
  {
    id: '2',
    name: 'Cinturón (Ti)',
    image: 'url_de_la_imagen_cinturon.jpg',
    description:
      'El cinturón indica el nivel de habilidad del practicante en taekwondo. Los colores pueden variar desde blanco para principiantes hasta negro para cinturones avanzados.',
    videos: [
      { name: 'Cómo atar el Cinturón', url: 'url_del_video_tutorial' },
      { name: 'Significado de los Colores de los Cinturones', url: 'url_del_video_informativo' }
    ],
    definition: 'El cinturón es un símbolo de progresión y nivel en taekwondo.',
    links: [
      { name: 'Taekwondo Wiki - Cinturón', url: 'url_wiki_cinturon' },
      { name: 'Tienda de Equipamiento de Taekwondo - Cinturón', url: 'url_tienda_cinturon' }
    ]
  },
  {
    id: '3',
    name: 'Protector de Pecho (Hogu)',
    image: 'url_de_la_imagen_hogu.jpg',
    description:
      'Utilizado en competiciones, el hogu protege el pecho y abdomen durante los combates.',
    videos: [
      { name: 'Cómo colocar el Protector de Pecho', url: 'url_del_video_tutorial' },
      { name: 'Reglas de Competición - Hogu', url: 'url_del_video_explicativo' }
    ],
    definition: 'El hogu es esencial para la seguridad durante los combates de taekwondo.',
    links: [
      { name: 'Taekwondo Wiki - Protector de Pecho', url: 'url_wiki_hogu' },
      { name: 'Tienda de Equipamiento de Taekwondo - Hogu', url: 'url_tienda_hogu' }
    ]
  },
  {
    id: '4',
    name: 'Protector de Espinillas (Shin Instep)',
    image: 'url_de_la_imagen_shin_instep.jpg',
    description:
      'Protege las espinillas y la parte superior del pie durante la práctica y competición.',
    videos: [
      { name: 'Cómo colocar el Protector de Espinillas', url: 'url_del_video_tutorial' },
      { name: 'Reglas de Competición - Shin Instep', url: 'url_del_video_explicativo' }
    ],
    definition:
      'El Shin Instep proporciona protección crucial para las espinillas y la parte superior del pie durante los combates.',
    links: [
      { name: 'Taekwondo Wiki - Shin Instep', url: 'url_wiki_shin_instep' },
      { name: 'Tienda de Equipamiento de Taekwondo - Shin Instep', url: 'url_tienda_shin_instep' }
    ]
  },
  {
    id: '5',
    name: 'Protectores de Antebrazos (Forearm Guards)',
    image: 'url_de_la_imagen_forearm_guards.jpg',
    description: 'Brindan protección adicional a los antebrazos durante la práctica y competición.',
    videos: [
      { name: 'Cómo colocar los Protectores de Antebrazos', url: 'url_del_video_tutorial' },
      { name: 'Reglas de Competición - Forearm Guards', url: 'url_del_video_explicativo' }
    ],
    definition:
      'Los Forearm Guards son esenciales para proteger los antebrazos durante los combates de taekwondo.',
    links: [
      { name: 'Taekwondo Wiki - Forearm Guards', url: 'url_wiki_forearm_guards' },
      {
        name: 'Tienda de Equipamiento de Taekwondo - Forearm Guards',
        url: 'url_tienda_forearm_guards'
      }
    ]
  },
  {
    id: '6',
    name: 'Protectores de Manos (Hand Guards)',
    image: 'url_de_la_imagen_hand_guards.jpg',
    description: 'Cubren las manos y los nudillos para protegerlos durante el combate.',
    videos: [
      { name: 'Cómo colocar los Protectores de Manos', url: 'url_del_video_tutorial' },
      { name: 'Reglas de Competición - Hand Guards', url: 'url_del_video_explicativo' }
    ],
    definition:
      'Los Hand Guards son esenciales para proteger las manos y nudillos durante los combates de taekwondo.',
    links: [
      { name: 'Taekwondo Wiki - Hand Guards', url: 'url_wiki_hand_guards' },
      { name: 'Tienda de Equipamiento de Taekwondo - Hand Guards', url: 'url_tienda_hand_guards' }
    ]
  },
  {
    id: '7',
    name: 'Casco (Headgear)',
    image: 'url_de_la_imagen_headgear.jpg',
    description:
      'Se utiliza para proteger la cabeza durante la práctica y competición, especialmente en sparring.',
    videos: [
      { name: 'Cómo colocar el Casco', url: 'url_del_video_tutorial' },
      { name: 'Reglas de Competición - Headgear', url: 'url_del_video_explicativo' }
    ],
    definition:
      'El Headgear es esencial para proteger la cabeza y reducir el riesgo de lesiones durante la práctica de taekwondo.',
    links: [
      { name: 'Taekwondo Wiki - Headgear', url: 'url_wiki_headgear' },
      { name: 'Tienda de Equipamiento de Taekwondo - Headgear', url: 'url_tienda_headgear' }
    ]
  },
  {
    id: '8',
    name: 'Boca de Protección (Mouthguard)',
    image: 'url_de_la_imagen_mouthguard.jpg',
    description: 'Protege los dientes y la boca durante los combates y entrenamientos.',
    videos: [
      { name: 'Cómo usar la Boca de Protección', url: 'url_del_video_tutorial' },
      { name: 'Importancia de la Boca de Protección', url: 'url_del_video_informativo' }
    ],
    definition:
      'El Mouthguard es esencial para proteger los dientes y la boca durante las actividades de taekwondo.',
    links: [
      { name: 'Taekwondo Wiki - Mouthguard', url: 'url_wiki_mouthguard' },
      { name: 'Tienda de Equipamiento de Taekwondo - Mouthguard', url: 'url_tienda_mouthguard' }
    ]
  },
  {
    id: '9',
    name: 'Cubre Ingle (Groin Guard)',
    image: 'url_de_la_imagen_groin_guard.jpg',
    description: 'Proporciona protección adicional en la zona de la ingle durante el combate.',
    videos: [
      { name: 'Cómo colocar el Cubre Ingle', url: 'url_del_video_tutorial' },
      { name: 'Reglas de Competición - Groin Guard', url: 'url_del_video_explicativo' }
    ],
    definition:
      'El Groin Guard es esencial para proteger la zona de la ingle durante los combates de taekwondo.',
    links: [
      { name: 'Taekwondo Wiki - Groin Guard', url: 'url_wiki_groin_guard' },
      { name: 'Tienda de Equipamiento de Taekwondo - Groin Guard', url: 'url_tienda_groin_guard' }
    ]
  },
  {
    id: '10',
    name: 'Zapatillas de Taekwondo',
    image: 'url_de_la_imagen_taekwondo_shoes.jpg',
    description:
      'Zapatillas ligeras y flexibles diseñadas específicamente para la práctica de taekwondo.',
    videos: [
      { name: 'Características de las Zapatillas de Taekwondo', url: 'url_del_video_informativo' },
      { name: 'Cómo elegir las Zapatillas de Taekwondo', url: 'url_del_video_consejos' }
    ],
    definition:
      'Las Zapatillas de Taekwondo proporcionan comodidad y agarre durante la práctica y competición.',
    links: [
      { name: 'Taekwondo Wiki - Zapatillas de Taekwondo', url: 'url_wiki_taekwondo_shoes' },
      {
        name: 'Tienda de Equipamiento de Taekwondo - Zapatillas de Taekwondo',
        url: 'url_tienda_taekwondo_shoes'
      }
    ]
  },
  {
    id: '11',
    name: 'Bolsa de Equipo',
    image: 'url_de_la_imagen_equipment_bag.jpg',
    description: 'Una bolsa resistente para transportar y almacenar todo el equipo de taekwondo.',
    videos: [
      { name: 'Cómo empacar la Bolsa de Equipo', url: 'url_del_video_tutorial' },
      { name: 'Ventajas de una Bolsa de Equipo Espaciosa', url: 'url_del_video_informativo' }
    ],
    definition:
      'La Bolsa de Equipo es esencial para transportar y almacenar de manera segura todo el equipo de taekwondo.',
    links: [
      { name: 'Taekwondo Wiki - Bolsa de Equipo', url: 'url_wiki_equipment_bag' },
      {
        name: 'Tienda de Equipamiento de Taekwondo - Bolsa de Equipo',
        url: 'url_tienda_equipment_bag'
      }
    ]
  }
]
