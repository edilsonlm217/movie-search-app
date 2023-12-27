import React, { useState, FormEvent } from "react";
import useMovieSearch from "../hooks/useMovieSearch";
import MovieDetail from "../components/MovieDetail";
import {
  Title,
  Text,
  ThemeProvider,
  FlexBox,
  FlexBoxDirection,
  Input,
  Button,
  ButtonType,
  ButtonDomRef,
  InputDomRef,
  Ui5CustomEvent,
} from "@ui5/webcomponents-react";

import styles from "../styles/index.module.scss";

export default function Home() {
  const [movieTitle, setMovieTitle] = useState("");
  const [showMovieDetail, setShowMovieDetail] = useState(false);

  const { loading, error, movieData, searchMovie } = useMovieSearch();

  const handleInputChange = (event: Ui5CustomEvent<InputDomRef, never>) => {
    setMovieTitle(event.target.value || "");
  };

  const handleSearchClick = async (
    event: React.MouseEvent<ButtonDomRef, MouseEvent>
  ) => {
    event.preventDefault();
    await searchMovie(movieTitle);
  };

  const handleResetClick = (
    event: React.MouseEvent<ButtonDomRef, MouseEvent>
  ) => {
    event.preventDefault();
    setMovieTitle("");
    setShowMovieDetail(false);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    await searchMovie(movieTitle);
  };

  return (
    <ThemeProvider>
      <div className={styles.pageContainer}>
        <div className={styles.content}>
          <Title
            suppressHydrationWarning={true}
            id="page-title"
            level="H2"
            className={styles.pageTitle}
          >
            Explore Movies
          </Title>

          <Text id="page-description" className={styles.pageDescription}>
            Discover a world of captivating movies. Search for your favorites
            and explore new releases.
          </Text>

          <form
            className={styles.movieSearchBar}
            onSubmit={(e) => handleSubmit(e)}
          >
            <Input
              id="movie-title-input"
              placeholder="Enter movie title"
              className={styles.movieTitleInput}
              value={movieTitle}
              onChange={(e) => handleInputChange(e)}
              suppressHydrationWarning={true}
            />

            <FlexBox
              id="button-container"
              direction={FlexBoxDirection.Row}
              className={styles.movieButtonContainer}
            >
              <Button
                id="search-button"
                className={styles.searchButton}
                type={ButtonType.Submit}
                design="Emphasized"
                onClick={(e) => handleSearchClick(e)}
                disabled={loading}
                suppressHydrationWarning={true}
              >
                {loading ? "Searching..." : "Search"}
              </Button>

              <Button
                id="reset-button"
                className={styles.resetButton}
                type={ButtonType.Reset}
                design="Transparent"
                onClick={(e) => handleResetClick(e)}
                suppressHydrationWarning={true}
              >
                Reset
              </Button>
            </FlexBox>
          </form>

          {loading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          {showMovieDetail && <MovieDetail />}
        </div>
      </div>
    </ThemeProvider>
  );
}
