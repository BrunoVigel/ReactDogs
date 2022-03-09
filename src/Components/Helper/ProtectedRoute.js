import React from 'react'
import { UserContext } from '../../UserContext'
import {Navigate} from 'react-router-dom'
import User from '../User/User'

const ProtectedRoute = () => {
    const {login} = React.useContext(UserContext);

    return login ?  <User /> : <Navigate to="/login" />;
    
}

export default ProtectedRoute;
