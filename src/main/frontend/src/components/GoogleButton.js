import React from 'react';
import GoogleLogin from 'react-google-login';
import axios from 'axios';


const clientId = "OAuth Web Client ID"; // Google Client ID

export default function GoogleButton({ onSocial }) {
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

  const onSuccess = async (response) => {
    console.log(response);

    const { googleId, profileObj: { email, name } } = response;


    // console.log(response);
    await onSocial({
      socialId : googleId,
      socialType: 'google',
      email,
      nickname: name
    });
  }

  const onFailure = (error) => {
    console.log(error);
  }

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        responseType={"id_token"}
        onSuccess={onSuccess}
        onFailure={onFailure} />
    </div>
  )
}