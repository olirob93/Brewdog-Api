import React from "react";
import { Router } from "@reach/router";
import Dashboard from "../Dashboard";
import Favourites from '../Favourites';
import PrivateRoutes from '../PrivateRoutes';

const Routes = (props) => {
    return(
        <Router>
            <Dashboard path='/' filteredBeers={props.filteredBeers} />
            <PrivateRoutes path='/' user={props.user}>
                <Favourites path='favourites'/>
            </PrivateRoutes> 
        </Router>
    )
}

export default Routes