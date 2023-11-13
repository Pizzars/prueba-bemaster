import { EventModel } from 'src/proxy/queries/events/eventModel'
import { FormattedEvent, FormattedGig, WeekOption } from './types'

export const addZero = (value: number) => {
  if (value < 10) {
    return `0${value}`
  }
  return `${value}`
}

export const formatDate = (date: Date) => {
  return `${addZero(date.getDate())}-${addZero(date.getMonth() + 1)}-${date.getFullYear()}`
}

export function formatDescription(text: string | null | undefined) {
  if (!text) return ''

  return text
    .replace(/<\/p><p>&nbsp;<\/p><p>/g, '\n\n')
    .replace(/<p>|<\/p>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .replace(/&ntilde;/g, 'ñ')
    .replace(/&aacute;/g, 'á')
    .replace(/&eacute;/g, 'é')
    .replace(/&iacute;/g, 'í')
    .replace(/&oacute;/g, 'ó')
    .replace(/&uacute;/g, 'ú')
    .replace(/<\/p><p>/g, '\n\n')
    .replace(/<\/p>|<p>/g, '')
    .replace(/&quot;/g, '"')
    .replace(/&ldquo;/g, '“')
    .replace(/&rdquo;/g, '”')
    .replace(/&lsquo;/g, '‘')
    .replace(/&rsquo;/g, '’')
    .replace(/&hellip;/g, '…')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .replace(/&ndash;/g, '–')
    .replace(/&mdash;/g, '—')
    .replace(/&iexcl;/g, '¡')
    .replace(/&iquest;/g, '¿')
    .replace(/&ntilde;/g, 'ñ')
    .replace(/&aacute;/g, 'á')
    .replace(/&eacute;/g, 'é')
    .replace(/&iacute;/g, 'í')
    .replace(/&oacute;/g, 'ó')
    .replace(/&uacute;/g, 'ú')
    .replace(/&ccedil;/g, 'ç')
    .replace(/&euro;/g, '€')
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

export const filterFutureEvents = (
  events: EventModel[] | null | undefined,
  limit: number
): FormattedEvent[] | [] => {
  if (!events) return []

  const today = new Date()

  const futureEvents = events
    .filter(event => event.date && new Date(event.date) > today)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, limit)

  const formattedEvents = futureEvents.map((event, index): FormattedEvent | undefined => {
    if (!event.date) return undefined // Skip mapping if event.date does not exist
    return {
      date: formatEventDate(new Date(event.date)),
      venue: event.place,
      location: `${event.city}, ${event.country}`,
      id: index
    }
  })

  return formattedEvents.filter(event => event) as FormattedEvent[] // Filter out undefined values
}

const formatEventDate = (date: Date): string => {
  // Convertimos la fecha a un string en formato ISO
  const isoDate = date?.toISOString() // '2022-06-17T03:00:00.000Z'

  // Extraemos la parte de la fecha del string ISO
  const [year, month, day] = isoDate.split('T')[0].split('-')

  // Devolvemos la fecha en el nuevo formato
  return `${day}·${month}·${year.slice(2)}`
}

const formatGigs = (event: EventModel) => {
  const formattedDate = new Date(event.date).toLocaleDateString('es-ES', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit'
  })

  return {
    date: formattedDate,
    artist: event.name || '',
    venue: event.place || '',
    location: `${event.city || ''}, ${event.country || ''}`.trim(),
    id: event.id
  }
}

export const filterAndFormatGigs = (
  events: EventModel[] | null,
  startDate: string | Date = new Date(),
  endDate: string | Date | null = null
): FormattedGig[] => {
  if (!events) {
    return []
  }

  const start = new Date(`${startDate}T00:00:00Z`).getTime()
  const end = endDate ? new Date(`${endDate}T23:59:59Z`).getTime() : Infinity

  const uniqueEventsMap = new Map<string, FormattedGig>()

  events
    .filter(event => {
      const eventDate = new Date(event.date).getTime()
      return eventDate >= start && eventDate <= end
    })
    .map(formatGigs)
    .forEach(gig => {
      const uniqueKey = `${gig.id}-${gig.date}`
      if (!uniqueEventsMap.has(uniqueKey)) {
        uniqueEventsMap.set(uniqueKey, gig)
      }
    })

  return Array.from(uniqueEventsMap.values()).sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  )
}

const getWeekRange = (startOfWeek: Date): { start: string; end: string } => {
  const endOfWeek = new Date(startOfWeek)
  endOfWeek.setDate(startOfWeek.getDate() + 6)

  return {
    start: startOfWeek.toISOString().split('T')[0],
    end: endOfWeek.toISOString().split('T')[0]
  }
}

export const createWeekOptions = (monthsForward: number): WeekOption[] => {
  const options: WeekOption[] = []
  const currentDate = new Date()
  currentDate.setDate(currentDate.getDate() - currentDate.getDay())

  for (let i = 0; i < monthsForward * 4; i++) {
    const { start, end } = getWeekRange(new Date(currentDate))

    const month = currentDate.toLocaleString('default', { month: 'short' }).toUpperCase()
    const weekNumber = Math.ceil(currentDate.getDate() / 7)

    options.push({ title: `${month}\nWEEK ${weekNumber}`, option: { start, end } })

    currentDate.setDate(currentDate.getDate() + 7)
  }

  return options
}
