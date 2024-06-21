import React, { useState } from 'react';
//import Login from './Login';
//import Register from './Register';
import './App.css';

export function Userform() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    // <div className="container mt-5">
    //   <div className="row">
    //     <div className="col-md-6 d-none d-md-block">
    //       <img src="https://via.placeholder.com/500" alt="Sample" className="img-fluid" />
    //     </div>
    //     <div className="col-md-6">
    //       <div className="card">
    //         <div className="card-body">
    //           <h2 className="card-title text-center">{isLogin ? 'Login' : 'Register'}</h2>
    //           {isLogin ? <Login /> : <Register />}
    //           <div className="text-center mt-3">
    //             <button className="btn btn-link" onClick={() => setIsLogin(!isLogin)}>
    //               {isLogin ? 'Don\'t have an account? Register' : 'Already have an account? Login'}
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

  <h2>Hi</h2>
  );
}

//export default Userform;
