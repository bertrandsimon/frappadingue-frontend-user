import styles from '../../styles/UserZone.module.css';

// IMAGE IMPORT
import Image from 'next/image';

// FONT AWESOME IMPORT EXAMPLE
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import IconButton from '@mui/material/IconButton';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PersonIcon from '@mui/icons-material/Person';



function UserZone() {
  return (
    <div className={styles.container}>
      <IconButton style={{ color: 'white' }} aria-label="Panier" >
        <AddShoppingCartIcon />
      </IconButton>
      <IconButton style={{ color: 'white' }} aria-label="Connexion">
        <PersonIcon />
      </IconButton>
    </div>
  );
}

export default UserZone;
