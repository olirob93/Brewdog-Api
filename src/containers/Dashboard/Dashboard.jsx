import React from "react";
import CardList from '../../components/CardList';

const Dashboard = (props) => {
  return (
    <>
      <CardList filteredBeers={props.filteredBeers}/>
    </>
  );
};

export default Dashboard;
