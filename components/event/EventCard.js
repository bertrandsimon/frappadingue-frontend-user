import { useShoppingCart } from "use-shopping-cart";
import { useState } from "react";
import Button from '@mui/material/Button';
import Image from "next/image";

import Link from 'next/link';

import { formatDate } from "../utilities/helpers";


function EventCard( {event}) {



  return (
    <div className="flex flex-col gap-2 shadow-md text-center justify-normal items-center ">

      <div className="w-full h-full">
        <div className="hvr-float cursor-pointer hover:sepia">
          <Link href={`/SingleEventPage/${event._id}`} >
            <Image src={event.thumb_image} width={241} height={302} className="rounded-md object-contain"/>
          </Link>
        </div>
      </div>

      <div className="text-2xl text-yellow-400 pt-4">{event.location}</div>
      {/* <div className="text-lg mb-4">{event.name}</div> */}
      
      <Link href={`/SingleEventPage/${event._id}`} >
        <Button variant="outlined" className='whiteBtn inline-block w-[160px]'>
            Voir les infos
        </Button>
      </Link>
      <div className="text-xs mt-4">
         {formatDate(event.date)}
      </div>

    </div>
  );
}

export default EventCard;
