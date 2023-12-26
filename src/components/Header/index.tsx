import { HTMLAttributes } from 'react';
import styles from './header.module.scss'

interface HeaderProps extends HTMLAttributes<HTMLElement> {}

const Header: React.FC<HeaderProps> = ({ ...rest }) => {
  return (
    <header {...rest} className={styles.header}>
      <div className={styles.content}>
        <p>
          header
          header
          header
          header
          header
          header
          header
          header
          header
          header
          header
          header
          header
          header
          header
          header
          header
          header
          header
          header
          header
        </p>
      </div>
    </header>
  )
}

export default Header;
