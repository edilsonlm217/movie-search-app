import { createContext, useContext, ReactNode, useState } from "react";
import axios from "axios";
import { Movie, MovieResponse } from "../types/Movie";

interface MovieContextProps {
  loading: boolean;
  error: string | null;
  movieData: Movie | null;
  searchMovie: (title: string) => Promise<void>;
  resetMovieData: () => void;
}

const MovieContext = createContext<MovieContextProps | undefined>(undefined);

export const MovieProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [movieData, setMovieData] = useState<Movie | null>(null);

  const searchMovie = async (title: string) => {
    setLoading(true);

    try {
      const response = await axios.get(
        `${baseUrl}/movie/search?title=${encodeURIComponent(title)}`
      );
      const data = response.data as MovieResponse;
      setMovieData(data.movie);
      setError(null);
    } catch (error) {
      console.error(error);
      setError("Error fetching movie data");
    } finally {
      setLoading(false);
    }
  };

  const resetMovieData = () => {
    setMovieData(null);
  };

  const contextValue: MovieContextProps = {
    loading,
    error,
    movieData,
    searchMovie,
    resetMovieData,
  };

  return (
    <MovieContext.Provider value={contextValue}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error("useMovieContext must be used within a MovieProvider");
  }
  return context;
};
