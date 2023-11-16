import React, { useState} from "react";
import "../styles/Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebaseConfig";
import { Link , useNavigate} from "react-router-dom";
import useAuth from "../hooks/useAuth";


function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate= useNavigate();
  const {handleSignUp}=useAuth();
   
    
  

  const Signup = async (e) => {
    e.preventDefault();
    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     console.log(userCredential);
    //     alert('Account Created' )
    //     Navigate('/login')
    //   })
    //   .catch((error) => {
    //     alert(error.message);
    //   });
    if (email==="" && password===""){
      alert("please enter a valid email address");
      return;
    }
    await handleSignUp(email, password);
    setEmail('');
    setPassword('');
    Navigate('/');
    alert("successfully signed in")
  };



  return (
    <div className="wrapper bg-dark d-flex align-items-center justify-content-center w-100">
      
        <div className="Login">
          <h2 className="mb-3">Create Account</h2>

          <form onSubmit={Signup} className="needs-validation">
            <div className="form-group was-validated mb-2">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="text"
                className="form-control"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />

              <div className="invalid-feedback">Please Enter your email</div>
            </div>

            <div className="form-group was-validated mb-2">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />

              <div className="invalid-feedback">Please Enter your password</div>
            </div>
             <Link to="/login"> 
              <button className="btn btn-success w-100 mt-2">SIGN UP
              </button>
             </Link> 
          </form>
          <p>Proceed to the <Link to="/login">Log in</Link> page</p>
        </div>
      
    </div>
  );
}

export default SignUp;
