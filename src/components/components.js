function Img(props) {
  return <img src={props.src} alt="Logo" className={props.class} href={props.href} />;
}

function Btn(props) {
  return <a href={props.href} target={props.target} className={props.class}>{props.name}</a>

}

export { Img, Btn };
