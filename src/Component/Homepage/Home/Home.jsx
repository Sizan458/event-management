import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";

import EventCards from "../EventCards/EventCards";
import OurTeam from "../OurTeam/OurTeam";
import SocialMedia from "../SocialMedia/SocialMedia";
import Footer from "../../Footer/Footer";


const Home = () => {
    const events= useLoaderData()
    
    return (
        <div>
            
            <Banner></Banner>
            <div >
                <h1 className=" text-center text-4xl font-bold mt-4">Our Services</h1>

                <div className="grid grid-rows-1 justify-center  gap-7 w-[80%] mx-auto mt-6">
                    {
                    events.map(event=><EventCards key={event.id} event={event}></EventCards>)

                    }
                </div>
               <div className="mt-6">
               <OurTeam className></OurTeam>
               </div>
               <div>
                <SocialMedia></SocialMedia>
               </div>
               <div>
                <Footer></Footer>
               </div>

            </div>
        </div>
    );
};

export default Home;