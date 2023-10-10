import { ArtistModel } from '../artists/artistModel'
import { PodcastModel } from '../podcasts/podcastModel'

export class EventModel {
  artists: ArtistModel[]
  name: string
  image: string | number
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
    artists: ArtistModel[],
    name: string,
    image: string | number,
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

  static fromJson(json: any): EventModel {
    return new EventModel(
      json.artists || [],
      json.name,
      json.image,
      json.description_en,
      json.description_es,
      json.tags,
      json.podcasts || [],
      json.place,
      json.city,
      json.country,
      new Date(json.date),
      json.id_migration || 0
    )
  }
}
