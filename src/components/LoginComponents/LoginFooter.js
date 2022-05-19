import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';

const LoginFooter = () => {
  return (
    <div className="footer bg-secondary p-3 text-center text-white">
      <div>About Us</div>
      <div>
        Contact us 
        <FontAwesomeIcon icon={faAt} className="mx-2" />
        <a href="login" className="text-white">
          contactcards@myorg.in
        </a>
      </div>
    </div>
  )
}

export default LoginFooter