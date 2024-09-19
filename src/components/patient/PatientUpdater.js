import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import styles from './PatientUpdater.module.css';
import {
  isValidName,
  isValidEmail,
  isValidSsn,
  isValidStateFormat,
  isValidState,
  isValidZip,
  isValidNumber,
  isValidGender,
} from '../../validation';

/**
 * updates existing patient in database
 * @returns patient updated in database
 */
function PatientUpdater() {
  const params = useParams();
  const [current, setCurrent] = useState({});
  const navigate = useNavigate();

  // Inputs
  const [firstNameInput, setFirstNameInput] = useState({
    name: 'firstName',
    type: 'text',
    label: 'First Name',
    errorMessage: 'Must enter a valid name',
    error: false,
    value: '',
  });

  const [lastNameInput, setLastNameInput] = useState({
    name: 'lastName',
    type: 'text',
    label: 'Last Name',
    errorMessage: 'Must enter a valid name',
    error: false,
    value: '',
  });

  const [ssnInput, setSsnInput] = useState({
    name: 'ssn',
    type: 'text',
    label: 'Social Security Number',
    errorMessage: 'Must be in format XXX-XX-XXXX',
    error: false,
    value: '',
  });

  const [emailInput, setEmailInput] = useState({
    name: 'email',
    type: 'text',
    label: 'Email',
    errorMessage: 'Invalid email address',
    error: false,
    value: '',
  });

  const [streetInput, setStreetInput] = useState({
    name: 'street',
    type: 'text',
    label: 'Street',
    errorMessage: 'Street is required',
    error: false,
    value: '',
  });

  const [cityInput, setCityInput] = useState({
    name: 'city',
    type: 'text',
    label: 'City',
    errorMessage: 'City is required',
    error: false,
    value: '',
  });

  const [stateInput, setStateInput] = useState({
    name: 'state',
    type: 'text',
    label: 'State',
    errorMessage: 'Enter 2 character state code',
    error: false,
    value: '',
  });

  const [zipInput, setZipInput] = useState({
    name: 'zip',
    type: 'text',
    label: 'Zip Code',
    errorMessage: 'Must be formatted XXXXX or XXXXX-XXXX',
    error: false,
    value: '',
  });

  const [ageInput, setAgeInput] = useState({
    name: 'age',
    type: 'text',
    label: 'Age',
    errorMessage: 'Age must be a number',
    error: false,
    value: '',
  });

  const [heightInput, setHeightInput] = useState({
    name: 'height',
    type: 'text',
    label: 'Height',
    errorMessage: 'Height must be a number',
    error: false,
    value: '',
  });

  const [weightInput, setWeightInput] = useState({
    name: 'weight',
    type: 'text',
    label: 'Weight',
    errorMessage: 'Weight must be a number',
    error: false,
    value: '',
  });

  const [insuranceInput, setInsuranceInput] = useState({
    name: 'insurance',
    type: 'text',
    label: 'Insurance',
    errorMessage: 'Insurance is required',
    error: false,
    value: '',
  });

  const [genderInput, setGenderInput] = useState({
    name: 'gender',
    type: 'text',
    label: 'Gender',
    errorMessage: 'Must be \'Male\', \'Female\', or \'Other\'',
    error: false,
    value: '',
  });

  // Change handlers
  const onChangeFirstName = (e) => {
    setFirstNameInput({
      ...firstNameInput,
      value: e.target.value,
      error: false,
    });
  };

  const onChangeLastName = (e) => {
    setLastNameInput({
      ...lastNameInput,
      value: e.target.value,
      error: false,
    });
  };

  const onChangeSsn = (e) => {
    setSsnInput({
      ...ssnInput,
      value: e.target.value,
      error: false,
    });
  };

  const onChangeEmail = (e) => {
    setEmailInput({
      ...emailInput,
      value: e.target.value,
      error: false,
    });
  };

  const onChangeStreet = (e) => {
    setStreetInput({
      ...streetInput,
      value: e.target.value,
      error: false,
    });
  };

  const onChangeCity = (e) => {
    setCityInput({
      ...cityInput,
      value: e.target.value,
      error: false,
    });
  };

  const onChangeState = (e) => {
    setStateInput({
      ...stateInput,
      value: e.target.value,
      error: false,
    });
  };

  const onChangeZip = (e) => {
    setZipInput({
      ...zipInput,
      value: e.target.value,
      error: false,
    });
  };

  const onChangeAge = (e) => {
    setAgeInput({
      ...ageInput,
      value: e.target.value,
      error: false,
    });
  };

  const onChangeHeight = (e) => {
    setHeightInput({
      ...heightInput,
      value: e.target.value,
      error: false,
    });
  };

  const onChangeWeight = (e) => {
    setWeightInput({
      ...weightInput,
      value: e.target.value,
      error: false,
    });
  };

  const onChangeInsurance = (e) => {
    setInsuranceInput({
      ...insuranceInput,
      value: e.target.value,
      error: false,
    });
  };

  const onChangeGender = (e) => {
    setGenderInput({
      ...genderInput,
      value: e.target.value,
      error: false,
    });
  };

  // Input validation
  const validateValues = () => {
    let formIsValid = true;

    if (!isValidName(firstNameInput.value)) {
      setFirstNameInput({
        ...firstNameInput,
        error: true,
      });
      formIsValid = false;
    }

    if (!isValidName(lastNameInput.value)) {
      setLastNameInput({
        ...lastNameInput,
        error: true,
      });
      formIsValid = false;
    }

    if (!isValidSsn(ssnInput.value)) {
      setSsnInput({
        ...ssnInput,
        error: true,
      });
      formIsValid = false;
    }

    if (!isValidEmail(emailInput.value)) {
      setEmailInput({
        ...emailInput,
        error: true,
      });
      formIsValid = false;
    }

    if (streetInput.value === '') {
      setStreetInput({
        ...streetInput,
        error: true,
      });
      formIsValid = false;
    }

    if (cityInput.value === '') {
      setCityInput({
        ...cityInput,
        error: true,
      });
      formIsValid = false;
    }

    if (!isValidStateFormat(stateInput.value) || !isValidState(stateInput.value.toUpperCase())) {
      setStateInput({
        ...stateInput,
        error: true,
      });
      formIsValid = false;
    }

    if (!isValidZip(zipInput.value)) {
      setZipInput({
        ...zipInput,
        error: true,
      });
      formIsValid = false;
    }

    if (!isValidNumber(ageInput.value)) {
      setAgeInput({
        ...ageInput,
        error: true,
      });
      formIsValid = false;
    }

    if (!isValidNumber(heightInput.value)) {
      setHeightInput({
        ...heightInput,
        error: true,
      });
      formIsValid = false;
    }

    if (!isValidNumber(weightInput.value)) {
      setWeightInput({
        ...weightInput,
        error: true,
      });
      formIsValid = false;
    }

    if (insuranceInput.value === '') {
      setInsuranceInput({
        ...insuranceInput,
        error: true,
      });
      formIsValid = false;
    }

    if (!isValidGender(genderInput.value)) {
      setGenderInput({
        ...genderInput,
        error: true,
      });
      formIsValid = false;
    }

    return formIsValid;
  };

  function getPatient() {}

  /**
   * submits patient to be updated in the database
   * @param {*} e submission event
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateValues()) {
      const body = {
        id: params.id,
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        ssn: ssnInput.value,
        email: emailInput.value,
        street: streetInput.value,
        city: cityInput.value,
        state: stateInput.value,
        postal: zipInput.value,
        age: Number(ageInput.value),
        height: Number(heightInput.value),
        weight: Number(weightInput.value),
        insurance: insuranceInput.value,
        gender: genderInput.value,
      };

      axios({
        method: 'put',
        url: `http://localhost:8080/patients/${params.id}`,
        data: body,
      }).then(getPatient(), navigate(`/patients/${params.id}`));
    }
  };

  /**
   * gets info for current patient and maps data to inputs
   */
  function mapPatient() {
    axios.get(`http://localhost:8080/patients/${params.id}`)
      .then(
        (response) => {
          setFirstNameInput({ ...firstNameInput, value: response.data.firstName });
          setLastNameInput({ ...lastNameInput, value: response.data.lastName });
          setSsnInput({ ...ssnInput, value: response.data.ssn });
          setEmailInput({ ...emailInput, value: response.data.email });
          setStreetInput({ ...streetInput, value: response.data.street });
          setCityInput({ ...cityInput, value: response.data.city });
          setStateInput({ ...stateInput, value: response.data.state });
          setZipInput({ ...zipInput, value: response.data.postal });
          setAgeInput({ ...ageInput, value: response.data.age });
          setHeightInput({ ...heightInput, value: response.data.height });
          setWeightInput({ ...weightInput, value: response.data.weight });
          setInsuranceInput({ ...insuranceInput, value: response.data.insurance });
          setGenderInput({ ...genderInput, value: response.data.gender });
          setCurrent(response.data);
        },
      );
  }

  useEffect(mapPatient, []);

  return (
    <div>
      <ul className={styles.list}>
        <li>
          <h3>ID:</h3>
          <h3>{ current.id }</h3>
        </li>
        <li>
          <label htmlFor="firstName">
            First Name
            <input
              id="firstName"
              name={firstNameInput.name}
              type={firstNameInput.type}
              label={firstNameInput.label}
              value={firstNameInput.value}
              onChange={onChangeFirstName}
              error={firstNameInput.error}
              errormessage={firstNameInput.errorMessage}
            />
            {firstNameInput.error ? firstNameInput.errorMessage : undefined}
          </label>
        </li>
        <li>
          <label htmlFor="lastName">
            Last Name
            <input
              id="lastName"
              name={lastNameInput.name}
              type={lastNameInput.type}
              label={lastNameInput.label}
              value={lastNameInput.value}
              onChange={onChangeLastName}
              error={lastNameInput.error}
              errormessage={lastNameInput.errorMessage}
            />
            {lastNameInput.error ? lastNameInput.errorMessage : undefined}
          </label>
        </li>
        <li>
          <label htmlFor="ssn">
            Social Security Number
            <input
              id="ssn"
              name={ssnInput.name}
              type={ssnInput.type}
              label={ssnInput.label}
              value={ssnInput.value}
              onChange={onChangeSsn}
              error={ssnInput.error}
              errormessage={ssnInput.errorMessage}
            />
            {ssnInput.error ? ssnInput.errorMessage : undefined}
          </label>
        </li>
        <li>
          <label htmlFor="email">
            Email
            <input
              id="email"
              name={emailInput.name}
              type={emailInput.type}
              label={emailInput.label}
              value={emailInput.value}
              onChange={onChangeEmail}
              error={emailInput.error}
              errormessage={emailInput.errorMessage}
            />
            {emailInput.error ? emailInput.errorMessage : undefined}
          </label>
        </li>
        <li>
          <label htmlFor="street">
            Street
            <input
              id="street"
              name={streetInput.name}
              type={streetInput.type}
              label={streetInput.label}
              value={streetInput.value}
              onChange={onChangeStreet}
              error={streetInput.error}
              errormessage={streetInput.errorMessage}
            />
            {streetInput.error ? streetInput.errorMessage : undefined}
          </label>
        </li>
        <li>
          <label htmlFor="city">
            City
            <input
              id="city"
              name={cityInput.name}
              type={cityInput.type}
              label={cityInput.label}
              value={cityInput.value}
              onChange={onChangeCity}
              error={cityInput.error}
              errormessage={cityInput.errorMessage}
            />
            {cityInput.error ? cityInput.errorMessage : undefined}
          </label>
        </li>
        <li>
          <label htmlFor="state">
            State
            <input
              id="state"
              name={stateInput.name}
              type={stateInput.type}
              label={stateInput.label}
              value={stateInput.value}
              onChange={onChangeState}
              error={stateInput.error}
              errormessage={stateInput.errorMessage}
            />
            {stateInput.error ? stateInput.errorMessage : undefined}
          </label>
        </li>
        <li>
          <label htmlFor="zip">
            Zip Code
            <input
              id="zip"
              name={zipInput.name}
              type={zipInput.type}
              label={zipInput.label}
              value={zipInput.value}
              onChange={onChangeZip}
              error={zipInput.error}
              errormessage={zipInput.errorMessage}
            />
            {zipInput.error ? zipInput.errorMessage : undefined}
          </label>
        </li>
        <li>
          <label htmlFor="age">
            Age
            <input
              id="age"
              name={ageInput.name}
              type={ageInput.type}
              label={ageInput.label}
              value={ageInput.value}
              onChange={onChangeAge}
              error={ageInput.error}
              errormessage={ageInput.errorMessage}
            />
            {ageInput.error ? ageInput.errorMessage : undefined}
          </label>
        </li>
        <li>
          <label htmlFor="height">
            Height (Inches)
            <input
              id="height"
              name={heightInput.name}
              type={heightInput.type}
              label={heightInput.label}
              value={heightInput.value}
              onChange={onChangeHeight}
              error={heightInput.error}
              errormessage={heightInput.errorMessage}
            />
            {heightInput.error ? heightInput.errorMessage : undefined}
          </label>
        </li>
        <li>
          <label htmlFor="weight">
            Weight (Pounds)
            <input
              id="weight"
              name={weightInput.name}
              type={weightInput.type}
              label={weightInput.label}
              value={weightInput.value}
              onChange={onChangeWeight}
              error={weightInput.error}
              errormessage={weightInput.errorMessage}
            />
            {weightInput.error ? weightInput.errorMessage : undefined}
          </label>
        </li>
        <li>
          <label htmlFor="insurance">
            Insurance
            <input
              id="insurance"
              name={insuranceInput.name}
              type={insuranceInput.type}
              label={insuranceInput.label}
              value={insuranceInput.value}
              onChange={onChangeInsurance}
              error={insuranceInput.error}
              errormessage={insuranceInput.errorMessage}
            />
            {insuranceInput.error ? insuranceInput.errorMessage : undefined}
          </label>
        </li>
        <li>
          <label htmlFor="gender">
            Gender
            <input
              id="gender"
              name={genderInput.name}
              type={genderInput.type}
              label={genderInput.label}
              value={genderInput.value}
              onChange={onChangeGender}
              error={genderInput.error}
              errormessage={genderInput.errorMessage}
            />
            {genderInput.error ? genderInput.errorMessage : undefined}
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

export default PatientUpdater;
