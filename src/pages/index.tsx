import React from "react";
import useMovieSearchHandler from "../hooks/useMovieSearchHandler";
import MovieDetail from "../components/MovieDetail";
import { useMovieContext } from "../contexts/MovieContext";
import {
  Title,
  Text,
  ThemeProvider,
  FlexBox,
  FlexBoxDirection,
  Input,
  Button,
  ButtonType,
} from "@ui5/webcomponents-react";

import styles from "../styles/index.module.scss";

export default function Home() {
  const {
    movieTitle,
    handleInputChange,
    handleSearchClick,
    handleResetClick,
    handleSubmit,
  } = useMovieSearchHandler();

  const { loading, error, movieData } = useMovieContext();

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
                onClick={handleSearchClick}
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
                onClick={handleResetClick}
                suppressHydrationWarning={true}
              >
                Reset
              </Button>
            </FlexBox>
          </form>

          {loading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          {movieData && <MovieDetail />}
        </div>
      </div>
    </ThemeProvider>
  );
}
