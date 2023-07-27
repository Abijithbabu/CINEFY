import axios from "axios";
import { Store } from "react-notifications-component";

const baseURL = "http://localhost:5000/api";
export const Axios = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});
export const notification = {
  title: "Error !",
  message: "Configurable",
  autoClose: 3000,
  type: "danger",
  insert: "top",
  container: "top-right",
  dismiss: {
    duration: 3000,
  },
  animationIn: ["animate__animated animate__flipInX"],
  animationOut: ["animate__animated animate__flipInX"],
};
const handleApiError = (error) => {
  const errorMessage = error?.response?.data?.message || error.message;
  Store.addNotification({
    ...notification,
    message: errorMessage,
  });
  console.log(errorMessage);
};
export const Login = async (data) => {
  try {
    const res = await Axios.post(`/login`, data);
    if (res.data) {
      Store.addNotification({
        ...notification,
        message: `Welcome back, ${res.data.user.name} !`,
        title: "Success",
        type: "success",
      });
      return res.data;
    }
    return false;
  } catch (err) {
    handleApiError(err);
    return false;
  }
};

export const gLogin = async (data) => {
  try {
    const res = await Axios.post(`/gLogin`, data);
    if (res.data) {
      Store.addNotification({
        ...notification,
        message: `Welcome back, ${res.data.user.name} !`,
        title: "Success",
        type: "success",
      });
      return res.data;
    }
    return false;
  } catch (err) {
    handleApiError(err);
    return false;
  }
};

export const signUp = async (data, dispatch) => {
  try {
    const res = await Axios.post(`/signup`, data);
    if (res.data) {
      dispatch({
        type: "user_login",
        payload: res.data,
      });
      return true;
    }
    return false;
  } catch (err) {
    handleApiError(err);
    return false;
  }
};

export const sendOtp = async (data) => {
  try {
    const res = await Axios.post(`/sendOtp`, data);
    if (res.data) {
      console.log(res.data.message);
      return res.data.message;
    }
    return false;
  } catch (err) {
    handleApiError(err);
    return false;
  }
};

export const findUser = async (data) => {
  try {
    console.log(data);
    const res = await Axios.get(`/user`, {
      params: {
        email: data,
      },
    });
    if (res.data) {
      return res.data.user;
    }
    return false;
  } catch (err) {
    handleApiError(err);
    return false;
  }
};

export const resetPassword = async (data) => {
  try {
    console.log(data);
    const res = await Axios.patch(`/resetPassword`, data);
    if (res.data) {
      Store.addNotification({
        ...notification,
        message: "Password reset Successfully !",
        title: "Success",
        type: "success",
      });
      return res.data.user;
    }
    return false;
  } catch (err) {
    handleApiError(err);
    return false;
  }
};

export const signOut = async (dispatch) => {
  try {
    dispatch({
      type: "user_logout",
      payload: "",
    });
    const res = await Axios.post(`/logout`);
    return true;
  } catch (err) {
    handleApiError(err);
    return false;
  }
};

export const createPost = async (data) => {
  try {
    const res = await Axios.post(`/createPost`, data);
    if (res.data) {
      Store.addNotification({
        ...notification,
        message: res.data.message,
        title: "Success",
        type: "success",
      });
      return res.data.message;
    }
    return false;
  } catch (err) {
    handleApiError(err);
    return false;
  }
};

export const getPosts = async () => {
  try {
    const res = await Axios.get(`/getPosts`);
    if (res.data) {
      return res.data;
    }
  } catch (err) {
    handleApiError(err);
    return false;
  }
};

export const getPostDetails = async (id) => {
  try {
    const res = await Axios.get(`/getPostDetails?id=${id}`);
    if (res.data) {
      return res.data;
    }
  } catch (err) {
    handleApiError(err);
    return false;
  }
};

export const getUsers = async (type) => {
  try {
    const res = await Axios.get(`/admin/getUsers?type=${type}`);
    if (res.data) {
      return res.data;
    }
  } catch (err) {
    handleApiError(err);
    return false;
  }
};

export const getUserDetails = async (id) => {
  try {
    const res = await Axios.get(`/getUserDetails?id=${id}`);
    if (res.data) {
      return res.data;
    }
  } catch (err) {
    handleApiError(err);
    return false;
  }
};

export const blockUser = async (id) => {
  try {
    const res = await Axios.patch(`/admin/blockUser?id=${id}`);
    if (res.data) {
      return res.data;
    }
  } catch (err) {
    handleApiError(err);
    return false;
  }
}

export const applyJob = async (id,user) => {
  try {
    const res = await Axios.patch(`/applyJob?id=${id}&user=${user}`);
    if (res.data) {
      Store.addNotification({
        ...notification,
        message: res.data.message,
        title: "Success",
        type: "success",
      });
      return res.data;
    }
  } catch (err) {
    handleApiError(err);
    return false;
  }
};