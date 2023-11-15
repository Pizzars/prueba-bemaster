import { ImageModel } from '../general/imageModel'

export class AboutModel {
  title_en: string
  title_es: string
  bio_en: string
  bio_es: string
  email_press: string
  email_inquiries: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  logos: ImageModel[] | null

  constructor(
    title_en: string,
    title_es: string,
    bio_en: string,
    bio_es: string,
    email_press: string,
    email_inquiries: string,
    logos: ImageModel[] | null,
    createdAt: Date,
    updatedAt: Date,
    publishedAt: Date
  ) {
    this.title_en = title_en
    this.title_es = title_es
    this.bio_en = bio_en
    this.bio_es = bio_es
    this.email_press = email_press
    this.email_inquiries = email_inquiries
    this.logos = logos
    this.createdAt = createdAt
    this.updatedAt = updatedAt
    this.publishedAt = publishedAt
  }

  static fromJson(json: any): AboutModel {
    // const logos = json.logos ? ImageModel.listFromJson(json.logos.data) : []
    return new AboutModel(
      json.title_en,
      json.title_es,
      json.bio_en,
      json.bio_es,
      json.email_press,
      json.email_inquiries,
      // logos,
      json.logos,
      new Date(json.createdAt),
      new Date(json.updatedAt),
      new Date(json.publishedAt)
    )
  }
}
