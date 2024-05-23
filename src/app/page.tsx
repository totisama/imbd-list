import Image from 'next/image'
import Link from 'next/link'

interface Movie {
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

export default async function Home () {
  const movies: Movie[] = await fetch('https://raw.githubusercontent.com/theapache64/top250/master/top250_min.json?authuser=1')
    .then(async (res) => await res.json())

  return (
    <main className="flex min-h-screen flex-col items-center py-20">
      <h1 className="text-5xl text-green-500">IMDB 250 List</h1>
      <section className="w-4/5 mt-8">
        <ul className="flex justify-center flex-wrap gap-5">
          {movies.map((movie) => (
            <li className='group relative flex w-44 flex-col items-center rounded-md bg-gray-600 lg:w-60' key={movie.name}>
              <Link className='py-3 max-w-44 lg:max-w-60 hover:cursor-pointer' href={`/movie/${movie.name.replaceAll(' ', '-')}`}>
                <Image className='px-2' src={movie.image_url} width={500} height={500} alt={`${movie.name} image`} />
                <div className='py-5 hidden absolute bottom-0 text-center transition-all ease-in-out duration-300 bg-gray-800/95 w-full group-hover:block'>
                  <h2 className='text-xl'>{movie.name}</h2>
                  <div className='flex flex-col gap-0 justify-center lg:gap-5 lg:flex-row'>
                    <h3 className='text-lg'>Year: <span className='text-green-500'>{movie.year}</span></h3>
                    <h3 className='text-lg'>Rating: <span className='text-green-500'>{movie.rating}</span></h3>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
