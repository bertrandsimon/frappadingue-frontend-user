// import styles from '../../styles/InfoCard.module.css';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// IMAGE IMPORT
import Image from 'next/image';

import Button from '@mui/material/Button';

import { CheckIcon } from '@heroicons/react/24/solid'

function InfoCard(props) {
  
  const bullets = props.bulletPoints.map((bullet) => (<li className='flex flex-row items-center' style={{ whiteSpace: 'pre-line' }}> <CheckIcon className="h-8 w-8 text-white pr-4" />{bullet}</li>))

  return (
   
    <div className='m-6'>

   
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}x
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='uppercase'>{props.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
              {bullets}
            </ul>
          
          </Typography>
        </AccordionDetails>
    </Accordion>


    </div>
      
  );
}

export default InfoCard;
