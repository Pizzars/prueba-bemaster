import { DataModel } from './dataModel'
import { taekwondoTrainingExercises } from './ejercicios'
import { equiposData } from './equipos'
import { filosofiaTaekwondo } from './filosofia'
import { formasData } from './formas'
import { patadasData } from './patadas'

export const dataPage: Record<string, DataModel[]> = {
  exercises: taekwondoTrainingExercises,
  equipo: equiposData,
  tecnicas: patadasData,
  formas: formasData,
  filosofia: filosofiaTaekwondo
}
