import styles from '../../styles/Banner.module.css';

import MiniSlider from './MiniSlider';

// IMAGE IMPORT
import Image from 'next/image';

 // <Image src="/images/slide1.png" width={1335} height={428}/>


function Banner(props) {
  
  const sliderOn = props.sliderOn

  return (
   
    <div className='flex justify-center items-end h-full rounded-t-lg bg-cover bg-no-repeat' style={{ backgroundImage: "url('/images/slide1.jpg')" }}>
      <div className='grid grid-cols-1 sm:grid-cols-3 pr-1 sm:pt-0 select-none '>

      <div className='sm:col-span-1 flex flex-col justify-end sm:justify-end items-end order-2 sm:order-1'>
      {sliderOn && <Image src={`/images/events/${props.imageBanner}`} width={400} height={326} />}
    </div>

        {/* desktop */}
        <div className='hidden sm:visible sm:col-span-2 sm:flex justify-center text-center items-center flex-col sm:mb-0 sm:order-2'>
          <div className='drop-shadow-md text-4xl uppercase font-extrabold'>{props.title}</div>
          <div className='drop-shadow-md text-2xl uppercase font-medium'>{props.subtitle}</div>
        </div>
        {/* mobile */}
        <div className='sm:hidden 2 flex justify-end text-center items-center flex-col h-40 order-1 pt-10'>
          <div className='drop-shadow-md text-4xl uppercase font-extrabold'>{props.title}</div>
          <div className='drop-shadow-md text-2xl uppercase font-medium pt-2'>{props.subtitle}</div>
        </div>
      </div>
    </div>
      




  );
}

export default Banner;
