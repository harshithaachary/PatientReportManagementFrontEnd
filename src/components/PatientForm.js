import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PatientForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    contactDetails: '',
    medicalHistory: '',
  });
  const [patientId, setPatientId] = useState(null);

  useEffect(() => {
    // If patientId is provided as a prop, fetch the patient data
    if (patientId) {
      fetchPatient();
    }
  }, [patientId]);

  const fetchPatient = async () => {
    try {
      const response = await axios.get(`http://localhost:8084/api/patients/${patientId}`);
      setFormData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const createPatient = async () => {
    try {
      await axios.post('http://localhost:8084/api/patients', formData);
      clearForm();
    } catch (error) {
      console.error(error);
    }
  };

  const updatePatient = async () => {
    try {
      await axios.put(`http://localhost:8084/api/patients/${patientId}`, formData);
      clearForm();
    } catch (error) {
      console.error(error);
    }
  };

  const clearForm = () => {
    setFormData({
      name: '',
      age: '',
      gender: '',
      contactDetails: '',
      medicalHistory: '',
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (patientId) {
      updatePatient();
    } else {
      createPatient();
    }
  };

  return (
    <div>
      <h3>{patientId ? 'Edit Patient' : 'Add Patient'}</h3>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleInputChange}
        />
        <label>Gender:</label>
        <input
          type="text"
          name="gender"
          value={formData.gender}
          onChange={handleInputChange}
        />
        <label>Contact Details:</label>
        <input
          type="text"
          name="contactDetails"
          value={formData.contactDetails}
          onChange={handleInputChange}
        />
        <label>Medical History:</label>
        <input
          type="text"
          name="medicalHistory"
          value={formData.medicalHistory}
          onChange={handleInputChange}
        />
        <button type="submit">{patientId ? 'Update' : 'Add'}</button>
      </form>
    </div>
  );
};

export default PatientForm;
