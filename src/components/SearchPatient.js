import React, { useState } from 'react';
import { searchPatientsByName, searchPatientById } from '../services/api';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function SearchPatient() {
  const [searchText, setSearchText] = useState('');
  const [patients, setPatients] = useState([]);

  const handleSearch = async () => {
    if (searchText.trim() !== '') {
      try {
        if (!isNaN(searchText)) {
          // If the search text is a number, search by ID
          const response = await searchPatientById(parseInt(searchText));
          setPatients(response ? [response] : []);
        } else {
          // If the search text is not a number, search by name
          const response = await searchPatientsByName(searchText);
          setPatients(response);
        }
      } catch (error) {
        console.error('Error searching patients:', error);
      }
    } else {
      setPatients([]);
    }
  };

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="container">
      <h2 className="my-4">Patient Search</h2>
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search patients by name or ID"
              value={searchText}
              onChange={handleInputChange}
            />
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {patients.length > 0 ? (
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <ul className="list-group">
              {patients.map((patient) => (
                <li
                  key={patient.id}
                  className="list-group-item mb-2 border-0"
                >
                  <h4>{patient.name}</h4>
                  <p>
                    <strong>Age:</strong> {patient.age}
                  </p>
                  <p>
                    <strong>Gender:</strong> {patient.gender}
                  </p>
                  <p>
                    <strong>Contact Details:</strong> {patient.contactDetails}
                  </p>
                  <p>
                    <strong>Medical History:</strong> {patient.medicalHistory}
                  </p>
                  <p>
                    <strong>ID:</strong> {patient.id}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p className="text-center mt-4">No patients found.</p>
      )}

      <div className="row justify-content-center">
        <div className="col-lg-6">
          <Link to="/home" className="btn btn-secondary mt-3">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SearchPatient;



