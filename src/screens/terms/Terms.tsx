import TextParagraph from '../components/texts/TextParagraph';
import TitleMedium from '../components/texts/TitleMedium';
import TitleSmall from '../components/texts/TitleSmall';

const text = "En la página Política de Cookies puede consultar toda la información relativa a la política de recogida y tratamiento de las cookies.\n El Titular sólo obtiene y conserva la siguiente información acerca de los visitantes del Sitio Web: El nombre de dominio del proveedor (PSI) y/o dirección IP que les da acceso a la red.\n La fecha y hora de acceso al sitio Web. La dirección de Internet origen del enlace que dirige al sitio Web. El número de visitantes diarios de cada sección.\n La información obtenida es totalmente anónima, y en ningún caso puede ser asociada a un Usuario concreto e identificado."
const Terms = () => {
  return (
    <section className="flex flex-col w-full bg-white px-8 my-8 ">

      <TitleMedium text={`TERMS & \nCONDITIONS`} />

      <div className='w-full mt-10'>
        <TitleSmall text={`Política de Cookies`} className="uppercase" />
        <TextParagraph text={text} className=' text-left' />
      </div>
    </section>
  );
}

export default Terms
