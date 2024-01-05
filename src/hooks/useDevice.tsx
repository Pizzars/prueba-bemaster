import { useState, useEffect } from 'react'

const UseDevice = () => {
  const [isMobile, setIsMobile] = useState(false)

  const isMobileDevice = () => {
    const userAgent = navigator.userAgent
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)
  }

  const isTablet = () => {
    const userAgent = navigator.userAgent
    // Puedes ajustar esta expresión regular según las características de los agentes de usuario de las tabletas
    return /iPad|Android/.test(userAgent) && !/Mobile/.test(userAgent)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const device = isMobileDevice() || isTablet()
      setIsMobile(device)
    }
  }, [])

  return isMobile
}

export default UseDevice
