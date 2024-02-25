import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";



const Register = () => {
  

  const{googleSignIn,signInWithEmail}=useContext(AuthContext)
  const[showPassword, setShowPassword]= useState(false)
  const [registerError,setRegisterError]= useState('')
  const[success, setSuccess]=useState('')
  
  
 
     const handleRegistration=e=>{  
        e.preventDefault();
        const name= e.target.name.value
        const email= e.target.email.value
        const password= e.target.password.value

        if(password.length<6){
          setRegisterError('password must be at least 6 characters')
          return
        }else if(!/[A-Z]/.test(password)){
          setRegisterError('password must be at least  uppercase letter ')
          return
 
         }else if(!/(?=.*?[#?!@$%^&*-])/.test(password)){
          setRegisterError('password must be at least a special character')
          return
         }
        

       // rest error
       setRegisterError('')
       setSuccess('')

// register  with  email address and password
      signInWithEmail(email,password)
      .then(result=>{
        console.log(result)
        setSuccess('Your successful register')
      })
      .catch(error=>{
        
       setRegisterError(error.message);
      })
      
     }
     // register   with google 
   const handleGoogle=()=>{
     googleSignIn()
     .then(result=>{
        console.log(result.user)
        
     })
     .then(error=>console.error(error))
   }

    return (
        

        <div>
          
            <div className="hero  bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold mt-3 mb-5">Please  Register ! </h1>
      <img src="https://i.ibb.co/0JYrznW/pexels-designecologist-2526105.jpg" className="h-[350px] mt-2"></img>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleRegistration}>
        {
          registerError &&  <p className="text-red-700 text-center">{registerError}</p>
        }
        {
          success && <p className="text-green-700 text-center">{success}</p>
        }
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
        </div>
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
          <div className="flex justify-between">
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
          <span className="text-black" onClick={()=>setShowPassword(!showPassword)}>Show password</span>
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      
      </form>
      <div className="ml-[55px]">
      <button className="btn mb-2  bg-lime-200 text-xl " onClick={handleGoogle}>
 <FcGoogle className="text-xl"></FcGoogle>
  Login With Google
</button>
      </div>
      <div>
        <p className="text-center mb-3 text-xl font-semibold">Already have a account <Link to='/logIn' className="text-green-500">Login</Link></p>
      </div>
      
    </div>
  </div>
</div>
           
        </div>
    );
};

export default Register;