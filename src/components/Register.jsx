import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../provider/AuthProvider";


const Register = () => {
const {createUser}=useContext(authContext);
// console.log(authInfo);

    const handelReister= e=>{
        e.preventDefault();
        const name=e.target.name.value
        const email =e.target.email.value;
        const password =e.target.password.value;
        console.log(name, email,password);


        //create user 
        createUser(email,password)
        .then(result=>{
          console.log(result.user);
        })
        .catch(error=>{
          console.log(error);
        })


    } 


    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
     
      
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form  onSubmit={handelReister} className="card-body">
       
        <div className="form-control">
        <label className="label">
            <span className="label-text">Name</span>
          </label>
        <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        
      </form>
      <p>Already have account? please 
        <Link to={'/login'}>
        <button className="btn btn-link">Login </button>
        </Link>
      </p>
    </div>
  </div>
</div>
    );
};

export default Register;