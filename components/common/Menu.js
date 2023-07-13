import styles from '../../styles/Menu.module.css';

// IMAGE IMPORT
import Image from 'next/image';

// FONT AWESOME IMPORT EXAMPLE
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';




function Menu() {
  return (
    <div>
      <h1 className={styles.title}>Menu</h1>
    </div>
  );
}

export default Menu;
