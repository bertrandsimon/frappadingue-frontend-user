import styles from '../../styles/Editorial.module.css';

// IMAGE IMPORT
import Image from 'next/image';

function Editorial() {
  return (
    <div className='flex flex-row flex-wrap justify-center items-center pr-8 pl-8'>
      <div className='w-full sm:basis-1/3 text-center pb-20 sm:pb-0'><Image src="/images/editorial.png" width={343} height={343}/></div>
      <div className='w-full sm:basis-2/3'>
        <h1 className='up text-2xl text-center sm:text-left'><span className='text-[#ffe500]'>la frappadingue</span> c'est quoi ?</h1>
        <br />
        <p className='font-light text-md leading-8'>La FRAPPADINGUE c’est une course à obstacles hors du commun: un parcours parsemé d’embûches, de passages d’échelles, de ponts de singe, de filets à grimper, de tunnels à franchir, de boue et bien plus encore…
        <br /><br />
        Sur un parcours de 5 à 12km, une quarantaine d’obstacles viendra mettre à rude épreuve sportifs aguerris et sportifs d’un jour.
        Chaque muscle sera mis à contribution, avec pour seul objectif, pouvoir dire : « J’y étais et j’ai terminé ! »</p>
      </div>
    </div>
  );
}

export default Editorial;
