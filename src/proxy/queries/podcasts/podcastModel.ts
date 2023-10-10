import { ArtistModel } from '../artists/artistModel'
import { EventModel } from '../events/eventModel'
import { NewModel } from '../news/newModel'

export class PodcastModel {
  title: string
  subtitle: string
  square_image: string
  banner_image: string
  active: boolean
  description_en: string
  url: string
  platform: string
  type: string
  artwork: boolean
  autoplay: boolean
  height: number
  artists: ArtistModel[]
  color: string
  id_migration: number
  description_es: string
  tags: string
  events: EventModel[]
  news: NewModel[]

  constructor(
    title: string,
    subtitle: string,
    square_image: string,
    banner_image: string,
    active: boolean,
    description_en: string,
    url: string,
    platform: string,
    type: string,
    artwork: boolean,
    autoplay: boolean,
    height: number,
    artists: ArtistModel[],
    color: string,
    id_migration: number,
    description_es: string,
    tags: string,
    events: EventModel[],
    news: NewModel[]
  ) {
    this.title = title
    this.subtitle = subtitle
    this.square_image = square_image
    this.banner_image = banner_image
    this.active = active
    this.description_en = description_en
    this.url = url
    this.platform = platform
    this.type = type
    this.artwork = artwork
    this.autoplay = autoplay
    this.height = height
    this.artists = artists
    this.color = color
    this.id_migration = id_migration
    this.description_es = description_es
    this.tags = tags
    this.events = events
    this.news = news
  }

  static fromJson(json: any): PodcastModel {
    return new PodcastModel(
      json.title,
      json.subtitle,
      json.square_image,
      json.banner_image,
      json.active,
      json.description_en,
      json.url,
      json.platform,
      json.type,
      json.artwork,
      json.autoplay,
      json.height || 0,
      json.artists || [],
      json.color,
      json.id_migration || 0,
      json.description_es,
      json.tags,
      json.events || [],
      json.news || []
    )
  }
}
