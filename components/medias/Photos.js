import 'lightbox.js-react/dist/index.css';
import { SlideshowLightbox } from 'lightbox.js-react';

function Photos() {
  return (
    <div>
      <h1>PHOTOS</h1>
      <SlideshowLightbox className='container grid grid-cols-3 gap-2 mx-auto' showThumbnails={true}>
        <img className='w-full rounded' src='https://images.pexels.com/photos/580151/pexels-photo-580151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt="Image 1" />
        <img className='w-full rounded' src='https://images.pexels.com/photos/13996896/pexels-photo-13996896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt="Image 2" />  
        <img className='w-full rounded' src='https://images.pexels.com/photos/13208323/pexels-photo-13208323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt="Image 3" />
        <img className='w-full rounded' src='https://images.pexels.com/photos/580151/pexels-photo-580151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt="Image 1" />
        <img className='w-full rounded' src='https://images.pexels.com/photos/13996896/pexels-photo-13996896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt="Image 2" />  
        <img className='w-full rounded' src='https://images.pexels.com/photos/13208323/pexels-photo-13208323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt="Image 3" />
        <img className='w-full rounded' src='https://images.pexels.com/photos/580151/pexels-photo-580151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt="Image 1" />
        <img className='w-full rounded' src='https://images.pexels.com/photos/13996896/pexels-photo-13996896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt="Image 2" />  
        <img className='w-full rounded' src='https://images.pexels.com/photos/13208323/pexels-photo-13208323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt="Image 3" />
      </SlideshowLightbox> 
    </div>
  );
}

export default Photos;
