// import { ImageModel } from 'src/proxy/queries/general/imageModel'
// import { ArtistModel } from '../artists/artistModel'
// import { PodcastModel } from '../podcasts/podcastModel'

// export class EventModel {
//   id: number
//   artists: ArtistModel[]
//   name: string
//   image: ImageModel | null
//   description_en: string
//   description_es: string
//   tags: string
//   podcasts: PodcastModel[]
//   place: string
//   city: string
//   country: string
//   date: Date
//   id_migration: number

//   constructor(
//     id: number,
//     artists: ArtistModel[],
//     name: string,
//     image: ImageModel | null,
//     description_en: string,
//     description_es: string,
//     tags: string,
//     podcasts: PodcastModel[],
//     place: string,
//     city: string,
//     country: string,
//     date: Date,
//     id_migration: number
//   ) {
//     this.id = id
//     this.artists = artists
//     this.name = name
//     this.image = image
//     this.description_en = description_en
//     this.description_es = description_es
//     this.tags = tags
//     this.podcasts = podcasts
//     this.place = place
//     this.city = city
//     this.country = country
//     this.date = date
//     this.id_migration = id_migration
//   }

//   static listFromJson(json: any[]): EventModel[] {
//     const list = json.map(obj => EventModel.fromJson(obj))
//     return list
//   }

//   static fromJson(data: any): EventModel {
//     const json = data
//     const id = data.id

//     // const image = json.square_image ? ImageModel.fromJson(json.image.data) : null

//     const podcasts = json.podcasts && json.podcasts ? PodcastModel.listFromJson(json.podcasts) : []

//     return new EventModel(
//       id,
//       json.artists || [],
//       json.name,
//       // image,
//       json.square_image,
//       json.description_en,
//       json.description_es,
//       json.tags,
//       podcasts || [],
//       json.place,
//       json.city,
//       json.country,
//       new Date(json.date),
//       json.id_migration || 0
//     )
//   }
// }

interface DateEvent {
  value: string
  day: number
  dayName: string
  month: number
  monthName: string
  year: number
}

interface VenueEvent {
  id: number
  name: string
  street: string
  city: string
  postalCode: string | number
  state: string
  countryCode: string
  country: string
  phone: string
  url: string
  latLng: number[]
}

interface TicketsEvent {
  url: string | null
  onSaleDate: string | null
  soldOut: boolean
}

export interface EventModel {
  id: number
  date: DateEvent
  durationDays: number
  performanceTime: string
  eventName: string
  eventUrl: string | null
  status: {
    id: number
    phase: string
  }
  production: any
  artist: {
    id: number
    name: string
    url: string
  }
  venue: VenueEvent
  tickets: TicketsEvent
}
