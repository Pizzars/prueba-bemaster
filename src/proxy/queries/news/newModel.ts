import { ArtistModel } from '../artists/artistModel'
import { PodcastModel } from '../podcasts/podcastModel'

export class NewModel {
  title: string
  active: boolean
  featured: boolean
  content_en: string
  content_es: string
  images: string[]
  videos: string[]
  artists: ArtistModel[]
  id_migration: number
  tags: string
  podcasts: PodcastModel[]

  constructor(
    title: string,
    active: boolean,
    featured: boolean,
    content_en: string,
    content_es: string,
    images: string[],
    videos: string[],
    artists: ArtistModel[],
    id_migration: number,
    tags: string,
    podcasts: PodcastModel[]
  ) {
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

  static fromJson(json: any): NewModel {
    return new NewModel(
      json.title,
      json.active,
      json.featured,
      json.content_en,
      json.content_es,
      json.images || [],
      json.videos || [],
      json.artists || [],
      json.id_migration || 0,
      json.tags,
      json.podcasts || []
    )
  }
}
