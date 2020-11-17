import React from "react";
import styles from './Favourites.module.scss'

const Favourites = (props) => {

console.log(props.user)

  return (
    <div className={styles.favPage}>
      <h1>Hello </h1>
      <p>You are now logged in with and can save Favourites to this page</p>
    </div>      
  );
};

export default Favourites;
