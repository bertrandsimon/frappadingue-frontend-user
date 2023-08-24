import { useState, useEffect } from "react";

import Product from "../shop/Product";
import EventCard from "./EventCard";
import Link from "next/link";
//import { products } from "../../data/productsOptionsData";




function EventsCardsGrid() {

  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    fetch('https://frappadingue-backend.vercel.app/events/allEvents')
    .then(response => response.json())
    .then(data => {
      setEventsData(data.all)
    })
  }, []);

  useEffect(() => {
    //console.log('eventsData:', eventsData);
  }, [eventsData]);


  return (

    <div>
           
      <div className="pl-10 pr-10 grid gap-1 sm:grid-cols-2 md:grid-cols-3 mb-10 justify-center items-center">
     
        {eventsData.map((event) => (
          <div key={event._id} className="flex items-center">
            <EventCard event={event} />
          </div>
        ))}

      </div>

    </div> 


  );
}

export default EventsCardsGrid;