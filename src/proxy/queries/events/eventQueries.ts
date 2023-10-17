import { getData } from 'src/proxy/BackendREST'
import { EventModel } from './eventModel'

const addZero = (value: number) => {
  if (value < 10) {
    return `0${value}`
  }
  return `${value}`
}

export const getEvents = async (page = 1): Promise<EventModel[] | null> => {
  const date = new Date()
  const dateString = `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(
    date.getDate()
  )}T00:00:00Z`

  const response = await getData(`events`, {
    'filters[date][$gte]': dateString,
    'sort[0]': 'date:desc',
    'pagination[page]': page
  })
  if (response.statusCode == 200) {
    const data = response.data.data
    const list = EventModel.listFromJson(data as any)
    return list
  }
  return null
}