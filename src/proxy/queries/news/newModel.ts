import { ImageModel } from 'src/proxy/queries/general/imageModel'
import { ArtistModel } from '../artists/artistModel'
import { PodcastModel } from '../podcasts/podcastModel'

export class NewModel {
  id: number
  title: string
  active: boolean
  featured: boolean
  content_en: string
  content_es: string
  images: ImageModel[]
  videos: string[]
  artists: ArtistModel[]
  id_migration: number
  tags: string
  podcasts: PodcastModel[]

  constructor(
    id: number,
    title: string,
    active: boolean,
    featured: boolean,
    content_en: string,
    content_es: string,
    images: ImageModel[],
    videos: string[],
    artists: ArtistModel[],
    id_migration: number,
    tags: string,
    podcasts: PodcastModel[]
  ) {
    this.id = id
    this.title = title
    this.active = active
    this.featured = featured
    this.content_en = content_en
    this.content_es = content_es
    this.images = images
    this.videos = videos
    this.artists = artists
    this.id_migration = id_migration
    this.tags = tags
    this.podcasts = podcasts
  }

  static listFromJson(json: any[]): NewModel[] {
    const list = json.map(obj => NewModel.fromJson(obj))
    return list
  }

  static fromJson(data: any): NewModel {
    const json = data.attributes
    const id = data.id

    // const images = json.images ? ImageModel.listFromJson(json.images.data) : []

    const podcasts =
      json.podcasts && json.podcasts.data ? PodcastModel.listFromJson(json.podcasts.data) : []
    const artists =
      json.artists && json.artists.data ? ArtistModel.listFromJson(json.artists.data) : []
    return new NewModel(
      id,
      json.title,
      json.active,
      json.featured,
      json.content_en,
      json.content_es,
      // images || [],
      json.images || [],
      json.videos || [],
      artists || [],
      json.id_migration || 0,
      json.tags,
      podcasts || []
    )
  }
}
