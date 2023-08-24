import styles from '../../styles/ArgumentCard.module.css';

// IMAGE IMPORT
import Image from 'next/image';

function ArgumentCard(props) {
  
  return (
    <div className="p-10 bg-cover bg-no-repeat bg-center sm:h-70 h-full" style={{ backgroundImage: "url('/images/argument-bg.jpg')" }}>
      <div>
        <p className='up text-center sm:text-left pb-6 h-full text-1xl'><span className='text-yellow-400'>{props.title1}</span> {props.title2}</p> 
      </div>
      <div>
        <span className="whitespace-pre-line font-light leading-8">{props.content}</span>
      </div>
      
    </div>
  );
}

export default ArgumentCard;
