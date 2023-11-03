import TitleSmall from '../texts/TitleSmall'
import Label from './Label'

interface Params {
  value?: string
  onChange: (value: string) => void
  label: string
  placeholder?: string
}

const InputNumberForm = ({ value, placeholder = '', onChange, label }: Params) => {
  return (
    <Label name={label} isInput={true}>
      <div className=' flex items-center justify-between overflow-hidden '>
        <input
          className='w-full text-small text-black uppercase bg-transparent font-light outline-none appearance-none'
          value={value ?? ''}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
          type='number'
          min='0'
          step={1}
        />
        <TitleSmall text='PAX' />
      </div>
    </Label>
  )
}

export default InputNumberForm
