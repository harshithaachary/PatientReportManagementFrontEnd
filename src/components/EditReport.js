import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const EditReport = () => {
  const { reportId } = useParams();
  const [report, setReport] = useState(null);

  useEffect(() => {
    fetchReportData();
  }, []);

  const fetchReportData = async () => {
    try {
      const response = await axios.get(`http://localhost:8084/api/reports/${reportId}`);
      setReport(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setReport((prevReport) => ({
      ...prevReport,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.put(`http://localhost:8084/api/reports/${reportId}`, report);
      // Redirect to report list or specific report page after successful update
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h2>Edit Report</h2>
      {report ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="patientId">Patient ID:</label>
            <input type="text" className="form-control" id="patientId" name="patientId" value={report.patientId} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="test">Test:</label>
            <input type="text" className="form-control" id="test" name="test" value={report.test} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="results">Results:</label>
            <textarea className="form-control" id="results" name="results" value={report.results} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="diagnosisInfo">Diagnosis Info:</label>
            <textarea className="form-control" id="diagnosisInfo" name="diagnosisInfo" value={report.diagnosisInfo} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input type="date" className="form-control" id="date" name="date" value={report.date} onChange={handleInputChange} />
          </div>
          <button type="submit" className="btn btn-primary">Update</button>
        </form>
      ) : (
        <p>Loading report data...</p>
      )}
      <Link to="/report-list" className="btn btn-secondary mt-3">Back to Report List</Link>
    </div>
  );
};

export default EditReport;

