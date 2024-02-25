import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BookingCard from "../BookingCard/BookingCard";
import Footer from "../../Footer/Footer";


const Booking = () => {
    const [booking,setBooking] =useState([])
    const [noData ,setNoData] = useState('')
  useEffect(()=>{
    const order= JSON.parse(localStorage.getItem('eventData'))
    setBooking(order)
   if (order){
    setBooking(order)
   }else{
      setNoData('You have not Selected any of our services')
   }

  },[])

   console.log(booking)
    return (
        <div>
          <div>
          {
            noData ? <div className="flex justify-center mt-[70px]">
                <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure><img src="https://i.ibb.co/hCF7zkv/11663890-20944693.jpg"  /></figure>
            <div className="card-body mt-8">
                       <h1 className="text-5xl text-yellow-600">{noData}</h1>
              <div className="card-actions justify-center mt-4">
                <Link to='/'>
                <button className="btn btn-error w-full">Go Home</button>
                </Link>
              </div>
            </div>
          </div>
            </div>
          :
          <div className="grid grid-rows-1 gap-3 mt-2">
            {
                booking.map(info =><BookingCard key={info.id} info={info}></BookingCard> )
            }
          </div>
           }
          </div>
          <div>
            <Footer></Footer>
          </div>
           
        </div>
    );
};

export default Booking;