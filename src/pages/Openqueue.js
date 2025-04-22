import '../stylesheets/index.css';
import { Img } from "../components/components";
import data from '../data/heros.json';




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

function randomiser() {
  return Math.floor(Math.random() * 10);
}


function Openqueue(props) {

  return(
    <div className='container mx-auto px-6'>
      <div className='w-full h-full py-4 my-4 bg-gray-dark/[0.9] border border-orange rounded-md'>
        <div className='flex justify-center'>
          <Img src={data.heros[0].icon} class={data.heros[0].iconClass}/>
        </div>

        <div className='flex justify-center my-[18px]'>
          <a href={data.heros[0].link} target="_blank">
            <h1 className='text-[55px] font-bold text-center text-white'>{data.heros[0].name}</h1>
          </a>
        </div>

        <div className='flex m-auto place-content-around'>
          <Card1 icon={data.heros[0].challanges[0].icon} imgClass={data.heros[0].challanges[0].iconClass} text={data.heros[0].challanges[0].text} textClass={data.heros[0].challanges[0].textClass} cardClass={data.heros[0].challanges[0].cardClass}/>

          <a href="#" class="bg-orange hover:bg-orange-dark p-2 rounded-md border-[2px] border-[#FFC0CB] w-[100px] "> <Img src="https://www.svgrepo.com/show/520693/dice.svg" class="h-[50px] w-[50px] mx-auto my-[12px]"/></a>

          <Card2 icon={data.heros[0].challanges[1].icon} imgClass={data.heros[0].challanges[1].iconClass} text={data.heros[0].challanges[1].text} textClass={data.heros[0].challanges[1].textClass} cardClass={data.heros[0].challanges[0].cardClass}/>
        </div>
      </div>
    </div>
  )
}

export default Openqueue;
