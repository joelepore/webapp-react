import { useNavigate } from "react-router-dom"
import MovieCard from "./MovieCard"

const MovieList = ({ movies, name }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/movies/${id}`);
  }

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">{name}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {movies.map(movie => (
          <MovieCard key={movie.id} data={movie} onClick={() => handleClick(movie.id)} />
        ))}
      </div>
    </section>
  )
}

export default MovieList