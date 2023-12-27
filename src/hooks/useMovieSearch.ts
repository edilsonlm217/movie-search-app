import { useState } from 'react';
import axios from 'axios';
import { Movie } from '../types/Movie';

interface MovieSearchResult {
  loading: boolean;
  error: string | null;
  movieData: Movie | null;
  searchMovie: (title: string) => Promise<void>;
  resetMovieData: () => void;
}

const useMovieSearch = (): MovieSearchResult => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [movieData, setMovieData] = useState<Movie | null>(null);

  const searchMovie = async (title: string) => {
    setLoading(true);

    try {
      const response = await axios.get(`http://localhost:3001/movie/search?title=${encodeURIComponent(title)}`);
      setMovieData(response.data);
      setError(null);
    } catch (error) {
      console.error(error);
      setError('Error fetching movie data');
    } finally {
      setLoading(false);
    }
  };

  const resetMovieData = () => {
    setMovieData(null);
  };

  return { loading, error, movieData, searchMovie, resetMovieData };
};

export default useMovieSearch;
