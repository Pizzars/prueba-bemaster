interface Params {
  children: any
}
const NoTag = ({ children }: Params) => {
  return <>{children}</>
}

export default NoTag
