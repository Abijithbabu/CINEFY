import axios from "./axios";
import errorHandler from "./errorHandler";
import notify from "./notification";

export const Login = errorHandler((data) => axios.post(`/login`, data))

export const gLogin = errorHandler((data) => axios.post(`/gLogin`, data))

export const signUp = async (data, dispatch) => {
  try {
    const res = await axios.post(`/signup`, data);
    if (res.data) {
      dispatch({
        type: "user_login",
        payload: res.data,
      });
      return true;
    }
    return false;
  } catch (error) {
    const errorMessage = error?.response?.data?.message || error.message
    console.error('Error ' + errorMessage)
    notify({ message: errorMessage, title: 'Error !', type: 'danger' })
    return
  }
};

export const sendOtp = errorHandler((data) => axios.post(`/sendOtp`, data))


export const findUser = errorHandler((data) => axios.get(`/user`, {
  params: {
    email: data,
  },
}))
export const resetPassword = errorHandler((data) => axios.patch(`/resetPassword`, data))

export const signOut = errorHandler((dispatch) => {
  dispatch({
    type: "user_logout",
    payload: "",
  });
  return axios.post(`/logout`);
})
export const createPost = errorHandler((data) => axios.post(`/createPost`, data))

export const editPost = errorHandler((data) => axios.post(`/editPost`, data))

export const getPosts = errorHandler((data) => axios.post(`/getPosts`, data))
export const getCastingCalls = errorHandler((id) => axios.get(`/getPosts?id=${id}`))

export const getApplicants = errorHandler((data) => axios.post(`/getApplicants`, data))

export const getAllApplicants = errorHandler((data) => axios.post(`/getAllApplicants`, { id: data }))

export const getPostDetails = errorHandler((id) => axios.get(`/getPostDetails?id=${id}`))

export const getUsers = errorHandler((type) => axios.get(`/admin/getUsers?type=${type}`))

export const getUserDetails = errorHandler((id) => axios.get(`/getUserDetails?id=${id}`))

export const updateStatus = async (id, status, post) => {
  try {
    const res = await axios.patch(`/updateStatus?id=${id}&status=${status}&postId=${post}`);
    console.log(res);
    if (res.data) {
      notify({ message: res.data.message })
      return res.data;
    }
  } catch (error) {
    const errorMessage = error?.response?.data?.message || error.message
    console.error('Error ' + errorMessage)
    notify({ message: errorMessage, title: 'Error !', type: 'danger' })
    return
  }
}
export const updateSubscription = async (id, type, validity, dispatch) => {
  try {
    const res = await axios.patch(`/updateSubscription?id=${id}&type=${type}&validity=${validity}`);
    console.log(res);
    if (res.data) {
      notify({ message: res.data.message })
      dispatch({
        type: "user_login",
        payload: res.data,
      });
      return res.data;
    }
  } catch (error) {
    const errorMessage = error?.response?.data?.message || error.message
    console.error('Error ' + errorMessage)
    notify({ message: errorMessage, title: 'Error !', type: 'danger' })
    return
  }
}

export const blockUser = errorHandler((id) => axios.patch(`/admin/blockUser?id=${id}`))

export const applyJob = async (id, user) => {
  try {
    const res = await axios.patch(`/applyJob?id=${id}&user=${user}`);
    if (res.data) {
      notify({ message: res.data.message })
      return res.data;
    }
  } catch (error) {
    const errorMessage = error?.response?.data?.message || error.message
    console.error('Error ' + errorMessage)
    notify({ message: errorMessage, title: 'Error !', type: 'danger' })
    return
  }
};

export const updateProfile = errorHandler((data) => axios.post(`/updateProfile`, data))

export const getContacts = errorHandler((id) => axios.get(`/messages/getChats?id=${id}`))

export const setMessageStatus = async (id, user) => {
  try {
    const res = await axios.patch(`/messages/setMessageStatus?id=${id}&user?${user}`)
    if (res.data) {

      return res.data;
    }
  } catch (error) {
    const errorMessage = error?.response?.data?.message || error.message
    console.error('Error ' + errorMessage)
    notify({ message: errorMessage, title: 'Error !', type: 'danger' })
    return
  }
};