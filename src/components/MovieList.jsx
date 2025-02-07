import MovieCard from "./MovieCard"

const MovieList = ({ movies, name }) => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">{name}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {movies.map(movie => (
          <MovieCard key={movie.id} data={movie} />
        ))}
      </div>
    </section>
  )
}

export default MovieList