import styles from '../../styles/UserZone.module.css';

// IMAGE IMPORT
import Image from 'next/image';

// FONT AWESOME IMPORT EXAMPLE
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';




function UserZone() {
  return (
    <div>
      <h1 className={styles.title}>UserZone</h1>
    </div>
  );
}

export default UserZone;
