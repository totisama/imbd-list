import { type Movie } from '@/types'
import { MovieCard } from '@/components/MovieCard'
import { Filters } from '@/components/Filters'

export default async function Home ({ searchParams }: { searchParams: { sort?: string, name?: string } }) {
  let movies: Movie[] = await fetch(
    'https://raw.githubusercontent.com/theapache64/top250/master/top250_min.json?authuser=1'
  ).then(async (res) => await res.json())
  const { sort, name } = searchParams

  if (sort === 'true') {
    movies.sort((a, b) => a.rating - b.rating)
  }

  if (name !== undefined && name !== '') {
    movies = movies.filter((movie) => movie.name.toLocaleLowerCase().startsWith(name.toLocaleLowerCase()))
  }

  return (
    <main className="flex min-h-screen flex-col items-center py-20">
      <h1 className="text-5xl text-green-500">IMDB 250 List</h1>
      <section className="w-4/5 mt-8">
        <Filters searchParams={searchParams} />
        <ul className="flex justify-center flex-wrap gap-5">
          {movies.map((movie, index) => (
            <MovieCard key={movie.name} movie={movie} index={index} />
          ))}
        </ul>
      </section>
    </main>
  )
}
