import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams, Link } from 'react-router-dom';

const ReportForm = () => {
  const [patientId, setPatientId] = useState('');
  const [test, setTest] = useState('');
  const [results, setResults] = useState('');
  const [diagnosisInfo, setDiagnosisInfo] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8084/api/reports', {
        patient: {
          id: patientId
        },
        test: test,
        results: results,
        diagnosisInfo: diagnosisInfo,
        date: date
      });
      console.log('Report created:', response.data);
      // Clear form fields after successful submission
      setPatientId('');
      setTest('');
      setResults('');
      setDiagnosisInfo('');
      setDate('');
    } catch (error) {
      console.error('Error creating report:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
       <Link to="/report-list" className="btn btn-secondary mt-3">Back to Report List</Link>
      <div className="form-group">
     
        <label htmlFor="patientId">Patient ID:</label>
        <input
          type="text"
          className="form-control"
          id="patientId"
          value={patientId}
          onChange={(e) => setPatientId(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="test">Test:</label>
        
        <input
          type="text"
          className="form-control"
          id="test"
          value={test}
          onChange={(e) => setTest(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="results">Results:</label>
        <input
          type="text"
          className="form-control"
          id="results"
          value={results}
          onChange={(e) => setResults(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="diagnosisInfo">Diagnosis Info:</label>
        <input
          type="text"
          className="form-control"
          id="diagnosisInfo"
          value={diagnosisInfo}
          onChange={(e) => setDiagnosisInfo(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          className="form-control"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
      
    </form>
  );
};

export default ReportForm;




