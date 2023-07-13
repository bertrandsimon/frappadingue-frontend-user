import styles from '../../styles/Header.module.css';

// IMAGE IMPORT
import Image from 'next/image';

// FONT AWESOME IMPORT EXAMPLE
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';




function Header() {
  return (
    <div>
      <h1 className={styles.title}>HEADER</h1>
    </div>
  );
}

export default Header;
