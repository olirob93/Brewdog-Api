import React from "react";
import styles from "./NavBar.module.scss";
import SearchBar from '../SearchBar';
import logo from '../../assets/images/logo.jpg';
import GoogleBtn from '../GoogleBtn';
import GoogleBtnSignOut from '../GoogleBtnSignOut'
import { Link } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar = (props) => {

const { user, signIn, signOut, setSearchText} = props;

const getSignInOutJsx = () => {
  return user ? (
    <span onClick={signOut}><GoogleBtnSignOut/></span>
  ) : (
    <span onClick={signIn}><GoogleBtn/></span>
  );
};

  return (
    <>
    <div className={styles.navCont}>
      <Link to='/'>
        <img src={logo} alt="this is the brew dog logo"/>
      </Link>
      <SearchBar setSearchText={setSearchText}/>
      <Link to='favourites'>
        <FontAwesomeIcon icon='bookmark'/>
      </Link>
      {getSignInOutJsx()}
    </div>    
    </>
  );
};

export default NavBar;
