import NoTag from '../general/NoTag'

interface Params {
  text: string
  textPosition?: number
}
const SplitText = ({ text }: Params) => {
  return (
    <>
      {text.split('\n').map((tx, i) => {
        return (
          <NoTag key={i}>
            {tx}
            <br />
          </NoTag>
        )
      })}
    </>
  )
}

export default SplitText
