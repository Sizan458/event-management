import { FaFacebookF ,FaInstagram} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Members = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);
    return (
        <div className="grid grid-cols-1 gap-4 w-[80%] mx-auto mt-4 md:grid-cols-2 lg:grid-cols-4">
            <div>
            <div className="card  bg-base-100 shadow-xl" data-aos="fade-up">
  <figure className="px-10 pt-10">
    <img src="https://i.ibb.co/9c4Yj1P/event-org-img3.png" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Kyle Buckley</h2>
    <p className="text-2xl text-center font-semibold">Manager</p>
     <div className="flex gap-4 mt-3 text-2xl "> 
        <p><FaFacebookF></FaFacebookF></p>
        <p><FaInstagram></FaInstagram></p>
        <p><FaXTwitter></FaXTwitter></p>
     </div>
   
  </div>
</div>
            </div>
            <div>
            <div className="card  bg-base-100 shadow-xl" data-aos="fade-up">
  <figure className="px-10 pt-10">
    <img src="https://i.ibb.co/gJ0FcsL/event-org-img1.png" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Alisha Rees</h2>
    <p className="text-2xl text-center font-semibold">Chief  Designer</p>
     <div className="flex gap-4 mt-3 text-2xl "> 
        <p><FaFacebookF></FaFacebookF></p>
        <p><FaInstagram></FaInstagram></p>
        <p><FaXTwitter></FaXTwitter></p>
     </div>
   
  </div>
</div>
            </div>
            <div>
            <div className="card  bg-base-100 shadow-xl" data-aos="fade-up">
  <figure className="px-10 pt-10">
    <img src="https://i.ibb.co/FDnFCsM/event-org-img4.png"  alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Maisie Walton</h2>
    <p className="text-2xl text-center font-semibold">Senior  Designer</p>
     <div className="flex gap-4 mt-3 text-2xl "> 
        <p><FaFacebookF></FaFacebookF></p>
        <p><FaInstagram></FaInstagram></p>
        <p><FaXTwitter></FaXTwitter></p>
     </div>
   
  </div>
</div>
            </div>
            <div>
            <div className="card  bg-base-100 shadow-xl" data-aos="fade-up"> 
  <figure className="px-10 pt-10">
    <img src="https://i.ibb.co/LvCMZgV/event-org-img2.png" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Rhys Carter</h2>
    <p className="text-2xl text-center font-semibold">Designer</p>
     <div className="flex gap-4 mt-3 text-2xl "> 
        <p><FaFacebookF></FaFacebookF></p>
        <p><FaInstagram></FaInstagram></p>
        <p><FaXTwitter></FaXTwitter></p>
     </div>
   
  </div>
</div>
            </div>
        </div>
    );
};

export default Members;