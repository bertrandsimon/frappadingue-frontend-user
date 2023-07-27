// STATES IMPORT
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


// IMAGE IMPORT
import Image from 'next/image';

// FONT AWESOME IMPORT EXAMPLE
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


import { hideArticle } from '../reducers/hiddenArticles';

import Header from './common/Header';
import Nav from './common/Nav';
import UserZone from './common/UserZone';
import SliderHome from './common/SliderHome';
import CardsArea from './common/CardsArea';
import EventCard from './common/EventCard';
import Faq from './Faq';
import Footer from './common/Footer';

import Editorial from './homepage/Editorial';
import Arguments from './common/Arguments';
import Volunteer from './Volunteer';

import styles from '../styles/Home.module.css';

function Home() {
  return (
    <div className="">
        <Nav></Nav>
        <main className="container mx-auto sm:px-6 lg:px-8">
         
          <SliderHome></SliderHome>
          <CardsArea></CardsArea>
          <Editorial></Editorial>
          <Arguments></Arguments>
        </main>
       
        <Footer></Footer>
    </div>
    // <div className={styles.main}>
      
    //   <div className={styles.container}>
     
    //   </div>
      
    // </div>
  );
}

export default Home;
