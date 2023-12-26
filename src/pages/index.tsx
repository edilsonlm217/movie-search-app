import { Title, Text, ThemeProvider } from '@ui5/webcomponents-react'

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
        </div>
      </div>
    </ThemeProvider>
  )
}
