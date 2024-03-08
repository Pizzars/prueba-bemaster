interface Links {
  name: string // Nombre que representa el link
  url: string // Url donde se encuntra la información
}

export interface DataModel {
  id: string
  name: string
  image: string
  description: string
  videos: Links[]
  definition: string
  links: Links[]
}
