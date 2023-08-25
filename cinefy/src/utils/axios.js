import axios from "axios";

const baseURL = `${process.env.REACT_APP_BaseURL}/api`

const Axios = axios.create({
    baseURL: baseURL,
    withCredentials: true,
});

export default Axios