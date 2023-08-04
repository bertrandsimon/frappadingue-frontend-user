import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

import Image from 'next/image';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import InfoCard from './event/InfoCard';

function Faq() {

  const faqInfos = [
    {title:`La Frappadingue c'est quoi ?`, 
    tag: 'general',
    bulletPoints: [
      `la Frappadingue c’est une course à obstacles, un événement fun et sportif aux allures de carnaval. Une manifestation atypique, populaire et spectaculaire pour les petits comme les grands.
      Un événement accessible à tous pour découvrir le territoire de manière ludique.`,
      'La première course à obstacles de France depuis 2010',
      'Rassembler 20 000 sportifs et non sportifs chaque année',
      'Une course sans chrono',
      '40% de femmes',
      'Une course qui vous fera découvrir les atouts du territoire à travers un parcours atypique',
      'En marchant, en courant mais surtout en rigolant',
    ],
    },
    {title:`Pour qui ?`, 
    tag: 'general',
    bulletPoints: [
      'Hommes et femmes de plus de 16 ans',
      'La Frappadingue est accessible à tous, tous les obstacles sont contournables, et vous pouvez tout faire en marchant !',
      'Pour les mineurs (7/-12ans) une frappajeune est organisée la veille de chaque Frappadingue. Rdv sur la page de l’événement !',
    ],
    },
    {title:`Comment s'inscrire ?`, 
    tag: 'inscription',
    bulletPoints: [
      'Clique sur Courses',
      'Sélectionne la ville de ton choix',
      'Sélectionne ta distance 5/6km ou 10/12km',
      'Remplis le formulaire',
      'Procède au paiement',
      'De notre côté tout est ok, à toi de commencer ton entrainement !',
    ],
    },
    {title:'Et en équipe ?',  
    tag: 'inscription',
    bulletPoints: [
      'Clique sur Courses',
      'Sélectionne la ville de ton choix',
      'Sélectionne ta distance 5/6km ou 10/12km',
      'Remplis le formulaire',
      'Renseigne un nom d’équipe identique à tes amis afin que vous soyez tous automatiquement réunis',
      'Vous ne choisissez pas votre vague de départ, les vagues sont constituées dans les dernières semaines avant l’événement. En effet, cela nous permet une grande souplesse dans le regroupement des équipes',
      'Tu te sens fort et désires faire un chrono et donc partir en vague 1, indique en nom d’équipe ELITE ou ajoute le nom à ton nom d’équipe (par ex: « les fantassins vague 1 » ou les « fantassins vague élite »)',
      'Tu as une heure de préférence pour partir, indique en nom d’équipe VAGUE xx ou ajoute le nom à ton nom d’équipe (par ex: « les fantassins vague 10h »)',
      'De notre côté tout est ok, à toi de commencer ton entrainement !',
      'Sache qu’à tout moment, ton (ou tes ) potes pourront intégrer ton équipe (simplement en renseignant le même nom d’équipe que toi) et vous partirez ainsi ensemble.',
    ],
    },
    {title:'Comment inscrire une entreprise',  
    tag: 'inscription',
    bulletPoints: [
      `Si paiement par CB

      Dans l’onglet inscription
      
      Choisis la ville, le kilométrage et le nombre de places
      Remplis le formulaire, renseigne correctement le nom d’équipe et utilise le paiement sécurisé.
      Commence l’entrainement !`,
      `Si paiement par chèque

      Demande de devis à contact@frappadingue.fr
      Infos à nous communiquer : adresse de facturation, mode de règlement, nombre d’inscrits, ville sélectionnées, choix du kilométrage, tee-shirt ou non
      Validation du devis en retour d’email + envoie de la facture
      Règlement : chèque ou virement (ordre > association La Salicorne)
       
      
      Dès réception du paiement, nous t’enverrons des éléments pour que les membres de ton équipe puissent finaliser leurs inscriptions en ligne via des codes spécifiques ou nous te demanderons le fichier des inscrits;
      Commence l’entrainement !`,
      'Si tu as des questions > 06 28 93 10 50',
    ],
    },
    {title:`Le nom d'équipe`, 
    tag: 'inscription',
    bulletPoints: [
      'Le nom d’équipe permet de vous réunir dans une même vague de départ.',
      'Vous pouvez le modifier par email avec vos nom/prénom/nom d’équipe et préciser l’événement concerné.',
    ],
    },
    {title:'Que comprend mon inscription ?',  
    tag: 'inscription',
    bulletPoints: [
      'Ta participation à la Frappadingue',
      '1 ou 2 ravitaillements avec des surprise selon le kilométrage sélectionné',
      'La bière à l’arrivée',
      'La médaille Finisher',
      'La logistique nécessaire à l’organisation',
    ],
    },
    {title:`Ai-je besoin d'un certificat médical ?`, 
    tag: 'certificat',
    bulletPoints: [
      'Oui',
    ],
    },
    {title:'Pourquoi le certificat médical est nécessaire ?', 
    tag: 'certificat',
    bulletPoints: [
      'La Frappadingue est un événement sportif et nous devons nous assurer que ta condition physique te permette l’effort requis. L’épreuve comporte notamment des passages d’obstacles de plus de 2m, du cardio, de l’eau 🙂 alors il est nécessaire d’être en forme !',
    ],
    },
    {title:'Quel certificat médical ou quelle license ?', 
    tag: 'certificat',
    bulletPoints: [
      `Certificat médical de non-contre indication à la pratique de la course à pied en compétition de moins d’un an.

      Certificat médical type >>  MODÈLE DE CERTIFICAT MÉDICAL
      
      Une licence sportive pourra être acceptée. (nous fournir une photocopie).`,
    ],
    },
    {title:'Quand est le retrait des dossards ?', 
    tag: 'retrait',
    bulletPoints: [
      'Samedi (J-1) : 15h – 19h',
      'Dimanche (jour J) : à partir de 8h, jusqu’à 12h (prévoir 1h/1h30 avant l’heure de votre vague)',
    ],
    },
    {title:'Documents nécessaires ?', 
    tag: 'retrait',
    bulletPoints: [
      'Un certificat médical (type ou course à pied)',
      'La copie d’une licence sportive en cours de validité',
      'Une pièce d’identité',
      'Une attestation si tu es mineur !',
    ],
    },
    {title:'Un retrait groupé ?', 
    tag: 'retrait',
    bulletPoints: [
      'Apporte la copie de la pièce d’identité et le certif de chacun 🙂',
    ],
    },
    {title:'Annulation avec assurance', 
    tag: 'annulation',
    bulletPoints: [
      `Le remboursement est possible: sans justificatif à 100% jusqu’au samedi minuit qui précède l’événement (J-8)

      Le remboursement entre la date indiquée ci-dessus et le  jeudi minuit (J-3) sera fait à 50%, après cette date plus aucun remboursement ne sera pris en compte
      
      Toute demande de remboursement ne sera acceptée que si elle est faite par mail à contact@frappadingue.fr
      
      Pour les conditions de l’assurance annulation, tu peux consulter: LE RÈGLEMENT`,
   
    ],
    },
    {title:'Annulation sans assurance', 
    tag: 'annulation',
    bulletPoints: [
      `Tu n’as pas opté pour l’assurance ANNULATION au moment de ton inscription.

      L’inscription n’est pas remboursable, tu peux demander par email un changement de nom pour un montant de 5€`,

    ],
    },
    {title:'Changement de nom', 
    tag: 'annulation',
    bulletPoints: [
      `Sur place
      - Accord cédant
      - Nom-prénom du repreneur
      - Certificat médical du repreneur
      
      > Montant : 5€`,
    ],
    },
    {title:'Lieu / heure de départ', 
    tag: 'jour',
    bulletPoints: [
      `Retrouve les infos pratiques sur la page de l’événement, bouton tout en haut >> INFOS PRATIQUES <<

      > Lieu précis à retrouver sur la page de l’événement
      
      > Horaires : vagues – entrée dans le sas 30 min avant l’heure de votre vague – échauffement 15 min avant l’heure de votre vague`,
    ],
    },
    {title:'Equipement', 
    tag: 'jour',
    bulletPoints: [
      'Les gants, type mitaine vélo, sont toujours appréciables et vous les apprécierez dans les rampings ou les grimper de corde.',
      'Eviter les déguisements susceptibles de se charger d’eau, surtout si le parcours comporte une traversée d’eau.',
      'Privilégiez un legging pour limiter les égratignures',
    ],
    },
    {title:'Vestiaire / Consigne', 
    tag: 'jour',
    bulletPoints: [
      'Pas de vestiaires',
      'Consigne gratuite à disposition sur le village Frappadingue',
      'Possibilité de laisser un sac fermé ou vos clés de voiture',
    ],
    },
    {title:'Douches', 
    tag: 'jour',
    bulletPoints: [
      'Une course de dingue avec une ambiance de folie',
      'Challenge S : Une quinzaine d’obstacles',
    ],
    },
    {title:'Toilettes', 
    tag: 'jour',
    bulletPoints: [
      'Oui, avec un système de rampes de douches…',
      'Cependant, on ne garantit pas qu’il y aura de l’eau chaude pour tout le monde!!!',
    ],
    },
    {title:'Durée épreuve', 
    tag: 'jour',
    bulletPoints: [
      'En moyenne 2h30/3h00',
    ],
    },
    {title:'Parkings', 
    tag: 'jour',
    bulletPoints: [
      'Les parkings (gratuits) seront référencés sur les infos pratiques – sur chaque page événement',
    ],
    },
    {title:'Des courbatures ?', 
    tag: 'apres',
    bulletPoints: [
      'Evidemment !',
    ],
    },
    {title:'Photos / Vidéos', 
    tag: 'apres',
    bulletPoints: [
      `Sur la page de l’événement via un lien en haut de page

      Sur la page facebook dans la semaine suivant la manifestation`,
    ],
    },
  ]

  const faqGeneral = faqInfos.filter(faqInfo => faqInfo.tag === 'general')
  const faqInscription = faqInfos.filter(faqInfo => faqInfo.tag === 'inscription')
  const faqCertificat = faqInfos.filter(faqInfo => faqInfo.tag === 'certificat')
  const faqRetrait = faqInfos.filter(faqInfo => faqInfo.tag === 'retrait')
  const faqAnnulation = faqInfos.filter(faqInfo => faqInfo.tag === 'annulation')
  const faqJour = faqInfos.filter(faqInfo => faqInfo.tag === 'jour')
  const faqApres = faqInfos.filter(faqInfo => faqInfo.tag === 'apres')
 
  

  const faqGeneralCard = faqGeneral.map((faq) => (<InfoCard title={faq.title} bulletPoints={faq.bulletPoints}></InfoCard>))
  const faqInscriptionCard = faqInscription.map((faq) => (<InfoCard title={faq.title} bulletPoints={faq.bulletPoints}></InfoCard>))
  const faqCertificatCard = faqCertificat.map((faq) => (<InfoCard title={faq.title} bulletPoints={faq.bulletPoints}></InfoCard>))
  const faqRetraitCard = faqRetrait.map((faq) => (<InfoCard title={faq.title} bulletPoints={faq.bulletPoints}></InfoCard>))
  const faqAnnulationCard = faqAnnulation.map((faq) => (<InfoCard title={faq.title} bulletPoints={faq.bulletPoints}></InfoCard>))
  const faqJourCard = faqJour.map((faq) => (<InfoCard title={faq.title} bulletPoints={faq.bulletPoints}></InfoCard>))
  const faqApresCard = faqApres.map((faq) => (<InfoCard title={faq.title} bulletPoints={faq.bulletPoints}></InfoCard>))

  return (
    <div className='pb-20'>
    
    {/* GENERAL */}
    

    <div className='grid grid-cols-3 gap-8 pl-8 pt-8'>

      <div className='col-span-1 flex justify-center items-center'>
      <Image src="/images/events/info6.png" width={400} height={326}/>
      </div>

      <div className='col-span-2'> 
      <h2 className='pl-8 pt-20 text-2xl'><span className='yellow'>INFOS </span>GENERALES</h2>
        {faqGeneralCard }
      </div>

    </div>

    {/* INSCRIPTION */}
  
    
    
    <div className='grid grid-cols-3 gap-8 pl-8 pt-8'>

      <div className='col-span-1 flex justify-center items-center'>
      <Image src="/images/events/info5.png" width={400} height={326}/>
      </div>

      <div className='col-span-2'>
      <h2 className='pl-8 pt-20 text-2xl'><span className='yellow'>INFOS SUR </span>L'INSCRIPTION</h2> 
        {faqInscriptionCard}
      </div>

    </div>

     {/* CERTIFICAT */}
     

    <div className='grid grid-cols-3 gap-8 pl-8 pt-8'>

      <div className='col-span-1 flex justify-center items-center'>
      <Image src="/images/events/info4.png" width={400} height={326}/>
      </div>

      <div className='col-span-2'> 
      <h2 className='pl-8 pt-20 text-2xl'><span className='yellow'>CERTIFICAT </span>MEDICAL</h2>
        {faqCertificatCard}
      </div>

    </div>

     {/* RETRAIT */}
     

    <div className='grid grid-cols-3 gap-8 pl-8 pt-8'>

      <div className='col-span-1 flex justify-center items-center'>
      <Image src="/images/events/info3.png" width={400} height={326}/>
      </div>

      <div className='col-span-2'> 
      <h2 className='pl-8 pt-20 text-2xl'><span className='yellow'>RETRAIT </span>DES DOSSARDS</h2>
        {faqRetraitCard}
      </div>

    </div>

    {/* ANNULATION */}
    

    <div className='grid grid-cols-3 gap-8 pl-8 pt-8'>

      <div className='col-span-1 flex justify-center items-center'>
      <Image src="/images/events/info2.png" width={400} height={326}/>
      </div>

      <div className='col-span-2'> 
      <h2 className='pl-8 pt-20 text-2xl'><span className='yellow'>ANNULATION </span>ET REMBOURSEMENT</h2>
        {faqAnnulationCard}
      </div>

    </div>

    {/* JOUR J */}
    

    <div className='grid grid-cols-3 gap-8 pl-8 pt-8'>

      <div className='col-span-1 flex justify-center items-center'>
      <Image src="/images/events/info1.png" width={400} height={326}/>
      </div>

      <div className='col-span-2'> 
      <h2 className='pl-8 pt-20 text-2xl'><span className='yellow'>LE JOUR </span>DE LA COURSE</h2>
        {faqJourCard}
      </div>

    </div>

     {/* JOUR D APRES */}
     

      <div className='grid grid-cols-3 gap-8 pl-8 pt-8'>

        <div className='col-span-1 flex justify-center items-center'>
        <Image src="/images/events/info6.png" width={400} height={326}/>
        </div>

        <div className='col-span-2'> 
        <h2 className='pl-8 pt-20 text-2xl'><span className='yellow'>ET LE </span>LENDEMAIN ?</h2>
          {faqApresCard}
        </div>

      </div>

 
 


  </div>
  );
}

export default Faq;
