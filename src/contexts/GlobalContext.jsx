import { createContext, useState } from "react";
import axios from "axios";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({});

  const fetchMovies = async () => {
    try {
      const { data } = await axios.get(apiUrl);
      setMovies(data);
    } catch (err) {
      console.error(err);
    }
  }

  const fetchMovie = async (id, redirect) => {
    try {
      const { data } = await axios.get(`${apiUrl}/${id}`);
      setMovie(data);
    } catch (err) {
      console.error(err);
      redirect();
    }
  }
  const value = {
    fetchMovies,
    movies,
    fetchMovie,
    movie
  };

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  )
}