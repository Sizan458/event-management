import {Link } from "react-router-dom";
const Error = () => {
    return (
        <div className="flex justify-center mt-[5%]">
           <div className="card w-96 ">
  <figure><img src="https://i.ibb.co/K9tBWs6/8030430-3828537.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    
    
    <div className="card-actions  justify-center">
      <Link to='/'>
      <button className="btn btn-error ">Go to Home</button>
      </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Error;