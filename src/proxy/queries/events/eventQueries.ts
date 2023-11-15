import { getData } from 'src/proxy/BackendREST'
import { addZero } from 'src/utils/functions'
import { EventModel } from './eventModel'

export const getEvents = async (page = 1): Promise<EventModel[] | null> => {
  const date = new Date()
  const dateString = `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(
    date.getDate()
  )}T00:00:00.000Z`

  const response = await getData(`events`, {
    date_gte: dateString,
    _sort: 'date:asc',
    _start: ((page > 0 ? page : 1) - 1) * 20,
    _limit: 20
  })
  if (response.statusCode == 200) {
    const data = response.data
    const list = EventModel.listFromJson(data as any)
    return list
  }
  return null
}
