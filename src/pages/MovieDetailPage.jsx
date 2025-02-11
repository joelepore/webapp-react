import { useContext, useEffect } from "react"
import { GlobalContext } from '../contexts/GlobalContext';
import { useNavigate, useParams } from "react-router-dom";
import ReviewsList from "../components/ReviewsList";
import StarsRating from "../components/StarsRating";
import { FaChevronLeft } from "react-icons/fa";

const MovieDetailPage = () => {
  const { fetchMovie, movie } = useContext(GlobalContext);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      fetchMovie(id, () => navigate('/404'));
    }

    fetchData();
  }, []);

  return (
    <>
      <div>
        <FaChevronLeft className="text-3xl mb-6 cursor-pointer" onClick={() => { navigate(-1) }} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <figure>
          <img src={movie.image} alt={movie.title} />
        </figure>
        <div className="space-y-2 pl-6">
          <h1 className="text-3xl font-bold py-2">{movie.title}</h1>
          <p>{movie.abstract}</p>
          <p>Genre: {movie.genre}</p>
          <p>Release year: {movie.release_year}</p>
          <div className="flex items-center gap-2">Average Rating: <StarsRating vote={movie.average_vote} /></div>
          {movie.reviews?.length > 0 && <ReviewsList reviews={movie.reviews} />}
        </div>
      </div>
    </>
  )
}

export default MovieDetailPage