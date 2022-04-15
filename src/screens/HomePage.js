import React from 'react';
import { Outlet } from 'react-router-dom';
import NavMenuComponent from '../components/home_page_components/NavMenuComponent';
import LoginFooter from '../components/login_components/LoginFooter';
import MainHeader from '../components/MainHeader';
import homePageStyles from "../assets/css/homePageStyles.module.css";

const HomePage = () => {

  return (
    <>
      <MainHeader />
      <div className={homePageStyles.homeMain + " bg-light"}>
        <NavMenuComponent />
        <Outlet />
      </div>
      <LoginFooter />
    </>
  )
}

export default HomePage