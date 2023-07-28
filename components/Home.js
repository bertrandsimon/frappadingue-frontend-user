import { useDispatch, useSelector } from 'react-redux';

import { hideArticle } from '../reducers/hiddenArticles';

import Nav from './common/Nav';
import SliderHome from './common/SliderHome';
import CardsArea from './common/CardsArea';
import Footer from './common/Footer';
import Editorial from './homepage/Editorial';
import Arguments from './common/Arguments';
import Pricing from './common/Pricing';

import styles from '../styles/Home.module.css';

function Home() {
  return (
    <div className="">
        <Nav></Nav>
        <main className="container mx-auto sm:px-6 lg:px-8">

          <SliderHome></SliderHome>
          <CardsArea></CardsArea>
          <Pricing></Pricing>
          <Editorial></Editorial>
          <Arguments></Arguments>
        </main>
       
        <Footer></Footer>
    </div>

  );
}

export default Home;
