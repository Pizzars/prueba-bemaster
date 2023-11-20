import { ImageModel } from 'src/proxy/queries/general/imageModel'
import { ArtistModel } from '../artists/artistModel'
import { EventModel } from '../events/eventModel'
import { NewModel } from '../news/newModel'

export class PodcastModel {
  id: number
  title: string | null
  subtitle: string | null
  square_image: ImageModel | null
  banner_image: ImageModel | null
  active: boolean
  description_en: string | null
  url: string | null
  platform: string | null
  type: string | null
  artwork: boolean | null
  autoplay: boolean | null
  height: number | null
  artists: ArtistModel[] | null
  color: string | null
  id_migration: number | null
  description_es: string | null
  tags: string | null
  events: EventModel[] | null
  news: NewModel[] | null

  constructor(
    id: number,
    title: string | null,
    subtitle: string | null,
    square_image: ImageModel | null,
    banner_image: ImageModel | null,
    active: boolean,
    description_en: string | null,
    url: string | null,
    platform: string | null,
    type: string | null,
    artwork: boolean | null,
    autoplay: boolean | null,
    height: number | null,
    artists: ArtistModel[] | null,
    color: string | null,
    id_migration: number | null,
    description_es: string | null,
    tags: string | null,
    events: EventModel[] | null,
    news: NewModel[] | null
  ) {
    this.id = id
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

  static listFromJson(json: any[]): PodcastModel[] {
    const list = json.map(obj => PodcastModel.fromJson(obj))
    return list
  }

  static fromJson(data: any): PodcastModel {
    const json = data
    const id = data.id

    // const square_image = json.square_image
    //   ? ImageModel.fromJson(json.square_image.data.attributes)
    //   : null
    // const banner_image = json.banner_image
    //   ? ImageModel.fromJson(json.banner_image.data.attributes)
    //   : null

    const artists = json.artists ? ArtistModel.listFromJson(json.artists) : null

    return new PodcastModel(
      id,
      json.title,
      json.subtitle,
      // square_image,
      // banner_image,
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
      artists || [],
      json.color,
      json.id_migration || 0,
      json.description_es,
      json.tags,
      [],
      []
    )
  }
}
