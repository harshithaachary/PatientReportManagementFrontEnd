// import {  useState } from "react";
// import { useNavigate } from 'react-router-dom';
// import axios from "axios";
// import { useParams, Link } from 'react-router-dom';
// //import { Link } from 'react-router-dom';
// function Login() {
   
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const navigate = useNavigate();


//     async function login(event) {
//         event.preventDefault();
//         try {
//           await axios.post("http://localhost:8084/api/v1/user/login", {
//             email: email,
//             password: password,
//             }).then((res) => 
//             {
//              console.log(res.data);
             
//              if (res.data.message == "Email not exits") 
//              {
//                alert("Email not exits");
//              } 
//              else if(res.data.message == "Login Success")
//              { 
                
//                 navigate('/home');
//              } 
//               else 
//              { 
//                 alert("Incorrect Email and Password not match");
//              }
//           }, fail => {
//            console.error(fail); // Error!
//   });
//         }

 
//          catch (err) {
//           alert(err);
//         }
      
//       }

//     return (
//        <div>
//             <div class="container">
//             <div class="row">
//                 <h2>Login</h2>
//              <hr/>
//              </div>

//              <div class="row">
//              <div class="col-sm-6">
 
//             <form>
//         <div class="form-group">
//           <label>Email</label>
//           <input type="email"  class="form-control" id="email" placeholder="Enter Email"
          
//           value={email}
//           onChange={(event) => {
//             setEmail(event.target.value);
//           }}
          
//           />

//         </div>

//         <div class="form-group">
//             <label>password</label>
//             <input type="password"  class="form-control" id="password" placeholder="Enter Password"
            
//             value={password}
//             onChange={(event) => {
//               setPassword(event.target.value);
//             }}
            
//             />
//           </div> 
//                   <button type="submit" class="btn btn-primary" onClick={login} >Login</button>
//                  <div>
//                   <Link to="/register" className="btn btn-secondary mt-3">Register</Link>
//                   </div>
//               </form>

//             </div>
//             </div>
//             </div>

//      </div>
//     );
//   }
  
//   export default Login;

// import { useState } from "react";
// import { useNavigate } from 'react-router-dom';
// import axios from "axios";
// import { useParams, Link } from 'react-router-dom';

// import './Login.css'; // Replace with the correct path to your background image

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   async function login(event) {
//     event.preventDefault();
//     try {
//       await axios.post("http://localhost:8084/api/v1/user/login", {
//         email: email,
//         password: password,
//       }).then((res) => {
//         console.log(res.data);
//         if (res.data.message === "Email not exists") {
//           alert("Email not exists");
//         } else if (res.data.message === "Login Success") {
//           navigate('/home');
//         } else {
//           alert("Incorrect Email and Password do not match");
//         }
//       }, fail => {
//         console.error(fail); // Error!
//       });
//     } catch (err) {
//       alert(err);
//     }
//   }

//   return (
//     <div className="container login-background">
//       <div className="row">
//         <h2>Login</h2>
//         <hr />
//       </div>

//       <div className="row">
//         <div className="col-sm-6">
//           <form>
//             <div className="form-group">
//               <label>Email</label>
//               <input
//                 type="email"
//                 className="form-control"
//                 id="email"
//                 placeholder="Enter Email"
//                 value={email}
//                 onChange={(event) => {
//                   setEmail(event.target.value);
//                 }}
//               />
//             </div>

//             <div className="form-group">
//               <label>Password</label>
//               <input
//                 type="password"
//                 className="form-control"
//                 id="password"
//                 placeholder="Enter Password"
//                 value={password}
//                 onChange={(event) => {
//                   setPassword(event.target.value);
//                 }}
//               />
//             </div>

//             <button type="submit" className="btn btn-primary" onClick={login}>Login</button>
//             <div>
//               <Link to="/register" className="btn btn-secondary mt-3">Register</Link>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;
// import { useState } from "react";
// import { useNavigate } from 'react-router-dom';
// import axios from "axios";
// import { Link } from 'react-router-dom';

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   async function login(event) {
//     event.preventDefault();
//     try {
//       await axios.post("http://localhost:8084/api/v1/user/login", {
//         email: email,
//         password: password,
//       }).then((res) => {
//         console.log(res.data);
//         if (res.data.message === "Email not exists") {
//           alert("Email not exists");
//         } else if (res.data.message === "Login Success") {
//           navigate('/home');
//         } else {
//           alert("Incorrect Email and Password do not match");
//         }
//       }, fail => {
//         console.error(fail); // Error!
//       });
//     } catch (err) {
//       alert(err);
//     }
//   }

//   return (
//     <div className="container">
//       <div className="row justify-content-center align-items-center vh-100">
//         <div className="col-sm-6">
//           <div className="p-4 border rounded bg-light">
//             <h2 className="mb-4">Login</h2>
//             <form>
//               <div className="form-group">
//                 <label>Email</label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   id="email"
//                   placeholder="Enter Email"
//                   value={email}
//                   onChange={(event) => {
//                     setEmail(event.target.value);
//                   }}
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Password</label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   id="password"
//                   placeholder="Enter Password"
//                   value={password}
//                   onChange={(event) => {
//                     setPassword(event.target.value);
//                   }}
//                 />
//               </div>

//               <div className="form-group">
//                 <div className="row mb-4">
//                   <div className="col d-flex justify-content-center">
//                     {/* <div className="form-check">
//                       <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
//                       <label className="form-check-label" htmlFor="form2Example31">Remember me</label>
//                     </div> */}
//                   </div>
//                   {/* <div className="col">
//                     <a href="#!" className="float-end">Forgot password?</a>
//                   </div> */}
//                 </div>

//                 <button type="submit" className="btn btn-primary btn-block mb-4" onClick={login}>Sign in</button>

//                 <div className="text-center">
//                   <p>Not a member? <Link to="/register">Register</Link></p>
//                   <p>or sign up with:</p>
//                   <button type="button" className="btn btn-link btn-floating mx-1">
//                     <i className="fab fa-facebook-f"></i>
//                   </button>

//                   <button type="button" className="btn btn-link btn-floating mx-1">
//                     <i className="fab fa-google"></i>
//                   </button>

//                   <button type="button" className="btn btn-link btn-floating mx-1">
//                     <i className="fab fa-twitter"></i>
//                   </button>

//                   <button type="button" className="btn btn-link btn-floating mx-1">
//                     <i className="fab fa-github"></i>
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;

import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function login(event) {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8084/api/v1/user/login", {
        email: email,
        password: password,
      });
      const res = response.data;
      console.log(res);
      if (res.message === "Email not exists") {
        alert("Email not exists");
      } else if (res.message === "Login Success") {
        navigate('/home');
      } else {
        alert("Incorrect Email and Password do not match");
      }
    } catch (err) {
      alert(err);
    }
  }

  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample image"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label className="form-label" htmlFor="form3Example3">
                  Email address
                </label>
              </div>

              <div className="form-outline mb-3">
                <input
                  type="password"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label className="form-label" htmlFor="form3Example4">
                  Password
                </label>
              </div>

              <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="form-check">
                  {/* <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" /> */}
                  <label className="form-check-label" htmlFor="form2Example3">
                    {/* Remember me */}
                  </label>
                </div>
                {/* <a href="#!" className="text-body">
                  Forgot password?
                </a> */}
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  onClick={login}
                >
                  Login
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?{" "}
                  <Link to="/register" className="link-danger">
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="d-flex flex-md-row text-center justify-content-between py-4 px-4 px-xl-5">
        <div className="text-white">&copy; 2023. All rights reserved.</div>
      </div>
    </section>
  );
}

export default Login;


