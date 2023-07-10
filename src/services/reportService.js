import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/reports';

const reportService = {
  createReport: (report) => {
    return axios.post(BASE_URL, report)
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.message);
      });
  },

  getAllReports: () => {
    return axios.get(BASE_URL)
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.message);
      });
  }
};

export default reportService;

