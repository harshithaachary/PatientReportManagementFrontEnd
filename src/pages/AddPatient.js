// import React, { useState } from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useParams, Link } from 'react-router-dom';

// const AddPatient = ({ onAdd }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     age: '',
//     gender: '',
//     contactDetails: '',
//     medicalHistory: '',
//   });

//   const handleInputChange = (event) => {
//     setFormData({
//       ...formData,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const addPatient = async () => {
//     try {
//       await axios.post('http://localhost:8084/api/patients', formData);
//       onAdd();
//       setFormData({
//         name: '',
//         age: '',
//         gender: '',
//         contactDetails: '',
//         medicalHistory: '',
//       });
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="container">
//       <Link to="/patient-list" className="btn btn-secondary mt-3">Back to Patient List</Link>
//       <h3>Add Patient</h3>
//       <form>
//         <div className="form-group">
//           <label htmlFor="name">Patient Name:</label>
//           <input
//             type="text"
//             className="form-control"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="age">Age:</label>
//           <input
//             type="number"
//             className="form-control"
//             id="age"
//             name="age"
//             value={formData.age}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="gender">Gender:</label>
//           <select
//   className="form-select"
//   id="gender"
//   name="gender"
//   value={formData.gender}
//   onChange={handleInputChange}
// >
//   <option value="">Select gender</option>
//   <option value="male">Male</option>
//   <option value="female">Female</option>
// </select>

//         </div>
//         <div className="form-group">
//           <label htmlFor="contactDetails">Contact Details:</label>
//           <input
//             type="text"
//             className="form-control"
//             id="contactDetails"
//             name="contactDetails"
//             value={formData.contactDetails}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="medicalHistory">Medical History:</label>
//           <input
//             type="text"
//             className="form-control"
//             id="medicalHistory"
//             name="medicalHistory"
//             value={formData.medicalHistory}
//             onChange={handleInputChange}
//           />
//         </div>
//         <button type="button" className="btn btn-primary" onClick={addPatient}>
//           Add
//         </button>
//       </form>
//     </div>
//   );
  
// };

// export default AddPatient;
import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const AddPatient = ({ onAdd }) => {
  const initialFormData = {
    name: '',
    age: '',
    gender: '',
    contactDetails: '',
    medicalHistory: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (event) => {
    // Clear the error message when the user starts typing in any input field
    setErrorMessage('');

    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const addPatient = async () => {
    // Simple validation check
    if (!formData.name || !formData.age || !formData.gender || !formData.contactDetails) {
      setErrorMessage('Please fill all the required fields.');
      return;
    }

    try {
      await axios.post('http://localhost:8084/api/patients', formData);
      onAdd();
      // Clear the form data after successful addition
      setFormData(initialFormData);
      setErrorMessage('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <Link to="/patient-list" className="btn btn-secondary mt-3">
        Back to Patient List
      </Link>
      <h3>Add Patient</h3>

      <form>
        <div className="form-group">
          <label htmlFor="name">Patient Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            className="form-control"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select
            className="form-select"
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            required
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="contactDetails">Contact Details:</label>
          <input
            type="text"
            className="form-control"
            id="contactDetails"
            name="contactDetails"
            value={formData.contactDetails}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="medicalHistory">Medical History:</label>
          <input
            type="text"
            className="form-control"
            id="medicalHistory"
            name="medicalHistory"
            value={formData.medicalHistory}
            onChange={handleInputChange}
          />
        </div>
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        <button type="button" className="btn btn-primary" onClick={addPatient}>
          Add
        </button>
      </form>
    </div>
  );
};

export default AddPatient;


