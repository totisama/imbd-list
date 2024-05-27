import { type SearchParams, type Movie } from '@/types'

export const useMovies = async (searchParams: SearchParams) => {
  const res = await fetch(
    'https://raw.githubusercontent.com/theapache64/top250/master/top250_min.json?authuser=1'
  )
  let movies: Movie[] = await res.json()
  const { sort, name, genre } = searchParams

  if (name !== undefined && name !== '') {
    movies = movies.filter((movie) =>
      movie.name.toLocaleLowerCase().startsWith(name.toLocaleLowerCase())
    )
  }

  if (genre !== undefined && genre !== '') {
    movies = movies.filter((movie) => movie.genre.includes(genre))
  }

  if (sort === 'true') {
    movies.sort((a, b) => a.rating - b.rating)
  }

  return { movies }
}
