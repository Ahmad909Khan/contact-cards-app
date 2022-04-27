import React from 'react';
import { NavLink } from 'react-router-dom';
import { faHeart, faList, faPlusSquare, faTable } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import homePageStyles from '../../assets/css/homePageStyles.module.css';

const NavMenuComponent = () => {

  const {activeNavItem, colorPink, colorWhite} = homePageStyles

  const activeNavClass =
    activeNavItem
    + ' px-3 me-1 pt-2 text-decoration-none btn-secondary '
  const inactiveNavClass = ' px-3 py-2 me-1 text-decoration-none btn-secondary '

  const activeClassTrigger = (navigationData) =>
    navigationData.isActive
      ? activeNavClass
      : inactiveNavClass;

  const activeClassTriggerHeart = (navigationData) =>
    navigationData.isActive
      ?  activeNavClass + colorPink
      : inactiveNavClass + colorWhite;

  return (
    <div className={'text-center text-md-end mt-2'}>
      <ul className="m-0 m-sm-3 mx-md-5 btn-group p-0">
        <NavLink
          className={activeClassTrigger}
          to='all-cards'>
          <button className='btn text-white p-1 m-1'>
            <FontAwesomeIcon
              className='h4 m-0'
              icon={faList} />
          </button>
        </NavLink>
        <NavLink
          className={activeClassTrigger}
          to='table-view'>
          <button className='btn text-white p-1 m-1'>
            <FontAwesomeIcon
              className='h4 m-0'
              icon={faTable} />
          </button>
        </NavLink>
        <NavLink
          className={activeClassTriggerHeart}
          to='favourites'>
          <button className='btn p-1 m-1'>
            <FontAwesomeIcon
              className='h4 m-0'
              icon={faHeart} />
          </button>
        </NavLink>
        <NavLink
          className={activeClassTrigger}
          to='update-card'>
          <button className='btn text-white p-1 m-1'>
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