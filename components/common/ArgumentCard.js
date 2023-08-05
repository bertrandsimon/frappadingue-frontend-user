import styles from '../../styles/ArgumentCard.module.css';

// IMAGE IMPORT
import Image from 'next/image';

function ArgumentCard(props) {
  console.log(props)
  return (
    <div className={styles.container}>
      <p className='up'><span className='yellow'>{props.title1}</span> {props.title2}</p> 
      <span className={styles.content}>{props.content}</span>
    </div>
  );
}

export default ArgumentCard;
