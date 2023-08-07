

import BannerSingleEvent from './BannerSingleEvent';
import TitleSingleEvent from './TitleSingleEvent';
import Pricing from '../common/Pricing';
import InfoArea from './InfoAreaEvent';

// IMAGE IMPORT
import Image from 'next/image';

function SingleEvent() {
  return (
    <div>
      <BannerSingleEvent></BannerSingleEvent>
      <TitleSingleEvent></TitleSingleEvent>
      <InfoArea></InfoArea>
      <Pricing></Pricing>
      

    </div>
  );
}

export default SingleEvent;
