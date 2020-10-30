import React, { useEffect } from 'react';
import firebase from '../../firebase';
import { navigate } from '@reach/router';

const PrivateRoutes = (props) => {


useEffect(()=> {
    firebase.auth().onAuthStateChanged((user)=>{
        if(!user) {
            alert('you must be logged in to view this page. Click google button to sign in!');
            navigate('/');
        }
    })
}, [])

return(
    <>
        {props.children}
    </>
)
};

export default PrivateRoutes;
