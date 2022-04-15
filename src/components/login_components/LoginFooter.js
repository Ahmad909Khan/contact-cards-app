import React from 'react';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import homePageStyles from '../../assets/css/homePageStyles.module.css';

const LoginFooter = () => {
  return (
    <div className={homePageStyles.footer + " bg-secondary p-3 text-center text-white"}>
      <div>About Us</div>
      <div>
        Contact us 
        <FontAwesomeIcon icon={faAt} className="mx-2" />
        <a href="#" className="text-white">
          contactcards@myorg.in
        </a>
      </div>
    </div>
  )
}

export default LoginFooter