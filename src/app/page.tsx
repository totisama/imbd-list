import { type SearchParams } from '@/types'

import { MovieCard } from '@/components/MovieCard'
import { Filters } from '@/components/Filters'
import { useMovies } from '@/hooks/useMovies'

interface HomeProps {
  searchParams: SearchParams
}

export default async function Home ({ searchParams }: HomeProps) {
  const { movies } = await useMovies(searchParams)

  return (
    <main className="flex min-h-screen flex-col items-center py-10">
      <section className="w-4/5 mt-8">
        <Filters searchParams={searchParams} />
        <ul className="flex justify-center flex-wrap gap-5">
          {movies.map((movie, index) => (
            <MovieCard key={movie.name} movie={movie} index={index} seen={true} />
          ))}
        </ul>
      </section>
    </main>
  )
}
