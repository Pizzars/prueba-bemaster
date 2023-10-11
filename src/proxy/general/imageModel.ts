interface Format {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: string | null
  size: number
  width: number
  height: number
}

interface Formats {
  large: Format
  small: Format
  medium: Format
  thumbnail: Format
}

export class ImageModel {
  name: string
  alternativeText: string | null
  caption: string | null
  width: number
  height: number
  formats: Formats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: string | null
  provider: string
  provider_metadata: any | null
  createdAt: Date
  updatedAt: Date

  constructor(
    name: string,
    alternativeText: string | null,
    caption: string | null,
    width: number,
    height: number,
    formats: Formats,
    hash: string,
    ext: string,
    mime: string,
    size: number,
    url: string,
    previewUrl: string | null,
    provider: string,
    provider_metadata: any | null,
    createdAt: Date,
    updatedAt: Date
  ) {
    this.name = name
    this.alternativeText = alternativeText
    this.caption = caption
    this.width = width
    this.height = height
    this.formats = formats
    this.hash = hash
    this.ext = ext
    this.mime = mime
    this.size = size
    this.url = url
    this.previewUrl = previewUrl
    this.provider = provider
    this.provider_metadata = provider_metadata
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }
  static listFromJson(json: any[]): ImageModel[] {
    const list = json.map(obj => ImageModel.fromJson(obj.attributes))
    return list
  }
  static fromJson(json: any): ImageModel {
    return new ImageModel(
      json.name,
      json.alternativeText || null,
      json.caption || null,
      json.width,
      json.height,
      json.formats,
      json.hash,
      json.ext,
      json.mime,
      json.size,
      json.url,
      json.previewUrl || null,
      json.provider,
      json.provider_metadata || null,
      new Date(json.createdAt),
      new Date(json.updatedAt)
    )
  }
}
