import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const PatientList = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const response = await axios.get('http://localhost:8084/api/patients');
      setPatients(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deletePatient = async (id) => {
    try {
      await axios.delete(`http://localhost:8084/api/patients/${id}`);
      fetchPatients();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
       <Link to="/home" className="btn btn-secondary mt-3">Home</Link>
      <h2>Patient List</h2>
      {patients.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Contact Details</th>
              <th>Medical History</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id}>
                <td>{patient.id}</td>
                <td>{patient.name}</td>
                <td>{patient.age}</td>
                <td>{patient.gender}</td>
                <td>{patient.contactDetails}</td>
                <td>{patient.medicalHistory}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => deletePatient(patient.id)}>
                    Delete
                  </button>
                  <Link to={`/edit/${patient.id}`}>
                    <button className="btn btn-primary ml-2">Edit</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No patients found</p>
      )}
     
    </div>
  );
};

export default PatientList;

