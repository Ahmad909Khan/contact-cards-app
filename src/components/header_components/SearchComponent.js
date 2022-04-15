import React, { useRef } from 'react';
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import headerStyles from '../../assets/css/headerStyles.module.css'
import { searchOperation } from '../../redux/actions/userActions';
import { useNavigate } from 'react-router-dom';

const SearchComponent = () => {


    const selectedCategoryRef = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let searchTermRef = useRef();

    const searchHandler = (event) => {
        event.preventDefault();

        let category = selectedCategoryRef.current.value;
        let enteredSearchTerm = searchTermRef.current.value;
        dispatch(searchOperation(enteredSearchTerm, category))
        navigate('search-results')
        searchTermRef.current.value = ''
    }
    return (
        <form
            className="d-flex my-1 m-0 mx-auto"
            onSubmit={searchHandler}>
            <select
                className={"bg-light border-0 rounded-start p-1 " + headerStyles.searchSelectDropdown}
                ref={selectedCategoryRef}>
                <option value=''>All</option>
                <option value='name'>Name</option>
                <option value='designation'>Profession</option>
                <option value='contact_phone'>Phone</option>
                <option value='contact_email'>E-mail</option>
                <option value='address_city'>City</option>
            </select>
            <div className="col-9 p-0 bg-white">
                <input
                    ref={searchTermRef}
                    className='w-100 border border-0 my-1'
                    placeholder=" Search..." />
            </div>
            <div className="col-1 bg-warning rounded-0 rounded-end">
                <button
                    type='submit'
                    className="btn mx-auto">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>

        </form>
    )
}

export default SearchComponent