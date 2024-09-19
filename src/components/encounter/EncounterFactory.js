import React, { useState } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';
import styles from './EncounterFactory.module.css';
import {
  isValidBilling, isValidDate, isValidIcd, isValidVisit, isValidNumber,
} from '../../validation';

/**
 * used to create an encounter and save it to the database
 * @returns add encounter functionality
 */
function EncounterFactory() {
  const params = useParams();
  const navigate = useNavigate();
  // Inputs
  const [notesInput, setNotesInput] = useState({
    name: 'notes',
    type: 'textArea',
    label: 'Notes',
    errorMessage: '',
    error: false,
    value: '',
  });

  const [visitCodeInput, setVisitCodeInput] = useState({
    name: 'visitCode',
    type: 'text',
    label: 'Visit Code',
    errorMessage: 'Must match format "LDL DLD" (L=letter, D=digit)',
    error: false,
    value: '',
  });

  const [providerInput, setProviderInput] = useState({
    name: 'provider',
    type: 'text',
    label: 'Provider',
    errorMessage: 'Provider is required',
    error: false,
    value: '',
  });

  const [billingCodeInput, setBillingCodeInput] = useState({
    name: 'billingCode',
    type: 'text',
    label: 'Billing Code',
    errorMessage: 'Must match format "DDD.DDD.DDD-DD" (D=digit)',
    error: false,
    value: '',
  });

  const [icd10Input, seticd10Input] = useState({
    name: 'icd10',
    type: 'text',
    label: 'ICD10',
    errorMessage: 'Must match format "LDD" (L=letter, D=digit)',
    error: false,
    value: '',
  });

  const [totalCostInput, setTotalCostInput] = useState({
    name: 'totalCost',
    type: 'text',
    label: 'Total Cost',
    errorMessage: 'Total Cost is required',
    error: false,
    value: '',
  });

  const [copayInput, setCopayInput] = useState({
    name: 'copay',
    type: 'text',
    label: 'Copay',
    errorMessage: 'Copay is required',
    error: false,
    value: '',
  });

  const [chiefComplaintInput, setChiefComplaintInput] = useState({
    name: 'chiefComplaint',
    type: 'text',
    label: 'chiefComplaint',
    errorMessage: 'Chief complaint is required',
    error: false,
    value: '',
  });

  const [pulseInput, setPulseInput] = useState({
    name: 'pulse',
    type: 'number',
    label: 'Pulse',
    errorMessage: 'Pulse must be a positive number',
    error: false,
    value: '',
  });

  const [sysInput, setSysInput] = useState({
    name: 'systolic',
    type: 'number',
    label: 'Systolic',
    errorMessage: 'Systolic must be a positive number',
    error: false,
    value: '',
  });

  const [diaInput, setDiaInput] = useState({
    name: 'diastolic',
    type: 'number',
    label: 'Diastolic',
    errorMessage: 'Diastolic must be a positive number',
    error: false,
    value: '',
  });

  const [dateInput, setDateInput] = useState({
    name: 'date',
    type: 'text',
    label: 'date',
    errorMessage: 'Must match format YYYY-MM-DD',
    error: false,
    value: '',
  });

  // change handlers
  const onChangeNotes = (e) => {
    setNotesInput({
      ...notesInput,
      value: e.target.value,
      error: false,
    });
  };

  const onChangeVisitCode = (e) => {
    setVisitCodeInput({
      ...visitCodeInput,
      value: e.target.value,
      error: false,
    });
  };

  const onChangeProvider = (e) => {
    setProviderInput({
      ...providerInput,
      value: e.target.value,
      error: false,
    });
  };

  const onChangeBillingCode = (e) => {
    setBillingCodeInput({
      ...billingCodeInput,
      value: e.target.value,
      error: false,
    });
  };

  const onChangeIcd10 = (e) => {
    seticd10Input({
      ...icd10Input,
      value: e.target.value,
      error: false,
    });
  };

  const onChangeTotalCost = (e) => {
    setTotalCostInput({
      ...totalCostInput,
      value: e.target.value,
      error: false,
    });
  };

  const onChangeCopay = (e) => {
    setCopayInput({
      ...copayInput,
      value: e.target.value,
      error: false,
    });
  };

  const onChangeChiefComplaint = (e) => {
    setChiefComplaintInput({
      ...chiefComplaintInput,
      value: e.target.value,
      error: false,
    });
  };

  const onChangePulse = (e) => {
    setPulseInput({
      ...pulseInput,
      value: e.target.value,
      error: false,
    });
  };

  const onChangeSystolic = (e) => {
    setSysInput({
      ...sysInput,
      value: e.target.value,
      error: false,
    });
  };

  const onChangeDiastolic = (e) => {
    setDiaInput({
      ...diaInput,
      value: e.target.value,
      error: false,
    });
  };

  const onChangeDate = (e) => {
    setDateInput({
      ...dateInput,
      value: e.target.value,
      error: false,
    });
  };

  // validates input values
  const validateValues = () => {
    let formIsValid = true;

    if (!isValidVisit(visitCodeInput.value)) {
      setVisitCodeInput({
        ...visitCodeInput,
        error: true,
      });
      formIsValid = false;
    }

    if (!providerInput.value.length > 0) {
      setProviderInput({
        ...providerInput,
        error: true,
      });
      formIsValid = false;
    }

    if (!isValidBilling(billingCodeInput.value)) {
      setBillingCodeInput({
        ...billingCodeInput,
        error: true,
      });
      formIsValid = false;
    }

    if (!isValidIcd(icd10Input.value)) {
      seticd10Input({
        ...icd10Input,
        error: true,
      });
      formIsValid = false;
    }

    if (!isValidNumber(totalCostInput.value)) {
      setTotalCostInput({
        ...totalCostInput,
        error: true,
      });
      formIsValid = false;
    }

    if (!isValidNumber(copayInput.value)) {
      setCopayInput({
        ...copayInput,
        error: true,
      });
      formIsValid = false;
    }

    if (chiefComplaintInput.value.length === 0) {
      setChiefComplaintInput({
        ...chiefComplaintInput,
        error: true,
      });
      formIsValid = false;
    }

    if (pulseInput.value.length > 0 && !isValidNumber(pulseInput.value)) {
      setPulseInput({
        ...pulseInput,
        error: true,
      });
    }

    if (sysInput.value.length > 0 && !isValidNumber(sysInput.value)) {
      setSysInput({
        ...sysInput,
        error: true,
      });
    }

    if (diaInput.value.length > 0 && !isValidNumber(diaInput.value)) {
      setDiaInput({
        ...diaInput,
        error: true,
      });
    }

    if (!isValidDate(dateInput.value)) {
      setDateInput({
        ...dateInput,
        error: true,
      });
      formIsValid = false;
    }

    return formIsValid;
  };

  /**
   * posts data to database
   * @param {*} e submit event
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateValues()) {
      const body = {
        patientId: params.id,
        notes: notesInput.value,
        visitCode: visitCodeInput.value,
        provider: providerInput.value,
        billingCode: billingCodeInput.value,
        icd10: icd10Input.value,
        totalCost: totalCostInput.value,
        copay: copayInput.value,
        chiefComplaint: chiefComplaintInput.value,
        pulse: Number(pulseInput.value),
        systolic: Number(sysInput.value),
        diastolic: Number(diaInput.value),
        date: dateInput.value,
      };

      axios({
        method: 'post',
        url: 'http://localhost:8080/patients/:id/encounters',
        data: body,
      }).then(navigate(`/patients/${params.id}`));
    }
  };

  return (
    <div>
      <ul className={styles.list}>
        <li>
          <label htmlFor="notes">
            Notes
            <input
              id="notes"
              name={notesInput.name}
              type={notesInput.type}
              label={notesInput.label}
              value={notesInput.value}
              onChange={onChangeNotes}
              error={notesInput.error}
              errormessage={notesInput.errorMessage}
            />
            {notesInput.error ? notesInput.errorMessage : undefined}
          </label>
        </li>
        <li>
          <label htmlFor="visitCode">
            Visit Code
            <input
              id="visitCode"
              name={visitCodeInput.name}
              type={visitCodeInput.type}
              label={visitCodeInput.label}
              value={visitCodeInput.value}
              onChange={onChangeVisitCode}
              error={visitCodeInput.error}
              errormessage={visitCodeInput.errorMessage}
            />
            {visitCodeInput.error ? visitCodeInput.errorMessage : undefined}
          </label>
        </li>
        <li>
          <label htmlFor="provider">
            Provider
            <input
              id="provider"
              name={providerInput.name}
              type={providerInput.type}
              label={providerInput.label}
              value={providerInput.value}
              onChange={onChangeProvider}
              error={providerInput.error}
              errormessage={providerInput.errorMessage}
            />
            {providerInput.error ? providerInput.errorMessage : undefined}
          </label>
        </li>
        <li>
          <label htmlFor="billingCode">
            Billing Code
            <input
              id="billingCode"
              name={billingCodeInput.name}
              type={billingCodeInput.type}
              label={billingCodeInput.label}
              value={billingCodeInput.value}
              onChange={onChangeBillingCode}
              error={billingCodeInput.error}
              errormessage={billingCodeInput.errorMessage}
            />
            {billingCodeInput.error ? billingCodeInput.errorMessage : undefined}
          </label>
        </li>
        <li>
          <label htmlFor="icd10">
            ICD10 Code
            <input
              id="icd10"
              name={icd10Input.name}
              type={icd10Input.type}
              label={icd10Input.label}
              value={icd10Input.value}
              onChange={onChangeIcd10}
              error={icd10Input.error}
              errormessage={icd10Input.errorMessage}
            />
            {icd10Input.error ? icd10Input.errorMessage : undefined}
          </label>
        </li>
        <li>
          <label htmlFor="totalCost">
            Total Cost
            <input
              id="totalCost"
              name={totalCostInput.name}
              type={totalCostInput.type}
              label={totalCostInput.label}
              value={totalCostInput.value}
              onChange={onChangeTotalCost}
              error={totalCostInput.error}
              errormessage={totalCostInput.errorMessage}
            />
            {totalCostInput.error ? totalCostInput.errorMessage : undefined}
          </label>
        </li>
        <li>
          <label htmlFor="copay">
            Copay
            <input
              id="copay"
              name={copayInput.name}
              type={copayInput.type}
              label={copayInput.label}
              value={copayInput.value}
              onChange={onChangeCopay}
              error={copayInput.error}
              errormessage={copayInput.errorMessage}
            />
            {copayInput.error ? copayInput.errorMessage : undefined}
          </label>
        </li>
        <li>
          <label htmlFor="chiefComplaint">
            Chief Complaint
            <input
              id="chiefComplaint"
              name={chiefComplaintInput.name}
              type={chiefComplaintInput.type}
              label={chiefComplaintInput.label}
              value={chiefComplaintInput.value}
              onChange={onChangeChiefComplaint}
              error={chiefComplaintInput.error}
              errormessage={chiefComplaintInput.errorMessage}
            />
            {chiefComplaintInput.error ? chiefComplaintInput.errorMessage : undefined}
          </label>
        </li>
        <li>
          <label htmlFor="pulse">
            Pulse
            <input
              id="pulse"
              name={pulseInput.name}
              type={pulseInput.type}
              label={pulseInput.label}
              value={pulseInput.value}
              onChange={onChangePulse}
              error={pulseInput.error}
              errormessage={pulseInput.errorMessage}
            />
            {pulseInput.error ? pulseInput.errorMessage : undefined}
          </label>
        </li>
        <li>
          <label htmlFor="systolic">
            Systolic
            <input
              id="systolic"
              name={sysInput.name}
              type={sysInput.type}
              label={sysInput.label}
              value={sysInput.value}
              onChange={onChangeSystolic}
              error={sysInput.error}
              errormessage={sysInput.errorMessage}
            />
            {sysInput.error ? sysInput.errorMessage : undefined}
          </label>
        </li>
        <li>
          <label htmlFor="diastolic">
            Diastolic
            <input
              id="diastolic"
              name={diaInput.name}
              type={diaInput.type}
              label={diaInput.label}
              value={diaInput.value}
              onChange={onChangeDiastolic}
              error={diaInput.error}
              errormessage={diaInput.errorMessage}
            />
            {diaInput.error ? diaInput.errorMessage : undefined}
          </label>
        </li>
        <li>
          <label htmlFor="date">
            Date
            <input
              id="date"
              name={dateInput.name}
              type={dateInput.type}
              label={dateInput.label}
              value={dateInput.value}
              onChange={onChangeDate}
              error={dateInput.error}
              errormessage={dateInput.errorMessage}
            />
            {dateInput.error ? dateInput.errorMessage : undefined}
          </label>
        </li>
      </ul>
      <div>
        <button type="submit" className={styles.button} onClick={handleSubmit}>Save</button>
      </div>
      <Link to={`/patients/${params.id}`}><button type="button" className={styles.button}>Return to Patient Details</button></Link>
    </div>
  );
}

export default EncounterFactory;
