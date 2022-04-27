import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { addNewCard, replaceEditedCard } from '../../redux/actions/userActions';
import TagsInput from '../FormComponents/TagsInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser as farCircleUser, faImage } from '@fortawesome/free-regular-svg-icons';
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
import formStyles from '../../assets/css/formStyles.module.css';

const UpdateCardComponent = () => {

  const { imageHolderClass, formCard, formImage } = formStyles;
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
  const imageURLInputRef = useRef();

  const emailRegex = /(^.*@.*\..*$)/;
  const websiteRegex = /(^([a-zA-Z0-9]+\.*)?[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)$)/;
  const phoneRegex = /^[0-9]{8,12}$/;
  const zipCodeRegex = /^[0-9]{5,6}$/;

  let validationFlag;

  const [errors, setErrors] = useState({});
  const [tags, setTags] = useState(card.tags ? card.tags : []);
  const [imgURL, setImgURL] = useState(card.imageURL ? card.imageURL : '')

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

  const validate = (values) => {
    const errors = {}
    if (!values.firstName) {
      validationFlag = true;
      errors.firstName = 'Please enter first name.';
    }
    if (!values.lastName) {
      validationFlag = true;
      errors.lastName = 'Please enter last name.';
    }
    if (!values.designation) {
      validationFlag = true;
      errors.designation = 'Please enter designation.';
    }
    if (!values.contact_phone) {
      validationFlag = true;
      errors.contact_phone = 'Please enter phone number.';
    } else if (!phoneRegex.test(values.contact_phone)) {
      validationFlag = true;
      errors.contact_phone = 'Phone number must be a 10 digit number.';
    }
    if (!values.contact_email) {
      validationFlag = true;
      errors.contact_email = 'Please enter email address.';
    } else if (!emailRegex.test(values.contact_email)) {
      validationFlag = true;
      errors.contact_email = 'Entered E-mail is not valid.'
    }
    if (!values.address_area) {
      validationFlag = true;
      errors.address_area = 'Please enter your address area.';
    }
    if (!values.address_city) {
      validationFlag = true;
      errors.address_city = 'Please enter your city.';
    }
    if (!values.address_state) {
      validationFlag = true;
      errors.address_state = 'Please enter your state.';
    }
    if (!values.address_country) {
      validationFlag = true;
      errors.address_country = 'Please enter your country.';
    }
    if (!values.address_zipcode) {
      validationFlag = true;
      errors.address_zipcode = 'Please enter your zip code.';
    } else if (!zipCodeRegex.test(values.address_zipcode)) {
      validationFlag = true;
      errors.address_zipcode = 'Zip Code must be a 6 digit number.'
    }
    if (!values.website) {
      validationFlag = true;
      errors.website = 'Please enter your website.';
    } else if (!websiteRegex.test(values.website)) {
      validationFlag = true;
      errors.website = 'Entered Website is not valid.'
    }
    return errors;
  }
  const changeHandler = (value) => {
    setTags(value);
  }

  const submitHandler = (event) => {

    validationFlag = false;

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
    let imageURLInput = imageURLInputRef.current.value;

    card = {
      firstName: firstNameInput,
      lastName: lastNameInput,
      imageURL: imageURLInput,
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
      tags: tags
    };

    setErrors(validate(card));

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
      imageURLInputRef.current.value = card.imageURL;
    }
  }, [card, editing])

  return (
    <div className="px-2 px-sm-4">
      <form className="row m-0" onSubmit={submitHandler}>
        <div className="col-lg-7 col-md-9">
          <div className={formCard + " bg-info row m-0 p-sm-3 py-3 my-3"}>
            <div className="col-lg-5 col-sm-9 my-auto text-center">
              {/* <div
                className={imagePlaceholderClass
                  + ' p-0 mx-auto my-2'}>
                <div className='my-3 text-light px-3'>
                  Image Input Placeholder
                </div>
              </div> */}
              <div className={imageHolderClass + " mx-auto"}>
              <img
                className={formImage}
                src={imgURL}
                alt='Enter your profile pic link below for preview' />
              </div>
              
              <div className='d-flex mt-3'>
                <label htmlFor='imageInput' className='mx-3 mt-3 col-1'>
                  <FontAwesomeIcon icon={faImage} size='lg' />
                </label>
                <input
                  id='imageInput'
                  ref={imageURLInputRef}
                  className='form-control mt-2'
                  placeholder='Enter image url'
                  onChange={() =>setImgURL(imageURLInputRef.current.value)} />
              </div>
              {/* <button className="my-2" disabled>Upload Image</button> */}
            </div>
            <div className="col-lg-7 col-sm-9">
              <div>
                <div className='d-flex'>
                  <label htmlFor='firstNameInput' className='mx-3 mt-3 col-1'>
                    <FontAwesomeIcon icon={faUserCircle} size='lg' />
                  </label>
                  <input
                    id='firstNameInput'
                    ref={firstNameInputRef}
                    type='text'
                    placeholder='Enter First Name'
                    className='form-control mt-2' />
                </div>
                {errors.firstName &&
                  <div className='text-end text-danger'>
                    {errors.firstName}
                  </div>}
              </div>
              <div>
                <div className='d-flex'>
                  <label htmlFor='lastNameInput' className='mx-3 mt-3 col-1'>
                    <FontAwesomeIcon icon={farCircleUser} size='lg' />
                  </label>
                  <input
                    id='lastNameInput'
                    ref={lastNameInputRef}
                    type='text'
                    placeholder='Enter Last Name'
                    className='form-control mt-2' />
                </div>
                {errors.lastName &&
                  <div className='text-end text-danger'>
                    {errors.lastName}
                  </div>}
              </div>
              <div>
                <div className='d-flex'>
                  <label htmlFor='designationInput' className='mx-3 mt-3 col-1'>
                    <FontAwesomeIcon icon={faSuitcase} size='lg' />
                  </label>
                  <input
                    id='designationInput'
                    ref={designationInputRef}
                    type='text'
                    placeholder='Enter Designation'
                    className='form-control mt-2' />
                </div>
                {errors.designation &&
                  <div className='text-end text-danger'>
                    {errors.designation}
                  </div>}
              </div>
              <div>
                <div className='d-flex'>
                  <label htmlFor='emailInput' className='mx-3 mt-3 col-1'>
                    <FontAwesomeIcon icon={faEnvelope} size='lg' />
                  </label>
                  <input
                    id='emailInput'
                    ref={emailInputRef}
                    type='text'
                    placeholder='Enter Email'
                    className='form-control mt-2' />
                </div>
                {errors.contact_email &&
                  <div className='text-end text-danger'>
                    {errors.contact_email}
                  </div>}
              </div>
              <div>
                <div className='d-flex'>
                  <label htmlFor='phoneInput' className='mx-3 mt-3 col-1'>
                    <FontAwesomeIcon icon={faPhone} size='lg' />
                  </label>
                  <input
                    id='phoneInput'
                    ref={phoneInputRef}
                    type='text'
                    placeholder='Enter Phone'
                    className='form-control mt-2'
                  // onChange={handlePhoneInput}
                  // value={phoneValue}
                  />
                </div>
                {errors.contact_phone &&
                  <div className='text-end text-danger'>
                    {errors.contact_phone}
                  </div>}
              </div>
            </div>
          </div>

          <div className={formCard + " bg-info row m-0  p-sm-3 py-3 my-3"}>
            <div className="col-lg-5 col-3"></div>
            <div className="col-lg-7 col-sm-9">
              <div>
                <div className='d-flex'>
                  <label htmlFor='areaInput' className='mx-3 mt-3 col-1'>
                    <FontAwesomeIcon icon={faLocation} size='lg' />
                  </label>
                  <input
                    id='areaInput'
                    ref={addressAreaInputRef}
                    type='text'
                    placeholder='Enter Address Area'
                    className='form-control mt-2' />
                </div>
                {errors.address_area &&
                  <div className='text-end text-danger'>
                    {errors.address_area}
                  </div>}
              </div>
              <div>
                <div className='d-flex'>
                  <label htmlFor='cityInput' className='mx-3 mt-3 col-1'>
                    <FontAwesomeIcon icon={faMapMarked} size='lg' />
                  </label>
                  <input
                    id='cityInput'
                    ref={addressCityInputRef}
                    type='text'
                    placeholder='Enter the city'
                    className='form-control mt-2' />
                </div>
                {errors.address_city &&
                  <div className='text-end text-danger'>
                    {errors.address_city}
                  </div>}
              </div>
              <div>
                <div className='d-flex'>
                  <label htmlFor='stateInput' className='mx-3 mt-3 col-1'>
                    <FontAwesomeIcon icon={faMapMarkerAlt} size='lg' />
                  </label>
                  <input
                    id='stateInput'
                    ref={addressStateInputRef}
                    type='text'
                    placeholder='Enter the state'
                    className='form-control mt-2' />
                </div>
                {errors.address_state &&
                  <div className='text-end text-danger'>
                    {errors.address_state}
                  </div>}
              </div>
              <div>
                <div className='d-flex'>
                  <label htmlFor='countryInput' className='mx-3 mt-3 col-1'>
                    <FontAwesomeIcon icon={faGlobe} size='lg' />
                  </label>
                  <input
                    id='countryInput'
                    ref={addressCountryInputRef}
                    type='text'
                    placeholder='Enter the country'
                    className='form-control mt-2' />
                </div>
                {errors.address_country &&
                  <div className='text-end text-danger'>
                    {errors.address_country}
                  </div>}
              </div>
              <div>
                <div className='d-flex'>
                  <label htmlFor='zipCodeInput' className='mx-3 mt-3 col-1'>
                    <FontAwesomeIcon icon={faThumbTack} size='lg' />
                  </label>
                  <input
                    id='zipCodeInput'
                    ref={zipCodeInputRef}
                    type='text'
                    placeholder='Enter the zip code'
                    className='form-control mt-2' />
                </div>
                {errors.address_zipcode &&
                  <div className='text-end text-danger'>
                    {errors.address_zipcode}
                  </div>}
              </div>
            </div>
            <div className='col-sm-8 col-md-7 col-lg-6'>
              <div>
                <div className='d-flex'>
                  <label htmlFor='zipCodeInput' className='mx-3 mt-3 col-1'>
                    <FontAwesomeIcon icon={faLink} size='lg' />
                  </label>
                  <input
                    ref={websiteInputRef}
                    type='text'
                    placeholder='Enter Your Web Address'
                    className='form-control mt-2' />
                </div>
                {errors.website &&
                  <div className='text-end text-danger'>
                    {errors.website}
                  </div>}
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 my-5 text-center">
          <h3>Identification Values</h3>
          <TagsInput
            id="tags"
            onChange={changeHandler}
            error={errors.tags}
            defaultTags={tags}
          />
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