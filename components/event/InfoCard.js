// import styles from '../../styles/InfoCard.module.css';

// IMAGE IMPORT
import Image from 'next/image';

import Button from '@mui/material/Button';

function InfoCard(props) {
  
  const bullets = props.bulletPoints.map((bullet) => (<li>{bullet}</li>))

  return (
   
    <div>

    <h1>INFOS CARD {}</h1>
    {props.title}
    {props.description}
    {props.img}
    {bullets}
    </div>
      
  );
}

export default InfoCard;
