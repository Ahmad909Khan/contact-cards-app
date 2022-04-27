import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchOperation } from '../../redux/actions/userActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import headerStyles from '../../assets/css/headerStyles.module.css';

const SearchComponent = () => {

    const searchTerm = useSelector((state) => state.users.searchTerm);
    const [value, setValue] = useState(searchTerm)

    const dispatch = useDispatch();

    const selectedCategoryRef = useRef();
    const searchTermRef = useRef();

    const changeHandler = () => {
        setValue(searchTermRef.current.value)
    }

    const searchHandler = (event) => {
        event.preventDefault();

        dispatch(searchOperation(
            value,
            selectedCategoryRef.current.value
        ))
    }

    useEffect(() => {
        searchTermRef.current.value = searchTerm;
    }, [searchTerm])

    return (
        <form
            className="d-flex m-0 mx-auto"
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
                <option value='tags'>Tags</option>
            </select>
            <input
                ref={searchTermRef}
                className='form-control rounded-0 border-0'
                placeholder=" Search..."
                onChange={changeHandler} />
            {searchTerm &&
                <div className="bg-white rounded-0">
                    <button
                        type='button'
                        className="btn"
                        title='Cancel Search'
                        onClick={() => dispatch(searchOperation('', ''))}>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>}
            <div className="bg-warning rounded-0 rounded-end">
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