import { getData } from 'src/proxy/BackendREST'
import { NewModel } from './newModel'

export const getNews = async (page = 1): Promise<NewModel[] | null> => {
  const response = await getData(`news`, {
    'pagination[page]': page,
    'sort[0]': 'createdAt:desc',
    'populate[0]': 'images'
  })
  if (response.statusCode == 200) {
    const data = response.data.data
    const list = NewModel.listFromJson(data as any)
    return list
  }
  return null
}
