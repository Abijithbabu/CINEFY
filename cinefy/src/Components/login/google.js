import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script'
import { useEffect } from 'react'
import { Login } from '../../redux/action';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
const GOOGLE_CLIENT_ID = "57619033321-n0pnjp17n9up4tj5bil84lvlddtuarcn.apps.googleusercontent.com"

  
  export const GoogleAuthButton = () => {
    const navigate = useNavigate()
      const dispatch = useDispatch()
    const ResponseGoogle = (response) => {
        // Handle the authentication response here
        if (response.error) {
          // Authentication failed
          console.log('Authentication failed:', response.error);
        } else {
        //   Login('user_login')
          console.log('Authentication successful:', response);
          dispatch('user_login',response.profileObj)
          // You can access the user profile information from `response.profileObj`
        }
      };
    useEffect(() => {
      function start() {
        gapi.client.init({
            clientId:GOOGLE_CLIENT_ID,
            scope:'profile'
        })
      }
    gapi.load('client:auth2',start)
    })
    
    return ( 
      <GoogleLogin
        clientId = { GOOGLE_CLIENT_ID }
        buttonText="Sign in with Google"
        onSuccess={(res)=>Login(res.profileObj)}
        onFailure={()=>ResponseGoogle}
        cookiePolicy="single_host_origin" 
      /> 
    ); 
  };
  