import { useShoppingCart } from "use-shopping-cart";
import { useState } from "react";
import Button from '@mui/material/Button';
import Image from "next/image";

import Link from 'next/link';

import { formatDate } from "../utilities/helpers";


function EventCard(props) {



  return (
    <div className="flex flex-col gap-2 p-8 rounded-xl shadow-md text-center justify-normal items-center">
      <Image src={props.thumb_image} width={302} height={378}/>
      <div className="text-2xl yellow">{props.location}</div>
      <div className="text-lg mb-4">{props.name}</div>
      
      <Link href={`/SingleEventPage/${props.id}`} >
        <Button variant="outlined" className='whiteBtn inline-block w-[160px]'>
            Voir les infos
        </Button>
      </Link>
      <div className="text-xs mt-4">
         {formatDate(props.date)}
      </div>

    </div>
  );
}

export default EventCard;
