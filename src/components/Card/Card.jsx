import React from "react";
import styles from "./Card.module.scss";

const Card = (props) => {
  
const {name, image_url, description, abv ,ibu, first_brewed} = props.beerData;
 
  return (
    <>
      <div className={styles.card}>
        <img src={image_url} alt="image of beer"/>
        <div className={styles.cardData}>
          <h1>{name}</h1>
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
