import { getData } from 'src/proxy/BackendREST'
import { NewModel } from './newModel'

export const getNews = async (page = 1): Promise<NewModel[] | null> => {
  const response = await getData(`news`, {
    _start: ((page > 0 ? page : 1) - 1) * 20,
    _limit: 20
  })
  if (response.statusCode == 200) {
    const data = response.data
    const list = NewModel.listFromJson(data as any)
    return list
  }
  return null
}
