import { useEffect, useRef } from 'react'

interface Params {
  children: any
}

const TextAutoSize = ({ children }: Params) => {
  // const [fontSize, setFontSize] = useState(16) // Tamaño de fuente inicial
  // const [show, setShow] = useState(false) // Tamaño de fuente inicial
  const ref = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const container = ref.current
    if (!container) return
    // Función para ajustar el tamaño de fuente
    const adjustFontSize = () => {
      const header = document.getElementById('header-container')
      if (!header) return

      container.style.height = `${(window?.innerHeight ?? 0) - header.offsetHeight - 160}px`

      // Puedes ajustar la lógica de ajuste según tus necesidades
      const text = container.textContent ?? ''
      const containerWidth = container.offsetWidth
      const containerHeight = container.offsetHeight

      const containerArea = containerWidth * containerHeight
      const charactersCount = text.length

      // Ajusta estos factores según tus necesidades específicas
      const areaFactor = 0.45 // Puedes ajustar este factor según tus necesidades

      const newFontSize = Math.min(
        50,
        Math.max(12, Math.sqrt((containerArea / charactersCount) * areaFactor))
      )

      container.style.fontSize = `${newFontSize}px`
      // setFontSize(newFontSize)
    }

    // Llama a la función de ajuste al cargar y al cambiar el tamaño de la ventana
    adjustFontSize()
    window.addEventListener('resize', adjustFontSize)
    // Limpia el evento de cambio de tamaño al desmontar el componente
    return () => {
      window.removeEventListener('resize', adjustFontSize)
    }
  }, [children])

  return (
    // <div
    //   className='w-full h-full max-h-full max-w-full overflow-hidden bg-blue-400 '
    //   style={{
    //     height: 'calc(100vh - )'
    //   }}
    // >
    <div
      id='text-container'
      className='swis w-full h-full max-h-full max-w-full  overflow-hidden'
      style={{ fontSize: 16 }}
      ref={ref}
    >
      {children}
    </div>
    // </div>
  )
}

export default TextAutoSize
