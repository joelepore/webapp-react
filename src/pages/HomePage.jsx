import { useContext, useEffect } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import MovieList from "../components/MovieList";

const HomePage = () => {
  const { fetchMovies, movies } = useContext(GlobalContext);

  // Fetch movies on component mount
  useEffect(() => {
    const fetchData = async () => {
      fetchMovies();
    }

    fetchData();
  }, []);

  return (
    <div>
      <MovieList movies={movies} name="Film popolari" />
    </div>
  )
}

export default HomePage