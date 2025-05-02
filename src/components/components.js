function Img(props) {
  return <img src={props.src} alt="Logo" className={props.class} href={props.href} />;
}

function Btn(props) {
  return <a href={props.href} target={props.target} onClick={props.click} className={props.class}>{props.name}</a>

}

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

export { Img, Btn, Card1, Card2 };
