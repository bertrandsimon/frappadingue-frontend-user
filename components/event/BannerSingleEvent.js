import styles from '../../styles/BannerSingleEvent.module.css';

// IMAGE IMPORT
import Image from 'next/image';


function BannerSingleEvent() {
  
  const randomNb = Math.floor(Math.random() * 5) + 1;
  const bannerImg = `/images/events/banner${randomNb}.jpg`;
  console.log(bannerImg)

  return (
   
    <div className="container h-72 border-tl-10 border-tr-10 bg-cover bg-no-repeat bg-center rounded-tl-10 rounded-tr-10" style={{ backgroundImage: `url(${bannerImg})` }}>
      {/* Your content */}
    </div>
      
  );
}

export default BannerSingleEvent;
