
// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const RegisterForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [emailError, setEmailError] = useState(null);
//   const [nameError, setNameError] = useState(null);
//   const [passwordError, setPasswordError] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!validateEmail(email)) {
//       setEmailError('Please enter a valid email address');
//       return;
//     }

//     if (!validateName(name)) {
//       setNameError('Name should be at least 4 characters long');
//       return;
//     }

//     if (!validatePassword(password)) {
//       setPasswordError('Password should be at least 8 characters long');
//       return;
//     }

//     const user = {
//       name: name,
//       email: email,
//       password: password
//     };

//     axios.post('http://localhost:8084/api/v1/user/save', user)
//       .then(response => {
//         console.log('Registration successful');
//         setName('');
//         setEmail('');
//         setPassword('');
//         // Handle success, such as showing a success message or redirecting to another page
//       })
//       .catch(error => {
//         console.error('Registration failed:', error);
//         // Handle error, such as showing an error message
//       });
//   };

//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const dotComRegex = /\.com$/i;
//     return emailRegex.test(email) && dotComRegex.test(email);
//   };

//   const validateName = (name) => {
//     return name.length >= 4;
//   };

//   const validatePassword = (password) => {
//     return password.length >= 8;
//   };

//   return (
//     <div className="container register-background">
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Name"
//             value={name}
//             onChange={(e) => {
//               setName(e.target.value);
//               setNameError(null);
//             }}
//           />
//           {nameError && <div className="text-danger">{nameError}</div>}
//         </div>
//         <div className="mb-3">
//           <input
//             type="email"
//             className="form-control"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => {
//               setEmail(e.target.value);
//               setEmailError(null);
//             }}
//           />
//           {emailError && <div className="text-danger">{emailError}</div>}
//         </div>
//         <div className="mb-3">
//           <input
//             type="password"
//             className="form-control"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => {
//               setPassword(e.target.value);
//               setPasswordError(null);
//             }}
//           />
//           {passwordError && <div className="text-danger">{passwordError}</div>}
//         </div>
//         <button type="submit" className="btn btn-primary">Register</button>
//       </form>
//     </div>
//   );
// };

// export default RegisterForm;
// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const RegisterForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [emailError, setEmailError] = useState(null);
//   const [nameError, setNameError] = useState(null);
//   const [passwordError, setPasswordError] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
  
//     if (!validateEmail(email)) {
//       setEmailError('Please enter a valid email address');
//       return;
//     }
  
//     if (!validateName(name)) {
//       setNameError('Name should be at least 4 characters long');
//       return;
//     }
  
//     if (!validatePassword(password)) {
//       setPasswordError('Password should be at least 8 characters long');
//       return;
//     }
  
//     const user = {
//       name: name,
//       email: email,
//       password: password
//     };
  
//     axios.post('http://localhost:8084/api/v1/user/save', user)
//       .then(response => {
//         console.log('Registration successful');
//         setName('');
//         setEmail('');
//         setPassword('');
//         setEmailError(null); // Clear email error
//         setNameError(null); // Clear name error
//         setPasswordError(null); // Clear password error
//         // Handle success, such as showing a success message or redirecting to another page
//       })
//       .catch(error => {
//         console.error('Registration failed:', error);
//         // Handle error, such as showing an error message
//       });
//   };
  

//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const dotComRegex = /\.com$/i;
//     return emailRegex.test(email) && dotComRegex.test(email);
//   };

//   const validateName = (name) => {
//     return name.length >= 4;
//   };

//   const validatePassword = (password) => {
//     return password.length >= 8;
//   };

//   return (
//     <section className="background-radial-gradient overflow-hidden">
//       <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
//         <div className="row gx-lg-5 align-items-center mb-5">
//           <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
//             <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
//             <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

//             <div className="card bg-glass">
//               <div className="card-body px-4 py-5 px-md-5">
//                 <form onSubmit={handleSubmit}>
//                   <div className="form-outline mb-4">
//                     <input type="text" id="name" className="form-control form-control-lg" value={name} onChange={(e) => setName(e.target.value)} />
//                     <label className="form-label" htmlFor="name">Name</label>
//                     {nameError && <div className="text-danger">{nameError}</div>}
//                   </div>

//                   <div className="form-outline mb-4">
//                     <input type="email" id="email" className="form-control form-control-lg" value={email} onChange={(e) => setEmail(e.target.value)} />
//                     <label className="form-label" htmlFor="email">Email address</label>
//                     {emailError && <div className="text-danger">{emailError}</div>}
//                   </div>

//                   <div className="form-outline mb-4">
//                     <input type="password" id="password" className="form-control form-control-lg" value={password} onChange={(e) => setPassword(e.target.value)} />
//                     <label className="form-label" htmlFor="password">Password</label>
//                     {passwordError && <div className="text-danger">{passwordError}</div>}
//                   </div>

//                   <button type="submit" className="btn btn-primary btn-lg btn-block mb-4">
//                     Sign up
//                   </button>

//                   <div className="text-center">
//                     <p>or sign up with:</p>
//                     {/* ... Social media buttons ... */}
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>

//           <div className="col-lg-6 mb-5 mb-lg-0">
//             <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
//               className="img-fluid" alt="Sample image" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default RegisterForm;

import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(null);
  const [nameError, setNameError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const navigate = useNavigate(); // Added hook for navigation

  // Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const dotComRegex = /\.com$/i;
    return emailRegex.test(email) && dotComRegex.test(email);
  };

  const validateName = (name) => {
    return name.length >= 4;
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    if (!validateName(name)) {
      setNameError('Name should be at least 4 characters long');
      return;
    }

    if (!validatePassword(password)) {
      setPasswordError('Password should be at least 8 characters long');
      return;
    }

    const user = {
      name: name,
      email: email,
      password: password,
    };

    axios
      .post('http://localhost:8084/api/v1/user/save', user)
      .then((response) => {
        console.log('Registration successful');
        setName('');
        setEmail('');
        setPassword('');
        setEmailError(null); // Clear email error
        setNameError(null); // Clear name error
        setPasswordError(null); // Clear password error

        // Handle success, such as showing a success message or redirecting to another page
         // Navigate to the home page after successful registration
      })
      .catch((error) => {
        console.error('Registration failed:', error);
        // Handle error, such as showing an error message
      });
  };

  // ... Existing validation functions ...

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
            <form onSubmit={handleSubmit}>
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="name"
                  className="form-control form-control-lg"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  
                />
                <label className="form-label" htmlFor="name">
                  Username
                </label>
                {nameError && <div className="text-danger">{nameError}</div>}
              </div>

              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="email"
                  className="form-control form-control-lg"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label className="form-label" htmlFor="email">
                  Email address
                </label>
                {emailError && <div className="text-danger">{emailError}</div>}
              </div>

              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="password"
                  className="form-control form-control-lg"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label className="form-label" htmlFor="password">
                  Password
                </label>
                {passwordError && <div className="text-danger">{passwordError}</div>}
              </div>

              <button type="submit" className="btn btn-primary btn-lg btn-block mb-4">
                Sign up
              </button>

              <div className="text-center">
                <p></p>
                {/* ... Social media buttons ... */}
              </div>
            </form>
            <p className="small fw-bold mt-2 pt-1 mb-0">
              Already have an account? <Link to="/" className="link-danger">Login</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="d-flex flex-md-row text-center justify-content-between py-4 px-4 px-xl-5">
        <div className="text-white">&copy; 2023. All rights reserved.</div>
      </div>
    </section>
  );
};

export default RegisterForm;

