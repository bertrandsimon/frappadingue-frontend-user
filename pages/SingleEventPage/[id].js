import { useRouter } from "next/router";
import { useState, useEffect } from "react";

// ie: Link to: http://localhost:3001/SingleEventPage/64db8801af6df4463b654a88
// backend route to fetch : http://localhost:3000/events/64db8801af6df4463b654a88

import Nav from "../../components/common/Nav";
import Footer from "../../components/common/Footer";
import SingleEvent from "../../components/event/SingleEvent";

function SingleEventPage() {

    const router = useRouter();
    const { id } = router.query;
    //const id  = "64db8865af6df4463b654a8a";
    
    console.log("id:", id);
    const [event, setEvent] = useState([])

    useEffect ( () => {
        fetch(`http://localhost:3000/events/${id}`)
        .then(response => response.json())
        .then( data => {
            setEvent(data.event)
        })
        }, [] )
    

    return (
        <div>

        <main className="container mx-auto sm:px-6 lg:px-8">

          <Nav currentNavItem="Courses"></Nav>
          <h1>Event ID: {id}</h1>
          <SingleEvent event={event}></SingleEvent>

        </main>
       
        <Footer></Footer>
           
        </div>
    );
}

export default SingleEventPage;