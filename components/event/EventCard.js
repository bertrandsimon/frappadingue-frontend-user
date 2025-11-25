import { useShoppingCart } from "use-shopping-cart";
import { useState } from "react";
import Button from '@mui/material/Button';
import Image from "next/image";

import Link from 'next/link';

import { formatDate } from "../utilities/helpers";


function EventCard( {event}) {



  return (
    <div className="flex flex-col gap-2 shadow-md text-center justify-normal items-center ">

      <div className="w-full h-full relative hvr-float cursor-pointer hover:sepia">
        <Link href={`/SingleEventPage/${event._id}`} >
          <Image src={`/images/events/thumbs/${event.thumb_image}`} width={241} height={302} className="rounded-md object-contain"/>
        </Link>
        <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
          <div className="w-full relative pb-4">
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/90 to-transparent rounded-b-md"></div>
            <div className="relative flex flex-col items-center gap-1">
              <div className="drop-shadow-2xl text-2xl uppercase font-extrabold text-[#ffe500]">
                {event.location}
              </div>
              <div className="text-white drop-shadow-2xl">
                {formatDate(event.date)}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="text-lg mb-4">{event.name}</div> */}
      
      <Link href={`/SingleEventPage/${event._id}`} >
        <Button variant="outlined" className='whiteBtn inline-block w-[160px]'>
            Voir les infos
        </Button>
      </Link>

    </div>
  );
}

export default EventCard;
