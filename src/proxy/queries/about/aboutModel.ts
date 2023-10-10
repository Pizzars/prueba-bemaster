export class AboutModel {
  bio_en: string
  bio_es: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date

  constructor(bio_en: string, bio_es: string, createdAt: Date, updatedAt: Date, publishedAt: Date) {
    this.bio_en = bio_en
    this.bio_es = bio_es
    this.createdAt = createdAt
    this.updatedAt = updatedAt
    this.publishedAt = publishedAt
  }

  static fromJson(json: any): AboutModel {
    return new AboutModel(
      json.bio_en,
      json.bio_es,
      new Date(json.createdAt),
      new Date(json.updatedAt),
      new Date(json.publishedAt)
    )
  }
}
