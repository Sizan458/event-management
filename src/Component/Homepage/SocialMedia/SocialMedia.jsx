import Aos from "aos";
import'aos/dist/aos.css'
import { useEffect } from "react";

const SocialMedia = () => {
useEffect(() => {
    Aos.init({
        duration:2000
    });
},[])
    return (
        <div>
            <div>
              <h1 className="text-center text-2xl font-bold mt-4">
                Social Media Feed
              </h1>
            </div >
            <div className="flex justify-center mt-3 gap-5">
                <img src="https://i.ibb.co/WcLNpDf/facebook.png" alt="" className="h-[50px]"/>
                <img src="https://i.ibb.co/yk5Jqz9/instagram.png" alt="" className="h-[50px]"/>
            </div>
            <div className="grid grid-cols-1 gap-3 mt-4  w-[80%] mx-auto   md:grid-cols-2 lg:grid-cols-4 " data-Aos="zoom-in">
           
           <img src="https://i.ibb.co/LdJQsh8/leonardo-miranda-ri-HGdvlu-Dk8-unsplash.jpg" alt="" className="h-[200px] w-[300px]"/>     
           <img src="https://i.ibb.co/6J7hvRb/pexels-rene-asmussen-1405528.jpg" alt="" className="h-[200px] w-[300px]"/>     
           
           <img src="https://i.ibb.co/BqT6kCY/pexels-kampus-production-7802513.jpg" alt=""className="h-[200px] w-[300px]" />     
           <img src="https://i.ibb.co/7JyJgdJ/R.jpg" alt="" className="h-[200px] w-[300px]"/>     
             
            </div>
        </div>
    );
};

export default SocialMedia;