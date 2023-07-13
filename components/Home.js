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
import Menu from './common/Menu';
import UserZone from './common/UserZone';
import SliderHome from './common/SliderHome';
import CardsArea from './common/CardsArea';
import EventCard from './common/EventCard';

import Editorial from './homepage/Editorial';


import styles from '../styles/Home.module.css';

function Home() {
  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <h2>TEST DE COMMIT</h2>
       
      <Header></Header>
      <Menu></Menu>
      <UserZone></UserZone>
      <SliderHome></SliderHome>
      <CardsArea></CardsArea>
      <EventCard></EventCard>
      <Editorial></Editorial>
      </main>
    </div>
  );
}

export default Home;
