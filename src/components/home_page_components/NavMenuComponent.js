import { faHeart, faList, faPlusSquare, faTable } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import homePageStyles from '../../assets/css/homePageStyles.module.css';
import cardStyles from '../../assets/css/cardStyles.module.css'

const NavMenuComponent = () => {

  const activeNavClass = homePageStyles.activeNavItem + ' px-2 my-2 h4 text-decoration-none'
  const inactiveNavClass = 'px-2 h4 text-decoration-none'

  const activeClassTrigger = (navigationData) =>
    navigationData.isActive
      ? activeNavClass + ' text-white' : inactiveNavClass + ' text-white';

  const activeClassTriggerHeart = (navigationData) =>
    navigationData.isActive
      ? activeNavClass + ' ' + cardStyles.colorPink
      : inactiveNavClass + ' text-white';

  return (
    <div className='text-end'>
      <ul className="m-3 mx-5 btn-group border border-3 p-0">
        <button
          className='btn btn-secondary py-2 px-3'
          title='List all cards'>
          <NavLink
            className={activeClassTrigger}
            to='all-cards'>
            <FontAwesomeIcon icon={faList} />
          </NavLink>
        </button>
        <button
          className='btn btn-secondary py-2 mx-1 px-3'
          title='Show data in table'>
          <NavLink
            className={activeClassTrigger}
            to='table-view'>
            <FontAwesomeIcon icon={faTable} />
          </NavLink>
        </button>
        <button className='btn btn-secondary py-2 me-1 px-3'
          title='List favourite cards'>
          <NavLink
            className={activeClassTriggerHeart}
            to='favourites'>
            <FontAwesomeIcon icon={faHeart} />
          </NavLink>
        </button>
        <button className='btn btn-secondary py-2'
          title='Add new Card'>
          <NavLink
            className={activeClassTrigger}
            to='update-card'>
            <FontAwesomeIcon icon={faPlusSquare} />
          </NavLink>
        </button>
      </ul>
    </div>
  )
}

export default NavMenuComponent