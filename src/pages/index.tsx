import React, { useState, FormEvent } from "react";
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
import axios from "axios";

export default function Home() {
  const [movieTitle, setMovieTitle] = useState("");
  const [showMovieDetail, setShowMovieDetail] = useState(false);

  const handleInputChange = (event: Ui5CustomEvent<InputDomRef, never>) => {
    setMovieTitle(event.target.value || "");
  };

  const handleSearchClick = async (
    event: React.MouseEvent<ButtonDomRef, MouseEvent>
  ) => {
    event.preventDefault();

    try {
      // Faça a requisição HTTP com o título coletado
      const response = await axios.get(
        `http://localhost:3001/movie/search?title=${encodeURIComponent(
          movieTitle
        )}`,
        {
          // Pode adicionar headers se necessário
        }
      );

      // Lógica adicional com a resposta da requisição
      console.log(response.data);

      // Atualiza o estado para mostrar o MovieDetail
      setShowMovieDetail(true);
    } catch (error) {
      console.error(error);
      // Trate o erro conforme necessário
    }
  };

  const handleResetClick = (
    event: React.MouseEvent<ButtonDomRef, MouseEvent>
  ) => {
    event.preventDefault();
    setMovieTitle("");
    setShowMovieDetail(false);
  };

  const handleSubmit = (event: FormEvent) => {
    // Adicione aqui a lógica de manipulação do formulário, se necessário.
    // Por padrão, vamos chamar handleSearchClick
    handleSearchClick(event as any);
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
