import { getData } from 'src/proxy/BackendREST'
import { ArtistModel } from './artistModel'

export const getArtists = async (): Promise<ArtistModel[] | null> => {
  const response = await getData('artists', {
    _limit: 200,
    active: true
  })
  if (response.statusCode === 200) {
    const data = response.data
    const list = ArtistModel.listFromJson(data as any)
    const newList = [...list]
    return newList.sort((a, b) => {
      if (a.name < b.name) return -1
      return 1
    })
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
