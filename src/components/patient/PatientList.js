import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './PatientList.module.css';

/**
 * displays all patients
 * @returns list of patients
 */
function PatientList() {
  const [patientList, setPatientList] = useState([]);
  const [reset, setReset] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState(false);

  /**
   * handles deletion of patient with associated id
   * @param {*} patientId id of patient to delete
   */
  function handleDelete(patientId) {
    (Axios.delete(`http://localhost:8080/patients/${patientId}`)).then(() => setReset(!reset), setDeleteMessage(false)).catch(() => { setDeleteMessage(true); });
  }

  /**
   * map patient data to list for display
   * @param {*} patientData data of patients to be displayed
   */
  function setup(patientData) {
    setPatientList(
      patientData.map((patient) => (
        <li key={patient.id}>
          <h3>
            {'Name: '.concat(patient.firstName).concat(' ').concat(patient.lastName)}
          </h3>
          <h3>
            {'Age: '.concat(patient.age)}
          </h3>
          <h3>
            {'Gender: '.concat(patient.gender)}
          </h3>
          <Link to={`/patients/${patient.id}`}><button type="button" className={styles.button}>View Details</button></Link>
          <button type="button" onClick={() => handleDelete(patient.id)} className={styles.button}>Delete Patient</button>
        </li>
      )),
    );
  }

  /**
   * gathers all patients from database
   */
  useEffect(() => {
    const fetchPatients = () => {
      Axios.get('http://localhost:8080/patients').then((response) => {
        const patientData = response.data;

        setup(patientData);
      });
    };
    fetchPatients();
  }, [reset]);

  return (
    <div>
      <div className={styles.container}>
        <h1>Patient List</h1>
        <ul>{patientList}</ul>
        <Link to="/patients/modify" fetchPatients={useEffect}><button type="button" className={styles.button}>Add New Patient</button></Link>
      </div>
      {deleteMessage ? <h3>Cannot delete patient with encounters</h3> : undefined}
    </div>
  );
}

export default PatientList;
