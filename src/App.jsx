import React, {useState, useEffect} from 'react';
import CardList from './components/CardList';
import NavBar from './components/NavBar/NavBar';

const App = () => {

const [searchText, setSearchText] = useState('')

const [beers, setBeers] = useState([])

// filters through the beers if includes the search text!
const filteredBeers = beers.filter( beer => beer.name.toLowerCase().includes(searchText.toLowerCase()));

//Making the api call and storing the data in beers state
const url = 'https://api.punkapi.com/v2/beers';
  useEffect( () => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
      //storing the data in state
      return setBeers(data)      
    })
  },[url]);

  return (
    <>
    <section>
      <NavBar setSearchText={setSearchText}/>
    </section>
      <CardList searchText={searchText} filteredBeers={filteredBeers} />    
    </>
  );
}

export default App;
