import { getDataEvents } from 'src/proxy/BackendREST'
// import { addZero } from 'src/utils/functions'
import { EventModel } from './eventModel'

export const getEvents = async (): Promise<EventModel[] | null> => {
  // const date = new Date()
  // const dateString = `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(
  //   date.getDate()
  // )}T00:00:00.000Z`

  const response = await getDataEvents()
  if (response.statusCode == 200 && response.data && response.data.data) {
    const data = response.data
    const list = data.data as EventModel[]
    return list.slice().sort((a, b) => {
      const dateA = new Date(a.date.value)
      const dateb = new Date(b.date.value)
      if (dateA < dateb) return -1
      return 1
    })
  }
  return null
}
