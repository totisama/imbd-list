import Link from 'next/link'

export const NavBar = () => {
  return (
    <nav className="flex items-center space-x-16 bg-slate-800 py-3 px-10">
      <h2 className="text-5xl text-green-500">IMDB 250 List</h2>
      <ul>
        <li className='text-2xl hover:underline'>
          <Link href='/'>
            Movies
          </Link>
        </li>
      </ul>
    </nav>
  )
}
