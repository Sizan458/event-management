import Aos from "aos";
import'aos/dist/aos.css';
import { useEffect } from "react";

const OurTeam = () => {
    useEffect(()=>{
        Aos.init({
            duration:2000
        })
    },[])
    return (
        <div className="w-[90%] mx-auto mt-45">
            <div className="hero  ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        
    <img src="https://i.ibb.co/9c4Yj1P/event-org-img3.png" className=" rounded-lg shadow-2xl"  data-aos="fade-left"/>
    <img src="https://i.ibb.co/gJ0FcsL/event-org-img1.png" className=" rounded-lg shadow-2xl"  data-aos="fade-left"/>
    <img src="https://i.ibb.co/FDnFCsM/event-org-img4.png" className=" rounded-lg shadow-2xl" data-aos="fade-left"/>
    <img src="https://i.ibb.co/LvCMZgV/event-org-img2.png" className=" rounded-lg shadow-2xl"data-aos="fade-left" />
    </div>
    <div>
      <p className=" text-2xl  text-left mx-5">Meet our creative event organizer</p>
      <p className="text-2xl text-left mx-5">Our team is very skilled people.They help you to make your event better and make your mind fresh </p>
      <button className="btn btn-primary justify-start">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default OurTeam;