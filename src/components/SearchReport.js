import React, { useState } from 'react';
import { searchReportsByDate, searchReportById } from '../services/api';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SearchReport.css';

function SearchReport() {
  const [searchText, setSearchText] = useState('');
  const [reports, setReports] = useState([]);

  const handleSearch = async () => {
    if (searchText.trim() !== '') {
      if (!isNaN(searchText)) {
        // Search by report ID
        try {
          const response = await searchReportById(parseInt(searchText));
          setReports(response ? [response] : []);
        } catch (error) {
          console.error('Error searching report by ID:', error);
        }
      } else {
        // Search by date
        try {
          const response = await searchReportsByDate(searchText);
          setReports(response);
        } catch (error) {
          console.error('Error searching reports by date:', error);
        }
      }
    } else {
      setReports([]);
    }
  };

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="container">
      <div className="search-container">
        <h2 className="search-title">Report Search</h2>
        <div className="search-form">
          <input
            type="text"
            className="form-control search-input"
            placeholder="Search reports by ID or date (YYYY-MM-DD)"
            value={searchText}
            onChange={handleInputChange}
          />
          <button
            className="btn btn-primary search-button"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>

      {reports.length > 0 ? (
        <div className="report-list">
          <ul className="list-group">
            {reports.map((report) => (
              <li key={report.id} className="list-group-item report-item">
                <h4>Report ID: {report.id}</h4>
                <div className="patient-info">
                  <p>
                    <strong>Patient Name:</strong> {report.patient.name}
                  </p>
                  <p>
                    <strong>Patient Age:</strong> {report.patient.age}
                  </p>
                  <p>
                    <strong>Patient Gender:</strong> {report.patient.gender}
                  </p>
                  <p>
                    <strong>Patient Contact Details:</strong>{' '}
                    {report.patient.contactDetails}
                  </p>
                  <p>
                    <strong>Patient Medical History:</strong>{' '}
                    {report.patient.medicalHistory}
                  </p>
                  <p>
                    <strong>Test:</strong> {report.test}
                  </p>
                  <p>
                    <strong>Results:</strong> {report.results}
                  </p>
                  <p>
                    <strong>Diagnosis Info:</strong> {report.diagnosisInfo}
                  </p>
                  <p>
                    <strong>Date:</strong> {report.date}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="no-reports">No reports found.</p>
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

export default SearchReport;

