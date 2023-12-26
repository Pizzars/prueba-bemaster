import { ImageModel } from 'src/proxy/queries/general/imageModel'
import { EventModel } from '../events/eventModel'
import { NewModel } from '../news/newModel'
import { PodcastModel } from '../podcasts/podcastModel'

export class ArtistModel {
  id: number
  name: string
  info: string | null
  territory: string | null
  image: ImageModel | null
  active: boolean
  description_en: string | null
  description_es: string | null
  media: string[] | null
  beatport: string | null
  SoundCloud: string | null
  website: string | null
  facebook: string | null
  twitter: string | null
  youtube: string | null
  instagram: string | null
  spotify: string | null
  last_fm: string | null
  tumblr: string | null
  facebook_id: string | null
  twitter_id: string | null
  press_kit: string | null
  artwork: string | null
  podcasts: PodcastModel[] | null
  news: NewModel[] | null
  id_migration: number | null
  events: EventModel[] | null

  constructor(
    id: number,
    name: string,
    info: string | null,
    territory: string | null,
    image: ImageModel | null,
    active: boolean,
    description_en: string | null,
    description_es: string | null,
    media: string[] | null,
    beatport: string | null,
    SoundCloud: string | null,
    website: string | null,
    facebook: string | null,
    twitter: string | null,
    youtube: string | null,
    instagram: string | null,
    spotify: string | null,
    last_fm: string | null,
    tumblr: string | null,
    facebook_id: string | null,
    twitter_id: string | null,
    press_kit: string | null,
    artwork: string | null,
    podcasts: PodcastModel[] | null,
    news: NewModel[] | null,
    id_migration: number | null,
    events: EventModel[] | null
  ) {
    this.id = id
    this.name = name
    this.info = info
    this.territory = territory
    this.image = image
    this.active = active
    this.description_en = description_en
    this.description_es = description_es
    this.media = media
    this.beatport = beatport
    this.SoundCloud = SoundCloud
    this.website = website
    this.facebook = facebook
    this.twitter = twitter
    this.youtube = youtube
    this.instagram = instagram
    this.spotify = spotify
    this.last_fm = last_fm
    this.tumblr = tumblr
    this.facebook_id = facebook_id
    this.twitter_id = twitter_id
    this.press_kit = press_kit
    this.artwork = artwork
    this.podcasts = podcasts
    this.news = news
    this.id_migration = id_migration
    this.events = events
  }

  static listFromJson(json: any[]): ArtistModel[] {
    const list = json.map(obj => ArtistModel.fromJson(obj))
    return list
  }

  static fromJson(data: any): ArtistModel {
    const json = data
    const id = data.id

    // const image = json.image ? ImageModel.fromJson(json.image.data.attributes) : null

    const podcasts =
      json.podcasts && json.podcasts.data ? PodcastModel.listFromJson(json.podcasts.data) : []
    const news = json.news && json.news.data ? NewModel.listFromJson(json.news.data) : []
    // const events = json.events && json.events.data ? EventModel.listFromJson(json.events.data) : []
    const events: any = []

    return new ArtistModel(
      id,
      json.name,
      json.info,
      json.territory,
      // image,
      json.image,
      json.active,
      json.description_en,
      json.description_es,
      json.media,
      json.beatport,
      json.SoundCloud,
      json.website,
      json.facebook,
      json.twitter,
      json.youtube,
      json.instagram,
      json.spotify,
      json.last_fm,
      json.tumblr,
      json.facebook_id,
      json.twitter_id,
      json.press_kit,
      json.artwork,
      podcasts || [],
      news || [],
      json.id_migration || 0,
      events || []
    )
  }
}
