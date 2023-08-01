import styles from '../../styles/CardsArea.module.css';

// IMAGE IMPORT
import Image from 'next/image';

import Button from '@mui/material/Button';


function CardsArea() {
  return (
    

    <div className="flex flex-wrap flex-row justify-center mt-20 sm:-mt-16 pr-8 pl-8">

    <div className="w-full sm:basis-1/4 text-center mx-auto flex flex-column items-center justify-center pb-6" height={346}>
      <div className={styles.coursesTxt}>
        <h1 className="pb-6">Les prochaines<br /><span className='yellow'>courses</span></h1>
        <Button variant="outlined" className='whiteBtn'>toutes les courses</Button>
      </div>
    </div>
  
    <div className="w-full sm:basis-1/4 mx-auto flex items-center justify-center">
      <Image src="/images/event2.png" width={270} height={346} />
    </div>
  
    <div className="w-full sm:basis-1/4 mx-auto flex items-center justify-center">
      <Image src="/images/event2.png" width={270} height={346} />
    </div>
  
    <div className="w-full sm:basis-1/4 mx-auto flex items-center justify-center">
      <Image src="/images/event2.png" width={270} height={346} />
    </div>
  
  </div>
  
  

    // <div className={styles.container}>
    //   <div className={styles.coursesTxt}>
          
    //     <h1>Les prochaines<br /><span className='yellow'>courses</span></h1>
    //     <Button variant="outlined" className='whiteBtn'>toutes les courses</Button>
       
    //   </div>

    //   <div className={styles.eventCard}>
    //     <Image src="/images/event1.png" width={270} height={346}/>
    //     <span className='yellow'>10 sept 2023</span>
    //     <h3 className='up'>beauvais (60)</h3>
    //     <span className='grey'>2 eme edition</span>
    //   </div>

    //   <div className={styles.eventCard}>
    //     <Image src="/images/event2.png" width={270} height={346}/>
    //     <span className='yellow'>10 sept 2023</span>
    //     <h3 className='up'>beauvais (60)</h3>
    //     <span className='grey'>2 eme edition</span>
    //   </div>

    //   <div className={styles.eventCard}>
    //     <Image src="/images/event3.png" width={270} height={346}/>
    //     <span className='yellow'>10 sept 2023</span>
    //     <h3 className='up'>beauvais (60)</h3>
    //     <span className='grey'>2 eme edition</span>
    //   </div>
     
    // </div>
  );
}

export default CardsArea;
