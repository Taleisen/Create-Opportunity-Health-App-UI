import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import styles from './EncounterDetails.module.css';

/**
 * Encounter entity for patient
 * @returns Encounter
 */
function Encounter() {
  const params = useParams();
  const [current, setCurrent] = useState({});
  const space = ' ';

  /**
   * gathers encounter to display
   */

  const getDetails = () => {
    Axios.get(`http://localhost:8080/patients/:id/encounters/${params.id}`).then((response) => setCurrent(response.data));
  };
  useEffect(() => { getDetails(); }, []);

  return (
    <div>
      <h1>Encounter Details</h1>
      <h2>
        Id:
        {space}
        {current.id}
      </h2>
      <h2>
        Notes:
        {space}
        {current.notes}
      </h2>
      <h2>
        Visit Code:
        {space}
        {current.visitCode}
      </h2>
      <h2>
        Provider:
        {space}
        {current.provider}
      </h2>
      <h2>
        Billing Code:
        {space}
        {current.billingCode}
      </h2>
      <h2>
        International Classification of Diseases - 10th Ed. Code:
        {space}
        {current.icd10}
      </h2>
      <h2>
        Total Cost:
        {space}
        $
        {current.totalCost}
      </h2>
      <h2>
        Copay:
        {space}
        $
        {current.copay}
      </h2>
      <h2>
        Chief Complaint:
        {space}
        {current.chiefComplaint}
      </h2>
      <h2>
        Pulse:
        {space}
        {current.pulse}
        {space}
        Beats Per Minute
      </h2>
      <h2>
        Systolic:
        {space}
        {current.systolic}
        {space}
        mmHg
      </h2>
      <h2>
        Diastolic:
        {space}
        {current.diastolic}
        {space}
        mmHg
      </h2>
      <h2>
        Date:
        {space}
        {current.date}
      </h2>
      <Link to={`/patients/${current.patientId}/encounters/modify/${params.id}`} getDetails={getDetails}><button type="button" className={styles.button}>Edit Encounter</button></Link>
      <Link to={`/patients/${current.patientId}`}><button type="button" className={styles.button}>Return to Patient Details</button></Link>
    </div>
  );
}

export default Encounter;
