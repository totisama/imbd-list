export interface Movie {
  actors: string[]
  desc: string
  directors: string[]
  genre: string[]
  image_url: string
  thumb_url: string
  imdb_url: string
  name: string
  rating: number
  year: number
}

export interface SearchParams {
  sort?: string
  name?: string
  genre?: string
}
