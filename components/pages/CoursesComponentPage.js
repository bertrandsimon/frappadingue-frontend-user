
import Nav from "../common/Nav";
import Footer from "../common/Footer";
import Pattern from "../common/Pattern";
import Banner from "../common/Banner";
import CardsArea from "../common/CardsArea";
import Stats from "../common/Stats";
import Pricing from "../common/Pricing";
import Editorial from "../homepage/Editorial";
import Arguments from "../common/Arguments";


function CoursesComponentPage() {
  return (
    <div>
        <Nav></Nav>
        
        <main className="container mx-auto sm:px-6 lg:px-8">
          <h1>COURSES</h1>
          <Pattern></Pattern>
          <Banner></Banner>
          <SliderHome></SliderHome>
          <CardsArea></CardsArea>
          <Stats></Stats>
          <Pricing></Pricing>
          <Editorial></Editorial>
          <Arguments></Arguments>
        </main>
       
        <Footer></Footer>
    </div>

  );
}

export default CoursesComponentPage;
