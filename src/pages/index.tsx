import React, { useState } from "react";
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
import MovieDetail from "../components/MovieDetail";

import styles from "../styles/index.module.scss";

export default function Home() {
  const [movieTitle, setMovieTitle] = useState("");
  const [showMovieDetail, setShowMovieDetail] = useState(false);

  // Função intermediária para adaptar o tipo do evento onChange
  const handleInputChange = (event: Ui5CustomEvent<InputDomRef, never>) => {
    // Fazer algo com o evento se necessário
    setMovieTitle(event.target.value || "");
  };

  const handleSearchClick = (
    event: React.MouseEvent<ButtonDomRef, globalThis.MouseEvent>
  ) => {
    event.preventDefault();
    // Adicione lógica adicional para lidar com a busca, se necessário.
    setShowMovieDetail(true);
  };

  const handleResetClick = (
    event: React.MouseEvent<ButtonDomRef, globalThis.MouseEvent>
  ) => {
    event.preventDefault();
    setMovieTitle("");
    setShowMovieDetail(false);
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

          <form className={styles.movieSearchBar}>
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
                suppressHydrationWarning={true}
              >
                Search
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

          {showMovieDetail && <MovieDetail />}
        </div>
      </div>
    </ThemeProvider>
  );
}
