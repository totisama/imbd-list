import { type Movie } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

interface MovieCardProps { movie: Movie, index: number }

export const MovieCard = ({ movie, index }: MovieCardProps) => {
  const { name, image_url: image, year, rating } = movie
  const href = `/movie/${name.replaceAll(' ', '-')}`

  return (
    <li className='group relative flex w-44 flex-col items-center rounded-md bg-gray-600 lg:w-60' key={name}>
      <Link className='py-3 max-w-44 lg:max-w-60 hover:cursor-pointer' href={href}>
        <Image className='px-2' priority={index <= 10 } src={image} width={500} height={500} alt={`${name} image`} />
        <div className='py-5 hidden absolute bottom-0 text-center transition-all ease-in-out duration-300 bg-gray-800/95 w-full group-hover:block'>
          <h2 className='text-xl'>{name}</h2>
          <div className='flex flex-col gap-0 justify-center lg:gap-5 lg:flex-row'>
            <h3 className='text-lg'>Year: <span className='text-green-500'>{year}</span></h3>
            <h3 className='text-lg'>Rating: <span className='text-green-500'>{rating}</span></h3>
          </div>
        </div>
      </Link>
    </li>
  )
}
