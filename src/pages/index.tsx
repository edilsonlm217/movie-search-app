import { Title, Text, ThemeProvider, FlexBox, FlexBoxDirection, Input, Button, ButtonType } from '@ui5/webcomponents-react'

import styles from '../styles/index.module.scss'

export default function Home() {
  return (
    <ThemeProvider>
      <div className={styles.pageContainer}>
        <div className={styles.content}>
          <Title id="page-title" level="H3" className={styles.pageTitle}>
            Title
          </Title>
          
          <Text id="page-description" className={styles.pageDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laborum nobis itaque deserunt ipsa voluptate inventore minima voluptas voluptatibus tempora sed?
          </Text>

          <form className={styles.movieSearchBar}>
            <Input
              id="movie-title-input" 
              placeholder="Digite o título do filme"
              className={styles.movieTitleInput}
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
              >Search</Button>
              
              <Button 
                id="reset-button" 
                className={styles.resetButton} 
                type={ButtonType.Reset}
                design="Transparent" 
              >Reset</Button>
            </FlexBox>
          </form>
        </div>
      </div>
    </ThemeProvider>
  )
}
