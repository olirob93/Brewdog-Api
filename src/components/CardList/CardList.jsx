import React from "react";
import styles from "./CardList.module.scss";
import Card from '../Card';

const CardList = (props) => {

  const getJsxContent = (beers) => (<Card key={beers.id} beerData={beers}/>) 

  return (
  <section className={styles.cardList}> {props.filteredBeers.map(getJsxContent)}  </section>
  )
};

export default CardList;
