import { useState, useEffect } from "react";

import Product from "../shop/Product";
import EventCard from "./EventCard";
import Link from "next/link";
//import { products } from "../../data/productsOptionsData";




function EventsCardsGrid({ eventsCount }) {

  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    fetch('https://frappadingue-backend.vercel.app/events/allEvents', {
      cache: 'force-cache',
      next: { revalidate: 3600 }
    })
    .then(response => response.json())
    .then(data => {
      setEventsData(data.all)
    })
  }, []);

  useEffect(() => {
    //console.log('eventsData:', eventsData);
  }, [eventsData]);

  // Limit events if eventsCount is provided
  let displayedEvents = eventsData;
  if (eventsCount) {
    displayedEvents = eventsData.slice(0, eventsCount);
  }

  return (

    <div>
           
      <div className="pl-10 pr-10 grid gap-1 sm:grid-cols-2 md:grid-cols-3 mb-10 justify-center items-center">
     
        {displayedEvents.map((event) => (
          <div key={event._id} className="flex items-center">
            <EventCard event={event} />
          </div>
        ))}

      </div>

    </div> 


  );
}

export default EventsCardsGrid;