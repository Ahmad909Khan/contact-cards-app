import React from 'react';
import { NavLink } from 'react-router-dom';
import { faList, faPlusSquare, faTable, faThumbTack } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import homePageStyles from '../../assets/css/homePageStyles.module.css';

const NavMenuComponent = () => {

  const { activeNavItem, eraseBtnShadow } = homePageStyles

  const activeNavClass =
    activeNavItem
    + ' px-3 me-1 pt-2 text-decoration-none btn-secondary border-0 '
    + eraseBtnShadow;
  const inactiveNavClass = eraseBtnShadow
    + ' px-3 py-2 me-1 text-decoration-none btn-secondary border-0 ';

  const activeClassTrigger = (navigationData) =>
    navigationData.isActive
      ? activeNavClass
      : inactiveNavClass;

  return (
    <div className='text-center text-md-end pt-2'>
      <ul className="m-0 m-sm-3 mx-md-5 btn-group p-0">
        <NavLink
          className={activeClassTrigger}
          to='all-cards'>
          <button className={eraseBtnShadow + ' btn text-white p-1 m-1'}>
            <FontAwesomeIcon
              className='h4 m-0'
              icon={faList} />
          </button>
        </NavLink>
        <NavLink
          className={activeClassTrigger}
          to='table-view'>
          <button className={eraseBtnShadow + ' btn text-white p-1 m-1'}>
            <FontAwesomeIcon
              className='h4 m-0'
              icon={faTable} />
          </button>
        </NavLink>
        <NavLink
          className={activeClassTrigger}
          to='favourites'>
          <button className={eraseBtnShadow + ' btn text-white p-1 m-1'}>
            <FontAwesomeIcon
              className='h4 m-0'
              icon={faThumbTack} />
          </button>
        </NavLink>
        <NavLink
          className={activeClassTrigger}
          to='update-card'>
          <button className={eraseBtnShadow + ' btn text-white p-1 m-1'}>
            <FontAwesomeIcon
              className='h4 m-0'
              icon={faPlusSquare} />
          </button>
        </NavLink>
      </ul>
    </div>
  )
}

export default NavMenuComponent