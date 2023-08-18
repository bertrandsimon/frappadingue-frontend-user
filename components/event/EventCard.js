import { useShoppingCart } from "use-shopping-cart";
import { useState } from "react";
import Button from '@mui/material/Button';
import Image from "next/image";

import Link from 'next/link';

import { formatDate } from "../utilities/helpers";


function EventCard( {event}) {



  return (
    <div className="flex flex-col gap-2 shadow-md text-center justify-normal items-center ">

    {/*  */}
    {/* <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
    <Image src={event.thumb_image} width={302} height={378} className="border"/>
    <div
      class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 transition duration-300 ease-in-out hover:opacity-70"></div>
    </div> */}
    {/*  */}

      <div style={{ width: '302px', height: '378px' }} className="w-full h-full" width="302px" height="378px">
        <div className="hvr-float cursor-pointer">
        <Image src={event.thumb_image} width={302} height={378} />
        </div>
      </div>

      <div className="text-2xl yellow">{event.location}</div>
      <div className="text-lg mb-4">{event.name}</div>
      
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
