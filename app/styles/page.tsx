// Componentes de titulos
import TitleHome from 'src/screens/components/texts/TitleHome'
import TitleSection from 'src/screens/components/texts/TitleSection'
import TitleMedium from 'src/screens/components/texts/TitleMedium'
import TitleSmall from 'src/screens/components/texts/TitleSmall'

// Componentes de textos
import TextParagraph from 'src/screens/components/texts/TextParagraph'
import TextSmall from 'src/screens/components/texts/TextSmall'
import { TextColors } from 'src/utils/Colors'
import CalendarIcon from 'src/screens/components/icons/CalendarIcon'
import CheckBoxIcon from 'src/screens/components/icons/CheckBoxIcon'
import TextIcon, { SizeIcons, TextIcons } from 'src/screens/components/icons/TextIcon'

export default function StylePage() {
  return (
    <div className='p-12'>
      <TitleHome
        text={`TÍTULO
      HOME`}
      />
      <br />
      <TitleSection
        text={`TÍTULO
      SECCIÓN`}
      />
      <br />
      <TitleMedium
        text={`TÍTULO
      MEDIANO`}
      />
      <br />
      <TitleSmall
        text={`ENLACES Y
      MINITÍTULOS`}
      />
      <br />
      <TextParagraph
        text={`TEXTOS FOOTER, EJEMPLO DE
        DOS LÍNEAS`}
      />
      <br />
      <TextParagraph
        text={`Texto bloque pequeño. Lorem ipsum 
      cander sit amet consectetur.`}
      />
      <br />
      <TextSmall
        text={`Texto bloque pequeño. Lorem ipsum 
      cander sit amet consectetur.`}
      />
      <br />
      <TextSmall
        text={`CABECERAS CON IMAGEN
        ABOUT, 
        ARTISTS...`}
      />
      <br />
      <TextSmall
        text={`NOMBRES
        TERRITORIOS,
        LISTADO ARTISTAS...`}
      />
      <br />
      <TextSmall
        text={`REDES SOCIALES,
        PRESS KIT...`}
      />
      <br />
      <TextSmall
        text={`PÁRRAFOS LARGOS TIPO
        ABOUT.
        TODO UPPERCASE
        MENOS ESTOS.`}
      />
      <br />
      <br />
      <br />
      <TitleMedium text={`ICONOS`} color={TextColors.blue} className='mb-4' />
      <div className='flex gap-2'>
        <CalendarIcon />
        <CheckBoxIcon checked={true} />
        <TextIcon icon={TextIcons.DIAGONAL_ARROW} />
        <TextIcon icon={TextIcons.LEFT_ARROW} />
        <TextIcon icon={TextIcons.RIGHT_ARROW} />
        <TextIcon icon={TextIcons.DOWN_TRIANGLE} />
        <TextIcon icon={TextIcons.CLOSE} />
      </div>
      <div className='my-8 flex justify-start items-center'>
        <TitleSection text='BOOK' />
        <TextIcon icon={TextIcons.RIGHT_ARROW} size={SizeIcons.TITLE} color={TextColors.black} />
      </div>
    </div>
  )
}
