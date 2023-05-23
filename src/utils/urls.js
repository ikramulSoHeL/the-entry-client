var BASE_URL;

BASE_URL = "http://localhost:5002/api";
// BASE_URL = "https://toothzy-server.onrender.com/api";

// AUTH
export const LOGIN_URL = BASE_URL + "/auth/login";
export const REGISTER_URL = BASE_URL + "/auth/register";
export const LOGOUT_URL = BASE_URL + "/auth/logout";

// EVENTS
export const CREATE_EVENTS_URL = BASE_URL + "/events";
export const GET_EVENTS_URL = BASE_URL + "/events";
export const GET_EVENTS_BY_ID_URL = BASE_URL + "/events";
export const UPDATE_EVENT_BY_ID_URL = BASE_URL + "/events";
export const DELETE_EVENT_BY_ID_URL = BASE_URL + "/events";

// TICKETS
export const BUY_TICKETS_URL = BASE_URL + "/ticket";
export const GET_TICKETS_BY_USERID_URL = BASE_URL + "/ticket";
