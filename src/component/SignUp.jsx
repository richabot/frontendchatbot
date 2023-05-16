import axios from 'axios';
import React, { useState } from 'react'
import Navbar from './Navbar';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkpassword, setCheckPassword] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        await axios.post('https://kind-plum-coyote-kilt.cyclic.app/signup', { name,email, password });
        console.log('Signup successful');
        // localStorage.setItem("userid", email);
        window.location.href="/signin"
      } catch (error) {
        console.error('Error signing up:', error.response.data);
      }
    };
  return (
   <>
    <Navbar/>
    <section className="vh-100" style={{backgroundColor:" #eee"}}>
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-lg-12 col-xl-11">
          <div className="card text-black" style={{borderRadius:"25px"}}>
            <div className="card-body p-md-5">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
  
                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
  
                  <form onSubmit={handleSubmit} className="mx-1 mx-md-4">
  
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <input type="text" placeholder='Your Name' id="form3Example1c" className="form-control"
                          value={name}
                          onChange={(e) => setName(e.target.value)} />
                        {/* <label className="form-label" for="form3Example1c">Your Name</label> */}
                      </div>
                    </div>
  
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <input type="email" id="form3Example3c" placeholder="You Email" className="form-control" value={email}
                          onChange={(e) => setEmail(e.target.value)} />
                        {/* <label className="form-label" for="form3Example3c">Your Email</label> */}
                      </div>
                    </div>
  
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <input type="password" id="form3Example4c"placeholder="You Password" className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                       
                      </div>
                    </div>
  
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <input type="password" id="form3Example4cd" placeholder="You Password Again" className="form-control"
                        value={checkpassword}
                        onChange={(e) => setCheckPassword(e.target.value)} />
                        {/* <label className="form-label" for="form3Example4cd">Repeat your password</label> */}
                      </div>
                    </div>
  
                   
  
                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button type="submit" className="btn btn-primary btn-lg">Register</button>
                    </div>
  
                  </form>
  
                </div>
                <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
  
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                    className="img-fluid" alt="Sample image"/>
  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section></>
  )
}

export default SignUp