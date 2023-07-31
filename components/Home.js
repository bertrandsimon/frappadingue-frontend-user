import styles from '../styles/Home.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { hideArticle } from '../reducers/hiddenArticles';

import OrderSummary from './shop/OrderSummary';
import Nav from './common/Nav';
import SliderHome from './common/SliderHome';
import CardsArea from './common/CardsArea';
import Footer from './common/Footer';
import Editorial from './homepage/Editorial';
import Arguments from './common/Arguments';
import Pricing from './common/Pricing';
import Stats from './common/Stats';
import Pattern from './common/Pattern';
import Banner from './common/Banner';




function Home() {
  return (
    <div className="">
        <Nav></Nav>
        <main className="container mx-auto sm:px-6 lg:px-8">
          <OrderSummary></OrderSummary>
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

export default Home;
