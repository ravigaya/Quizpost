import { useState } from 'react';
import Login from './Login';
import Register from './Register';
import userimage from '../src/assets/userform-image.jpg'
//import {userform-image}  from './compoent-assets/userform.jsx'

 export const Registerform = () => {

    const [isLogin, setIsLogin] = useState(true);

  return (
    <>
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 d-none d-md-block">
          <img src={userimage} alt="Sample" className="img-fluid" />
        </div>
        <div className="col-md-15">
          <div className="card">
            <div className="card-body">

            <div className="d-flex justify-content-center text-center mt-10">
                <button 
                  className= {`rounded-0 btn ${isLogin ? 'btn-warning' : 'btn-outline'} `}
                  onClick={() => setIsLogin(true)}
                >

                  Login
                </button>
                <button
                  className={`btn ${!isLogin ? 'btn-warning' : 'btn-warning'}`}
                  onClick={() => setIsLogin(false)}
                >
                  Register
                </button>
              </div>
                
              <h2>Welcome</h2>
              {isLogin ? 'Login to your Account' : 'Please Register here'}
              {isLogin ? <Login /> : <Register />}
              <div className=" d-flex justify-content-center text-center mt-10">
                <button className="btn btn-link" onClick={() => setIsLogin(!isLogin)}>
                </button>
                {isLogin ? 'Forgot Password' : ' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>


);
}


export default Registerform
