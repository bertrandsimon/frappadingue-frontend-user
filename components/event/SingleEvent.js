

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
      <ProductEventBuyZone product={event}></ProductEventBuyZone>
      <InfoArea event={event}></InfoArea>
      <Pricing></Pricing>
      

    </div>
  );
}

export default SingleEvent;
