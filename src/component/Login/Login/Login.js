import React from 'react';
import { useHistory,useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const rediect_uri = location.state?.from || '/home';

    const handlegoogleLogin = ()=>{
        signInUsingGoogle()
        .then( result =>{
            history.push(rediect_uri)
        })
    }
    return (
        <div>
            <h1>Please Log in</h1>
            <button onClick={handlegoogleLogin} className='btn btn-success'>Google Sign In</button>
        </div>
    );
};

export default Login;