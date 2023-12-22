import { EventModel } from 'src/proxy/queries/events/eventModel'

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

interface Week {
  week: number
  start: number
  end: number
  year: number
  month: number
}
interface MonthWeek {
  month: string
  data: Week[]
}

const getWeeks = (startDate: Date, endDate: Date, year: number) => {
  const result: MonthWeek[] = []

  const currentDate = new Date(startDate)
  endDate = new Date(endDate)

  while (currentDate <= endDate) {
    const month = currentDate.toLocaleString('en-US', { month: 'short' })
    const weekNumber = Math.ceil(currentDate.getDate() / 7)
    const startDay = currentDate.getDate()

    const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()
    const endDay = Math.min(endOfMonth, currentDate.getDate() + 6)

    const existingMonth = result.find(item => item.month === month)

    if (existingMonth) {
      existingMonth.data.push({
        week: weekNumber,
        start: startDay,
        end: endDay,
        year,
        month: startDate.getMonth() + 1
      })
    } else {
      result.push({
        month: month,
        data: [
          {
            week: weekNumber,
            start: startDay,
            end: endDay,
            year,
            month: startDate.getMonth() + 1
          }
        ]
      })
    }

    currentDate.setDate(currentDate.getDate() + 7)
  }

  return result
}

interface UniqueMonthsData {
  year: number
  months: {
    month: number
    min: number
    max: number
  }[]
}

const getUniqueMonths = (events: EventModel[]): UniqueMonthsData[] => {
  const uniqueMonthsMap: Map<number, Map<number, { min: number; max: number }>> = new Map()

  events.forEach(event => {
    const year = event.date.year
    const month = event.date.month
    const day = event.date.day

    // Verificar si ya existe el año en el Map
    if (!uniqueMonthsMap.has(year)) {
      uniqueMonthsMap.set(year, new Map())
    }

    // Acceder al Map de meses del año actual
    const monthsMap = uniqueMonthsMap.get(year)

    if (monthsMap) {
      // Si el mes aún no existe en el Map, agregarlo con el día actual
      if (!monthsMap.has(month)) {
        monthsMap.set(month, { min: day, max: day })
      } else {
        // Si el mes ya existe, actualizar los valores mínimo y máximo si es necesario
        const currentMonth = monthsMap.get(month)
        if (currentMonth) {
          currentMonth.min = Math.min(currentMonth.min, day)
          currentMonth.max = Math.max(currentMonth.max, day)
        }
      }
    }
  })

  const uniqueMonthsData: UniqueMonthsData[] = []

  // Convertir el Map a un array de objetos
  uniqueMonthsMap.forEach((monthsMap, year) => {
    const monthsArray = Array.from(monthsMap).map(([month, { min, max }]) => ({
      month,
      min,
      max
    }))

    uniqueMonthsData.push({ year, months: monthsArray })
  })

  return uniqueMonthsData
}

const getFirstAndLastDayOfMonth = (year: number, month: number) => {
  // Ten en cuenta que los meses en JavaScript se numeran desde 0 (enero) hasta 11 (diciembre)
  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)

  return [firstDay, lastDay]
}

export const getWeeksForEvents = (events: EventModel[]) => {
  const years = getUniqueMonths(events)
  const sortYears = years.sort((a, b) => a.year - b.year)
  const weeks: MonthWeek[] = []
  sortYears.forEach(data => {
    data.months.forEach(month => {
      const range = getFirstAndLastDayOfMonth(data.year, month.month - 1)
      const weeksMonth = getWeeks(range[0], range[1], data.year)
      const list = weeksMonth.map(weekData => {
        return {
          ...weekData,
          data: weekData.data.filter(week => {
            if (
              (week.start <= month.min && week.end >= month.min) ||
              (week.start <= month.max && week.end >= month.max)
            ) {
              return true
            }
          })
        }
      })
      weeks.push(...list)
    })
  })

  const weeksList: { title: string; option: string }[] = []
  weeks.forEach(info => {
    info.data.forEach(data => {
      const week = {
        title: `${info.month.toUpperCase()}\nWEEK ${data.week}`,
        option: JSON.stringify(data)
      }
      weeksList.push(week)
    })
    weeksList.push()
  })

  return weeksList
}
