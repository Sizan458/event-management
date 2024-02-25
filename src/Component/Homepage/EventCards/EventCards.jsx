import Aos from "aos";
import'aos/dist/aos.css'
import { useEffect } from "react";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
const EventCards = ({event}) => {
    
    const { id,tittle,description,thumble}= event
    useEffect(()=>{
      Aos.init({
        duration: 2000,
      })
    },[])
    
    return (
        <div className="W-[80%] mx-auto ">
            <div className="card lg:card-side  bg-[#ffcccc] shadow-xl"  data-aos="zoom-in-up">
  <figure><img src={thumble} className="h-[350px] w-[64rem]"/></figure>
  <div className="">
    <h2 className="text-[30px] mt-2 text-center font-medium">{tittle}</h2>
       <p className="text-[20px] m-8 font-medium">{description}</p>
    <div className="card-actions justify-end mr-7 mb-4">
      <Link to={`/service/${id}`}>
      <button className="flex text-[20px] text-blue-500">Read More 
        <HiArrowRight className="mt-2"></HiArrowRight></button>
      </Link>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default EventCards;