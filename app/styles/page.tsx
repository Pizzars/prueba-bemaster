"use client";

import TitleHome from 'src/screens/components/texts/TitleHome'
import TitleSection from 'src/screens/components/texts/TitleSection'
import TitleMedium from 'src/screens/components/texts/TitleMedium'
import TitleSmall from 'src/screens/components/texts/TitleSmall'
import TextParagraph from 'src/screens/components/texts/TextParagraph'
import TextSmall from 'src/screens/components/texts/TextSmall'
import { TextColors } from 'src/utils/Colors'
import CalendarIcon from 'src/screens/components/icons/CalendarIcon'
import CheckBoxIcon from 'src/screens/components/icons/CheckBoxIcon'
import TextIcon, { SizeIcons, TextIcons } from 'src/screens/components/icons/TextIcon'
import { useState } from 'react'

const StylePage = () => {
  const [copySuccess, setCopySuccess] = useState('');

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopySuccess('Copied!');
      setTimeout(() => setCopySuccess(''), 1000);
    }).catch(()=> {
      setCopySuccess('Failed to copy text');
    });
  };

  return (
    <div className='p-12'>
      {copySuccess && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded absolute top-1/8 left-1/2 transform -translate-x-1/2 -translate-y-1/2" role="alert">
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline"> {copySuccess}</span>
        </div>
      )}

      <div onClick={() => copyToClipboard('<TitleHome text={`TÍTULO HOME`} />')}>
        <TitleHome text={`TÍTULO HOME`} />
      </div>
      <br />
      <div onClick={() => copyToClipboard('<TitleSection text={`TÍTULO SECCIÓN`} />')}>
        <TitleSection text={`TÍTULO SECCIÓN`} />
      </div>
      <br />
      <div onClick={() => copyToClipboard('<TitleMedium text={`TÍTULO MEDIANO`} />')}>
        <TitleMedium text={`TÍTULO MEDIANO`} />
      </div>
      <br />
      <div onClick={() => copyToClipboard('<TitleSmall text={`ENLACES Y MINITÍTULOS`} />')}>
        <TitleSmall text={`ENLACES Y MINITÍTULOS`} />
      </div>
      <br />
      <div onClick={() => copyToClipboard('<TextParagraph text={`TEXTOS FOOTER, EJEMPLO DE DOS LÍNEAS`} />')}>
        <TextParagraph text={`TEXTOS FOOTER, EJEMPLO DE DOS LÍNEAS`} />
      </div>
      <br />
      <div onClick={() => copyToClipboard('<TextParagraph text={`Texto bloque pequeño. Lorem ipsum cander sit amet consectetur.`} />')}>
        <TextParagraph text={`Texto bloque pequeño. Lorem ipsum cander sit amet consectetur.`} />
      </div>
      <br />
      <div onClick={() => copyToClipboard('<TextSmall text={`Texto bloque pequeño. Lorem ipsum cander sit amet consectetur.`} />')}>
        <TextSmall text={`Texto bloque pequeño. Lorem ipsum cander sit amet consectetur.`} />
      </div>
      <br />
      <div onClick={() => copyToClipboard('<TextSmall text={`CABECERAS CON IMAGEN ABOUT, ARTISTS...`} />')}>
        <TextSmall text={`CABECERAS CON IMAGEN ABOUT, ARTISTS...`} />
      </div>
      <br />
      <div onClick={() => copyToClipboard('<TextSmall text={`NOMBRES TERRITORIOS, LISTADO ARTISTAS...`} />')}>
        <TextSmall text={`NOMBRES TERRITORIOS, LISTADO ARTISTAS...`} />
      </div>
      <br />
      <div onClick={() => copyToClipboard('<TextSmall text={`REDES SOCIALES, PRESS KIT...`} />')}>
        <TextSmall text={`REDES SOCIALES, PRESS KIT...`} />
      </div>
      <br />
      <div onClick={() => copyToClipboard('<TextSmall text={`PÁRRAFOS LARGOS TIPO ABOUT. TODO UPPERCASE MENOS ESTOS.`} />')}>
        <TextSmall text={`PÁRRAFOS LARGOS TIPO ABOUT. TODO UPPERCASE MENOS ESTOS.`} />
      </div>
      <br />
      <div onClick={() => copyToClipboard('<TitleMedium text={`ICONOS`} color={TextColors.blue} className=\'mb-4\' />')}>
        <TitleMedium text={`ICONOS`} color={TextColors.blue} className='mb-4' />
      </div>
      <div className='flex gap-2'>
        <div onClick={() => copyToClipboard('<CalendarIcon />')}>
          <CalendarIcon />
        </div>
        <div onClick={() => copyToClipboard('<CheckBoxIcon checked={true} />')}>
          <CheckBoxIcon checked={true} />
        </div>
        <div onClick={() => copyToClipboard('<TextIcon icon={TextIcons.DIAGONAL_ARROW} />')}>
          <TextIcon icon={TextIcons.DIAGONAL_ARROW} />
        </div>
        <div onClick={() => copyToClipboard('<TextIcon icon={TextIcons.LEFT_ARROW} />')}>
          <TextIcon icon={TextIcons.LEFT_ARROW} />
        </div>
        <div onClick={() => copyToClipboard('<TextIcon icon={TextIcons.RIGHT_ARROW} />')}>
          <TextIcon icon={TextIcons.RIGHT_ARROW} />
        </div>
        <div onClick={() => copyToClipboard('<TextIcon icon={TextIcons.DOWN_TRIANGLE} />')}>
          <TextIcon icon={TextIcons.DOWN_TRIANGLE} />
        </div>
        <div onClick={() => copyToClipboard('<TextIcon icon={TextIcons.CLOSE} />')}>
          <TextIcon icon={TextIcons.CLOSE} />
        </div>
      </div>
      <div className='my-8 flex justify-start items-center'>
        <div onClick={() => copyToClipboard('<TitleSection text={`BOOK`} />')}>
          <TitleSection text={'BOOK'} />
        </div>
        <div onClick={() => copyToClipboard('<TextIcon icon={TextIcons.RIGHT_ARROW} size={SizeIcons.TITLE} color={TextColors.black} />')}>
          <TextIcon icon={TextIcons.RIGHT_ARROW} size={SizeIcons.TITLE} color={TextColors.black} />
        </div>
      </div>
    </div>
  )
}

export default StylePage;
