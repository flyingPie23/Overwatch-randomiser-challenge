import '../stylesheets/index.css';
import { Img } from "../components/components";


import { useState } from 'react';




function Card1(props) {
  return(
    <div className={props.cardClass}>
       <Img src={props.icon} class={props.imgClass}/>
       <p className={props.textClass}> {props.text}</p>
    </div>
  )
}

function Card2(props) {
  return(
    <div className={props.cardClass}>
       <p className={props.textClass}> {props.text}</p>
       <Img src={props.icon} class={props.imgClass}/>
    </div>
  )
}

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
          <Img src={props.char[hero].icon} class={props.char[hero].iconClass}/>
        </div>

        <div className='flex justify-center my-[18px]'>
          <a href={props.char[hero].link} target="_blank">
            <h1 className='text-[55px] font-bold text-center text-white'>{props.char[hero].name}</h1>
          </a>
        </div>

        <div className='flex m-auto place-content-around'>
          <Card1 icon={props.char[hero].challanges[0].icon} imgClass={props.char[hero].challanges[0].iconClass} text={props.char[hero].challanges[0].text} textClass={props.char[hero].challanges[0].textClass} cardClass={props.char[hero].challanges[0].cardClass}/>

          <a onClick={handleClick} href="#" class="bg-orange hover:bg-orange-dark p-2 rounded-md border-[2px] border-[#FFC0CB] w-[100px] "> <Img src="https://www.svgrepo.com/show/520693/dice.svg" class="h-[50px] w-[50px] mx-auto my-[12px]"/></a>

          <Card2 icon={props.char[hero].challanges[1].icon} imgClass={props.char[hero].challanges[1].iconClass} text={props.char[hero].challanges[1].text} textClass={props.char[hero].challanges[1].textClass} cardClass={props.char[hero].challanges[0].cardClass}/>
        </div>
      </div>
    </div>
  )
}

export default Openqueue;
