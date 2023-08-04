
import Nav from '../common/Nav';
import Footer from '../common/Footer';
import Banner from '../common/Banner';
import Photos from '../medias/Photos';

function MediasComponentPage() {
  return (
    <div>
        
        
        <main className="container mx-auto sm:px-6 lg:px-8">
          
          <Nav></Nav>
          <Banner title="médias" subtitle="photos et vidéos" sliderOn={false}></Banner>
          <Photos></Photos>
        </main>
       
        <Footer></Footer>
    </div>

  );
}

export default MediasComponentPage;
