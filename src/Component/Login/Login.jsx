import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";



const Login = () => {
 const[loginError,setLoginError] =useState('')
 const[success, setSuccess]=useState('')
 const[showPassword, setShowPassword]= useState(false)
  const location=useLocation()
 //page reload  function
  const navigate =  useNavigate()
  const{logIn,}=useContext(AuthContext)
 
  
    const handleLogin =e=>{
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        setLoginError('')
        setSuccess('')
        
        logIn(email, password)
        .then(result=>{
          console.log(result)
          // navigate to page after successful login
          navigate(location.state);
          setSuccess('Successfully log in')
        })
        .catch(err=>{
         
          setLoginError(err.message);
        })
      
      


    }
    return (

        <div>
          <div>
            
          </div>
           <div className="hero  bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold mt-2 mb-4 text-center">Login now!</h1>
     <img src="https://i.ibb.co/HCLx2QD/pexels-asad-photo-maldives-169198.jpg" className="h-[350px]"></img>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleLogin}>
        {
          loginError && <p className="text-red-700 text-center">{loginError}</p>
        }
        {
          success &&  <p className="text-green-700 text-center">{success}</p>
        }
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type={ showPassword ?"text" :"password"} placeholder="password" name="password" className="input input-bordered" required />
          <div className="flex  justify-between">
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
          <span  onClick={()=>setShowPassword(!showPassword)}>show password</span>
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <div>
        <p className="text-center text-xl  font-semibold mb-4">Do not have a account <Link to='/register' className="text-red-500">Register</Link></p>
      </div>
      <div>
     
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;