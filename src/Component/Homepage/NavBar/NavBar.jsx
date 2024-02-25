import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";


const NavBar = () => {
  
  const{logOut, user}=useContext(AuthContext)
  
  const link=< >
      <li className="text-[20px] font-semibold"><NavLink to='/'>Home</NavLink></li>
     
      <li className="text-[20px] font-semibold"><NavLink to='/about'>About Us</NavLink></li>
        <li className="text-[20px] font-semibold"><NavLink to='/booking'> Booking</NavLink></li>
        
  

  </>
  const handleLogOut=()=>{
    logOut();
}
  const link2 =<>
  
  <li className="text-[20px] font-semibold"><NavLink to='/register'>Register</NavLink></li>
    
    <li><button className="btn btn-error btn-sm" onClick={handleLogOut}>Logout</button></li>
  </>
   
    return (
        <div className="mx-2">
          <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-secondary lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-red-100 rounded-box w-52">
            {link}
            
        
      </ul>
    </div>
    <img src="https://i.ibb.co/5Wd9Ncn/logo.jpg" className="h-[50px] w-[60px]"></img>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
         {link}
        
     
    </ul>
  </div>
  <div>
    
  </div>
  {/*dynamic logging btn */}
  <div className="navbar-end">
  {
    user?<div className="dropdown dropdown-end">
    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full">
        <img src={user.photoURL} alt={user.displayName} />
      </div>
    </label>
    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
    <li className="text-[40px] font-semibold"><p>{user.displayName}</p></li>
      {link2}

    </ul>
  </div>:
      <Link to='/logIn'>
      <button className="btn btn-ghost text-black">Login</button>
      </Link>
  }
   
    
  </div>
</div>
        </div>
    );
};

export default NavBar;