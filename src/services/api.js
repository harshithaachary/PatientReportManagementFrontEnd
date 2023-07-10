
import axios from 'axios';

const BASE_URL = 'http://localhost:8084/api';

// Function to search patients by name
export const searchPatientsByName = async (name) => {
  try {
    const response = await axios.get(`${BASE_URL}/patients/search?name=${name}`);
    return response.data;
  } catch (error) {
    console.error('Error searching patients:', error);
    throw error;
  }
};

// Function to search patient by ID
export const searchPatientById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/patients/searchById?id=${id}`);
    return response.data;
  } catch (error) {
    console.error('Error searching patient:', error);
    throw error;
  }
};
export const searchReportsByDate = async (date) => {
    try {
      const response = await axios.get(`${BASE_URL}/reports/search`, {
        params: { date },
      });
      return response.data;
    } catch (error) {
      throw new Error('Failed to search reports by date');
    }
  };
  
  // Search report by ID
  export const searchReportById = async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/reports/${id}`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to search report by ID');
    }
  };