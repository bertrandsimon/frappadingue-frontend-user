import styles from '../../styles/InfoArea.module.css';

import InfoCard from './InfoCard';

import Image from 'next/image';

import Button from '@mui/material/Button';

function InfoArea() {
  
  const infos = [
    {title:'Ce que comprend ton inscription', 
    tag: 'generales',
    img: '/images/events/event-thumb1.jpg',
    bulletPoints: [
      'Une course de dingue avec une ambiance de folie',
      'Challenge S : Une quinzaine d’obstacles',
      'Challenge L : Une quarantaine d’obstacles',
      'Un site exceptionnel choisi avec soin',
      'Une médaille Frappadingue à l’arrivée',
      'Un tee-shirt collector si tu en as fais le choix',
      'Trois ravitaillements.',
      'Une bonne bière fraîche !',
      'Un village d’arrivée (ravitaillement, musique, transat…) pour te détendre après la course',
    ],
    },
    {title:'Ton équipe', 
    tag: 'generales',
    img: '/images/events/event-thumb1.jpg',
    bulletPoints: [
      'Choisis ton nom d’équipe et renseigne le lors de ton inscription dans la case « nom d’équipe ». Un nom d’équipe identique vous permet d’être automatiquement réunis dans une même vague de départ (peu importe votre date d’inscription et la distance choisie).',
      'Une équipe peut-être composée de 2 à 100 personnes',
      'Le nom d’équipe sert à vous réunir dans une même vague de départ, même en vous inscrivant en tarif individuel, vous pouvez être intégré à une équipe.',
    ],
    },
    {title:'Entreprise / Team Building', 
    tag: 'generales',
    img: '/images/events/event-thumb1.jpg',
    bulletPoints: [
      `Tu souhaites rassembler tes collègues autour d’un événement sportif inédit? 
      Cet événement permet de développer des notions importantes au sein de l’équipe, comme la cohésion, l’entraide, la confiance et la prise de risques. La Frappadingue est adaptée aux capacités physiques de tous les participants. Au travers de cette activité originale et stimulante, les participants font le plein d’énergie pour revenir dans leur quotidien professionnel avec plus de motivation !
      
      Comment faire ?
      
      Merci de nous joindre à contact@frappadingue.fr`,
     
    ],
    },
    {title:'Documents importants', 
    tag: 'generales',
    img: '/images/events/event-thumb1.jpg',
    bulletPoints: [
      'Certificat médical',
      'Autorisation parentale',
    ],
    },
    {title:'Assurance Annulation', 
    tag: 'generales',
    img: '/images/events/event-thumb1.jpg',
    bulletPoints: [
      `Une assurance annulation vous est proposée au tarif de 10 euros (à souscrire au moment de l’inscription uniquement).

Elle vous garantit le remboursement à 100% de votre inscription jusqu’au SAMEDI minuit (J-8) sans aucun justificatif puis 50% jusqu’au JEUDI MINUIT (J-4) précédant l’événement.`
    ],
    },
    {title:'Assurance changement de nom', 
    tag: 'generales',
    img: '/images/events/event-thumb1.jpg',
    bulletPoints: [
      `Une option changement de nom est disponible au tarif de 10€ (virement).

      Elle vous donne la possibilité de changer le nom de votre place jusqu’au moment du retrait des dossards.
      
      Procédure par mail :
      
      Nom, prénom + course d’inscription et accord du cédant.
      
      Informations générales du repren`
    ],
    },
    {title:'Retrait des dossards', 
    tag: 'pratiques',
    img: '/images/events/event-thumb1.jpg',
    bulletPoints: [
      'Une pièce d’identité valide',
      'Ton certificat médical au format papier indiquant ton aptitude à la course à pied en compétition, de moins de 1 an OU une photocopie de ta licence sportive',
      'A défaut > une décharge de responsabilité ICI à remplir et apporter sur place',
      'Si tu es mineur(e), ton autorisation parentale',
    ],
    },  
    {title:'Horaires', 
    tag: 'pratiques',
    img: '/images/events/event-thumb1.jpg',
    bulletPoints: [
      '8 H 30  : Ouverture du retrait des dossards et des consignes',
      '9 H 30 : Premier départ',
      'Ensuite, départs toutes les 10 minutes jusqu’à 13h',
    ],
    },
    {title:'Départ / Arrivée', 
    tag: 'pratiques',
    img: '/images/events/event-thumb1.jpg',
    bulletPoints: [
      'Soit au niveau du sas de départ 30min avant le départ de ta vague. De la musique et un animateur t’attendront pour te divertir et te mettre dans l’ambiance Frappadingue !',
      'Pour l’arrivée, le village Frappadingue t’accueillera avec un espace détente, ravitaillement et un « PhotoWall » pour immortaliser ton expérience avec tes amis!',
    ],
    },
    {title:'Vagues de départ', 
    tag: 'pratiques',
    img: '/images/events/event-thumb1.jpg',
    bulletPoints: [
      'Les vagues sont constituées d’environ 150 personnes avec des départs tous les 15min',
      'Inscription en équipe ou individuelle, choisis bien ton nom d’équipe, c’est grâce à lui que tu seras intégrer dans la même vague de départ que tes amis.',
      'Inscris dans une équipe(même nom d’équipe lors de l’inscription), ne t’inquiètes pas, tout le monde partira dans la même vague !',
      'Pour les élites, merci d’indiquer « vague Elite en nom d’équipe »',
    ],
    },
    {title:'Consignes', 
    tag: 'pratiques',
    img: '/images/events/event-thumb1.jpg',
    bulletPoints: [
      'Tu pourras déposer tes clés de voiture et tes affaires dans notre espace consigne pour les récupérer après la course.',
    ],
    },
    {title:'Douches', 
    tag: 'pratiques',
    img: '/images/events/event-thumb1.jpg',
    bulletPoints: [
      'Des douches FROIDES 🙂 (dans un gymnase) seront à ta disposition pour te laver après la course, donc n’oublie pas de ramener des affaires de rechange et du gel douche !',
    ],
    },
  ]

  const infosGenerales = infos.filter(info => info.tag === 'generales')
  const infosPratiques = infos.filter(info => info.tag === 'pratiques')
  

  const infoGeneralesCard = infosGenerales.map((info) => (<InfoCard title={info.title} img={info.img} bulletPoints={info.bulletPoints}></InfoCard>))

  const infoPratiquesCard = infosPratiques.map((info) => (<InfoCard title={info.title} img={info.img} bulletPoints={info.bulletPoints}></InfoCard>))

  return (
   
    <div className='pl-6 pr-6'>
      <h2 className='pt-0 text-2xl text-center sm:text-left'><span className='yellow'>INFOS</span> GENERALES</h2>

      <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8'>

        <div className='col-span-1 flex justify-center items-center'>
        <Image src="/images/events/info1.png" width={400} height={326}/>
        </div>

        <div className='col-span-2'> 
          {infoGeneralesCard}
        </div>

      </div>

      <h2 className='pt-10 text-2xl text-center sm:text-left'><span className='yellow'>INFOS</span> PRATIQUES</h2>

      <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8'>

        <div className='col-span-1 flex justify-center items-center'>
        <Image src="/images/events/info2.png" width={400} height={326}/>
        </div>

        <div className='col-span-2'> 
          {infoPratiquesCard}
        </div>

      </div>


    </div>
      
  );
}

export default InfoArea;
