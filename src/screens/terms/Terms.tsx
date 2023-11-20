import { TextColors } from 'src/utils/Colors'
import TextParagraph from '../components/texts/TextParagraph'
import TitleMedium from '../components/texts/TitleMedium'
import TitleSmall from '../components/texts/TitleSmall'

const text1 =
  'En la página Política de Cookies puede consultar toda la información relativa a la política de recogida y tratamiento de las cookies.\n El Titular sólo obtiene y conserva la siguiente información acerca de los visitantes del Sitio Web:\nEl nombre de dominio del proveedor (PSI) y/o dirección IP que les da acceso a la red.'
const text2 =
  'La fecha y hora de acceso al sitio Web.\nLa dirección de Internet origen del enlace que dirige al sitio Web.\nEl número de visitantes diarios de cada sección.\nLa información obtenida es totalmente anónima, y en\n ningún caso puede ser asociada a un Usuario concreto e\n identificado.'
const Terms = () => {
  return (
    <section className='flex flex-col w-full bg-white px-8 sm:py-24 '>
      <TitleMedium text={`TERMS & \nCONDITIONS`} />

      <div className='w-full sm:w-1/2 mt-10'>
        <TitleSmall text={`Política de Cookies`} className='uppercase' />
        <TextParagraph text={text1} className='text-left' />
        <TextParagraph text={text2} color={TextColors.black} className='text-left opacity-40' />
      </div>
    </section>
  )
}

export default Terms
