import EventsCardsGrid from '../event/EventsCardsGrid';


// IMAGE IMPORT
import Image from 'next/image';
import Link from 'next/link';

import Button from '@mui/material/Button';


function CardsArea( {eventsCount} ) {
  return (  
    

    <div className="grid grid-cols-1 sm:grid-cols-4 justify-center pt-20 mt-20 sm:-mt-16 sm:pt-0 pr-8 pl-8">

    <div className="col-span-1 w-full sm:basis-1/4 text-center mx-auto flex flex-column items-center justify-center pb-6" height={346}>
    
    
    
    <div className='flex flex-col justify-center items-center gap-4 pt-20'>
    <Image src="/images/events/boy.png" width={465} height={491} alt="courses" />


    <div className='flex flex-col justify-center items-center gap-2'>
      <div>   <span className="text-xl">Les prochaines </span>
      <span className='text-[#ffe500] text-xl'>courses</span></div>
     
        <br />
          <Button variant="outlined" className='whiteBtn'>
            
            <Link href="/CoursesPage">toutes les courses</Link>
          </Button>
      </div>
    </div>
    </div>
    <div className='col-span-3 pb-10'><EventsCardsGrid eventsCount={eventsCount}></EventsCardsGrid></div>
  
  </div>
  


  );
}

export default CardsArea;
