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
import MovieDetail from "../components/MovieDetail";

import styles from "../styles/index.module.scss";

export default function Home() {
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
                suppressHydrationWarning={true}
                style={{ width: '200px', height: '50px', fontSize: '16px' }}
              >
                Search
              </Button>

              <Button
                id="reset-button"
                className={styles.resetButton}
                type={ButtonType.Reset}
                design="Transparent"
                suppressHydrationWarning={true}
                style={{ width: '100px', height: '50px', fontSize: '16px' }}
              >
                Reset
              </Button>
            </FlexBox>
          </form>

          {true && (
            <MovieDetail></MovieDetail>
          )}
        </div>
      </div>
    </ThemeProvider>
  );
}
