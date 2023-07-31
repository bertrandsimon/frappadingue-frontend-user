
import Nav from '../common/Nav';
import Footer from '../common/Footer';
import Faq from '../Faq';


function FaqComponentPage() {
  return (
    <div>
        <Nav></Nav>
        
        <main className="container mx-auto sm:px-6 lg:px-8">
          <h1>Faq</h1>
          <Faq/>
        </main>
       
        <Footer></Footer>
    </div>

  );
}

export default FaqComponentPage;
