import styles from '../../styles/InfoArea.module.css';

import InfoCard from './InfoCard';

// IMAGE IMPORT
import Image from 'next/image';

import Button from '@mui/material/Button';

function InfoArea() {
  
  const infos = [
    {title:'Informations générales', 
    description: 'lorem fdshkfdskh kdsjfhjkf ',
    img: '/images/events/event-thumb1.jpg',
    bulletPoints: [
      'text 1',
      'text 2',
      'text 3',
    ],
    },
    {title:'Informations pratiques', 
    description: 'lfdsgfdgf gsjfhjkf ',
    img: '/images/events/event-thumb1.jpg',
    bulletPoints: [
      'text 1',
      'text 2',
      'text 3',
    ],
    },
    {title:'Horaires', 
    description: 'lfdsgfdgf gsjfhjkf ',
    img: '/images/events/event-thumb1.jpg',
    bulletPoints: [
      'text 1',
      'text 2',
      'text 3',
    ],
    },
    {title:'Départ / Arrivée', 
    description: 'lfdsgfdgf gsjfhjkf ',
    img: '/images/events/event-thumb1.jpg',
    bulletPoints: [
      'text 1',
      'text 2',
      'text 3',
    ],
    },
    {title:'Vagues de départ', 
    description: 'lfdsgfdgf gsjfhjkf ',
    img: '/images/events/event-thumb1.jpg',
    bulletPoints: [
      'text 1',
      'text 2',
      'text 3',
    ],
    },
    {title:'Consignes', 
    description: 'lfdsgfdgf gsjfhjkf ',
    img: '/images/events/event-thumb1.jpg',
    bulletPoints: [
      'text 1',
      'text 2',
      'text 3',
    ],
    },
    {title:'Douches', 
    description: 'lfdsgfdgf gsjfhjkf ',
    img: '/images/events/event-thumb1.jpg',
    bulletPoints: [
      'text 1',
      'text 2',
      'text 3',
    ],
    },  
    {title:'La Frappajeune', 
    description: 'lfdsgfdgf gsjfhjkf ',
    img: '/images/events/event-thumb1.jpg',
    bulletPoints: [
      'text 1',
      'text 2',
      'text 3',
    ],
    },
  ]

  const infoCard = infos.map((info) => (<InfoCard title={info.title} description={info.description} img={info.img} bulletPoints={info.bulletPoints}></InfoCard>))

  return (
   
    <div>

    <h1>INFOS AREA</h1>
    
    {infoCard}

    </div>
      
  );
}

export default InfoArea;
