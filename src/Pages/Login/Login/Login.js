import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import login from '../../../assets/images/login.png';
import useAuth from '../../../hooks/useAuth';

const Login = () => {

    const [loginData, setLoginData] = useState({});
    const {user, loginUser, signInWithGoogle, isLoading, authError} = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const hangleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{mt:10}}>
                <Typography variant="body1" gutterBottom>
                    Login
                </Typography>
                <form onSubmit={handleLoginSubmit}>
                <TextField 
                sx={{width: '75%', m:1}}
                id="standard-basic" 
                label="Your Email" 
                name = "email" 
                type = "email"
                onBlur = {handleOnBlur}
                variant="standard" />
                <TextField 
                sx={{width: '75%', m:1}}
                id="standard-basic" 
                label="Your Password" 
                type="password" 
                name = "password" 
                onBlur = {handleOnBlur}
                variant="standard" />
                <Button variant="contained" sx={{width: '75%', m:1}} type="submit">Login</Button>
            
                <NavLink style={{textDecoration:'none'}} to='/register'>
                 <Button variant="text">New user? Please Register</Button>
                </NavLink>
                </form>
                <p>--------------</p>
                <Button onClick={hangleGoogleSignIn} variant="contained" sx={{width: '75%', m:1}} type="submit">Sign in with Google</Button>
                {isLoading && <CircularProgress />}
                {user?.email && <Alert severity="success">Successfully Logging the User!</Alert>}
                {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{width:'100%'}} src={login} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Login;