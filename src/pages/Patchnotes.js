import '../stylesheets/index.css';
import { useState } from 'react';
import { Img } from '../components/components';

function Listnotes(props) {
  return (
      <ul className='list-disc text-white px-[32px]'>
        {props.notes.map((note, index) => (
          <li className='text-[18px] font-header my-[12px]' key={index}>{note}</li>
        ))}
      </ul>
  )

}

function Patchnotes(props) {
  const tankHeros = props.heros.filter(hero => hero.role === 'tank');
  const supportHeros = props.heros.filter(hero => hero.role === 'support');


  return(
    <div className='container mx-auto px-6'>
      <div className='p-4 m-4 bg-gray-dark/[0.9] border border-orange rounded-md'>
        <h1 className='text-white text-[28px] font-header'>General Notes:</h1>
        <Listnotes notes={props.notes}/>

        <div className='tank mt-[50px]'>
          <h1 className='text-white text-[28px] font-header'>Tanks:</h1>

          {
            tankHeros.map((hero, index) => (
              <div className='p-2 my-4 border border-orange rounded-md' key={index}>
                <div className='flex items-end pb-[28px] pt-[12px]'>
                  <Img src={hero.icon} class="h-[120px] border-[1px] border-orange rounded-md p-1"/>
                  <h1 className='text-white font-header text-[32px] mx-[12px]'>{hero.name}</h1>
                </div>

                <hr className='text-orange'/>

                <ul className='list-disc text-white px-[32px]'>
                  {hero.challanges.map((challange, index) => (
                    <li className='text-[18px] font-header my-[12px]' key={index}>{challange.text}</li>
                  ))}
                </ul>
              </div>
            ))
          }

        </div>

        <div className='support mt-[200px]'>
          <h1 className='text-white text-[28px] font-header mt-10'>Support:</h1>

          {
            supportHeros.map((hero, index) => (
              <div className='p-2 my-4 mt border border-orange rounded-md' key={index}>
                <div className='flex items-end pb-[28px] pt-[12px]'>
                  <Img src={hero.icon} class="h-[120px] border-[1px] border-orange rounded-md p-1"/>
                  <h1 className='text-white font-header text-[32px] mx-[12px]'>{hero.name}</h1>
                </div>

                <hr className='text-orange'/>

                <ul className='list-disc text-white px-[32px]'>
                  {hero.challanges.map((challange, index) => (
                    <li className='text-[18px] font-header my-[12px]' key={index}>{challange.text}</li>
                  ))}
                </ul>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )

}

export default Patchnotes
