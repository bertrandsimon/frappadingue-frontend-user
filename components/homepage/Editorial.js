import styles from '../../styles/Editorial.module.css';

// IMAGE IMPORT
import Image from 'next/image';

function Editorial() {
  return (
    <div className='flex flex-row flex-wrap justify-center items-center pr-8 pl-8 pt-20'>
      <div className='w-full sm:basis-1/3 text-center pb-20 sm:pb-0'><Image src="/images/editorial.png" width={343} height={343}/></div>
      <div className='w-full sm:basis-2/3'>
        <h1 className='up'><span className='yellow'>la frappadingue</span> c'est quoi ?</h1>
        <br />
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, nostrum libero tenetur adipisci harum corporis aspernatur in itaque expedita atque inventore at tempore placeat modi repellat, vel, provident officiis voluptate.</span>
      </div>
    </div>
  );
}

export default Editorial;
