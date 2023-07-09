import axios from "axios";

const baseURL = "http://localhost:5000";
const Axios = axios.create({
  baseURL: baseURL,
});

export const Login = async( data ) => {
  try {
    const res = await Axios.post(`/api/login`, data);
      if(res.data){
        return res.data
      }
      return false
    } catch(err){ 
      console.log(err.response.data.message || err.message);
      return false
    } 
};

export const signUp = async(data , dispatch)=>{
    try {
      const res = await Axios.post(`/api/signup`, data);
      if(res.data){
        dispatch({
          type: 'user_login',
          payload : res.data
        })
        return true
      }
      return false
    } catch(err){ 
      console.log(err.response.data.message || err.message);
      return false
    } 
} 

export const sendOtp = async(data)=>{
  try {
    const res = await Axios.post(`/api/sendOtp`, data);
    if(res.data){
      console.log(res.data.message);
      return res.data.message
    }
    return false
  } catch(err){ 
    console.log(err.response.data.message || err.message);
    return false
  } 
} 

export const signOut = async(dispatch)=>{
  try {
    dispatch({
      type: 'user_logout',
      payload : ''
    })
    const res = await Axios.post(`/api/logout`,{ withCredentials : true });
      console.log(res+'goooooooooooo');
      return true
    } catch(err){ 
      console.log(err.response.data.message || err.message);
      return false
  } 
} 