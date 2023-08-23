import styles from '../../styles/TitleSingleEvent.module.css';

import { useShoppingCart } from "use-shopping-cart";
import { useState } from "react";

import Image from 'next/image';
import Button from '@mui/material/Button';

import { formatDate } from '../utilities/helpers';



function TitleSingleEvent( {event} ) {
  
  //console.log('event props in TitleSingleEvent : ', event)

  return (
   
    <div className='grid grid-cols-1 gap-4 text-center sm:grid-cols-4 sm:text-left'>
      
      <div className='col-span-1'>

          <div className='flex-col gap-10 items-center sm:items-start h-full w-100px pl-8 -mt-20 '>
         
          <div className='mx-auto flex justify-center'>
            <Image className='rounded-md' src="/images/events/event-thumb1.jpg" width={270} height={346}/>
          </div>
          
          <div className='flex flex-col justify-center items-center'>
            <div className='mt-4'> <span className='yellow pr-4'>Date: </span><span>{formatDate(event.date)}</span></div>
            <div className='mt-2'> <span className='yellow pr-4'>Horaire: </span><span>{event.start_hour}</span></div>
            <div className='mt-2'> <span className='yellow pr-4'>Lieu: </span><span>{event.location} </span></div>
          </div>
        </div>

      </div>

      <div className='col-span-3'>

        <div className='flex-col w-full mt-10 pl-0 sm:pl-10'>
          
          <div className='flex pt-0 sm:justify-start justify-center'>
            <div className='mr-2'><span className='text-2xl sm:text-3xl'>{event.name}</span></div>
            <div><span className='yellow text-2xl sm:text-3xl'>{event.location} ({event.zip_code})</span></div>
            <br />
          </div>

          <div className='pl-10 pt-4 text-gray-500'>
            <span>Edition {event.year}</span>
          </div>

          <div className='pt-4 grid grid-cols-1 sm:grid-cols-3 gap-2'>

            {/* <Button variant="outlined" className='whiteBtn'>Inscription</Button> */}

            <div className={`${styles.yellowBlock} bg-yellow-500 m-4 mt-10 sm:m-0 sm:mt-0`}>
              <div className='font-poppins font-bold'>Format S : 5 à 6 kms</div>
              <div className='pt-2 text-xs'>15 obstacles | à partir de 16 ans</div>  
            </div>

            <div className={`${styles.yellowBlock} bg-yellow-500 m-4 sm:m-0 `}>
              <div className='font-poppins font-bold'>Format L : 10 à 12 kms</div>
              <div className='pt-2 text-xs'>40 obstacles | à partir de 16 ans</div>  
            </div>

            <div className='text-center flex justify-center items-center'>
              <Image src="/images/choice.png" width={131} height={60} />
            </div>

          

          </div>
        </div>

      </div>

      
   



    </div>
      
  );
}

export default TitleSingleEvent;
