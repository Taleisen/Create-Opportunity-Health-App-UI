import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import styles from './App.module.css';
import Encounter from '../encounter/EncounterDetails';
import PatientList from '../patient/PatientList';
import Patient from '../patient/PatientDetails';
import PatientFactory from '../patient/PatientFactory';
import PatientUpdater from '../patient/PatientUpdater';
import EncounterFactory from '../encounter/EncounterFactory';
import EncounterUpdater from '../encounter/EncounterUpdater';

/**
 * routes the page to be displayed
 * @returns web page to display
 */
function App() {
  return (
    <Router>
      <div className={styles.App}>
        {/* Defined routes for the application with their URIs and Component calls */}
        <Routes>
          <Route exact path="/" element={<PatientList />} />
          <Route exact path="/patients" element={<PatientList />} />
          <Route exact path="/patients/:id" element={<Patient />} />
          <Route exact path="/patients/:id/encounters/:id" element={<Encounter />} />
          <Route exact path="/patients/modify" element={<PatientFactory />} />
          <Route exact path="/patients/modify/:id" element={<PatientUpdater />} />
          <Route exact path="/patients/:id/encounters/modify" element={<EncounterFactory />} />
          <Route exact path="/patients/:id/encounters/modify/:id" element={<EncounterUpdater />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
