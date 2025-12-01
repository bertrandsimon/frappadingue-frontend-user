
import Nav from "../common/Nav";
import Footer from "../common/Footer";
import Banner from "../common/Banner";
import TeamBuilding from "../teambuilding/TeamBuilding";


function TeamBuildingComponentPage() {
  return (
    <div>
        
        
        <main className="container mx-auto sm:px-6 lg:px-8">
         
        <Nav currentNavItem="Team Building"></Nav>
          <Banner title="Team Building" subtitle="organisez votre événement" sliderOn={true} imageBanner="info8.png"></Banner>
          <TeamBuilding></TeamBuilding>
        
        </main>
       
        <div className='-mt-40'><Footer ></Footer></div>
    </div>

  );
}

export default TeamBuildingComponentPage;

