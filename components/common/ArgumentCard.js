import styles from '../../styles/ArgumentCard.module.css';

// IMAGE IMPORT
import Image from 'next/image';

function ArgumentCard(props) {
  console.log(props)
  return (
    <div className={styles.container}>
      <h5 className='up'><span className='yellow'>{props.title1}</span> {props.title2}</h5> 
      <span>{props.content}</span>
    </div>
  );
}

export default ArgumentCard;
