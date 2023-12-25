import { HTMLAttributes } from 'react';
import styles from './footer.module.scss'

interface FooterProps extends HTMLAttributes<HTMLElement> {}

const Footer: React.FC<FooterProps> = ({ ...rest }) => {
  return (
    <footer {...rest} className={styles.footer}>
      <p>footer</p>
    </footer>
  )
}

export default Footer;

