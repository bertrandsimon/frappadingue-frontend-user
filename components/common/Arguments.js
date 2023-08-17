// import styles from '../../styles/Arguments.module.css';


import ArgumentCard from './ArgumentCard';


function Arguments() {
  // \n
  const argumentsContent = [
    {title1: '10 COURSES', title2: 'EN FRANCE', content: 'La seule course au monde qui met en avant patrimoine et nature.\n\nLes sites sont choisis avec soin pour vous faire découvrir la France à travers le sport.'},
    {title1: 'UNE ÉPREUVE', title2: 'PHYSIQUE', content: 'Nos objectifs: une course ACCESSIBLE à tous et un petit peu « physique » !\n\nParce que nous pensons que le sport ne doit pas être une affaire d’élite.'},
    // {title1: 'UN SAVOIR', title2: 'FAIRE', content: 'En 2002, l’ébauche des courses à obstacles avec principalement de la boue et des traversées d’eau naissait au travers de la course « la Salicorne ».\n\nEn 2010, La FRAPPADINGUE en découlera. Pour une première fois sur un même terrain de jeux, des sportifs (et non sportifs) de tous horizons se retrouveront.\n\nLa course à obstacles à la française est lancée alliant épreuve sportive et ambiance festive.\n\nDES OBSTACLES / DES DÉFIS / DES POTES / DU FUN.'},
    {title1: 'LE SPORT', title2: 'PLAISIR', content: 'Depuis 2010, on ne parle plus de compétition, le chrono a laissé la place à la course-plaisir.\n\nOn vient à la Frappadingue pour se faire plaisir et vivre une expérience inoubliable.'},
    {title1: 'UNE EXPÉRIENCE', title2: 'INOUBLIABLE !', content: 'Un seul risque : devenir ADDICT !\n\nUne organisation expérimentée avec 70 événements au compteur à la fin 2019.\n\nNos priorités ? Votre divertissement et votre sécurité'},
    {title1: 'AFFRONTEZ', title2: 'VOS PHOBIES', content: 'PEUR du vide, de l’eau, du noir, de la boue, des clowns…\n\nOn va s’efforcer de  révéler ce que peut-être vous ignorez en vous !\n\nUn seul objectif : terminer !'},
    {title1: 'DES', title2: 'POTES', content: 'Marre du train train quotidien ? Formez une équipe et lancez vous dans ce voyage vers l’enfer !\n\nLa Frappadingue, c’est une affaire d’équipe! L’entraide et la solidarité seront vos maîtres-mots!'},
  ];

  const argumentsZone = argumentsContent.map((item) => (
    <div>
      <ArgumentCard title1={item.title1} title2={item.title2} content={item.content} />
    </div>
  ));

  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 justify-center items-center m-14 pb-40 sm:m-0'>
      {/* <div>Test</div>
      <div>Test</div>
      <div>Test</div>
      <div>Test</div> */}
      {argumentsZone}
     
    </div>

   
  );
}

export default Arguments;
