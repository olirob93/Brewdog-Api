import React from "react";
import styles from "./NavBar.module.scss";
import SearchBar from '../SearchBar';
import logo from '../../assets/images/logo.jpg';

const NavBar = (props) => {

  return (
    <>
    <div className={styles.navCont}>
      <img src={logo} alt="this is the brew dog logo"/>
      <SearchBar setSearchText={props.setSearchText}/>
      </div>
    </>
  );
};

export default NavBar;
