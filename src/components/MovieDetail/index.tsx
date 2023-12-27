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

interface MovieDetailProps {}

const MovieDetail: React.FC<MovieDetailProps> = () => {
  return (
    <FlexBox
      id="movie-details-container"
      className={styles.movieDetailsContainer}
    >
      <div id="details-container" className={styles.detailsContainer}>
        <Title suppressHydrationWarning={true} level="H2">
          Movie Title
        </Title>

        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis neque
          reprehenderit aliquam praesentium obcaecati earum eaque voluptatum,
          nulla ab atque accusantium culpa repellat aspernatur voluptas
          corrupti, numquam similique minus blanditiis.
        </Text>

        <Title suppressHydrationWarning={true} level="H3">
          Actor <Text>Lorem Ipsum</Text>
        </Title>

        <Title suppressHydrationWarning={true} level="H3">
          Review
          <RatingIndicator
            id="rating-indicator"
            className={styles.ratingIndicator}
            suppressHydrationWarning={true}
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
      <div id="poster-container" className={styles.posterContainer}>
        <Image
          src="https://fastly.picsum.photos/id/988/300/477.jpg?hmac=bp3a0RDjimFEDbyaF58F5tFVdA6nyPwmNwrttIph5rw"
          alt="poster"
          width={700}
          height={477}
        />
      </div>
    </FlexBox>
  );
};

export default MovieDetail;
