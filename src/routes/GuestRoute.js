import React from 'react';
import {Route} from 'react-router-dom';
import {useSelector} from 'react-redux';

import Home from '../pages/Home';

/*...rest -> pega o restante das propriedades*/
function GuestRoute({element: Component, ...rest}){
    
    const account = useSelector(state => state.account);
    const isAuthenticated = Boolean(account.user);

    return(
        <Route {...rest} element={(
            /*se esta atutenticado vai para Home senao fica na tela de login*/
            isAuthenticated 
            ? <Home />   
            : Component 
        )} />
    )
}

export default GuestRoute;