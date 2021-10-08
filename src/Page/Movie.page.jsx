import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { FaCcVisa, FaCcApplePay } from "react-icons/fa";
import Slider from "react-slick";
//component
import Cast from '../components/Cast/Cast.component';
import MovieHero from "../components/MovieHero/MovieHero.component"
import PosterSlider from "../components/PosterSlider/PosterSlider.components"
import { MovieContext } from "../context/movie.context";
//config
import TempPosters from "../config/TempPosters.config";

const Movie = () => {
  const { id } = useParams();
  const { movie } = useContext(MovieContext);
  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [recommended, setRecommended] = useState([]);

  useEffect(() => {
    const requestCast = async () => {
      const getCast = await axios.get(`/movie/${id}/credits`);
      setCast(getCast.data.cast);
    };
    requestCast();
  }, [id]);

  useEffect(() => {
    const requestSimilarMovies = async () => {
      const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
      setSimilarMovies(getSimilarMovies.data.results);
    };

    requestSimilarMovies();
  }, [id]);

  useEffect(() => {
    const requestRecommendedMovies = async () => {
      const getRecommendedMovies = await axios.get(
        `/movie/${id}/recommendations`
      );
      setRecommended(getRecommendedMovies.data.results);
    };

    requestRecommendedMovies();
  }, [id]);

  
  const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
};
const settingsCast = {
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};
    return (<>
        <MovieHero/>
        <div className="my-5 container px-4 lg:ml-20 lg:w-2/3
        ">
            <div className="flex flex-col items-start gap-3">
            <h2 className="text-gray-800 font-bold text-2xl">About the movie</h2>
            <p>
            Bruce Wayne and Diana Prince try to bring the metahumans of Earth together after the death of Clark Kent. Meanwhile, Darkseid sends Steppenwolf to Earth with an army to subjugate humans.
        </p>
       <div className="my-8">
           <hr/>
           </div>
        
        </div>
        </div>
        
        <div className="my-8">
        <h2 className="text-gray-800 font-bold text-2xl mb-3">
            Applicable offers
            </h2>
            <div className="flex flex-col gap-5 lg:flex-row">
            <div className="flex item-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
                <FaCcVisa className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold">
                  Filmy Pass
                </h3>
                <p className="text-gray-600">
                  Get 50% off up to INR 150 on all RuPay cards* on BookMyShow
                  Stream.
                </p>
              </div>
            </div>
            <div className="flex item-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
                <FaCcApplePay className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold">Filmy Pass</h3>
                <p className="text-gray-600">
                  Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy
                  Pass @Rs.99
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-8">
          <hr />
        </div>


        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-4">Cast & Crew</h2>
          <div className="flex flex-wrap gap-4">
              <Cast 
              image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/henry-cavill-23964-04-05-2020-04-25-14.jpg" 
              castName="Henry Cavil" role="Superman"/>
              <div>
              <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/ben-affleck-292-12-09-2017-05-12-16.jpg" 
              castName="Ben Affleck" role="Batman"/>
          </div>
          <div>
              <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/gal-gadot-11088-17-10-2017-11-45-36.jpg" 
              castName="Gal Gadot" role="Wonder Woman"/>
          </div>
          <div>
              <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/ray-fisher-1072729-17-10-2017-12-14-18.jpg" 
              castName="Ray Fisher" role="Cyborg"/>
          </div>
          <div>
              <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/jason-momoa-25617-24-03-2017-17-39-52.jpg" 
              castName="Jason Momoa" role="Aquaman"/>
          </div>
          </div>
          </div>

          <div className="my-8">
          <PosterSlider
            images={TempPosters} 
          title="You might also like" 
          isDark={false}
          />
          </div>
          <div className="my-8">
          <PosterSlider
            images={TempPosters} 
          title="BMS XCLUSIVE" 
          isDark={false}
          />
          </div>
        </>

    );
    };
export default Movie;
