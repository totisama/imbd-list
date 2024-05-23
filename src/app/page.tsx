import { type Movie } from '@/types'
import { MovieCard } from '@/components/MovieCard'

export default async function Home () {
  const movies: Movie[] = await fetch('https://raw.githubusercontent.com/theapache64/top250/master/top250_min.json?authuser=1')
    .then(async (res) => await res.json())

  return (
    <main className="flex min-h-screen flex-col items-center py-20">
      <h1 className="text-5xl text-green-500">IMDB 250 List</h1>
      <section className="w-4/5 mt-8">
        <ul className="flex justify-center flex-wrap gap-5">
          {movies.map((movie) => (
            <MovieCard key={movie.name} movie={movie} />
          ))}
        </ul>
      </section>
    </main>
  )
}
