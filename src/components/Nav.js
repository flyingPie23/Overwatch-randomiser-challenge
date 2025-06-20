import '../stylesheets/index.css';
import {Img, Btn} from "./components"

function Nav() {
  return (
    <div className='p-3 m-3 mx-[55px] flex place-content-between'>
      <Btn href="/#/patchnotes" name="Patch notes"class="font-bold text-white bg-orange hover:bg-orange-dark p-1 rounded-md"/>
      <a href='/#/'>
        <Img src="https://www.pngall.com/wp-content/uploads/13/Overwatch-Logo-PNG.png" class="h-6"/>
      </a>
      <Btn href="https://overwatch.blizzard.com/en-us/" target="_blank" name="Get Overwatch"class="font-bold text-white bg-orange hover:bg-orange-dark p-1 rounded-md"/>
    </div>
  )

}

export default Nav;
