import Footer from "../../Footer/Footer";
import Banner from "../Banner/Banner";
import Members from "../Know our team/Member/Members";
import Progress from "../Progress/Progress";
import Stat from "../Stat/Stat";


const AboutUs = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div className="text-3xl text-center font-semibold mt-4">
                <h1>Meet Our Team</h1>
            </div>
          <div>
            <Members></Members>
          </div>
          <div>
           <Progress></Progress>
          </div>
          <div>
            <Stat></Stat>
          </div>
          <div>
            <Footer></Footer>
          </div>
        </div>
    );
};

export default AboutUs;