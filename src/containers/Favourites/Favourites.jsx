import React from "react";
import styles from './Favourites.module.scss'

const Favourites = (props) => {

  return (
    <>
    {props.user ? (
      <div className={styles.favPage}>
        <h1>Hello {props.user.displayName}</h1>
        <p>You are now logged in with {props.user.email} and can save your favorite beers to this page</p>
      </div>
    ): <h1>Loading...</h1> }      
    </>     
  );
};

export default Favourites;
