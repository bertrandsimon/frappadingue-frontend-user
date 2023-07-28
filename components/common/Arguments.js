import styles from '../../styles/Arguments.module.css';


import ArgumentCard from './ArgumentCard';


function Arguments() {

  const argumentsContent = [
    {title1: 'test', title2: 'test', content: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'},
    {title1: 'test2', title2: 'test', content: 'lfsdconsectetur adipisicfslit. Quisquam, voluptatum.'},
    {title1: 'test2', title2: 'test', content: 'lfsdconsectetur adipisicfslit. Quisquam, voluptatum.'},
    {title1: 'test2', title2: 'test', content: 'lfsdconsectetur adipisicfslit. Quisquam, voluptatum.'},
    {title1: 'test2', title2: 'test', content: 'lfsdconsectetur adipisicfslit. Quisquam, voluptatum.'},
  ];

  const argumentsZone = argumentsContent.map((item) => (<ArgumentCard title1={item.title1} title2={item.title2} content={item.content}/>))

  return (
    <div className={styles.container}>

      {argumentsZone}
     
    </div>

   
  );
}

export default Arguments;
