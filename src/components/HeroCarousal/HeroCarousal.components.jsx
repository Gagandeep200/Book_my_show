import React from "react";
import HeroSlider from "react-slick";

//Component
import {NextArrow,PrevArrow} from "./Arrow.components"



const HeroCarousal = () => {

    const settingsLG = {
        arrows: true,
        autoplay: true,
        centerMode: true,
        centerPadding: "300px",
        slidesToShow: 1,
        infinite: true,
        slidesToScroll: 1,
        NextArrow:<NextArrow/>,
        PrevArrow:<PrevArrow/>
      };
    
      const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        NextArrow:<NextArrow/>,
        PrevArrow:<PrevArrow/>

      };
      const images= [
    
      ];
      return (
        <>
          <div className="lg:hidden">
            <HeroSlider {...settings}>
              {images.map((image) => (
                <div className="w-full h-56 md:h-80 py-3 ">
                  <img
                    src={image}
                    alt="testing"
                    className="w-full h-full"
                  />
                </div>
              ))}
            </HeroSlider>
          </div>
    
          <div className="hidden lg:block">
            <HeroSlider {...settingsLG}>
              {images.map((image) => (
                <div className="w-full h-96 px-2 py-3">
                  <img
                    src={image}
                    alt="testing"
                    className="w-full h-full rounded-md"
                  />
                </div>
              ))}
            </HeroSlider>
          </div>
        </>
      );
    };

    export default HeroCarousal;