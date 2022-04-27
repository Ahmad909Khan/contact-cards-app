import React from 'react';
import { Outlet } from 'react-router-dom';
import MainHeader from '../components/HeaderComponents/MainHeader';
import NavMenuComponent from '../components/HomePageComponents/NavMenuComponent';
import LoginFooter from '../components/LoginComponents/LoginFooter';
import homePageStyles from "../assets/css/homePageStyles.module.css";

const HomePage = (props) => {

  return (
    <>
      <MainHeader />
      <div className={homePageStyles.homeMain + " bg-light"}>
        <NavMenuComponent />
        {props.loading
          ? <div>Loading data... Please wait</div>
          : <Outlet />}
      </div>
      <LoginFooter />
    </>
  )
}

export default HomePage