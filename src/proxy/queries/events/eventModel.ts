import { ImageModel } from 'src/proxy/queries/general/imageModel'
import { ArtistModel } from '../artists/artistModel'
import { PodcastModel } from '../podcasts/podcastModel'

export class EventModel {
  id: number
  artists: ArtistModel[]
  name: string
  image: ImageModel | null
  description_en: string
  description_es: string
  tags: string
  podcasts: PodcastModel[]
  place: string
  city: string
  country: string
  date: Date
  id_migration: number

  constructor(
    id: number,
    artists: ArtistModel[],
    name: string,
    image: ImageModel | null,
    description_en: string,
    description_es: string,
    tags: string,
    podcasts: PodcastModel[],
    place: string,
    city: string,
    country: string,
    date: Date,
    id_migration: number
  ) {
    this.id = id
    this.artists = artists
    this.name = name
    this.image = image
    this.description_en = description_en
    this.description_es = description_es
    this.tags = tags
    this.podcasts = podcasts
    this.place = place
    this.city = city
    this.country = country
    this.date = date
    this.id_migration = id_migration
  }

  static listFromJson(json: any[]): EventModel[] {
    const list = json.map(obj => EventModel.fromJson(obj))
    return list
  }

  static fromJson(data: any): EventModel {
    const json = data.attributes
    const id = data.id

    const image = json.square_image ? ImageModel.fromJson(json.image.data) : null

    const podcasts =
      json.podcasts && json.podcasts.data ? PodcastModel.listFromJson(json.podcasts.data) : []

    return new EventModel(
      id,
      json.artists || [],
      json.name,
      image,
      json.description_en,
      json.description_es,
      json.tags,
      podcasts || [],
      json.place,
      json.city,
      json.country,
      new Date(json.date),
      json.id_migration || 0
    )
  }
}
