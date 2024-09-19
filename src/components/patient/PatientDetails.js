import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import styles from './PatientDetails.module.css';

/**
 * patient entity
 * @returns patient entity
 */
function Patient() {
  const params = useParams();
  const [current, setCurrent] = useState({});
  const [encounterList, setEncounterList] = useState([]);
  const space = ' ';

  useEffect(() => {
    const getPatient = () => {
      Axios.get(`http://localhost:8080/patients/${params.id}`).then((response) => setCurrent(response.data));
    };
    getPatient();
  }, []);

  /**
   * maps encounter data from database to list for display
   * @param {*} encounterData data for all encounters in the database
   */
  function setup(encounterData) {
    setEncounterList(
      encounterData.map((encounter) => (
        <li key={encounter.id}>
          <h3>
            {'Id: '.concat(encounter.id)}
          </h3>
          <h3>
            {'Visit Code: '.concat(encounter.visitCode)}
          </h3>
          <h3>
            {'Provider: '.concat(encounter.provider)}
          </h3>
          <h3>
            {'Date: '.concat(encounter.date)}
          </h3>
          <Link to={`/patients/${params.id}/encounters/${encounter.id}`}><button type="button" className={styles.button}>View Details</button></Link>
        </li>
      )),
    );
  }

  /**
   * gathers all encounters associated with patient
   */
  function fetchEncounters() {
    Axios.get(`http://localhost:8080/patients/${params.id}/encounters`).then((response) => {
      const encounterData = response.data;

      setup(encounterData);
    }).catch(() => setEncounterList([]));
  }

  useEffect(() => { fetchEncounters(); }, [current]);

  return (
    <div>
      <h1>Patient Details</h1>
      <h2>
        Id:
        {space}
        {current.id}
      </h2>
      <h2>
        Name:
        {space}
        {current.firstName}
        {space}
        {current.lastName}
      </h2>
      <h2>
        Social Security Number:
        {space}
        {current.ssn}
      </h2>
      <h2>
        Email:
        {space}
        {current.email}
      </h2>
      <h2>
        Address:
        {space}
        {current.street}
        {space}
        {current.city}
        {space}
        {current.state}
        {space}
        {current.postal}
      </h2>
      <h2>
        Age:
        {space}
        {current.age}
      </h2>
      <h2>
        Height:
        {space}
        {current.height}
        {space}
        inches
      </h2>
      <h2>
        Weight:
        {space}
        {current.weight}
        {space}
        pounds
      </h2>
      <h2>
        Insurance:
        {space}
        {current.insurance}
      </h2>
      <h2>
        Gender:
        {space}
        {current.gender}
      </h2>
      <Link to={`/patients/modify/${current.id}`} getPatient={useEffect}><button type="button" className={styles.button}>Edit Patient</button></Link>
      <div className={styles.encounters}>
        <h1>Encounters</h1>
        <ul>{encounterList}</ul>
        <Link to={`/patients/${current.id}/encounters/modify`}><button type="button" className={styles.button}>Add New Encounter</button></Link>
      </div>
      <Link to="/patients"><button type="button" className={styles.button}>Return to Patient List</button></Link>
    </div>
  );
}

export default Patient;
