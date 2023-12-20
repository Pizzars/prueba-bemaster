import { SelectListParams } from '../components/inputs/Select'

export interface booking {
  artist: string
  ShowDate1Date: Date
  ShowNote?: string
}

export interface promoter {
  SG2_Contact_FirstName: string
  SG2_Contact_LastName: string
  SG2_Contact_Email: string
  SG2Addressname: string
  SG2AddressCountryId: string
  SG2AddressCity: string
  SG2AddressStateId: string
  SG2_Company_Website: string
  SG2_Company_TaxNumber: string
}

export interface venue {
  SG3Addressname: string
  SG3AddressCountryId: string
  SG3AddressCity: string
  SG3AddressStateId: string
  SG3_Company_Website: string
  facebook: string
  VenueCapacity: number
  DoorsOpenTimeSpan: string
  DoorsCloseTimeSpan: string
}
export interface event {
  EventName: string
}

export interface financial {
  EventOfferAmount: string
  EventOfferCurrency: string
  EventOfferComment: string
}
export interface extra {
  FFLastEventLineUp: string
  FFotheracts: string
}

export interface FormRequest {
  booking: booking
  promoter: promoter
  venue: venue
  event: event
  financial: financial
  extra: extra
}

export interface inputForm {
  name: string
  label: string
  type: number
  placeholder?: string
  options?: SelectListParams[]
}
