import { faAt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const LoginFooter = () => {
  return (
    <div className="bg-secondary p-3 text-center text-white">
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