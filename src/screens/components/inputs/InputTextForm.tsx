import Label from './Label'

interface Params {
  value?: string
  onChange: (value: string) => void
  label: string
  placeholder?: string
}

const InputTextForm = ({ value, placeholder = '', onChange, label }: Params) => {
  return (
    <Label name={label} isInput={true}>
      <div className=' flex flex-col items-end overflow-hidden '>
        <input
          className='w-full text-small text-black uppercase bg-transparent font-light outline-none'
          value={value ?? ''}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
        />
      </div>
    </Label>
  )
}

export default InputTextForm
