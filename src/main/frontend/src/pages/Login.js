import * as React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Head from '../components/Head';
import Footer from '../components/Footer';
import GoogleButton from '../components/GoogleButton';
import axios from 'axios';

const Login = () => {


  // useEffect(() => {
  //   axios.get('http://localhost:8080/api/hello')
  //     .then(response => loginData(response.data))
  //     .catch(error => console.log(error))
  // });


  // const [loginData, setLoginData] = useState(
  //   axios.getItem('loginData')
  //     ? JSON.parse(axios.getItem('loginData'))
  //     : null
  // );

  // const handleFailure = (result) => {
  //   alert(result);
  // };

  // const handleLogin = async (googleData) => {
  //   const res = await fetch('/api/google-login', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       token: googleData.tokenId,
  //     }),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });

  //   const data = await res.json();
  //   setLoginData(data);
  //   axios.setItem('loginData', JSON.stringify(data));
  // };
  // const handleLogout = () => {
  //   axios.removeItem('loginData');
  //   setLoginData(null);
  // };

  return (
    <div className='login'>
      <Head />
      <div className='login-inner'>
        <div>
          <h1>Login</h1>
        </div>
        <div className='google-button'>
          {/*loginData ? (
            <div>
              <h3>You logged in as {loginData.email}</h3>
              <button onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <GoogleButton
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              buttonText="Log in with Google"
              onSuccess={handleLogin}
              onFailure={handleFailure}
              cookiePolicy={'single_host_origin'}
            ></GoogleButton>
          )*/}
          <GoogleButton />
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Login;