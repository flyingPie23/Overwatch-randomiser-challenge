import '../stylesheets/index.css';
import { Img, Card1, Card2 } from "../components/components";


import { useState } from 'react';



function Openqueue(props) {

  const [hero, setHero] = useState(Math.floor(Math.random() * 11))

  const handleClick = () => {
    let newHero;
    do {
      newHero = Math.floor(Math.random() * 11);
    } while (newHero === hero);
    setHero(newHero);
  };


  return(
    <div className='container mx-auto px-6'>
      <div className='w-full h-full py-4 my-4 bg-gray-dark/[0.9] border border-orange rounded-md'>
        <div className='flex justify-center'>
          <Img src={props.char[hero].icon} class="h-[250px] border-[5px] border-orange rounded-xl p-3"/>
        </div>

        <div className='flex justify-center my-[18px]'>
          <a href={props.char[hero].link} target="_blank">
            <h1 className='text-[55px] font-bold text-center text-white hover:underline'>{props.char[hero].name}</h1>
          </a>
        </div>

        <div className='flex m-auto place-content-around'>
          <Card1 icon={props.char[hero].challanges[0].icon} imgClass="h-[55px] w-[55px]" text={props.char[hero].challanges[0].text} textClass={"text-[16px] text-center text-white mx-3 px-3 text-end"} cardClass="flex border-[5px] border-orange rounded-xl w-[320px] p-3"/>

          <a onClick={handleClick} href="#" class="bg-orange hover:bg-orange-dark p-2 my-[24px] rounded-md border-[2px] border-white w-[100px] text-center text-white h-[55px] "> Re-Roll</a>

          <Card2 icon={props.char[hero].challanges[1].icon} imgClass="h-[55px] w-[55px]" text={props.char[hero].challanges[1].text} textClass={"text-[16px] text-center text-white mx-3 px-3 text-end"} cardClass="flex border-[5px] border-orange rounded-xl w-[320px] p-3"/>
        </div>
      </div>
    </div>
  )
}

export default Openqueue;
