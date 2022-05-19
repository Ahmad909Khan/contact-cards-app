import React from 'react';
import { Outlet } from 'react-router-dom';
import MainHeader from '../components/HeaderComponents/MainHeader';
import NavMenuComponent from '../components/HomePageComponents/NavMenuComponent';
import LoginFooter from '../components/LoginComponents/LoginFooter';
import homePageStyles from "../assets/css/homePageStyles.module.css";
import CommonTags from '../components/HomePageComponents/CommonTags';

const HomePage = (props) => {

  return (
    <>
      <MainHeader />
      <div
        className={homePageStyles.homeMain + " bg-light homeOutletContainter"} >
        <CommonTags />
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