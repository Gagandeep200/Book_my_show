import axios from "axios";
import React, {useState,useEffect} from "react";
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.components"

const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [latestmovies, setlatestmovies] = useState([]);

  useEffect(() => {
    const requestPopularMovies = async () => {
      const getPopularMovies = await axios.get("/movie/popular");
      setPopularMovies(getPopularMovies.data.results);
    };

    requestPopularMovies();
  }, []);

  useEffect(() => {
    const requestTopRatedMovies = async () => {
      const getTopRatedMovies = await axios.get("/movie/top_rated");
      setTopRatedMovies(getTopRatedMovies.data.results);
    };

    requestTopRatedMovies();
  }, []);

  useEffect(() => {
    const requestUpcomingMovies = async () => {
      const getUpcomingMovies = await axios.get("/movie/upcoming");
      setUpcomingMovies(getUpcomingMovies.data.results);
    };

    requestUpcomingMovies();

  }, []);
    return(
        <>
          <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-12">
            <div className="container mx-auto px-5">
              <h1 className="text-2xl font-bold text-gray-800 my-6">
                The Best Of Entertainment
              </h1>
              <EntertainmentCardSlider />
              
            </div>
            </div>
        <div className="bg-bms-800 py-16">
         
          <div className="container mx-auto px-4 flex flex-col gap-3">
          <div className="flex">
            <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                alt="Rupay"
                className="w-full h-full"
                />
          </div>
          <PosterSlider images={popularMovies} 
          title="Premieres" 
          isDark={true}
          subtitle= "Brand New Releases Every Friday"/>
          
          </div>
        </div>
          </div>
          
          <div 
          className="container mx-auto px-4 my-8">
          <PosterSlider
           images={topRatedMovies} 
          title="Online Streaming Events" 
          isDark={false}
          subtitle= "Brand New Releases Every Friday"/>       
         </div>

         <div 
          className="container mx-auto px-4 my-8">
          <PosterSlider
           images={upcomingMovies} 
          title="Outdoor Events" 
          isDark={false}
          subtitle= ""/>       
         </div>
         </>
         
        
  )
    }
  
export default HomePage;