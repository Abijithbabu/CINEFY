import axios from "axios";
import { Store } from 'react-notifications-component';

const baseURL = "http://localhost:5000";
export const Axios = axios.create({
  baseURL: baseURL,
});
const notification = {
  title: "Error !",
  message: "Configurable",
  autoClose : 3000,
  type: "danger",
  insert: "top",
  container: "top-right",
  dismiss: {
    duration: 3000,
  },
  animationIn: ["animate__animated animate__flipInX"], // `animate.css v4` classes
  animationOut: ["animate__animated animate__flipInX"] // `animate.css v4` classes
};
export const Login = async( data ) => {
  try {
    const res = await Axios.post(`/api/login`, data);
      if(res.data){
        Store.addNotification({
          ...notification, 
          message :`Welcome back, ${res.data.user.name} !`,
          title:'Success',
          type:'success'
        })
        return res.data
      }
      return false
    } catch(err){ 
      Store.addNotification({
        ...notification, 
        message :err?.response?.data?.message || err.message
      })
      console.log(err?.response?.data?.message || err.message);
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
      Store.addNotification({
        ...notification, 
        message :err?.response?.data?.message || err.message
      })
      console.log(err?.response?.data?.message || err.message);
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
    Store.addNotification({
      ...notification, 
      message :err?.response?.data?.message || err.message
    })
    console.log(err?.response?.data?.message || err.message);
    return false
  } 
} 

export const findUser = async(data)=>{
  try {
    console.log(data);
    const res = await Axios.get(`/api/user`,{ params: {
      email: data,
    }})
    if(res.data){
      return res.data.user
    }
    return false
  } catch(err){ 
    Store.addNotification({
      ...notification, 
      message :err?.response?.data?.message || err.message
    })
    console.log(err?.response?.data?.message || err.message);
    return false
  } 
} 

export const resetPassword = async(data)=>{
  try {
    console.log(data);
    const res = await Axios.patch(`/api/resetPassword`,data)
    if(res.data){
      Store.addNotification({
        ...notification, 
        message :'Password reset Successfully !',
        title:'Success',
        type:'success'
      })
      return res.data.user
    }
    return false
  } catch(err){ 
    Store.addNotification({
      ...notification, 
      message :err?.response?.data?.message || err.message
    })
    console.log(err?.response?.data?.message || err.message);
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
      Store.addNotification({
        ...notification, 
        dismiss: {
          duration: 2000,
        },
        message :err?.response?.data?.message || err.message
      })
      console.log(err?.response?.data?.message || err.message);
      return false
  } 
} 
 
export const createPost = async(data)=>{
  try {
    const res = await Axios.post(`/api/createPost`, data)
    if(res.data){
      Store.addNotification({
        ...notification, 
        message :res.data.message,
        title:'Success',
        type:'success'
      })
      return res.data.message
    }
    return false
  } catch(err){ 
    Store.addNotification({
      ...notification, 
      message :err?.response?.data?.message || err.message
    })
    console.log(err?.response?.data?.message || err.message);
    return false
  } 
} 

export const getPosts = async()=>{
  try {
    const res = await Axios.get(`/api/getPosts`)
    if(res.data){
      return res.data
    }
    return []
  } catch(err){ 
    Store.addNotification({
      ...notification, 
      message :err?.response?.data?.message || err.message
    })
    console.log(err?.response?.data?.message || err.message);
    return false
  } 
} 