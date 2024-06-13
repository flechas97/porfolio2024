
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    pauseOnHover: true,
    fade: true,
  };

  function SampleNextArrow(props:any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props:any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "green" }}
        onClick={onClick}
      />
    );
  }
  return (
    <Slider {...settings}>
      <div style={{width:'100%'}}>
        <Image  src="/proyectohy/port.png" alt="home" width={16} height={9} layout="responsive" objectFit="cover" className='imagenCarrousel' style={{borderRadius:'10px'}} />
      </div>
      <div style={{width:'100%'}}>
      <Image  src="/proyectohy/port2.png" alt="home" width={16} height={9} layout="responsive" objectFit="cover" className='imagenCarrousel' style={{borderRadius:'10px'}} />
      </div>
      <div style={{width:'100%'}}>
      <Image  src="/proyectohy/port3.png" alt="home" width={16} height={9} layout="responsive" objectFit="cover" className='imagenCarrousel' style={{borderRadius:'10px'}} />
      </div>
      <div style={{width:'100%'}}>
      <Image  src="/proyectohy/port4.png" alt="home" width={16} height={9} layout="responsive" objectFit="cover" className='imagenCarrousel' style={{borderRadius:'10px'}} />
      </div>
      <div style={{width:'100%'}}>
      <Image  src="/proyectohy/port.png" alt="home" width={16} height={9} layout="responsive" objectFit="cover" className='imagenCarrousel' style={{borderRadius:'10px'}} />
      </div>
      <div style={{width:'100%'}}>
      <Image  src="/proyectohy/port2.png" alt="home" width={16} height={9} layout="responsive" objectFit="cover" className='imagenCarrousel' style={{borderRadius:'10px'}} />
      </div>
    </Slider>
  );
}