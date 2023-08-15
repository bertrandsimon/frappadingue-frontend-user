
import Nav from "../common/Nav";
import Footer from "../common/Footer";
import Pattern from "../common/Pattern";
import Banner from "../common/Banner";
import CardsArea from "../common/CardsArea";
import Stats from "../common/Stats";
import Pricing from "../common/Pricing";
import Editorial from "../homepage/Editorial";
import Arguments from "../common/Arguments";
import EventsCardsGrid from "../event/EventsCardsGrid";


function CoursesComponentPage() {
  return (
    <div>
        
        
        <main className="container mx-auto sm:px-6 lg:px-8">

          <Nav currentNavItem="Courses"></Nav>

          <Banner title="les prochaines courses" subtitle="une expérience inoubliable !" sliderOn={false}></Banner>
          
          <div className="-mt-20">
            <EventsCardsGrid></EventsCardsGrid>
          </div>
          
          <Pricing></Pricing>

        </main>
       
        <Footer></Footer>
    </div>

  );
}

export default CoursesComponentPage;
