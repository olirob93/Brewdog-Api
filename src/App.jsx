import React, {useState, useEffect} from 'react';
import NavBar from './components/NavBar/NavBar';
import Routes from './containers/routes/routes';
import firebase, { provider } from "./firebase";
import libary from './data/fa-libary';

const App = () => {

const [searchText, setSearchText] = useState('')

const [beers, setBeers] = useState([])

const [user, setUser] =useState(null)

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

  const signIn = () => {
    firebase
    .auth()
    .signInWithRedirect(provider)
  };

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getUser = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  };

  useEffect(() => {
    getUser();
  })

  return (
    <>
    <section>
      <NavBar
      setSearchText={setSearchText}
      user={user}
      signIn={signIn}
      signOut={signOut}
      />
    </section>
    <Routes
    filteredBeers={filteredBeers}
    user={user}
    />  
    </>
  );
}

export default App;
