import styles from '../../styles/MiniSlider.module.css';
import { useState } from 'react';
import Image from 'next/image';

import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';

function MiniSlider(  ) {
  const images = [
    { id: 0, src: '/images/1.png', alt: 'slide1', current: false },
    { id: 1, src: '/images/2.png', alt: 'slide1', current: true },
    { id: 2, src: '/images/3.png', alt: 'slide1', current: false },
  ];

  console.log(imageBanner)
  // Set the initial state to the index of the image with current: true
  const [currentImgIndex, setCurrentImgIndex] = useState(
    images.findIndex((image) => image.current === true)
  );

  const handlePrev = () => {
    setCurrentImgIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImgIndex((prevIndex) => (prevIndex + 1) % images.length);

    // Update the current property of images to indicate the current image
    const updatedImages = images.map((image, index) => ({
      ...image,
      current: index === currentImgIndex,
    }));
    // Update the images array with the updated current property
    // You can also use a state variable for images if you want to re-render the component with the updated images.
  };

  const currentImage = images[currentImgIndex];

  return (
    // <div className={styles.container}>
    //   <div onClick={handlePrev} className='cursor-pointer flex items-center pt-40 h-full'><ChevronLeftIcon className="w-6 h-6 text-black hover:text-white" /></div>
    //   <Image src={currentImage.src} width={488} height={404} />
    //   <div onClick={handleNext} className='cursor-pointer flex items-center pt-40 h-full'><ChevronRightIcon className="w-6 h-6 text-black hover:text-white" /></div>
    // </div>

    <div>
      {/* <Image src={`/images/events/${imageBanner}`} width={400} height={326}/> */}
    </div>

  );
}

export default MiniSlider;
