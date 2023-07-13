import styles from '../../styles/Editorial.module.css';

// IMAGE IMPORT
import Image from 'next/image';

// FONT AWESOME IMPORT EXAMPLE
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';




function Editorial() {
  return (
    <div>
      <h1 className={styles.title}>Editorial</h1>
    </div>
  );
}

export default Editorial;
