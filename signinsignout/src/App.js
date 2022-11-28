import React,{useEffect} from 'react';
import { GoogleLogin ,GoogleLogout} from 'react-google-login'; 
import { gapi } from 'gapi-script';
import { useGoogleOneTapLogin } from 'react-google-one-tap-login';
function App() {
const  clientId="614668011518-d4g0cr825vs5ugm0iqgo5ieovqhgiisr.apps.googleusercontent.com";
    
useEffect(()=>{
  gapi.load('client:auth2',()=>{
    gapi.auth2.init({clientId})
  })

 

},[])


  const responseGoogle = (response) => {
 const {email,familyName,givenName,imageUrl}= response?.profileObj;

    console.table({email,familyName,givenName,imageUrl});
  
  }

  // This code is onetap login 
  useGoogleOneTapLogin({
    onError: error => console.log(error),
    onSuccess: response => console.log(response),
    googleAccountConfigs: {
      client_id:clientId 
    }
  })

  return (
    <>
    <GoogleLogin
    clientId={clientId}
    render={renderProps => (
      <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
    )}
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
    
    
    <GoogleLogout
    clientId={clientId}
     buttonText="LOGOUT OUT"
     onLogoutSuccess={responseGoogle}
    cookiePolicy={'single_host_origin'}
    
    />
    
    </>
  );
}

export default App;
