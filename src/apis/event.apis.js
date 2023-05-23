import axios from "axios";

import {
  CREATE_EVENTS_URL,
  GET_EVENTS_URL,
  GET_EVENTS_BY_ID_URL,
  UPDATE_EVENT_BY_ID_URL,
  DELETE_EVENT_BY_ID_URL,
} from "../utils/urls";

export const createEvent = (event_data) => {
  return axios({
    method: "POST",
    url: CREATE_EVENTS_URL,
    data: event_data,
  });
};

export const getEvents = () => {
  return axios({
    method: "GET",
    url: GET_EVENTS_URL,
  });
};

export const getEventById = (event_id) => {
  return axios({
    method: "GET",
    url: `${GET_EVENTS_BY_ID_URL}/${event_id}`,
  });
};

export const updateEventById = (event_id, event_data) => {
  return axios({
    method: "PUT",
    url: `${UPDATE_EVENT_BY_ID_URL}/${event_id}`,
    data: event_data,
  });
};

export const deleteEventById = (event_id) => {
  return axios({
    method: "DELETE",
    url: `${DELETE_EVENT_BY_ID_URL}/${event_id}`,
  });
};
