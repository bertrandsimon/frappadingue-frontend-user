import styles from '../../styles/ArgumentCard.module.css';

// IMAGE IMPORT
import Image from 'next/image';

function ArgumentCard(props) {
  
  return (
    <div className={styles.container}>
      <p className='up text-center sm:text-left pb-6'><span className='yellow'>{props.title1}</span> {props.title2}</p> 
      <span className={styles.content}>{props.content}</span>
    </div>
  );
}

export default ArgumentCard;
