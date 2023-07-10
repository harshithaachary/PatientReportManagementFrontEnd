// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const ReportList = () => {
//   const [reports, setReports] = useState([]);

//   useEffect(() => {
//     fetchReports();
//   }, []);

//   const fetchReports = async () => {
//     try {
//       const response = await axios.get('http://localhost:8084/api/reports');
//       setReports(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const deleteReport = async (id) => {
//     try {
//       await axios.delete(`http://localhost:8084/api/reports/${id}`);
//       fetchReports();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="container">
//        <Link to="/home" className="btn btn-secondary mt-3">Home</Link>
//       <h2>Report List</h2>
//       {reports.length > 0 ? (
//         <table className="table">
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Patient ID</th>
//               <th>Test</th>
//               <th>Results</th>
//               <th>Diagnosis Info</th>
//               <th>Date</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {reports.map((report) => (
//               <tr key={report.id}>
//                 <td>{report.id}</td>
//                 <td>{report.patient ? report.patient.id : ''}</td>
//                 <td>{report.test}</td>
//                 <td>{report.results}</td>
//                 <td>{report.diagnosisInfo}</td>
//                 <td>{report.date}</td>
//                 <td>
//                   <button className="btn btn-danger" onClick={() => deleteReport(report.id)}>
//                     Delete
//                   </button>
//                   <Link to={`/reports/edit/${report.id}`}>
//                 <button className="btn btn-primary ml-2">Edit</button>
//                  </Link>

//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No reports found</p>
//       )}
//     </div>
//   );
// };

// export default ReportList;




import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const ReportList = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      const response = await axios.get('http://localhost:8084/api/reports');
      setReports(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteReport = async (id) => {
    try {
      await axios.delete(`http://localhost:8084/api/reports/${id}`);
      fetchReports();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <Link to="/home" className="btn btn-secondary mt-3">
        Home
      </Link>
      <h2>Report List</h2>
      {reports.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Patient ID</th>
              <th>Test</th>
              <th>Results</th>
              <th>Diagnosis Info</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr key={report.id}>
                <td>{report.id}</td>
                <td>{report.patient ? report.patient.id : ''}</td>
                <td>{report.test}</td>
                <td>{report.results}</td>
                <td>{report.diagnosisInfo}</td>
                <td className="d-inline-block">{report.date}</td>
                <td>
                  <div className="d-flex">
                    <button className="btn btn-danger mr-2" onClick={() => deleteReport(report.id)}>
                      Delete
                    </button>
                    <Link to={`/reports/edit/${report.id}`} className="btn btn-primary">
                      Edit
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No reports found</p>
      )}
    </div>
  );
};

export default ReportList;
