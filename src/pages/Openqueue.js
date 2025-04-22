import '../stylesheets/index.css';
import { Btn,Img } from "../components/components";

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

function Openqueue() {
  return(
    <div className='container mx-auto px-6'>
      <div className='w-full h-full py-4 my-4 bg-gray-dark/[0.9] border border-[#FFC0CB] rounded-md'>
        <div className='flex justify-center'>
          <Img src="https://d15f34w2p8l1cc.cloudfront.net/overwatch/e69a3d819fd46d0dcd1d9474c248a95e69519c20077c60e9de73a1e2d3acdbb6.png" class="h-[250px] border-[5px] border-[#FFC0CB] rounded-xl p-3"/>
        </div>

        <div className='flex justify-center my-[18px]'>
          <a href="https://overwatch.blizzard.com/en-us/heroes/dva/" target="_blank">
            <h1 className='text-[55px] font-bold text-center text-white'>D.VA</h1>
          </a>

        </div>

        <div className='flex m-auto place-content-around'>
          <Card1 icon="https://workshop.codes/assets/abilities/50/defense-matrix-0ed6fd68ffded690a6804a2c63bfa43ea393dd1eaf2f91aafcf5ddcec87a2469.png" imgClass="h-[30px] w-[30px]" text="negate 1 ultimate with Defense Matrix" textClass="text-[18px] text-center text-white mx-3 px-3 text-end" cardClass="flex border-[5px] border-[#FFC0CB] rounded-xl w-[320px] p-3"/>

          <Btn href="#" name={<Img src="https://www.svgrepo.com/show/520693/dice.svg" class="h-[50px] w-[50px] mx-auto my-[12px]"/>} class="bg-orange hover:bg-orange-dark p-2 rounded-md border-[2px] border-[#FFC0CB] w-[100px] "/>

          <Card2 icon="https://workshop.codes/assets/abilities/50/self-destruct-9e57bdc7abb806c1f9be9d4de088cb271e290e355c82c7e725d1c76a58057875.png" imgClass="h-[30px] w-[30px]" text="Get a 4k with Self-Destruct" textClass="text-[18px] text-center text-white mx-3 px-3 text-end" cardClass="flex border-[5px] border-[#FFC0CB] rounded-xl w-[320px] p-3"/>
        </div>




      </div>

    </div>
  )
}

export default Openqueue;
