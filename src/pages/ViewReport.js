// src/components/ViewReport.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../services/api';

function ViewReport() {
  const { id } = useParams();
  const [report, setReport] = useState(null);

  useEffect(() => {
    fetchReport();
  }, []);

  const fetchReport = async () => {
    try {
      const response = await api.get(`/api/reports/${id}`);
      setReport(response.data);
    } catch (error) {
      console.error('Error fetching report:', error);
    }
  };

  if (!report) {
    return <div>Loading report...</div>;
  }

  return (
    <div>
      <h1>Report Details</h1>
      <p>ID: {report.id}</p>
      <p>Patient: {report.patient}</p>
      <p>Test: {report.test}</p>
      <p>Results: {report.results}</p>
      <p>Diagnosis Info: {report.diagnosisInfo}</p>
      <p>Date: {report.date}</p>
      <Link to={`/reports/edit/${report.id}`}>Edit</Link>
    </div>
  );
}

export default ViewReport;
