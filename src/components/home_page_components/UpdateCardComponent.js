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

  const [errors, setErrors] = useState({});

  // const [phoneValue, setPhoneValue] = useState('');

  // const formatPhoneNumber = (phoneNumber) => {

  //   if (phoneNumber.length === 4)
  //     return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3)}`;

  //   if (phoneNumber.length === 8)
  //   return `${phoneNumber.slice(0, 7)
  //   }-${phoneNumber.slice(7)}`
  // }

  // const handlePhoneInput = (event) => {
  //   const formattedPhoneNumber = formatPhoneNumber(event.target.value)
  //   setPhoneValue(formattedPhoneNumber)
  // }

  const submitHandler = (event) => {

    event.preventDefault();

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
      isFavourite: card.isFavourite ? card.isFavourite : false,
      tags: []
    };
    const validate = (values) => {
      const errors = {}
      if (!values.firstName) {
        errors.firstName = 'Please enter first name.';
      }
      if (!values.lastName) {
        errors.lastName = 'Please enter last name.';
      }
      if (!values.designation) {
        errors.designation = 'Please enter designation.';
      }
      if (!values.contact_phone) {
        errors.contact_phone = 'Please enter phone number.';
      } else if (!phoneRegex.test(values.contact_phone)) {
        errors.contact_phone = 'Phone number must be a 10 digit number.';
      }
      if (!values.contact_email) {
        errors.contact_email = 'Please enter email address.';
      } else if (!emailRegex.test(values.contact_email)) {
        errors.contact_email = 'Wntered E-mail is not valid.'
      }
      if (!values.address_area) {
        errors.address_area = 'Please enter your address area.';
      }
      if (!values.address_city) {
        errors.address_city = 'Please enter your city.';
      }
      if (!values.address_state) {
        errors.address_state = 'Please enter your state.';
      }
      if (!values.address_country) {
        errors.address_country = 'Please enter your country.';
      }
      if (!values.address_zipcode) {
        errors.address_zipcode = 'Please enter your zip code.';
      } else if (!zipCodeRegex.test(values.address_zipcode)) {
        errors.address_zipcode = 'Zip Code must be a 6 digit number.'
      }
      if (!values.website) {
        errors.website = 'Please enter your website.';
      } else if (!websiteRegex.test(values.website)) {
        errors.website = 'Entered Website is not valid.'
      }
      return errors;
    }

    setErrors(validate(card));
    console.log(errors);

    if (Object.keys(errors).length === 0) {
      validationFlag = true
    }

    if (editing && !validationFlag) {
      dispatch(replaceEditedCard(index, card))
      navigate('/home-page')
      editing = false;
    }

    else if (!validationFlag) {
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
                {errors.firstName &&
                  <div className='text-end text-danger'>
                    {errors.firstName}
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
                {errors.lastName &&
                  <div className='text-end text-danger'>
                    {errors.lastName}
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
                {errors.designation &&
                  <div className='text-end text-danger'>
                    {errors.designation}
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
                {errors.contact_email &&
                  <div className='text-end text-danger'>
                    {errors.contact_email}
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
                {errors.contact_phone &&
                  <div className='text-end text-danger'>
                    {errors.contact_phone}
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
                    className='form-control m-2'
                  // onChange={handlePhoneInput}
                  // value={phoneValue}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={formStyles.formCard + " bg-info row m-0 p-3 my-3"}>
            <div className="col-lg-5 col-3"></div>
            <div className="col-lg-7 col-9 p-3">
              <div>
                {errors.address_area &&
                  <div className='text-end text-danger'>
                    {errors.address_area}
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
                {errors.address_city &&
                  <div className='text-end text-danger'>
                    {errors.address_city}
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
                {errors.address_state &&
                  <div className='text-end text-danger'>
                    {errors.address_state}
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
                {errors.address_country &&
                  <div className='text-end text-danger'>
                    {errors.address_country}
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
                {errors.address_zipcode &&
                  <div className='text-end text-danger'>
                    {errors.address_zipcode}
                  </div>}
                <div className='d-flex'>
                  <label htmlFor='zipCodeInput' className='m-3 col-1'>
                    <FontAwesomeIcon icon={faThumbTack} size='lg' />
                  </label>
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
                {errors.website &&
                  <div className='text-end text-danger'>
                    {errors.website}
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