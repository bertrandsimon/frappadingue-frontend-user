import styles from '../../styles/MiniSlider.module.css';

import { useState } from 'react';
// IMAGE IMPORT
import Image from 'next/image';

 // <Image src="/images/slide1.png" width={1335} height={428}/>


function MiniSlider() {

  const images = [
    { id: 1, src: '/images/1.png', alt: 'slide1', current: true },
    { id: 2, src: '/images/2.png', alt: 'slide1', current: true },
    { id: 3, src: '/images/3.png', alt: 'slide1', current: true },

  ];

  return (
   
    <div className={styles.container}>
      <Image src="/images/2.png" width={488} height={404}/>
    </div>
      
  );
}

export default MiniSlider;
