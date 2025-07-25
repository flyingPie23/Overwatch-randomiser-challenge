import '../stylesheets/index.css';
import { Btn,Img } from "../components/components";
import { useState } from 'react';

function App() {

  const [alert, setAlert] = useState("hidden")

  const toggleOn = () => {
    setAlert("");
    console.log(alert)
  };

  const toggleOff = () => {
    setAlert("hidden");
    console.log(alert)
  };

  return (
    <div className='container mx-auto px-6'>
      <div className='w-full h-full py-4 my-4 bg-gray-dark/[0.9] border rounded-md'>
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Overwatch Randomiser Challenge
        </h1>

        <p className='text-center mx-6 mb-7 text-white'>
          This is a fun Overwatch Challenge we have been running with some friends, it goes like this. First you get to play a random OW hero and must try to get a POTG with them. While also trying to complete two challenges attached to each character for bonus points! This challenge has been a fun and we made this website to share with you! So if you wanna give it a try just click down here and of course GLHF :)
        </p>

        <div className='flex mx-auto px-[450px] place-content-between'>
          <Btn click={toggleOn} href="#" name="Role Queue" class="font-bold text-white bg-orange hover:bg-orange-dark p-1 rounded-md" />

          <Img src="https://www.freepnglogos.com/uploads/overwatch-logo-white-15.png" class="h-6"/>

          <Btn  href="/Overwatch-randomiser-challenge/#/openqueue" name="Open Queue" class="font-bold text-white bg-orange hover:bg-orange-dark p-1 rounded-md"/>
        </div>

      </div>

      <div onClick={toggleOff} className={`p-3 border-[0.5px] border-orange w-[300px] rounded-md bg-orange/[0.9] hover:bg-orange ml-auto ${alert === "hidden" ? 'hidden' : ''}`}>
        <p className='text-white'>Role Queue will be coming very soon</p>
      </div>
    </div>
  );
}

export default App;
