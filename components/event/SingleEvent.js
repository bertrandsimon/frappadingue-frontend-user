

import BannerSingleEvent from './BannerSingleEvent';
import TitleSingleEvent from './TitleSingleEvent';
import Pricing from '../common/Pricing';
import InfoArea from './InfoAreaEvent';

// IMAGE IMPORT
import Image from 'next/image';

function SingleEvent( {event} ) {

  //console.log(event.name);

  return (
    <div>
      <h1>{event.name}</h1>
      <BannerSingleEvent></BannerSingleEvent>
      <TitleSingleEvent event={event}></TitleSingleEvent>
      <InfoArea event={event}></InfoArea>
      <Pricing></Pricing>
      

    </div>
  );
}

export default SingleEvent;
