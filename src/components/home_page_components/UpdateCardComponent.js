import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { addNewCard, replaceEditedCard } from '../../redux/actions/userActions';
import formStyles from '../../assets/css/formStyles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser as farCircleUser } from '@fortawesome/free-regular-svg-icons';
import {
  faEnvelope,
  faGlobe,
  faLink,
  faLocation,
  faMapMarked,
  faMapMarkerAlt,
  faPhone,
  faSuitcase,
  faThumbTack,
  faUserCircle
} from '@fortawesome/free-solid-svg-icons';

const UpdateCardComponent = () => {

  const { state } = useLocation();
  let { index, card, editing } = state ? state
    : {
      index: null,
      card: {},
      editing: false
    };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const designationInputRef = useRef();
  const emailInputRef = useRef();
  const phoneInputRef = useRef();
  const addressAreaInputRef = useRef();
  const addressCityInputRef = useRef();
  const addressStateInputRef = useRef();
  const addressCountryInputRef = useRef();
  const zipCodeInputRef = useRef();
  const websiteInputRef = useRef();

  const emailRegex = /(^.*@.*\..*$)/;
  const websiteRegex = /(^([a-zA-Z0-9]+\.*)?[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)$)/;
  const phoneRegex = /^[0-9]{10}$/;
  const zipCodeRegex = /^[0-9]{6}$/;

  let validationFlag;
  const [firstNameValidation, setFirstNameValidation] = useState('');
  const [lastNameValidation, setLastNameValidation] = useState('');
  const [designationValidation, setDesignationValidation] = useState('');
  const [emailValidation, setEmailValidation] = useState('');
  const [phoneValidation, setPhoneValidation] = useState('');
  const [addressAreaValidation, setAddressAreaValidation] = useState('');
  const [addressCityValidation, setAddressCityValidation] = useState('');
  const [addressStateValidation, setAddressStateValidation] = useState('');
  const [addressCountryValidation, setAddressCountryValidation] = useState('');
  const [zipCodeValidation, setZipCodeValidation] = useState('');
  const [websiteValidation, setWebsiteValidation] = useState('');

  const submitHandler = (event) => {

    event.preventDefault();
    validationFlag = false;

    let firstNameInput = firstNameInputRef.current.value;
    let lastNameInput = lastNameInputRef.current.value;
    let designationInput = designationInputRef.current.value;
    let phoneInput = phoneInputRef.current.value;
    let emailInput = emailInputRef.current.value;
    let addressAreaInput = addressAreaInputRef.current.value;
    let addressCityInput = addressCityInputRef.current.value;
    let addressStateInput = addressStateInputRef.current.value;
    let addressCountryInput = addressCountryInputRef.current.value;
    let zipCodeInput = zipCodeInputRef.current.value;
    let websiteInput = websiteInputRef.current.value;

    const phoneRegexValid = () => {
      setPhoneValidation('Phone number must be a 10 digit number');
      validationFlag = true;
    }

    const emailRegexValid = () => {
      setEmailValidation('Entered Email is not valid');
      validationFlag = true;
    }

    const zipCodeRegexValid = () => {
      setZipCodeValidation('Zip code number must be a 6 digit number');
      validationFlag = true;
    }

    const websiteRegexValid = () => {
      setWebsiteValidation('Entered website is not valid');
      validationFlag = true;
    }

    if (
      firstNameInput.length === 0
      || lastNameInput.length === 0
      || designationInput.length === 0
      || phoneInput.length === 0
      || emailInput.length === 0
      || addressAreaInput.length === 0
      || addressCityInput.length === 0
      || addressStateInput.length === 0
      || addressCountryInput.length === 0
      || zipCodeInput.length === 0
      || websiteInput.length === 0
    ) {
      validationFlag = true;
    }

    firstNameInput.length === 0
      ? setFirstNameValidation('Please enter first name')
      : setFirstNameValidation('');

    lastNameInput.length === 0
      ? setLastNameValidation('Please enter last name')
      : setLastNameValidation('');

    designationInput.length === 0
      ? setDesignationValidation('Please enter designation')
      : setDesignationValidation('');

    phoneInput.length === 0
      ? setPhoneValidation('Please enter phone number')
      : (phoneInput.length > 0 && !phoneRegex.test(phoneInput))
        ? phoneRegexValid()
        : setPhoneValidation('');

    emailInput.length === 0
      ? setEmailValidation('Please enter email address')
      : (emailInput.length > 0 && !emailRegex.test(emailInput))
        ? emailRegexValid()
        : setEmailValidation('');

    addressAreaInput.length === 0
      ? setAddressAreaValidation('Please enter address area')
      : setAddressAreaValidation('');

    addressCityInput.length === 0
      ? setAddressCityValidation('Please enter your city')
      : setAddressCityValidation('');

    addressStateInput.length === 0
      ? setAddressStateValidation('Please enter your state')
      : setAddressStateValidation('');

    addressCountryInput.length === 0
      ? setAddressCountryValidation('Please enter your area')
      : setAddressCountryValidation('');

    zipCodeInput.length === 0
      ? setZipCodeValidation('Please enter your zip code')
      : (zipCodeInput.length > 0 && !zipCodeRegex.test(zipCodeInput))
        ? zipCodeRegexValid()
        : setZipCodeValidation('');

    websiteInput.length === 0
      ? setWebsiteValidation('Please enter your website')
      : (websiteInput.length > 0 && !websiteRegex.test(websiteInput))
        ? websiteRegexValid()
        : setWebsiteValidation('');

    if (editing && !validationFlag) {
      const updatedCard = {
        firstName: firstNameInput,
        lastName: lastNameInput,
        designation: designationInput,
        contact_phone: phoneInput,
        contact_email: emailInput,
        address_area: addressAreaInput,
        address_city: addressCityInput,
        address_state: addressStateInput,
        address_country: addressCountryInput,
        address_zipcode: zipCodeInput,
        website: websiteInput,
        isFavourite: card.isFavourite,
        tags: card.tags
      }
      dispatch(replaceEditedCard(index, updatedCard))
      navigate('/home-page')
      editing = false;
    }

    else if (!validationFlag) {
      card = {
        firstName: firstNameInput,
        lastName: lastNameInput,
        designation: designationInput,
        contact_phone: phoneInput,
        contact_email: emailInput,
        address_area: addressAreaInput,
        address_city: addressCityInput,
        address_state: addressStateInput,
        address_country: addressCountryInput,
        address_zipcode: zipCodeInput,
        website: websiteInput,
        isFavourite: false,
        tags: []
      }

      dispatch(addNewCard(card));
      navigate('/home-page')
    }
  }

  useEffect(() => {
    if (editing) {
      firstNameInputRef.current.value = card.firstName;
      lastNameInputRef.current.value = card.lastName;
      designationInputRef.current.value = card.designation;
      phoneInputRef.current.value = card.contact_phone;
      emailInputRef.current.value = card.contact_email;
      addressAreaInputRef.current.value = card.address_area;
      addressCityInputRef.current.value = card.address_city;
      addressStateInputRef.current.value = card.address_state;
      addressCountryInputRef.current.value = card.address_country;
      zipCodeInputRef.current.value = card.address_zipcode;
      websiteInputRef.current.value = card.website;
    }
  }, [card, editing])

  return (
    <div className="px-4">
      <form className="row m-0" onSubmit={submitHandler}>
        <div className="col-lg-7 col-md-9">
          <div className={formStyles.formCard + " bg-info row m-0 p-3 my-3"}>
            <div className="col-3 text-center">
              <div
                className={formStyles.imagePlaceholderClass
                  + ' p-0 mx-auto my-2'}>
                <div className='my-3 text-light px-3'>
                  Image Input Placeholder
                </div>
              </div>
              <button className="" disabled>Upload Image</button>
            </div>
            <div className="col-lg-7 col-9">
              <div>
                {firstNameValidation &&
                  <div className='text-end text-danger'>
                    {firstNameValidation}
                  </div>}
                <div className='d-flex'>
                  <label htmlFor='firstNameInput' className='m-3 col-1'>
                    <FontAwesomeIcon icon={faUserCircle} size='lg' />
                  </label>
                  <input
                    id='firstNameInput'
                    ref={firstNameInputRef}
                    type='text'
                    placeholder='Enter First Name'
                    className='form-control m-2' />
                </div>
              </div>
              <div>
                {lastNameValidation &&
                  <div className='text-end text-danger'>
                    {lastNameValidation}
                  </div>}
                <div className='d-flex'>
                  <label htmlFor='lastNameInput' className='m-3 col-1'>
                    <FontAwesomeIcon icon={farCircleUser} size='lg' />
                  </label>
                  <input
                    id='lastNameInput'
                    ref={lastNameInputRef}
                    type='text'
                    placeholder='Enter Last Name'
                    className='form-control m-2' />
                </div>
              </div>
              <div>
                {designationValidation &&
                  <div className='text-end text-danger'>
                    {designationValidation}
                  </div>}
                <div className='d-flex'>
                  <label htmlFor='designationInput' className='m-3 col-1'>
                    <FontAwesomeIcon icon={faSuitcase} size='lg' />
                  </label>
                  <input
                    id='designationInput'
                    ref={designationInputRef}
                    type='text'
                    placeholder='Enter Designation'
                    className='form-control m-2' />
                </div>
              </div>
              <div>
                {emailValidation &&
                  <div className='text-end text-danger'>
                    {emailValidation}
                  </div>}
                <div className='d-flex'>
                  <label htmlFor='emailInput' className='m-3 col-1'>
                    <FontAwesomeIcon icon={faEnvelope} size='lg' />
                  </label>
                  <input
                    id='emailInput'
                    ref={emailInputRef}
                    type='text'
                    placeholder='Enter Email'
                    className='form-control m-2' />
                </div>
              </div>
              <div>
                {phoneValidation &&
                  <div className='text-end text-danger'>
                    {phoneValidation}
                  </div>}
                <div className='d-flex'>
                  <label htmlFor='phoneInput' className='m-3 col-1'>
                    <FontAwesomeIcon icon={faPhone} size='lg' />
                  </label>
                  <input
                    id='phoneInput'
                    ref={phoneInputRef}
                    type='text'
                    placeholder='Enter Phone'
                    className='form-control m-2' />
                </div>
              </div>
            </div>
          </div>

          <div className={formStyles.formCard + " bg-info row m-0 p-3 my-3"}>
            <div className="col-lg-5 col-3"></div>
            <div className="col-lg-7 col-9 p-3">
              <div>
                {addressAreaValidation &&
                  <div className='text-end text-danger'>
                    {addressAreaValidation}
                  </div>}
                <div className='d-flex'>
                  <label htmlFor='areaInput' className='m-3 col-1'>
                    <FontAwesomeIcon icon={faLocation} size='lg' />
                  </label>
                  <input
                    id='areaInput'
                    ref={addressAreaInputRef}
                    type='text'
                    placeholder='Enter Address Area'
                    className='form-control m-2' />
                </div>
              </div>
              <div>
                {addressCityValidation &&
                  <div className='text-end text-danger'>
                    {addressCityValidation}
                  </div>}
                <div className='d-flex'>
                  <label htmlFor='cityInput' className='m-3 col-1'>
                    <FontAwesomeIcon icon={faMapMarked} size='lg' />
                  </label>
                  <input
                    id='cityInput'
                    ref={addressCityInputRef}
                    type='text'
                    placeholder='Enter the city'
                    className='form-control m-2' />
                </div>
              </div>
              <div>
                {addressStateValidation &&
                  <div className='text-end text-danger'>
                    {addressStateValidation}
                  </div>}
                <div className='d-flex'>
                  <label htmlFor='stateInput' className='m-3 col-1'>
                    <FontAwesomeIcon icon={faMapMarkerAlt} size='lg' />
                  </label>
                  <input
                    id='stateInput'
                    ref={addressStateInputRef}
                    type='text'
                    placeholder='Enter the state'
                    className='form-control m-2' />
                </div>
              </div>
              <div>
                {addressCountryValidation &&
                  <div className='text-end text-danger'>
                    {addressCountryValidation}
                  </div>}
                <div className='d-flex'>
                  <label htmlFor='countryInput' className='m-3 col-1'>
                    <FontAwesomeIcon icon={faGlobe} size='lg' />
                  </label>
                  <input
                    id='countryInput'
                    ref={addressCountryInputRef}
                    type='text'
                    placeholder='Enter the country'
                    className='form-control m-2' />
                </div>
              </div>
              <div>
                {zipCodeValidation &&
                  <div className='text-end text-danger'>
                    {zipCodeValidation}
                  </div>}
                <div className='d-flex'>
                  <label htmlFor='zipCodeInput' className='m-3 col-1'><FontAwesomeIcon icon={faThumbTack} size='lg' /></label>
                  <input
                    id='zipCodeInput'
                    ref={zipCodeInputRef}
                    type='text'
                    placeholder='Enter the zip code'
                    className='form-control m-2' />
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div>
                {websiteValidation &&
                  <div className='text-end text-danger'>
                    {websiteValidation}
                  </div>}
                <div className='d-flex'>
                  <label htmlFor='zipCodeInput' className='m-3 col-1'>
                    <FontAwesomeIcon icon={faLink} size='lg' />
                  </label>
                  <input
                    ref={websiteInputRef}
                    type='text'
                    placeholder='Enter Your Web Address'
                    className='form-control m-2' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 my-5">
          <ul className="list-unstyled text-center">
            <h3>Identification Values</h3>

            <li className="my-2">tag list</li>
            <li className="my-2">
              <input type='text' placeholder='Enter tag' className='w-50 form-control mx-auto' />
            </li>
          </ul>
        </div>
        <div className="text-center my-3">
          <button type='submit' className="btn btn-warning">
            {editing ? 'Update Card' : 'Save Card'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default UpdateCardComponent