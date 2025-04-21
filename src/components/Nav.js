import '../stylesheets/index.css';
function Img(props) {
  return <img src={props.src} alt="Logo" className={props.class} />;
}


function Nav() {
  return (
    <div className='p-3 m-3 flex justify-center'>
      <Img src="https://www.pngall.com/wp-content/uploads/13/Overwatch-Logo-PNG.png" class="h-6"/>
    </div>
  )

}

export default Nav;
