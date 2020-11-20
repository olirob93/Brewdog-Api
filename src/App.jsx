import React, {useState, useEffect} from 'react';
import NavBar from './components/NavBar/NavBar';
import Routes from './containers/routes/routes';
import firebase, { provider } from "./firebase";
import libary from './data/fa-libary';

const App = () => {

//***** STATES *****
const [searchText, setSearchText] = useState('')
const [beers, setBeers] = useState([])
const [user, setUser] = useState(null)

//****** LIFECYCLE METHODS *****
const url = 'https://api.punkapi.com/v2/beers'; //Making the api call and storing the data in beers state
  useEffect( () => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
      //storing the data in state
      return setBeers(data)      
    })
  },[]);

  useEffect(() => {
    getUser();
  },[])

 //**** HELPER FUNCTIONS ****/ 

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
        console.log('setting user to state')
      } else {
        setUser(null);
        console.log('setting user to Null')
      }
    });
  };


// filters through the beers if includes the search text!
const filteredBeers = beers.filter( beer => beer.name.toLowerCase().includes(searchText.toLowerCase()));  


//****** RETURN STATEMENT *****/
  return (
    <>
      <NavBar
        setSearchText={setSearchText}
        user={user}
        signIn={signIn}
        signOut={signOut}
      />        
      <Routes
      filteredBeers={filteredBeers}
      user={user}
      />  
    </>
  );
}

export default App;
