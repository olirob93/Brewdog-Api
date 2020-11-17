import React, { useState } from "react";
import styles from "./Card.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = (props) => {

  const [favState, setFavState] = useState(false);
  
  const {name, image_url, description, abv ,ibu, first_brewed} = props.beerData;

  const heartIcon = favState ? ["fas", "heart"] : ["far", "heart"];

  const handleFavClick = () => {
    setFavState(true);
  };

  
    return (
      <>
        <div className={styles.card}>
          <img src={image_url} alt="image of beer"/>
          <div className={styles.cardData}>
            <h1>{name} <span onClick={handleFavClick}><FontAwesomeIcon icon={heartIcon} /></span></h1>
            <p>{description}</p>
            <div>
              <li>ABV: {abv}</li>
              <li>IBU: {ibu}</li>
              <li>First Brewed: {first_brewed}</li>
            </div>
          </div>
        </div>
      </>
    );
};

export default Card;
