

import BannerSingleEvent from './BannerSingleEvent';
import TitleSingleEvent from './TitleSingleEvent';
import Pricing from '../common/Pricing';
import InfoArea from './InfoArea';

// IMAGE IMPORT
import Image from 'next/image';

function SingleEvent( {event} ) {

  //console.log(event.name);

  return (
    <div>
 
      <BannerSingleEvent></BannerSingleEvent>
      <TitleSingleEvent event={event}></TitleSingleEvent>
      <InfoArea event={event}></InfoArea>
      <Pricing></Pricing>
      

    </div>
  );
}

export default SingleEvent;
