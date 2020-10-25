import React from "react";
import styles from "./SearchBar.module.scss";

const SearchBar = (props) => {

  return (
    <>
    <div>
      <input type="search" placeholder='Search for Beer' onChange= { (e) => { props.setSearchText(e.target.value)} }/>
    </div>
      
    </>
  );
};

export default SearchBar;
