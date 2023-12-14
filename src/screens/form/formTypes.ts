import { SelectListParams } from '../components/inputs/Select'

export interface booking {
  artist: string
  date: Date
  aditionalInformation?: string
}

export interface promoter {
  firstName: string
  lastName: string
  email: string
  company: string
  country: string
  city: string
  state: string
  website: string
  tax: string
}

export interface venue {
  company: string
  country: string
  city: string
  state: string
  website: string
  facebook: string
  capacity: number
  doorsOpen: string
  doorsClose: string
}
export interface event {
  name: string
}

export interface FormRequest {
  booking: booking
  promoter: promoter
  venue: venue
  event: event
}

export interface inputForm {
  name: string
  label: string
  type: number
  placeholder?: string
  options?: SelectListParams[]
}
