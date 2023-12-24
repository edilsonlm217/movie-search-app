import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { FlexBox, FlexBoxDirection } from '@ui5/webcomponents-react'

import styles from '../styles/_app.module.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FlexBox 
      direction={FlexBoxDirection.Column} 
      className={styles.appContainer}
    >
      
      <FlexBox className={styles.headerContainer}>
        <p>header-component goes here</p>
      </FlexBox>
      
      <FlexBox direction={FlexBoxDirection.Column} className={styles.contentContainer}>
        <Component {...pageProps} />
      </FlexBox>
      
      <FlexBox className={styles.footerContainer}>
        <p>footer-component goes here</p>
      </FlexBox>

    </FlexBox>
  );
}
