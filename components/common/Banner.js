import styles from '../../styles/Banner.module.css';

// IMAGE IMPORT
import Image from 'next/image';

 // <Image src="/images/slide1.png" width={1335} height={428}/>


function Banner() {
  return (
   
    <div className={styles.container}>
      <div className='grid grid-cols-3 gap-4 w-full h-full'>
        <div className='col-span-1 flex justify-center items-center'>TEST</div>
        <div className='col-span-2 flex justify-center items-center flex-col drop-shadow-md'>
          <div className={styles.bannerTitle1}>la frappadingue</div>
          <div className={styles.bannerTitle2}>accessible à tous sans exception</div>
          </div>
      </div>
    </div>
      




  );
}

export default Banner;
