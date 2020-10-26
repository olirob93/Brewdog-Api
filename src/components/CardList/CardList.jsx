import React, {useState, useEffect} from "react";
import styles from "./CardList.module.scss";
import Card from '../Card';
import image from '../../assets/images/alban-martel-nhX8QhXMBkM-unsplash.jpg';

const CardList = (props) => {

const getJsxContent = (beers) => (<Card key={beers.id} beerData={beers}/>) 
  
//const getJsxContent = (beers) => beers.length ? (<Card key={beers.id} beerData={beers}/>) :
//(<p>no beers available</p>)


  return (
   <section className={styles.cardList}> {props.filteredBeers.map(getJsxContent)}  </section>
  )
};

export default CardList;
