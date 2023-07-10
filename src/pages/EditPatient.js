import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const EditPatient = () => {
  const { patientId } = useParams();
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        const response = await axios.get(`http://localhost:8084/api/patients/${patientId}`);
        setPatient(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPatientData();
  }, [patientId]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPatient((prevPatient) => ({
      ...prevPatient,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.put(`http://localhost:8084/api/patients/${patientId}`, patient);
      // Redirect to patient list or specific patient page after successful update
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h2>Edit Patient</h2>
      {patient ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" className="form-control" id="name" name="name" value={patient.name} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age:</label>
            <input type="number" className="form-control" id="age" name="age" value={patient.age} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender:</label>
            <select className="form-control" id="gender" name="gender" value={patient.gender} onChange={handleInputChange}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="contactDetails">Contact Details:</label>
            <textarea className="form-control" id="contactDetails" name="contactDetails" value={patient.contactDetails} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="medicalHistory">Medical History:</label>
            <textarea className="form-control" id="medicalHistory" name="medicalHistory" value={patient.medicalHistory} onChange={handleInputChange} />
          </div>
          <button type="submit" className="btn btn-primary">Update</button>
        </form>
      ) : (
        <p>Loading patient data...</p>
      )}
      <Link to="/patient-list" className="btn btn-secondary mt-3">Back to Patient List</Link>
    </div>
  );
};

export default EditPatient;
