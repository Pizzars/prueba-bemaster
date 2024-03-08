import op1 from '../../../assets/home/option1.jpeg'
import op2 from '../../../assets/home/option2.jpeg'
import op3 from '../../../assets/home/option3.jpeg'
import op4 from '../../../assets/home/option4.jpeg'
import op5 from '../../../assets/home/option5.jpeg'

export interface OptionHome {
  image: string
  name: string
  id: string
}

export const optionsHome: OptionHome[] = [
  {
    image: op4.src,
    name: 'Filosofía del Taekwondo',
    id: 'filosofia'
  },
  {
    image: op3.src,
    name: 'Equipamiento y Vestimenta',
    id: 'equipo'
  },
  {
    image: op1.src,
    name: 'Técnicas de Patadas',
    id: 'tecnicas'
  },
  {
    image: op2.src,
    name: 'Formas (Poomsae)',
    id: 'formas'
  },
  {
    image: op5.src,
    name: 'Ejercicios',
    id: 'exercises'
  }
]
