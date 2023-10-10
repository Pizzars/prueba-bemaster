import { EventModel } from '../events/eventModel'
import { NewModel } from '../news/newModel'
import { PodcastModel } from '../podcasts/podcastModel'

export class ArtistModel {
  name: string
  info: string
  territory: string
  image: string
  active: boolean
  description_en: string
  description_es: string
  media: string[]
  beatport: string
  SoundCloud: string
  website: string
  facebook: string
  twitter: string
  youtube: string
  instagram: string
  spotify: string
  last_fm: string
  tumblr: string
  facebook_id: string
  twitter_id: string
  press_kit: string
  artwork: string
  podcasts: PodcastModel[]
  news: NewModel[]
  id_migration: number
  events: EventModel[]

  constructor(
    name: string,
    info: string,
    territory: string,
    image: string,
    active: boolean,
    description_en: string,
    description_es: string,
    media: string[],
    beatport: string,
    SoundCloud: string,
    website: string,
    facebook: string,
    twitter: string,
    youtube: string,
    instagram: string,
    spotify: string,
    last_fm: string,
    tumblr: string,
    facebook_id: string,
    twitter_id: string,
    press_kit: string,
    artwork: string,
    podcasts: PodcastModel[],
    news: NewModel[],
    id_migration: number,
    events: EventModel[]
  ) {
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

  static fromJson(json: any): ArtistModel {
    return new ArtistModel(
      json.name,
      json.info,
      json.territory,
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
      json.podcasts || [],
      json.news || [],
      json.id_migration || 0,
      json.events || []
    )
  }
}
