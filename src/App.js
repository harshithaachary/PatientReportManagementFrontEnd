 import React from 'react';
 import PatientManagement from './pages/PatientManagement';
 import ReportForm from './components/ReportForm';
import ReportList from './components/ReportList';
import SearchPatient from './components/SearchPatient';
 
 const App = () => {
   return (
    <div>
      <h1>Patient Report Management</h1>
       <PatientManagement />
       {/* //<SearchPatient /> */}
 
     
     </div>
  );
 };



export default App;


