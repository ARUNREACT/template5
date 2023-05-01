import "../component/Layout.css";
import { Link } from "react-router-dom";

export function Services(props: any) {
  return (
    <div className="services mt-4 mx-2" data-aos="fade-up">
      <img data-aos="zoom-in" src={props.img} alt="" />
      <i data-aos="zoom-in" className={props.icon}></i>
      <h6 className="">
        {props.h5}
        <span>{props.span}</span>
      </h6>
      <Link to={props.to}>Know More</Link>
    </div>
  );
}

export function Scroll(props: any) {
  return <img className="img-fluid" src={props.img} alt="" />;
}

export function Sliderinput(props: any) {
  return (
    <input
      type="radio"
      name="slider"
      title={props.type}
      className="slider__nav"
    />
  );
}

export function Slider(props: any) {
  return (
    <div className="slider__contents">
      <img data-aos="fade-up" src={props.img} className="slider__image"></img>
      <h5 data-aos="fade-up" className="slider__caption">
        {props.h5}
      </h5>
      <p data-aos="fade-up" className="slider__txt">
        {props.p}
      </p>
    </div>
  );
}

export function Twoslide(props: any) {
  return (
    <div className={props.classname}>
      <div data-aos="fade-up" className="col-md-8 col-12 px-md-4 px-3">
        <h1>{props.h1}</h1>
        <p>{props.p}</p>
      </div>
      <div className="col-md-4 col-12 d-flex justify-content-center ">
        <img data-aos="zoom-in" className="img-fluid" src={props.img} alt="" />
      </div>
    </div>
  );
}

export function Mail(props: any) {
  return (
    <div className="col-md-4 col-12 mx-auto d-flex flex-column align-items-center mail py-3">
      <i className={props.icon}></i>
      <p className="mt-3">{props.p1}</p>
      <p>{props.p2}</p>
    </div>
  );
}

export function Input(props: any) {
  return (
    <div
      data-aos="slide-up"
      className="input-div col-lg-10 col-md-11 col-sm-7 col-12"
    >
      <i className={props.icon}></i>
      <input
        className="input-field col-sm-11 col-10"
        placeholder={props.placeholder}
        type={props.type}
      />
      <span className={props.bar}></span>
    </div>
  );
}
export function Button(props: any) {
  return (
    <div className="d-flex justify-content-center pt-5">
      <button data-aos="fade-up" className={props.btnclassname}>
        {props.btnvalue}
      </button>
    </div>
  );
}
