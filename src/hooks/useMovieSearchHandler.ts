import { useState, FormEvent } from "react";
import { useMovieContext } from "../contexts/MovieContext";
import { Ui5CustomEvent, InputDomRef } from "@ui5/webcomponents-react";

interface UseMovieSearchHandlerProps {
  movieTitle: string;
  handleInputChange: (event: Ui5CustomEvent<InputDomRef, never>) => void;
  handleSearchClick: () => Promise<void>;
  handleResetClick: () => void;
  handleSubmit: (event: FormEvent) => Promise<void>;
}

const useMovieSearchHandler = (): UseMovieSearchHandlerProps => {
  const [movieTitle, setMovieTitle] = useState("");
  const { searchMovie, resetMovieData } = useMovieContext();

  const handleInputChange = (event: Ui5CustomEvent<InputDomRef, never>) => {
    setMovieTitle(event.target.value || "");
  };

  const handleSearchClick = async () => {
    await searchMovie(movieTitle);
  };

  const handleResetClick = () => {
    setMovieTitle("");
    resetMovieData();
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    await searchMovie(movieTitle);
  };

  return {
    movieTitle,
    handleInputChange,
    handleSearchClick,
    handleResetClick,
    handleSubmit,
  };
};

export default useMovieSearchHandler;
