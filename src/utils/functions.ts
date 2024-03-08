export const addZero = (value: number) => {
  if (value < 10) {
    return `0${value}`
  }
  return `${value}`
}

export const formatDate = (date: Date) => {
  return `${addZero(date.getDate())}-${addZero(date.getMonth() + 1)}-${date.getFullYear()}`
}

export function truncateText(text: string | null | undefined, maxChars: number) {
  if (!text) return ''

  // Comprueba si el texto ya es lo suficientemente corto
  if (text.length <= maxChars) {
    return text
  }

  // Encuentra el índice aproximado donde se podría cortar el texto
  let end = maxChars

  // Intenta no cortar a la mitad una palabra
  // Busca el siguiente espacio después de los 20 caracteres
  while (end < text.length && text[end] !== ' ' && end < maxChars + 10) {
    end++
  }

  // Si no encontramos un espacio, simplemente corta en maxChars
  if (end === text.length) {
    return text
  }

  // Corta el texto y añade los puntos suspensivos
  return `${text.substring(0, end)}...`
}
