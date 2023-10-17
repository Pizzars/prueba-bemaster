import { getData } from 'src/proxy/BackendREST'
import { ArtistModel } from './artistModel'

export const getArtists = async (): Promise<ArtistModel[] | null> => {
  const response = await getData('artists', {
    'pagination[page]': 1,
    'pagination[pageSize]': 100,
    'populate[0]': 'territory',
    'populate[1]': 'image',
    'populate[2]': 'podcasts',
    'populate[3]': 'events'
  })
  const response2 = await getData('artists', {
    'pagination[page]': 2,
    'pagination[pageSize]': 100,
    'populate[0]': 'territory',
    'populate[1]': 'image',
    'populate[2]': 'podcasts',
    'populate[3]': 'events'
  })
  if (response.statusCode === 200 && response2.statusCode === 200) {
    const data = response.data.data
    const data2 = response2.data.data
    const list = [
      ...ArtistModel.listFromJson(data as any),
      ...ArtistModel.listFromJson(data2 as any)
    ]
    return list
  }
  return null
}

export const getArtist = async (id: number): Promise<ArtistModel | null> => {
  const response = await getData(`artists/${id}`, {
    'populate[0]': 'territory',
    'populate[1]': 'image',
    'populate[2]': 'podcasts',
    'populate[3]': 'events'
  })
  if (response.statusCode == 200) {
    const data = response.data.data
    const artist = ArtistModel.fromJson(data as any)
    return artist
  }
  return null
}
