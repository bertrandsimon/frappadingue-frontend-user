import styles from '../../styles/TitleSingleEvent.module.css';

import Image from 'next/image';
import Button from '@mui/material/Button';

import { formatDate } from '../utilities/helpers';



function TitleSingleEvent( {event} ) {
  
  //console.log('event props in TitleSingleEvent : ', event)

  return (
   
    <div className='w-full flex container'>

      <div className='flex-col gap-10 items-start h-full w-100px pl-8 -mt-20'>

        <Image className='rounded-md' src="/images/events/event-thumb1.jpg" width={270} height={346}/>
     
        <div className='mt-4'> <span className='yellow pr-4'>Date: </span><span>{formatDate(event.date)}</span></div>
        <div className='mt-2'> <span className='yellow pr-4'>Horaire: </span><span>{event.start_hour}</span></div>
        <div className='mt-2'> <span className='yellow pr-4'>Lieu: </span><span>{event.location} </span></div>

      </div>

      <div className='flex-col w-full'>
        <div className='flex pl-10 pt-10'>
          <div className='mr-2'><span className='text-3xl'>{event.name}</span></div>
          <div><span className='yellow text-3xl'>{event.location} ({event.zip_code})</span></div>
          <br />
          
        </div>

        <div className='pl-10 pt-4 text-gray-500'>
          <span>Edition {event.year}</span>
        </div>

        <div className='flex flex-col sm:flex-row pl-10 pt-10 justify-between items-center max-w-3xl'>

          <Button variant="outlined" className='whiteBtn'>Inscription</Button>

          <div className={styles.yellowBlock}>
            <div className='font-poppins font-bold'>Format S : 5 à 6 kms</div>
            <div className='pt-2 text-xs'>15 obstacles | à partir de 16 ans</div>  
          </div>

          <div className={styles.yellowBlock}>
            <div className='font-poppins font-bold'>Format L : 10 à 12 kms</div>
            <div className='pt-2 text-xs'>40 obstacles | à partir de 16 ans</div>  
          </div>

         

        </div>
      </div>
   



    </div>
      
  );
}

export default TitleSingleEvent;
