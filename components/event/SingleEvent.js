import styles from '../../styles/SingleEVent.module.css';

import BannerSingleEvent from './BannerSingleEvent';
import TitleSingleEvent from './TitleSingleEvent';


// IMAGE IMPORT
import Image from 'next/image';

function SingleEvent() {
  return (
    <div>
      <BannerSingleEvent></BannerSingleEvent>
      <TitleSingleEvent></TitleSingleEvent>
      <h1>SINGLE EVENT</h1>
    </div>
  );
}

export default SingleEvent;
