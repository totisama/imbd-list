export default function MoviePage ({ params: { movieName } }: { params: { movieName: string } }) {
  return (
    <h1>{movieName}</h1>
  )
}
