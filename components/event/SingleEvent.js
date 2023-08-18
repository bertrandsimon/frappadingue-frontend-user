

import BannerSingleEvent from './BannerSingleEvent';
import TitleSingleEvent from './TitleSingleEvent';
import Pricing from '../common/Pricing';
import InfoArea from './InfoArea';
import ProductEventBuyZone from '../shop/ProductEventBuyZone';

// IMAGE IMPORT
import Image from 'next/image';

function SingleEvent( {event} ) {

  //console.log(event.name);

  return (
    <div>
 
      <BannerSingleEvent></BannerSingleEvent>
      <TitleSingleEvent event={event}></TitleSingleEvent>
      <div className="pt-10 pb-10"><ProductEventBuyZone product={event}></ProductEventBuyZone></div>
      <div className="pt-10 pb-10"><InfoArea event={event}></InfoArea></div>
      <div className="pt-10 pb-10"><Pricing event={event} ></Pricing></div>
      
      

    </div>
  );
}

export default SingleEvent;
