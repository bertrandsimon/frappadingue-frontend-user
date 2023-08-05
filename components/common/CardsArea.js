
// IMAGE IMPORT
import Image from 'next/image';
import Link from 'next/link';

import Button from '@mui/material/Button';


function CardsArea() {
  return (
    

    <div className="flex flex-wrap flex-row justify-center pt-20 mt-20 sm:-mt-16 sm:pt-0 pr-8 pl-8">

    <div className="w-full sm:basis-1/4 text-center mx-auto flex flex-column items-center justify-center pb-6" height={346}>
      <div className='pt-10'>
        <p className="pb-2 text-2xl">Les prochaines</p>
        <p className='yellow text-2xl pb-8'>courses</p>
          <Button variant="outlined" className='whiteBtn'>
            <Link href="/CoursesPage">toutes les courses</Link>
          </Button>
      </div>
    </div>
  
    <div className="w-full sm:basis-1/4 mx-auto flex items-center justify-center cursor-pointer max-w-[270px] max-h-[346px] overflow-hidden">
      <Link href="/">
    
          <Image src="/images/event2.png" width={270} height={346}  class="hover:scale-110 transition duration-500 cursor-pointer object-cover"/>
     
      </Link>
    </div>
  
    <div className="w-full sm:basis-1/4 mx-auto flex items-center justify-center">
      <Image src="/images/event2.png" width={270} height={346} />
    </div>
  
    <div className="w-full sm:basis-1/4 mx-auto flex items-center justify-center">
      <Image src="/images/event2.png" width={270} height={346} />
    </div>
  
  </div>
  


  );
}

export default CardsArea;
