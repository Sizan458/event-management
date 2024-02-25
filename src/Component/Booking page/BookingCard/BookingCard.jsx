import { Link } from "react-router-dom";
import Aos from "aos";
import'aos/dist/aos.css'
import { useEffect } from "react";

const BookingCard = ({info}) => {
    const {id,tittle,description,price ,thumble,}=info||{}
    useEffect(()=>{
      Aos.init({
        duration: 2000,
      })
    },[])
    return (
        <div className="w-[80%] mx-auto  mt-6">
            <div className="card bg-[#adebeb] lg:card-side shadow-xl  lg:w-[60%] lg:ml-[20%]" data-aos="fade-up" >
  <figure><img src={thumble}   className="h-[230px] "/></figure>
  <div className="card-body">
    <h2 className="card-title text-2xl font-bold">{tittle}</h2>
       <p className="text-2xl font-bold">Price:{price}$</p>
    <div className="card-actions justify-end">
     <Link to={`/service/${id}`}>
     <button className="btn btn-primary bg-green-400 w-[150px] text-black">Read More</button>
     </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default BookingCard;