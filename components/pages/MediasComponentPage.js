
import Nav from '../common/Nav';
import Footer from '../common/Footer';
import Banner from '../common/Banner';
import Photos from '../medias/Photos';

function MediasComponentPage() {
  return (
    <div>
        
        
        <main className="container mx-auto sm:px-6 lg:px-8">
          
          <Nav currentNavItem="Médias"></Nav>
          <Banner title="médias" subtitle="photos et vidéos" sliderOn={true} imageBanner="info2.png"></Banner>
          <Photos></Photos>
        </main>
       
        <div className='-mt-40'><Footer ></Footer></div>
    </div>

  );
}

export default MediasComponentPage;
