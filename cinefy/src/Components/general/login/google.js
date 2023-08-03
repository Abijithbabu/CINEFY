import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script'
import { useEffect } from 'react'
import { gLogin } from '../../redux/action';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
const GOOGLE_CLIENT_ID = "57619033321-n0pnjp17n9up4tj5bil84lvlddtuarcn.apps.googleusercontent.com"

  
  export const GoogleAuthButton = () => {
    const navigate = useNavigate()
      const dispatch = useDispatch()
    const ResponseGoogle = async(response) => {
        if (response.error) {
          console.log('Authentication failed:', response.error);
        } else {
          const auth = await gLogin( response.profileObj )
          auth && dispatch({type:'user_login',payload:auth}).then(()=>navigate('/')) 
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
        onSuccess={ResponseGoogle}
        onFailure={ResponseGoogle}
        cookiePolicy="single_host_origin" 
      /> 
    );  
  };  
  