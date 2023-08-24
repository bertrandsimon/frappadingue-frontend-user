
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
import Head from "next/head";

function CoursesComponentPage() {
  return (
    <>
        <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/hover.css/2.3.1/css/hover-min.css"
          integrity="sha512-csw0Ma4oXCAgd/d4nTcpoEoz4nYvvnk21a8VA2h2dzhPAvjbUIK6V3si7/g/HehwdunqqW18RwCJKpD7rL67Xg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
        
        <main className="container mx-auto sm:px-6 lg:px-8">

          <Nav currentNavItem="Courses"></Nav>

          <Banner title="les prochaines courses" subtitle="une expérience inoubliable !" sliderOn={true} imageBanner="info1.png"></Banner>
          
          {/* <div className="-mt-20 flex justify-center items-center">
            <EventsCardsGrid></EventsCardsGrid>
          </div> */}
          
          <div className='-mt-20'><CardsArea></CardsArea></div>
          <Pricing></Pricing>

        </main>
       
        <div className='-mt-40'><Footer ></Footer></div>
    </>

  );
}

export default CoursesComponentPage;
