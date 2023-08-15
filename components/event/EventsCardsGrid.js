import { useState, useEffect } from "react";

import Product from "../shop/Product";
import EventCard from "./EventCard";
//import { products } from "../../data/productsOptionsData";




function EventsCardsGrid() {

  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/events/allEvents')
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
           
      <div className="grid sm:grid-cols-2 md:grid-cols-3 mb-10 justify-center items-center mx-auto place-center flex-wrap w-100 md:max-w-[1000px]">
     
        {eventsData.map((event) => (
          <EventCard key={event.id} name={event.name} location={event.location} thumb_image={event.thumb_image} date={event.date} />
        ))}

      </div>

    </div> 


  );
}

export default EventsCardsGrid;