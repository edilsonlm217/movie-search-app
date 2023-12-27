import { HTMLAttributes } from "react";
import styles from "./footer.module.scss";

interface FooterProps extends HTMLAttributes<HTMLElement> {}

const Footer: React.FC<FooterProps> = ({ ...rest }) => {
  return (
    <footer {...rest} className={styles.footer}>
      <div className={styles.content}>
        <p>footer</p>
      </div>
    </footer>
  );
};

export default Footer;
