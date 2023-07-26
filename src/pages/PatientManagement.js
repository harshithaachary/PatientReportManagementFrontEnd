// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// import PatientList from '../components/PatientList';
// import AddPatient from './AddPatient';
// import EditPatient from './EditPatient';

// const PatientManagement = () => {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Patient List</Link>
//             </li>
//             <li>
//               <Link to="/add">Add Patient</Link>
//             </li>
//           </ul>
//         </nav>

//         <Routes>
//           <Route path="/" element={<PatientList />} />
//           <Route path="/add" element={<AddPatient />} />
//           <Route path="/edit/:patientId" element={<EditPatient />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default PatientManagement;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// import PatientList from '../components/PatientList';
// import AddPatient from './AddPatient';
// import EditPatient from './EditPatient';
// // import ReportList from '../components/ReportList';
// import ReportList from '../components/ReportList';
// //  import EditReport from '../components/EditReport';
// import ReportForm from '../components/ReportForm'; 
// import EditReport from '../components/EditReport';
// import Login from '../components/Login';
// const PatientManagement = () => {
//     return (
//     <Router>
//       <div className="container-fluid">
//         <div className="row">
//           {/* Sidebar */}
//           <div className="col-lg-2 bg-dark">
//             <nav className="navbar navbar-expand-lg navbar-dark">
//               <ul className="navbar-nav flex-column">
//                 <li className="nav-item">
//                   <Link to="/patient-list" className="nav-link">Patient List</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link to="/add" className="nav-link">Add Patient</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link to="/report-form" className="nav-link">Add Report</Link>
//                </li>
//                 <li className="nav-item">
//                   <Link to="/report-list" className="nav-link">Edit/Delete</Link>
//                </li> 
//               </ul>
//             </nav>
//           </div>

//           {/* Main Content */}
//           <div className="col-lg-10">
//             <div className="p-3">
//               <Routes>
//               <Route path="/" element= { <Login/>} />
//                 <Route path="/patient-list" element={<PatientList />} />
//                 <Route path="/add" element={<AddPatient />} />
//                 <Route path="/edit/:patientId" element={<EditPatient />} />
//                 <Route path="/report-form" element={<ReportForm />} />
//                 <Route path="/report-list" element={<ReportList />} />
//                 <Route path="/reports/edit/:reportId" element={<EditReport />} />

//               </Routes>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default PatientManagement;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PatientList from '../components/PatientList';
import AddPatient from './AddPatient';
import EditPatient from './EditPatient';
import ReportList from '../components/ReportList';
import ReportForm from '../components/ReportForm';
import EditReport from '../components/EditReport';
import Login from '../components/Login';
import Home from '../components/Home';
import SearchPatient from '../components/SearchPatient';
import SearchReport from '../components/SearchReport';
import RegisterForm from '../components/RegisterForm';
import Reports from "../components/Reports"

const PatientManagement = () => {
  return (
    <Router>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="p-3">
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<RegisterForm />} />
                <Route path='/patient-search' element={<SearchPatient / >} />
                <Route path='/report-search' element={<SearchReport / >} />
                <Route path="/home" element= { <Home/>} />
                <Route path="/patient-list" element={<PatientList />} />
                <Route path="/add" element={<AddPatient />} />
                <Route path="/edit/:patientId" element={<EditPatient />} />
                <Route path="/report-form" element={<ReportForm />} />
                <Route path="/report-list" element={<ReportList />} />
                <Route path="/reports/edit/:reportId" element={<EditReport />} />
                <Route path="/reports" element={<Reports />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default PatientManagement;
