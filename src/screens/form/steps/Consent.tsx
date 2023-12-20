'use client'
import BaseStep from './BaseStep'
import { TextIcons } from 'src/screens/components/icons/TextIcon'
import TextWithIcon from 'src/screens/components/icons/TextWithIcon'
import { useState } from 'react'
// import Select from '../components/Select'

interface Params {
  updateData: () => void
}

const Consent = ({ updateData }: Params) => {
  const [check, setCheck] = useState(false)

  const callUpdateData = () => {
    updateData()
  }

  const active = check

  return (
    <BaseStep
      onClick={callUpdateData}
      title={`CONSENT TO
      PROCESS DATA`}
      alt='7/7'
      active={active}
      description='In order to contact you and provide you the requested information, we need to store and process your personal data. If you consent to us storing your personal data for this purpose, please tick the checkbox below.'
      textButton='SUBMIT INFORMATION'
    >
      <div className='py-6 mx-8'>
        <button onClick={() => setCheck(!check)}>
          <TextWithIcon icon={TextIcons.CHECK} text='I agree' checked={check} />
        </button>
      </div>
    </BaseStep>
  )
}

export default Consent
