import Image from "next/image";

import {
  Button,
  FlexBox,
  RatingIndicator,
  Text,
  Title,
} from "@ui5/webcomponents-react";

import "@ui5/webcomponents-icons/dist/heart.js";
import styles from "./movie-detail.module.scss";
import { useMovieContext } from "../../contexts/MovieContext";

interface MovieDetailProps {}

const MovieDetail: React.FC<MovieDetailProps> = () => {
  const { movieData } = useMovieContext();

  return (
    <FlexBox
      id="movie-details-container"
      className={styles.movieDetailsContainer}
    >
      <div id="details-container" className={styles.detailsContainer}>
        <Title suppressHydrationWarning={true} level="H2">
          {movieData?.Title}
        </Title>

        <Text>{movieData?.Plot}</Text>

        <Title suppressHydrationWarning={true} level="H3">
          Actor <Text>{movieData?.Actors}</Text>
        </Title>

        <Title suppressHydrationWarning={true} level="H3">
          Review
          <RatingIndicator
            id="rating-indicator"
            className={styles.ratingIndicator}
            suppressHydrationWarning={true}
            value={movieData ? parseFloat(movieData.imdbRating) / 2 : 0}
          />
        </Title>

        <Button
          id="favorite-button"
          className={styles.favoriteButton}
          suppressHydrationWarning={true}
          design="Emphasized"
          icon="heart"
          iconEnd={true}
        >
          Favorite
        </Button>
      </div>
      <div
        id="poster-container"
        className={styles.posterContainer}
        style={{ backgroundImage: `url(${movieData ? movieData.Poster : ""})` }}
      ></div>
    </FlexBox>
  );
};

export default MovieDetail;
