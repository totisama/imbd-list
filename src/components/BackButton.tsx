import Link from 'next/link'

export const BackButton = () => {
  return <Link className='bg-gray-700 p-3 rounded-3xl transition-all duration-400 ease-in-out hover:bg-gray-800' href='/'>Back</Link>
}
