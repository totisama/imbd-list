'use client'

import { CheckIcon } from '@/icons'
import { type Movie } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'

interface MovieCardProps { movie: Movie, index: number, seen: boolean }

export const MovieCard = ({ movie, index, seen }: MovieCardProps) => {
  const { name, image_url: image, year, rating } = movie
  const href = `/movie/${encodeURIComponent(name.replaceAll(' ', '-'))}`
  const [error, setError] = useState(false)

  return (
    <motion.li
      key={name}
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.75 }}
      className='group relative flex w-44 flex-col items-center rounded-md bg-gray-600 lg:w-60'
    >
      <Link className='py-3 max-w-44 lg:max-w-60 hover:cursor-pointer' href={href}>
        <Image
          src={error ? '/notFound.png' : image}
          alt={`${name} image`}
          width={500}
          height={500}
          priority={index <= 10}
          onError={(e) => { setError(true) }}
          className='px-2'
        />
        <div className='py-5 hidden absolute bottom-0 text-center transition-all ease-in-out duration-300 bg-gray-800/95 w-full group-hover:block'>
          {seen && <span className='absolute top-0 left-0'><CheckIcon className='w-8 h-8' /></span>}
          <h2 className='text-xl'>{name}</h2>
          <div className='flex flex-col gap-0 justify-center lg:gap-5 lg:flex-row'>
            <h3 className='text-lg'>Year: <span className='text-green-500'>{year}</span></h3>
            <h3 className='text-lg'>Rating: <span className='text-green-500'>{rating}</span></h3>
          </div>
        </div>
      </Link>
    </motion.li>
  )
}
