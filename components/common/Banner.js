import styles from '../../styles/Banner.module.css';

// IMAGE IMPORT
import Image from 'next/image';

 // <Image src="/images/slide1.png" width={1335} height={428}/>


function Banner() {
  return (
   
    <div className={styles.container}>
      <div className='grid grid-cols-3 gap-4 w-full'>
        <div className='col-span-1'>TEST</div>
        <div className='col-span-2'>TEST</div>
      </div>
    </div>
      
  );
}

export default Banner;
