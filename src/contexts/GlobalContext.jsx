import { createContext, useState } from "react";
import axios from "axios";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const { data } = await axios.get(apiUrl);
      setMovies(data);
    } catch (err) {
      console.error(err);
    }
  }
  const value = {
    fetchMovies,
    movies
  };

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  )
}