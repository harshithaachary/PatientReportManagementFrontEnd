// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Home.css';
// const Home = () => {
  
//   return (
//     <div className="container-fluid">
//       <div className="col-lg-10 edit-background">
//       <div className="row">
//         {/* Sidebar */}
//         <div className="col-lg-2 bg-dark">
//           <nav className="navbar navbar-expand-lg navbar-dark">
//             <ul className="navbar-nav flex-column">
//               <li className="nav-item">
//                 <Link to="/patient-list" className="nav-link">Edit/Delete Patient List</Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/add" className="nav-link">Add Patient</Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/patient-search" className="nav-link">Search Patient</Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/report-form" className="nav-link">Add Report</Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/report-list" className="nav-link">Edit/Delete Report List</Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/report-search" className="nav-link">Search Report</Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/reports" className="nav-link">Patient Report</Link>
//               </li>
//             </ul>
//           </nav>
//         </div>

//         {/* Main Content */}
//         <div className="col-lg-10  home-background">
//           <div className="p-3">
//             {/* Place the main content here */}
           
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Home;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="container-fluid">
      <div className="col-lg-10 edit-background">
        <div className="row">
          {/* Collapsible Sidebar */}
          {isSidebarOpen && (
            <div className="col-lg-2 bg-dark">
              <nav className="navbar navbar-expand-lg navbar-dark">
                <ul className="navbar-nav flex-column">
                  <li className="nav-item">
                    <Link to="/patient-list" className="nav-link">
                      Edit/Delete Patient List
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/add" className="nav-link">
                      Add Patient
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/patient-search" className="nav-link">
                      Search Patient
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/report-form" className="nav-link">
                      Add Report
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/report-list" className="nav-link">
                      Edit/Delete Report List
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/report-search" className="nav-link">
                      Search Report
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/reports" className="nav-link">
                      Patient Report
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          )}

          {/* Main Content */}
          <div
            className={`col-lg-10 home-background ${
              isSidebarOpen ? '' : 'expanded'
            }`}
          >
            {/* Collapsible Sidebar Toggle Button */}
            <button
              className="sidebar-toggle-button"
              onClick={toggleSidebar}
            >
              {isSidebarOpen ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
            </button>

            <div className="p-3">
              {/* Place the main content here */}
             
              <p>
                
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

