import 'lightbox.js-react/dist/index.css';
import { SlideshowLightbox } from 'lightbox.js-react';
import { itemsHorizontal, itemsVertical} from './PhotosData';

function Photos() {

  const photosHorizontal = itemsHorizontal.map( (item) => (<img className='w-full rounded' src={item.src} alt={item.alt} /> ))
  const photosVertical = itemsVertical.map( (item) => (<img className='w-full rounded' src={item.src} alt={item.alt} /> ))

  return (
    <div className='p-10'>
      
      <SlideshowLightbox className='container grid sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto p-10' showThumbnails={true}>

        {photosHorizontal}

      
      </SlideshowLightbox> 
    </div>
  );
}

export default Photos;
