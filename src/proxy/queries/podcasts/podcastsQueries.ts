import { getData } from 'src/proxy/BackendREST'
import { PodcastModel } from './podcastModel'

export const getPodcasts = async (page = 1): Promise<PodcastModel[] | null> => {
  const response = await getData(`podcasts`, {
    _start: (page - 1) * 20,
    _sort: 'id:desc',
    _limit: 20
  })
  if (response.statusCode == 200) {
    const data = response.data
    const list = PodcastModel.listFromJson(data as any)
    return list
  }
  return null
}
