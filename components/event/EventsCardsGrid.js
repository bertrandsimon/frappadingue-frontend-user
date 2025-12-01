import { useState, useEffect } from "react";

import Product from "../shop/Product";
import EventCard from "./EventCard";
import Link from "next/link";
//import { products } from "../../data/productsOptionsData";




function EventsCardsGrid({ eventsCount }) {

  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    const CACHE_KEY = 'frappadingue_events';
    const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds
    
    // Check if we have cached data
    const cachedData = localStorage.getItem(CACHE_KEY);
    const now = Date.now();
    
    if (cachedData) {
      const { data, timestamp } = JSON.parse(cachedData);
      // Use cache if it's less than 5 minutes old
      if (now - timestamp < CACHE_DURATION) {
        setEventsData(data);
        return; // Don't fetch if cache is still valid
      }
    }
    
    // Fetch fresh data
    fetch('https://frappadingue-backend.vercel.app/events/allEvents', {
      cache: 'no-store'
    })
    .then(response => response.json())
    .then(data => {
      const events = data.all;
      setEventsData(events);
      // Cache the data with timestamp
      localStorage.setItem(CACHE_KEY, JSON.stringify({
        data: events,
        timestamp: now
      }));
    })
    .catch(error => {
      console.error('Error fetching events:', error);
      // Fallback to cached data if fetch fails
      if (cachedData) {
        const { data } = JSON.parse(cachedData);
        setEventsData(data);
      }
    });
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
          <div key={event._id} className="flex items-center ">
            <EventCard event={event} />
          </div>
        ))}

      </div>

    </div> 


  );
}

export default EventsCardsGrid;