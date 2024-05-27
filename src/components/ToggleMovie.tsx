'use client'

import { useState } from 'react'

export const ToggleMovie = ({ movieName }: { movieName: string }) => {
  const localStorage = window.localStorage
  const item = localStorage.getItem('seenMovies')
  const [movieSeen, setMovieSeen] = useState<boolean>(
    item === null
      ? false
      : JSON.parse(item).includes(movieName) === true
  )

  const addToSeen = () => {
    const seenMovies = localStorage.getItem('seenMovies')
    setMovieSeen(true)

    if (seenMovies === null) {
      localStorage.setItem('seenMovies', JSON.stringify([movieName]))

      return
    }

    const parsedSeenMovies: string[] = JSON.parse(seenMovies)
    parsedSeenMovies.push(movieName)

    localStorage.setItem('seenMovies', JSON.stringify(parsedSeenMovies))
  }

  const removeFromSeen = () => {
    const seenMovies = localStorage.getItem('seenMovies')
    setMovieSeen(false)

    if (seenMovies === null) {
      return
    }

    const parsedSeenMovies: string[] = JSON.parse(seenMovies)
    const newSeenMovies = parsedSeenMovies.filter((seenMovie) => seenMovie !== movieName)

    localStorage.setItem('seenMovies', JSON.stringify(newSeenMovies))
  }

  return (
    <button
      className={`p-2 mb-4 rounded-2xl ${movieSeen ? 'bg-green-400' : 'bg-blue-400'} text-lg text-white transition-all duration-300 ease-in-out hover:scale-105`}
      onClick={movieSeen ? removeFromSeen : addToSeen}
    >
      {movieSeen ? 'Remove movie from seen' : 'Add movie to seen'}
    </button>
  )
}
