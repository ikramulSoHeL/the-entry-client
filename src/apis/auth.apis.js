import axios from "axios";

import {
  LOGIN_URL,
  REGISTER_URL,
  LOGOUT_URL,
} from "../utils/urls";

export const loginUser = (user_data) => {
  return axios({
    method: "POST",
    url: LOGIN_URL,
    data: user_data,
  });
};

export const registerUser = (user_data) => {
  return axios({
    method: "POST",
    url: REGISTER_URL,
    data: user_data,
  });
};


export const logoutUser = (data) => {
  return axios({
    method: "POST",
    url: LOGOUT_URL,
    data: data,
  });
};
