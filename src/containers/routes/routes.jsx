import React from "react";
import { Router } from "@reach/router";
import Dashboard from "../Dashboard";
import Favourites from '../Favourites';
import PrivateRoutes from '../PrivateRoutes';

const Routes = (props) => {

const { filteredBeers, user} = props

    return(
        <Router>
            <Dashboard
                path='/'
                filteredBeers={filteredBeers}
            />
            <PrivateRoutes path='/'>
                <Favourites
                    path='favourites'
                    user={user}
                />
            </PrivateRoutes> 
        </Router>
    )
}

export default Routes