import { getData } from 'src/proxy/BackendREST'
import { PodcastModel } from './podcastModel'

export const getPodcasts = async (page = 1): Promise<PodcastModel[] | null> => {
  const response = await getData(`podcasts`, {
    'pagination[page]': page,
    'sort[0]': 'createdAt:desc',
    'populate[0]': 'square_image',
    'populate[1]': 'banner_image',
    'populate[2]': 'artists'
  })
  if (response.statusCode == 200) {
    const data = response.data.data
    const list = PodcastModel.listFromJson(data as any)
    return list
  }
  return null
}
