import styles from '../../styles/Banner.module.css';

import MiniSlider from './MiniSlider';

// IMAGE IMPORT
import Image from 'next/image';

 // <Image src="/images/slide1.png" width={1335} height={428}/>


function Banner(props) {
  
  const sliderOn = props.sliderOn

  return (
   
    <div className={styles.container}>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 pr-1 h-96 sm:h-80 sm:m-1 mb-20 sm:pt-0'>
        <div className='sm:col-span-1 flex justify-end items-center h-full sm:justify-end sm:h-full mt-14 lg:mt-0 sm:mt-0 '> {sliderOn ? <MiniSlider /> : <div style={{ width: '500px' }}></div>}</div>
        {/* desktop */}
        <div className='hidden sm:visible sm:col-span-2 sm:flex justify-center text-center items-center flex-col mb-20 sm:mb-0'>
          <div className='drop-shadow-md text-4xl uppercase font-extrabold'>{props.title}</div>
          <div className='drop-shadow-md text-2xl uppercase font-medium'>{props.subtitle}</div>
        </div>
        {/* mobile */}
        <div className='sm:hidden 2 flex justify-end text-center items-center flex-col mb-20 h-40'>
          <div className='drop-shadow-md text-4xl uppercase font-extrabold'>la frappadingue</div>
          <div className='drop-shadow-md text-2xl uppercase font-medium'>accessible à tous sans exception</div>
        </div>
      </div>
    </div>
      




  );
}

export default Banner;
